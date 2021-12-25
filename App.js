import express from  'express';// utilise express
const app = express(); //crée une instance de express dans app

app.set('views', './views'); //defini le dossier pour les views
app.set('view engine', 'ejs');//défini ejs comme outil pour utiliser les views
app.use('/public', express.static('public'));

app.get('/', (req, res)=>{
    res.render('index', {pageTitle: "Avipole-home"});
});

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


const PORT= 3020;
app.listen(PORT, ()=>{ //le serveur attend les requetes sur le port 3000
    console.log ("j'écoute le port 3020!");
});
