import {Component, Input} from '@angular/core'
import { Template } from '@angular/compiler/src/render3/r3_ast'
import { IEvent } from './shared'
@Component({
    selector : 'event-thumbnail',
    templateUrl : "./event-thumbnail.component.html"
     
})
 export class EventThumbnailComponent{
    @Input() event: IEvent 
 }