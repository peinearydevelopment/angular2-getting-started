import { NgModule } from '@angular/core';

import { VehicleButtonComponent } from './shared/vehicle-button/vehicle-button.component';

import { routedComponents, VehiclesRoutingModule } from './vehicles-routing.module';

import { SharedModule } from '../shared/shared.module';
import { VehicleService } from './shared/vehicle.service'; 

@NgModule({
  imports: [SharedModule, VehiclesRoutingModule],
  declarations: [VehicleButtonComponent, routedComponents],
  providers: [VehicleService]
})
export class VehiclesModule { }
// avoids having to lazy load with loadChildren: "app/vehicles/vehicle.module#VehicleModule"


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/