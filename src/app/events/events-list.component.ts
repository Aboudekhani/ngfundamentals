import{ Component, OnInit} from "@angular/core"
import { templateJitUrl } from '@angular/compiler';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { EventService } from './shared/event-service';
import { NgbToastHeader } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute } from '@angular/router';

declare let toastr


@Component({
    
    templateUrl :'./events-list.component.html'
})
export class EventsListComponent implements OnInit {
     events : any
    constructor(private eventService : EventService,
        private route: ActivatedRoute) {
      
        
    }
    ngOnInit() {
         this.events = this.route.snapshot.data['events']
    }
   
  
}