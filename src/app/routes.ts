
import {Routes} from '@angular/router'
import { CreateEventComponent,EventListResolver,EventsListComponent  } from './events/index';
import {EventDetailsComponent,EventRouteActivator} from './events/event-details';
import { Error404Component } from './errors/404.coponent';

export const appRouts: Routes = [
    {path: 'events/new', component:CreateEventComponent},
    {path : 'events' ,component:EventsListComponent , resolve:{events:EventListResolver} },
    {path : 'event/:id' ,component: EventDetailsComponent ,canActivate:[EventRouteActivator]} ,
    {path :'404',component: Error404Component },
    {path: '' ,redirectTo:'/events',pathMatch:'full'},
    {path: 'user', loadChildren:() => import('./user/user.module').then(u=> u.UserModule)}
    

]