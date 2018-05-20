import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin.routing';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  imports: [SharedModule, AdminRoutingModule, WidgetModule],
  declarations: [
    AboutComponent,
    ProjectComponent
  ],
  providers: [
  ]
})
export class AdminModule {}
