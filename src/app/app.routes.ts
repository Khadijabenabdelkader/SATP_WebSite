import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AccueilComponent } from './Content/accueil/accueil.component';
import { AproposComponent } from './Content/apropos/apropos.component';
import { ServiceComponent } from './Content/service/service.component';
import { ProjetComponent } from './Content/projet/projet.component';
import { ContactComponent } from './Content/contact/contact.component';
import { ImmeubleAmenComponent } from './Content/projet/immeuble-amen/immeuble-amen.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projet/ImmeubleAmen', component: ImmeubleAmenComponent }, 
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, 
];

// Options pour activer le scrolling vers les ancres
const routerOptions: ExtraOptions = {
  
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: []
})
export class AppRoutingModule { }
