import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div [hidden]="!event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
            <!-- Input Output example
                <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
            -->
        </div>
    `,
    styles: [`
        .green { color: #030 !important }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return { green: isEarlyStart, bold: isEarlyStart };

        // if (this.event && this.event.time === '8:00 am') {
        //     return 'green bold';
        //     return ['green', 'bold'];
        // }

        // return '';
        // return [];
    }

    /* Input Output example
        @Output() eventClick = new EventEmitter();

        handleClickMe() {
            this.eventClick.emit(this.event.name);
        }
     */

     /* Reference variable example
        logFoo() {
            console.log('foo');
        }

        someProperty: string = 'some value';
      */
}