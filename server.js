const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs');
hbs.registerPartial(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) =>{
   // res.send('Hello Express !');
   // res.send('<h1>Hello Express !<h2>');
   res.render('home.hbs',{
    pageTitle:'About Home Page',
    welcomeMessage: 'Welcome to my website',
    currentYear: new Date().getFullYear()
   })

});
app.get('/about', (req, res) =>{
   /* res.send({ 
        name:'Kaliprasad',likes:['Biking','Football']
    }) */
    res.render('about.hbs',{
        pageTitle:'About Page',
        currentYear: new Date().getFullYear()
    });
 
 });
 // /bad to send error message
 app.get('/bad', (req, res) =>{
  res.send({errorMessage:'Unable to handle request'});
 
 });
app.listen(3000, () =>{
    console.log('Server is up on port 3000');
});