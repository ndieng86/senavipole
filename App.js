const express =require('express');// utilise express
const app = express(); //crée une instance de express dans app

app.set('views', './views'); //defini le dossier pour les views
app.set('view engine', 'ejs');//défini ejs comme outil pour utiliser les views
app.use('/public', express.static('public'));
const dotenv = require("dotenv");
dotenv.config();

app.get('/services', (req, res)=>{
    res.render('services.ejs', {pageTitle: "Avipole-services"});
});

app.get('/apropos', (req, res)=>{
    res.render('apropos.ejs', {pageTitle: "Avipole-A Propos"});
});
app.get('/produits', (req, res)=>{
    res.render('produits.ejs', {pageTitle: "Avipole-Contact"});
});

app.get('/contact', (req, res)=>{
    res.render('contact.ejs', {pageTitle: "Avipole-Contact"});
});

app.get("/", (req, res)=>{
    res.render("index.ejs", {pageTitle: "Avipole-home"});
});

const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=>{ //le serveur attend les requetes sur le port 3000
    console.log (` j'ecoute le port ${PORT}`);
});
