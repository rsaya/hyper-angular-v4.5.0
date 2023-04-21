import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// type
import { LayoutEventType } from '../constants/events';

interface Event {
  type: LayoutEventType;
  payload?: string;
}

//Defines event callback 
type EventCallback = (payload: any) => void;

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private handler = new Subject<Event>();
  constructor () { }

  /**
   * Broadcast the event
   * @param type type of event
   * @param payload payload
   */
  broadcast(type: LayoutEventType, payload: any = ""): void {
    this.handler.next({ type, payload });
  }

  /**
   * Subscribe to event
   * @param type type of event
   * @param callback call back function
   */
  subscribe(type: LayoutEventType, callback: EventCallback): Subscription {
    return this.handler.pipe(
      filter((event) => event.type === type)).pipe(
        map(event => event.payload))
      .subscribe(callback);
  }
}
