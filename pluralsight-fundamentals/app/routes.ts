import { Routes } from '@angular/router'

import {
    CreateEventComponent,
    CreateSessionComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventsListResolver
} from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events:EventsListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    /*
        redirect match options
        prefix: if url starts with
        full: if url fully matches
    */
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];