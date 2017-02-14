import { Component } from '@angular/core';

import { VehicleService } from './shared/vehicle.service';

@Component({
  // selector: 'story-vehicles',
  template: `<router-outlet></router-outlet>`,
  providers: [VehicleService]
})
export class VehiclesComponent  {}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/