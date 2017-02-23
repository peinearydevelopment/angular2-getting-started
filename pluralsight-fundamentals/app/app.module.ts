import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
    CreateEventComponent,
    CreateSessionComponent,
    DurationPipe,
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventsListResolver,
    EventService,
    EventResolver,
    LocationValidator,
    SessionList,
    UpvoteComponent,
    VoterService
} from './events/index';

import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { 
    CollapsibleWellComponent,
    JQUERY_TOKEN,
    ModalTriggerDirective,
    SimpleModalComponent,
    TOASTR_TOKEN,
    Toastr
} from './common/index';

import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    bootstrap: [EventsAppComponent],
    declarations: [
        CollapsibleWellComponent,
        CreateEventComponent,
        CreateSessionComponent,
        DurationPipe,
        Error404Component,
        EventsAppComponent,
        EventDetailsComponent,
        EventsListComponent,
        EventThumbnailComponent,
        LocationValidator,
        ModalTriggerDirective,
        NavBarComponent,
        SessionList,
        SimpleModalComponent,
        UpvoteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AuthService,
        EventResolver,
        EventsListResolver,
        EventService, /* <- is short-hand for -> { provide: EventService, useClass: EventService } */
        VoterService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQUERY_TOKEN,
            useValue: jQuery
        },
        {
            provide: 'canDeactivateCreateEvent',
            useValue: CreateEventComponent.checkDirtyState
        }
    ]
})
export class AppModule {}