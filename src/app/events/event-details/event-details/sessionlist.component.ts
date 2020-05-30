import { Component, Input , OnChanges} from '@angular/core'
import { templateJitUrl } from '@angular/compiler';
import { ISession } from '../../shared';
import { Session } from 'protractor';
 @Component({
     selector: 'app-session-list',
     templateUrl: './sessionlist.component.html'
 })
  export class SessionListComponent implements OnChanges{
      @Input() sessions: ISession[]
      @Input() filterBy: string
      @Input() sortBy: string
     visibleSessions: ISession[] = []


      ngOnChanges(filter) {
        if(this.sessions){
            this.filterSesstion(this.filterBy)
            this.sortBy === 'name'? this.visibleSessions.sort(sortbyname) : this.visibleSessions.sort(sortbyvotes)
        }
      }
     filterSesstion(filter: string) {
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0)
        }else{
            this.visibleSessions = this.sessions.filter(session=>{ return session.level.toLocaleLowerCase()===filter} )
        }
     }
  }

  function sortbyname(s1:ISession , s2 :ISession){
    if(s1.name > s2.name) return 1
    else if(s1.name === s2.name) return 0
    else return -1
  }

  function sortbyvotes(s1 : ISession, s2: ISession){
      return s2.voters.length - s1.voters.length
  }