import { Directive, OnInit, ElementRef, Inject } from "@angular/core";

import { JQ_TOKEN } from './jquery.service';

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    
    /**
     *
     */
     el :HTMLElement
    
    constructor(ref : ElementRef ,@Inject(JQ_TOKEN) private $: any) {
         this.el = ref.nativeElement 
    }
    ngOnInit() {
        this.el.addEventListener('click',()=>{
        this.$('#app-simple-modal').modal({})
    })
    }
}