import { Component, Input, OnInit } from '@angular/core';

import { Character } from '../../../models';

@Component({
  moduleId: module.id,
  selector: 'story-dashboard-button',
  templateUrl: 'dashboard-button.component.html',
  styleUrls: ['dashboard-button.component.css']
})
export class DashboardButtonComponent implements OnInit {
  @Input() character: Character;

  constructor() {}

  ngOnInit() {
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/