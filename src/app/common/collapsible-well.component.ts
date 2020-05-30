import {Component, Input} from "@angular/core"
import { Template } from '@angular/compiler/src/render3/r3_ast';
 @Component({
    selector: 'collapsible-well',
    template :`
        <div (click) = "toggleContent()"  >
            <h4 class="well" >{{title}} </h4>
            <ng-content *ngIf="visible"></ng-content>
        </div>
    `
 })
 export class CollapsibleWellComponent{
     @Input() title: string
     visible: any;
     toggleContent(){
         this.visible = !this.visible
     }

 }