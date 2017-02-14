import { NgModule } from '@angular/core';

import { LoginRoutingModule, routedComponents } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [LoginRoutingModule, SharedModule],
  declarations: [routedComponents]
})
export class LoginModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/