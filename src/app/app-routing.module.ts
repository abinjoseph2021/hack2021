import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './Routes/page404/page404.component';
import { AboutComponent } from './Routes/about/about.component';
import { HomeComponent } from './Routes/home/home.component';
import { UserComponent } from './Routes/user/user.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:AboutComponent,
    path:'about',
    children: [{
      component:AboutCompanyComponent,
      path:'company'
    },
    {
      component:AboutMeComponent,
      path:'me'
    }]
  },
  {
    component:UserComponent,
    path:'user/:id'
  },
  {
    component:Page404Component,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

