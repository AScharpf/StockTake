import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'landing-page/new-stock-entry', component: NewStockEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
