import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import { ProfileComponent } from './profile.component'
import { ProfilsRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

 
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProfilsRoutingModule
    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers:[],
  
   
})
export class UserModule{
    
}