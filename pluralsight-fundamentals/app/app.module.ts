import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, /*For eager loading of modules*/ PreloadAllModules } from '@angular/router';
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

/*
    AOT CHANGE
    change from
        declare let toastr: Toastr;
        declare let jQuery: Object;
    to
        let toastr: Toastr = window['toastr'];
        let jQuery: Object = window['$'];
*/
let toastr: Toastr = window['toastr'];
let jQuery: Object = window['$'];

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
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
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