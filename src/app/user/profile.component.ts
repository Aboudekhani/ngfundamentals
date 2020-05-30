import { Component, OnInit ,Inject} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from '../common/toastr-service'

@Component({
  templateUrl:'./profile.component.html' 
})

export class ProfileComponent implements OnInit {
  profileForm : FormGroup
   /**
    *
    */
   constructor(private auth : AuthService,private router : Router ,
    @Inject(TOASTR_TOKEN) private toastr:Toastr) {
     
     
   }
  ngOnInit() {

    let firstName = new FormControl(this.auth.currentUser.firstName, Validators.required)
    let lastName = new FormControl(this.auth.currentUser.lastName , Validators.required)
    this.profileForm = new FormGroup({
      firstName : firstName,
      lastName : lastName
    })

  }
  cancel(){
    this.router.navigate(['events'])
  }
  saveProfile(formValues){
    if(this.profileForm.valid){
    this.auth.updateUser(formValues.firstName,formValues.lastName)
    this.toastr.success('Profil Saved')
  }
  }
       
}
    