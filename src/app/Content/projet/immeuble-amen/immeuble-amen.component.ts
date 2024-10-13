import { Component } from '@angular/core';
import { HeaderComponent } from '../../../Header/header/header.component';
import { FooterComponent } from '../../../Footer/footer/footer.component';
import { ContactComponent } from '../../contact/contact.component';

@Component({
  selector: 'app-immeuble-amen',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ContactComponent],
  templateUrl: './immeuble-amen.component.html',
})
export class ImmeubleAmenComponent {
 
}
