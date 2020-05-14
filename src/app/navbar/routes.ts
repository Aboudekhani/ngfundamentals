import { EventsListComponent } from '../events/events-list.component';
import { EventDetailsComponent } from '../events/event-details/event-details/event-details.component';
import {Routes} from '@angular/router'

import { from } from 'rxjs';
export const appRouts: Routes = [
    {path : 'events' ,component:EventsListComponent},
    {path : 'event/:id' ,component: EventDetailsComponent},
    {path: '' ,redirectTo:'/events',pathMatch:'full'},
    

]