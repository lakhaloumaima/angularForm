import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { XyzComponent } from './xyz/xyz.component';



const routes: Routes = [
  {path:"header" , component:HeaderComponent} ,
  {path:"footer" , component:FooterComponent} ,
  {path:"xyz" , component:XyzComponent} ,
  {path: "", redirectTo: "produits", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
