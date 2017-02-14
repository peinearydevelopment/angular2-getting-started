import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'story-filter-text',
  templateUrl: 'filter-text.component.html'
})
export class FilterTextComponent {
  @Output() changed: EventEmitter<string>;

  filter: string;

  constructor() {
    this.changed = new EventEmitter<string>();

    componentHandler.upgradeDom();
  }

  clear() {
    this.filter = '';
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/