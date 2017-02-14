import { Component, Input, OnInit } from '@angular/core';

import { Vehicle } from '../vehicle.model';

@Component({
  moduleId: module.id,
  selector: 'story-vehicle-button',
  templateUrl: 'vehicle-button.component.html',
  styleUrls: ['vehicle-button.component.css'],
})
export class VehicleButtonComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor() {}

  ngOnInit() {
  }

}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/