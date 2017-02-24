import { Routes } from '@angular/router';

import {
    CreateEventComponent,
    CreateSessionComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventsListResolver,
    EventResolver
} from './events/index';

import { userRoutes } from './user/user.routes';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    /*
        redirect match options
        prefix: if url starts with
        full: if url fully matches
    */

    /*
        Since Rollup doesn't support code splitting, we can't lazy load modules
        therefor, replace this
        { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
        with below
    */
    { path: 'user', children: userRoutes }
];