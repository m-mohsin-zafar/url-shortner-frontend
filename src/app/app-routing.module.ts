import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UrlDashboardComponent} from './url-dashboard/url-dashboard.component';
import {UrlMainComponent} from './url-main/url-main.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: UrlMainComponent},
  { path: 'analytics/:id', component: UrlDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
