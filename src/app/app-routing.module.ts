import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';
import { StockPageComponent } from './stock-page/stock-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'new-stock-entry', component: NewStockEntryComponent},
  { path: 'stock-page', component: StockPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
