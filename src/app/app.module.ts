import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from './events/shared/event-service';
import { ToasterService } from './common/toastr-service';
import { RouterModule,Router } from '@angular/router';
import { appRouts } from './navbar/routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/Event-list-resolve.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [
          EventService,
          ToasterService, 
          EventRouteActivator,
          EventListResolver,
          
        ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
