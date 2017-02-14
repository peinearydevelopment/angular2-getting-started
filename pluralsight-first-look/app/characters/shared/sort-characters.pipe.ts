import { Pipe, PipeTransform } from '@angular/core';

import { Character } from '../../models';

@Pipe({ name: 'sortCharacters' })
export class SortCharactersPipe implements PipeTransform {
  transform(value: Character[], args?: any[]) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Character, b: Character) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/