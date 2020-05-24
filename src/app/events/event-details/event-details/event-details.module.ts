import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './sessionlist.component';
import { EventDetailsComponent } from './event-details.component';
import { CreateSessionComponent } from './create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../shared';

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
       
    ],
    declarations:[
        SessionListComponent,
        EventDetailsComponent,
        CreateSessionComponent
    ],
    exports:[
        EventDetailsComponent,
        SessionListComponent,
        CreateSessionComponent
    ],
    providers:[EventService],
  
   
}

)
export class EventDetailsModule{

}