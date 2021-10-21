import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerAboutComponent } from './partner-about/partner-about.component';
import { PartnerCardsComponent } from './partner-cards/partner-cards.component';
import { PartnerListComponent } from './partner-list/partner-list.component';

const routes: Routes = [
  {
    path: 'partners',
    component: PartnerListComponent,
    children: [
      {
        path: 'cards',
        component: PartnerCardsComponent,
      },
      {
        path: 'about',
        component: PartnerAboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnersRoutingModule {}
