import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from '../common/toastr.service';
import { EventService, IEvent } from './shared/index';

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr />
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
                </div>
            </div>
            <!-- Input Output example
                <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event"></event-thumbnail>
            -->
            <!-- Reference variable example
                <event-thumbnail #thumbnail [event]="event"></event-thumbnail>
                <h3>{{thumbnail.someProperty}}</h3>
                <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
            -->
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor (private route: ActivatedRoute, private eventService: EventService, private toastrService: ToastrService) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName: string) {
        this.toastrService.success(eventName);
    }

    /* Input Output example
        handleEventClicked(data) {
            console.log(data);
        }
    */
}