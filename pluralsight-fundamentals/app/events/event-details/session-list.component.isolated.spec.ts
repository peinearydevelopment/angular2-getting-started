import { SessionList } from './session-list.component';
import { ISession } from '../shared/session.model';

describe('SessionListComponent', () => {
    let component: SessionList;
    let mockAuthService;
    let mockVoterService;

    beforeEach(() => {
        component = new SessionList(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]> [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'intermediate' },
                { name: 'session 3', level: 'beginner' }
            ];
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            // component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2);
        });

        it('should sort the sessions correctly', () => {
            component.sessions = <ISession[]> [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 3', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' }
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            // component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSessions[2].name).toBe('session 3');
        });
    });
});
