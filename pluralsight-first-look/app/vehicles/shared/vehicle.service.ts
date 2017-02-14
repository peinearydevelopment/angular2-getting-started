import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Vehicle } from './vehicle.model';
import { CONFIG, ExceptionService, MessageService, SpinnerService } from '../../core';

/*
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/catch';
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/throw';

  getVehicles() {
    return this.http
               .get('api/vehicles.json')
               .map((response: Response) => <Vehicle[]>response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Status code ${error.status} on url ${error.url}`;
    console.error(msg);
    return Observable.throw(msg);
  }
 */

let vehiclesUrl = CONFIG.baseUrls.vehicles;

@Injectable()
export class VehicleService {
  onDbReset = this.messageService.state;

  constructor(private http: Http,
    private exceptionService: ExceptionService,
    private messageService: MessageService,
    private spinnerService: SpinnerService) {
    this.messageService.state.subscribe(state => this.getVehicles());
  }

  addVehicle(vehicle: Vehicle) {
    let body = JSON.stringify(vehicle);
    this.spinnerService.show();
    return <Observable<Vehicle>>this.http
      .post(`${vehiclesUrl}`, body)
      .map(res => <Vehicle>res.json().data)
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  deleteVehicle(vehicle: Vehicle) {
    this.spinnerService.show();
    return <Observable<Vehicle>>this.http
      .delete(`${vehiclesUrl}/${vehicle.id}`)
      .map(res => this.extractData<Vehicle>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  getVehicles() {
    this.spinnerService.show();
    return <Observable<Vehicle[]>>this.http
      .get(vehiclesUrl)
      .map(res => this.extractData<Vehicle[]>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }

  getVehicle(id: number) {
    this.spinnerService.show();
    return <Observable<Vehicle>>this.http
      .get(`${vehiclesUrl}/${id}`)
      .map(res => this.extractData<Vehicle>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  updateVehicle(vehicle: Vehicle) {
    let body = JSON.stringify(vehicle);
    this.spinnerService.show();

    return <Observable<Vehicle>>this.http
      .put(`${vehiclesUrl}/${vehicle.id}`, body)
      .map(res => this.extractData<Vehicle>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/