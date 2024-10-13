import { Component } from '@angular/core';
import { AproposComponent } from "../apropos/apropos.component";
import { ServiceComponent } from "../service/service.component";
import { ProjetComponent } from "../projet/projet.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [AproposComponent, ServiceComponent, ProjetComponent, ContactComponent],
  templateUrl: './accueil.component.html',
})
export class AccueilComponent {
}
