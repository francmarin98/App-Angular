import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './pages/item/item.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path:'', component: PortfolioComponent },
  {path:'item', component: ItemComponent },
  {path: 'about',component: AboutComponent},
  {path: '**',pathMatch:'full' ,redirectTo:''}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}
