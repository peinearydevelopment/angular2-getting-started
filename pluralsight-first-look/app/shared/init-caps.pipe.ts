import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform {
  transform(value: string) { // , args?: any[]) {
    return value
      .toLowerCase()
      .replace(/(?:^|\s)[a-z]/g, function(m) {
        return m.toUpperCase();
      });
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/