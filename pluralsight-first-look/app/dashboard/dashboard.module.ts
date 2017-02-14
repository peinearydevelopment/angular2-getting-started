import { NgModule } from '@angular/core';

import { DashboardButtonComponent } from './shared/dashboard-button/dashboard-button.component';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [DashboardRoutingModule, SharedModule],
  declarations: [DashboardButtonComponent, routedComponents]
})
export class DashboardModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/