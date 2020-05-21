import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { DetailsComponent} from '../components/details/details.component';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DetailsComponent
  ],
  entryComponents: [DetailsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TabsPage]
})
export class TabsPageModule {}
