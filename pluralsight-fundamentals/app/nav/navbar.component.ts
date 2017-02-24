import { Component } from '@angular/core';

import { EventService, ISession } from '../events/shared/index';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        li > a.active { color: #F97924; }
        @media (max-width: 1200px) { 
            #searchForm { display: none; }
        }
    `]
})
export class NavBarComponent {
    searchTerm: string = '';
    foundSessions: ISession[];

/*
    AOT CHANGE
    properties used in the templates must be public properties of the components
    by default properties are public
    needed to change the AuthService to be public(it was private before)
 */
    constructor(public authService: AuthService, private eventService: EventService) {}

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }
}