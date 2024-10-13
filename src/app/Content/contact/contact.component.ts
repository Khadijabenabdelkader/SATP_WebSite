import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule si nécessaire

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule], 
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  telephone: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const contact = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      telephone: this.telephone,
      message: this.message,
    };
  
    // Envoyer une requête POST au backend
    this.http.post('http://localhost:3000/contact', contact)
      .subscribe({
        next: (response) => {
          console.log('Formulaire soumis avec succès :', response);
          alert('Formulaire soumis avec succès');
          this.resetForm();
        },
        error: (error) => {
          console.error('Erreur lors de la soumission du formulaire :', error);
          alert('Erreur lors de la soumission du formulaire. Veuillez réessayer.');
        }
      });
  }
  
  // Méthode pour réinitialiser le formulaire après soumission
  resetForm() {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.telephone = '';
    this.message = '';
  }
}