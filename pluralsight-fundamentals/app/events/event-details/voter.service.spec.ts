import { VoterService } from './voter.service';
import { ISession } from '../shared/session.model';

import { Observable } from 'rxjs/Observable';

describe('VoterService', () => {
    let voterService: VoterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            let session: ISession = <ISession> { id: 6, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            voterService.deleteVoter(3, session, 'joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });

        it('should call http.delete with the correct URL', () => {
            let session: ISession = <ISession> { id: 6, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            voterService.deleteVoter(3, session, 'joe');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
        });
    });

    describe('addVoter', () => {
        it('should call http.poast with the correct URL', () => {
            let session: ISession = <ISession> { id: 6, voters: ['john'] };
            mockHttp.post.and.returnValue(Observable.of(false));

            voterService.addVoter(3, session, 'joe');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', '{}', jasmine.any(Object));
        });
    });
});