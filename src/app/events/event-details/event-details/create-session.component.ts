import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormControl, RequiredValidator, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../../shared';
import { restrictedWords } from '../../shared/resticterd-word.validator';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector:'create-session',
  templateUrl: './create-session.component.html',
  styles :[`
  .error input { background-color:#E3C3C5 ;}
  .error ::-webkit-input-placeholder {color: #999;}
  .error ::-moz-placeholder {color: #999;}
  .error :-moz-placeholder {color: #999;}
  .error :-ms-input-placeholder { color: #999;}
  `]
 
})
export class CreateSessionComponent implements OnInit {

  constructor() { }
  @Output() savenewsession= new EventEmitter()
  @Output() cancelsession = new EventEmitter()
  newSessionForm : FormGroup
  name : FormControl
  presenter : FormControl
  duration : FormControl
  level : FormControl
  abstract : FormControl

  ngOnInit(): void {
   
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required,Validators.maxLength(400),restrictedWords(['foo','baaar'])])

    this.newSessionForm = new FormGroup({
      name : this.name,
      presenter : this.presenter,
      duration :this.duration,
      level : this.level,
      abstract : this.abstract
    })
  }
  saveSession(formValues){
    let session :ISession = {
      id: undefined,
      name :formValues.name,
      presenter :formValues.presenter,
      duration : +formValues.duration,
      level : formValues.level,
      abstract : formValues.abstract,
      voters : []
    }
    this.savenewsession.emit(session)
  }
  cancel(){
    this.cancelsession.emit()
  }
  

}
