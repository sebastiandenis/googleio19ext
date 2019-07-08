import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../models/event.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public http: HttpClient, public firebase: AngularFirestore) { }

  getEventsFromBackend(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('http://localhost:3000/events');
  }

  getEventsFromFirebase(): Observable<IEvent[]> {
    return this.firebase.collection<IEvent>('Events').valueChanges();
  }
}
