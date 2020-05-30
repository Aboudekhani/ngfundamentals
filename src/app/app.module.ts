import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EventThumbnailComponent,EventsListComponent,CreateEventComponent,EventListResolver} from './events/index'
import {NavbarComponent,} from './navbar/index'
import {EventService} from './events/shared/index';
import { EventsAppComponent } from './event-app.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr-service';
import { RouterModule,Router } from '@angular/router';
import { EventRouteActivator} from './events/event-details/index';
import { appRouts } from './routes';
import { AuthService } from './user/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EventDetailsModule } from './events/event-details/event-details/event-details.module';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { JQ_TOKEN } from './common/jquery.service';



let toastr:Toastr= window['toastr']
let jquery =window['jQuery']

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent, 
    NavbarComponent,
    CreateEventComponent,
    SimpleModalComponent,
    ModalTriggerDirective 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    EventDetailsModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  providers: [
          EventService,
          {
            provide: TOASTR_TOKEN , useValue:toastr
          },
          {
            provide : JQ_TOKEN ,useValue:jquery
          },
          EventRouteActivator,
          EventListResolver,
          AuthService
        ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
