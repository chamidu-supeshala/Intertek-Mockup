import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NavigationModule } from './navigation/navigation.module';
import { HeaderModule } from './header/header.module';
import { LayoutComponent } from './layout.component';
import { BrandComponent } from './brand/brand.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    HeaderModule,
    NavigationModule
  ],
  declarations: [
    LayoutComponent,
    BrandComponent,
    CustomizerComponent,
    FooterComponent
  ],
  providers: [],
  exports: []
})
export class LayoutModule {
}
