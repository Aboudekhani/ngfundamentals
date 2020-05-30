import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events/shared';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {/**
 *
 */
searchTerm: string = ""
foundSession: ISession[]
constructor(public authService: AuthService,private eventService :EventService) {
  
  
}
searchSession(searchTerm){
  this.eventService.searchSessions(searchTerm).subscribe(
    session => this.foundSession= session
  )
  console.log(this.foundSession)
}
  

}
