import EventEmitter from 'events';

class MyEventEmitter extends EventEmitter {}
export const myEmitter = new MyEventEmitter();