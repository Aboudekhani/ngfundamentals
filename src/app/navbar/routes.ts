import { EventsListComponent } from '../events/events-list.component';
import { EventDetailsComponent } from '../events/event-details/event-details/event-details.component';
import {Routes} from '@angular/router'

import { from } from 'rxjs';
import { CreateEventComponent } from '../events/create-event/create-event.component';
import { EventRouteActivator } from '../events/event-details/event-route-activator.service';
import { Error404Component } from '../errors/404.coponent';
import { EventListResolver } from '../events/Event-list-resolve.service';
export const appRouts: Routes = [
    {path: 'events/new', component:CreateEventComponent},
    {path : 'events' ,component:EventsListComponent , resolve:{events:EventListResolver} },
    {path : 'event/:id' ,component: EventDetailsComponent ,canActivate:[EventRouteActivator]} ,
    {path :'404',component: Error404Component },
    {path: '' ,redirectTo:'/events',pathMatch:'full'},
    {path: 'user', loadChildren:() => import('../user/user.module').then(u=> u.UserModule)}
    

]