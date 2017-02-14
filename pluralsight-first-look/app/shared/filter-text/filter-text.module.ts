import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextComponent } from './filter-text.component';
import { FilterTextService } from './filter-text.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [FilterTextComponent],
  declarations: [FilterTextComponent],
  providers: [FilterTextService]
})
export class FilterTextModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/