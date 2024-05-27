import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {EventDataA} from "./event-a.class";


@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$ = new Subject<EventDataA>();

  emit(event: EventDataA) {
    this.subject$.next(event);
  }

  on(eventName: string, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: EventDataA) => e.name === eventName),
      map((e: EventDataA) => e["value"])).subscribe(action);
  }
}
