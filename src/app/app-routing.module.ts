import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FavouritesComponent} from "./favourites/favourites.component";
import {KassiordersmenuComponent} from "./kassiordersmenu/kassiordersmenu.component";
import {MyordersComponent} from "./myorders/myorders.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SigninComponent} from "./signin/signin.component";
import {SignoutComponent} from "./signout/signout.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "kassiordersMenu", component: KassiordersmenuComponent},
  {path: "myOrders", component: MyordersComponent},
  {path: "favourites", component: FavouritesComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "signin", component: SigninComponent},
  {path: "signout", component: SignoutComponent},
  {path: "contact", component: ContactComponent},
  {path: "about", component: AboutComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
