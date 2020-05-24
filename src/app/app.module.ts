import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EventThumbnailComponent,EventsListComponent,CreateEventComponent,EventListResolver} from './events/index'
import {NavbarComponent,} from './navbar/index'
import {EventService} from './events/shared/index';
import { EventsAppComponent } from './event-app.component';
import { ToasterService } from './common/toastr-service';
import { RouterModule,Router } from '@angular/router';
import { EventRouteActivator} from './events/event-details/index';
import { appRouts } from './routes';
import { AuthService } from './user/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EventDetailsModule } from './events/event-details/event-details/event-details.module';



@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent, 
    NavbarComponent,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    EventDetailsModule,
    FormsModule,
    
  ],
  providers: [
          EventService,
          ToasterService, 
          EventRouteActivator,
          EventListResolver,
          AuthService
        ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
