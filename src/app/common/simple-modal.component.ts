import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { $ } from 'protractor';
import { JQ_TOKEN } from './jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title : string 
  @ViewChild('modalcontainer') containerEl: ElementRef
  constructor(@Inject(JQ_TOKEN) private $ :any ) { }

  ngOnInit(): void {
    
  }
  closeModal(){
    this.$(this.containerEl.nativeElement).modal('hide')
  }
}
