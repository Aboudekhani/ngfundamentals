import { Component, Input} from '@angular/core'
import { templateJitUrl } from '@angular/compiler';
import { ISession } from '../../shared';
 @Component({
     selector: 'app-session-list',
     templateUrl: './sessionlist.component.html'
 })
  export class SessionListComponent{
      @Input() sessions: ISession[]
  }