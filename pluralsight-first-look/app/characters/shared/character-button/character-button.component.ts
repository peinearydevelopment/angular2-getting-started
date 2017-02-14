import { Component, Input, OnInit } from '@angular/core';

import { Character } from '../../../models';

@Component({
  moduleId: module.id,
  selector: 'story-character-button',
  templateUrl: 'character-button.component.html',
  styleUrls: ['character-button.component.css'],
})
export class CharacterButtonComponent implements OnInit {
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