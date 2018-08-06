import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService, IEvent } from '../events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  events: IEvent[];

  constructor(public auth: AuthService,
              private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.eventService
      .searchSessions(searchTerm)
      .subscribe(sessions => { 
        this.foundSessions = sessions;
    })
  }

  loadEventList() {
    this.eventService
      .getEvents()
      .subscribe(events => {
        this.events = events;
      })
  };

  loadEvent(Id: number) {
    
  }

}
