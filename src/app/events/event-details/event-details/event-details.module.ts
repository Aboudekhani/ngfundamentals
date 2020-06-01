import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './sessionlist.component';
import { EventDetailsComponent } from './event-details.component';
import { CreateSessionComponent } from './create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../shared';
import { CollapsibleWellComponent } from 'src/app/common/collapsible-well.component';
import { DurationPipe } from '../../shared/duration.pipe';


@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
      
       
    ],
    declarations:[
        SessionListComponent,
        EventDetailsComponent,
        CreateSessionComponent,
        CollapsibleWellComponent,
        DurationPipe,
       
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