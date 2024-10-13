import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ImmeubleAmenComponent } from './immeuble-amen/immeuble-amen.component';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [RouterModule, ImmeubleAmenComponent], 
  templateUrl: './projet.component.html',
})
export class ProjetComponent {
  constructor(private router: Router) {}

  goToprojet() {
    console.log('Navigation to ImmeubleAmen');
    this.router.navigate(['projet/ImmeubleAmen']);
  }
}
