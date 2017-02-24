/*
    EXAMPLE OF A DEEP INTEGRATION TEST
*/
import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { SessionList } from './session-list.component';
import { UpvoteComponent } from './upvote.component';
import { ISession } from '../shared/session.model';
import { DurationPipe } from '../shared/duration.pipe';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';

/*
    ONE APPROACH TO CREATING SHALLOW INTEGRATION TESTS

    import { Component } from '@angular/core';
    @Component({})
    class UpvoteComponent {

    }
*/

/*
    ANOTHER APPROACH TO CREATING SHALLOW INTEGRATION TESTS
    care should be taken with this approach though as it can hide other problems

    import { NO_ERRORS_SCHEMA } from '@angular/core';

    then add this to TestBed.configureTestingModule({schemas:[NO_ERRORS_SCHEMA]})
    and can remove UpvoteComponent and CollapsibleWellComponent from declarations
*/

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionList>;
    let component: SessionList;
    let element: HTMLElement;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'Joe' }
        };

        let mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                DurationPipe,
                SessionList,
                UpvoteComponent,
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        })
        .compileComponents(); // don't have to do this when using webpack
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionList);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have the correct session title', () => {
            /*
                One would think that since we are setting properties on the component, that Angular would fire the onChanges event.
                In order for that to be fired though, it must occur through a parent component setting a property on a child component.
                We are setting them directly though, so we need to call it ourselves.

                NOTE: ngOnInit is called on its own, we wouldn't have to call that.
             */
            component.sessions = [{ id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: [ 'john', 'bob' ]}];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debugElement.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1'); // works exactly the same as the line above
            /*
                really want to write for all of the elements on the page, but then there is a lot that could be brittle
            */
        });
    });
});