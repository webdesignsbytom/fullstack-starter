# Go and TinyGo

## Install Go

`sudo apt update && sudo apt install -y wget git build-essential`

`wget https://dl.google.com/go/go[version].linux-arm64.tar.gz`

- For TinyGo
  `wget https://go.dev/dl/go1.21.1.linux-arm64.tar.gz`
  `sudo tar -C /usr/local -xzf go1.21.1.linux-arm64.tar.gz`

`tar -xvf go1.21.1.linux-arm64.tar.gz`

`mkdir -p ~/.local/share && mv go ~/.local/share`

`go run`

```sh
echo 'export GOPATH=$HOME/.local/share/go' >> ~/.bashrc
echo 'export PATH=$HOME/.local/share/go/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

## Install TinyGo

`wget https://github.com/tinygo-org/tinygo/releases/download/v0.33.0/tinygo_0.33.0_armhf.deb`
`sudo apt-get install libstdc++6:armhf` use 32bit
`sudo apt-get install avrdude` flash to arduino
`sudo dpkg -i tinygo_0.33.0_armhf.deb` unpack
`sudo apt-get install -f` install missing dependencies

`sudo nano /boot/firmware/config.txt` edit for pi 5
`kernel=kernel8.img` Add this at bottom of config
`sudo reboot`
`tinygo version`

`tinygo run`

`tinygo flash -target=arduino path/to/your-program.go`
`tinygo flash -target=arduino-mega2560 path/to/your-program.go`

### Docker TinyGo

`docker pull tinygo/tinygo:0.33.0`
`docker run --rm -v $(pwd):/src tinygo/tinygo:0.33.0 tinygo build -o hello.wasm -target wasm main.go`

## Test Code

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello")
}
```

## Connect to Arduino

`go get github.com/tarm/serial`

## Code

In tinygo we import the device/avr package to have access to registry addresses, bitmasks and flags along with several registry modifying primitives. To do the same thing in tinygo we write

```go
package main

import "device/avr"

func main() {
    avr.SPCR.Set(avr.SPCR_SPE | avr.SPCR_MSTR)
    avr.SPSR.SetBits(avr.SPSR_SPI2X)
}
```

## Create File


The issue is that Go modules are not initialized in your project directory. Starting with Go 1.16, modules are required for dependency management. Here's how you can resolve the issue:

1. Initialize a Go Module
Navigate to your project directory and initialize a module:


`go mod init web-server-status-checker`
This creates a go.mod file in your project directory, which tracks your dependencies.

## Production Build

If you have compiled your Go application into a binary, you can run the binary directly.

Build the binary:
`go build -o web-server-status-checker main.go`
`chmod +x ./web-server-status-checker/web-server-status-checker` add permissions
Start the binary with PM2:
`pm2 start ./web-server-status-checker --name web-server-status-checker`
`pm2 start ./web-server-status-checker --name web-server-status-checker --cwd /home/tom/web-server-status-checker`
