const GUIDS = {
    SERVICES: {
        CUTTER: "e2088282-4fde-42f9-bb22-6ec3c7ed8f91",
        DEVICE_INFO: "0000180a-0000-1000-8000-00805f9b34fb",
    },
    CHARACTERISTICS: {
        CUTTER_WRITE: "6d92661d-f429-4d67-929b-28e7a9780912",
        CUTTER_READ: "8dcf199a-30e7-4bd4-beb6-beb57dca866c",
        MODEL: "00002a24-0000-1000-8000-00805f9b34fb"
    }
};

const MIN_PACKET_SIZE = 20;
const MAX_PACKET_SIZE = 480;

const cutterResponseListeners = [];
const bluetoothDevices = new Map();
const abortControllers = new Map();

const SCAN_OPTIONS = {
    filters: [
        { "namePrefix": "portrait" },
        { "namePrefix": "Portrait" },
        { "namePrefix": "PORTRAIT" },
        { "namePrefix": "cameo" },
        { "namePrefix": "Cameo" },
        { "namePrefix": "CAMEO" },
        { "namePrefix": "curio" },
        { "namePrefix": "Curio" },
        { "namePrefix": "CURIO" }
    ],
    optionalServices: [GUIDS.SERVICES.CUTTER, 0x180a]
}

async function writeCharacteristicAsync(bytes, characteristic, packetSize, progress, signal) {

    var finalPacketSize = Math.min(Math.max(packetSize, MIN_PACKET_SIZE), MAX_PACKET_SIZE);

    for (var i = 0; i < bytes.byteLength; i += finalPacketSize) {
        const packet = bytes.slice(i, Math.min(i + finalPacketSize, bytes.byteLength));

        signal.throwIfAborted();

        await characteristic.writeValue(packet);

        if (progress && bytes.byteLength > 0) {
            progress.invokeMethodAsync('Report', i / bytes.byteLength)
        }
    }
}

function characteristicChanged(event) {
    for(var i in cutterResponseListeners) {
        const dnref = cutterResponseListeners[i];
        dnref.invokeMethodAsync('CutterResponseChanged', btoa(String.fromCharCode.apply(null, new Uint8Array(event.target.value.buffer))));
    }
}

export function addCutterResponseListener(dotNetObjectRef) {
    cutterResponseListeners.push(dotNetObjectRef);
}

export async function setupNotificationsAsync(characteristic) {
    await characteristic.startNotifications();

    characteristic.removeEventListener('characteristicvaluechanged', characteristicChanged);
    characteristic.addEventListener('characteristicvaluechanged', characteristicChanged);
}

export async function requestDeviceAsync()
{
    const device = await navigator.bluetooth.requestDevice(SCAN_OPTIONS);
    console.log("Received BT device: ", device.name, device.id);
    await device.gatt.connect();

    console.log("BT device connected.");
    bluetoothDevices.set(device.id, device);
    return { "Id": device.id, "Name": device.name };
}

export async function readModelNameAsync(deviceId) {
    const device = bluetoothDevices.get(deviceId);

    await device.gatt.connect();

    try {

        const infoSv = await device.gatt.getPrimaryService(GUIDS.SERVICES.DEVICE_INFO);
        const modelCr = await infoSv.getCharacteristic(GUIDS.CHARACTERISTICS.MODEL);

        var value = await modelCr.readValue();
        var modelValue = String.fromCharCode.apply(null, new Uint8Array(value.buffer));
        return modelValue;
    } catch (ex) {
        await new Promise(r => setTimeout(r, 500));
        return await readModelNameAsync(deviceId);
    }
}

export async function sendStreamAsync(deviceId, stream, progress, packetSize) {
    const data = await stream.arrayBuffer();
    await sendAsync(deviceId, data, progress, packetSize);
}

export async function sendAsync(deviceId, bytes, progress, packetSize = MIN_PACKET_SIZE) {
    const device = bluetoothDevices.get(deviceId);

    abortControllers.delete(deviceId);
    abortControllers.set(deviceId, new AbortController());

    await device.gatt.connect();

    if (device.gatt.connected)
    {
        const cutterSv = await device.gatt.getPrimaryService(GUIDS.SERVICES.CUTTER);
        const writeCr = await cutterSv.getCharacteristic(GUIDS.CHARACTERISTICS.CUTTER_WRITE);
        const readCr = await cutterSv.getCharacteristic(GUIDS.CHARACTERISTICS.CUTTER_READ);
    
        await setupNotificationsAsync(readCr);
        await writeCharacteristicAsync(bytes, writeCr, packetSize, progress, abortControllers.get(deviceId).signal)
    }
    else {
        await new Promise(r => setTimeout(r, 1000));
        await sendAsync(deviceId, bytes);
    }
}

export function abortSend(deviceId) {
    if (abortControllers.has(deviceId)) {
        abortControllers.get(deviceId).abort("user_requested");
    }
}