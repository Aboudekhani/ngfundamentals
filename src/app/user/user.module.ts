import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import { ProfileComponent } from './profile.component'
import { userRoutes } from './user.routes'
import { ProfilsRoutingModule } from './profile-routing.module'

@NgModule({
    imports:[
        CommonModule,
        ProfilsRoutingModule
    ],
    declarations:[
        ProfileComponent
    ],
    providers:[],
  
   
})
export class UserModule{
    
}