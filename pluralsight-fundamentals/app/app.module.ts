import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventsListResolver,
    EventRouteActivator,
    EventService
} from './events/index';

import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';

import { ToastrService } from './common/toastr.service';
import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';

@NgModule({
    bootstrap: [EventsAppComponent],
    declarations: [
        CreateEventComponent,
        CreateSessionComponent,
        Error404Component,
        EventsAppComponent,
        EventDetailsComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AuthService,
        EventsListResolver,
        EventRouteActivator,
        EventService, /* <- is short-hand for -> { provide: EventService, useValue: EventService } */
        ToastrService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: CreateEventComponent.checkDirtyState
        }
    ]
})
export class AppModule {}