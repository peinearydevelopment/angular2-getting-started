import { NgModule } from '@angular/core';

import { CharacterButtonComponent } from './shared/character-button/character-button.component';
import { SortCharactersPipe } from './shared/sort-characters.pipe';
import { CharactersRoutingModule, routedComponents } from './characters-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CharactersRoutingModule, SharedModule],
  declarations: [CharacterButtonComponent, SortCharactersPipe, routedComponents]
})
export class CharactersModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/