import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { PartnerCardsComponent } from './partner-cards/partner-cards.component';
import { PartnerAboutComponent } from './partner-about/partner-about.component';

@NgModule({
  declarations: [
    PartnerListComponent,
    PartnerCardsComponent,
    PartnerAboutComponent,
  ],
  imports: [CommonModule, PartnersRoutingModule],
  exports: [],
})
export class PartnersModule {}
