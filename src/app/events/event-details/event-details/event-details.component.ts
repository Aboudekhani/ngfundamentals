import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event-service';
import {ActivatedRoute, Router} from '@angular/router'
import { ISession } from '../../shared';
 

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any
  addmode: boolean = false;

  constructor(private eventService: EventService ,private route : ActivatedRoute, private router: Router) {

   }

  ngOnInit(): void {
    this.event= this.eventService.getEvent(this.route.snapshot.params['id'])

  }

  addSession(){
    this.addmode = true
  }
  savenewsession(session: ISession){
    const nextid = Math.max.apply(null, this.event.sessions.map(s=>s.id))
    session.id =nextid
    this.event.sessions.push(session)
    this.eventService.updateEvents(this.event)
    this.addmode = false
  }
  cancelsession(){
    this.addmode =false
  }
}
