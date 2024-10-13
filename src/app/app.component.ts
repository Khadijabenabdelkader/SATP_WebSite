import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header/header.component';
import { AccueilComponent } from "./Content/accueil/accueil.component";
import { ServiceComponent } from "./Content/service/service.component";
import { ContactComponent } from './Content/contact/contact.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { ProjetComponent } from "./Content/projet/projet.component";
import { AproposComponent } from "./Content/apropos/apropos.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AccueilComponent, FooterComponent, HeaderComponent, ServiceComponent, ContactComponent, ProjetComponent, RouterModule, AproposComponent]
})
export class AppComponent {
  title = 'SATP';
}
