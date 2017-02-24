import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './shared/index';

@Component({
    /*
        AOT CHANGE
        For systemjs need to add moduleId and template url goes from 'app/events/create-event.component.html' to 'create-event.component.html'
        If we were using webpack, then we wouldn't need to specify moduleId and the relative path for the templateUrl would start with './'
    */
    moduleId: module.id,
    templateUrl: 'create-event.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateEventComponent {
    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventService) {}

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(event => {
            this.isDirty = false;
            this.router.navigate(['/events']);
            // console.log(formValues);
        });
    }

    static checkDirtyState(component: CreateEventComponent) {
        if (component.isDirty) {
            return window.confirm('You haven\'t saved this event, do you really want to cancel?');
        }

        return true;
    }
}