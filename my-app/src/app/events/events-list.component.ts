import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService,
              private toasterService: ToastrService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleClickThumbnailEvent(eventName)  {
    this.toasterService.success(eventName);
  }
}
