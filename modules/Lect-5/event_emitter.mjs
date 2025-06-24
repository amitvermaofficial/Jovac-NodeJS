import { Subscriber } from "./Subscriber.mjs";
import { Publisher } from "./Publisher.mjs";
import { EventEmitter } from "events";
const myEventEmitter = new EventEmitter();
const publisher = new Publisher();
const subscriber = new Subscriber(myEventEmitter);
publisher.publishMessage(myEventEmitter);