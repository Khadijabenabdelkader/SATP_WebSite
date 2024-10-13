const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/SATPdb', {
  useNewUrlParser: true,
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.error('Erreur de connexion à MongoDB :', err));

// Définition du schéma pour le formulaire de contact
const contactSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  message: { type: String, required: true },
});

// Modèle Contact basé sur le schéma
const Contact = mongoose.model('Contact', contactSchema,'ContactForm');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '${email}',
    pass: 'Kadibak120603',
  },
});

app.post('/contact', async (req, res) => {
  const { nom, prenom, email, telephone, message } = req.body;

  // Vérification des champs requis
  if (!nom || !prenom || !email || !telephone || !message) {
    return res.status(400).json({
      success: false,
      message: 'Veuillez remplir tous les champs obligatoires.'
    });
  }

  try {
    const contact = new Contact({ nom, prenom, email, telephone, message });
    const savedContact = await contact.save();

    const mailOptions = {
      from: '${email}',
      to: 'khadijabenabdelkader1206@gmail.com',
      Subject: 'Nouvelle soumission de formulaire de contact',
      text: `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nTéléphone: ${telephone}\nMessage: ${message}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
      } else {
        console.log('Email envoyé : ' + info.response);
      }
    });
    res.status(200).json({
      success: true,
      data: savedContact,
      message: 'Formulaire soumis avec succès !',
    });
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur, veuillez réessayer plus tard.'
    });
  }
});

// Route pour récupérer tous les contacts
app.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    
    if (contacts.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Aucun contact trouvé.'
      });
    }

    res.status(200).json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des contacts :', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des contacts.'
    });
  }
});


app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
