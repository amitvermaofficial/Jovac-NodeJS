export class Subscriber {
  constructor(myEventEmitter) {
      myEventEmitter.on('greeting', (ip) => {
        console.log("connected at: "+ip);
        
      })
  }

  subscribeMessage() {
    console.log("Message get subscribed!");
  }
}