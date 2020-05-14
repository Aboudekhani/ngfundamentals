import{ Component, OnInit} from "@angular/core"
import { templateJitUrl } from '@angular/compiler';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { EventService } from './shared/event-service';
import { NgbToastHeader } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from '../common/toastr-service';

declare let toastr


@Component({
    
    templateUrl :'./events-list.component.html'
})
export class EventsListComponent implements OnInit {
     events : any[]
    constructor(private eventService : EventService,private toastr :ToasterService) {
      
        
    }
    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }
    handlethumbnailclick(eventName){
       this.toastr.success(eventName) 
    }
  
}