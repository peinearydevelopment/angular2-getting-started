import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ISession } from '../shared/index';

@Injectable()
export class VoterService {
    constructor(private http: Http) {}

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http
            .post(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`, JSON.stringify({}), options)
            .catch(this.handleError)
            .subscribe();
    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);

        this.http
            .delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
            .catch(this.handleError)
            .subscribe();
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}