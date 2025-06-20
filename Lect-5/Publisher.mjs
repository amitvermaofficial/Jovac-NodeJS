export class Publisher {
  constructor() {

  }

  publishMessage(myEventEmitter) {
    myEventEmitter.emit('greeting', 'happy birthday')
  }
}