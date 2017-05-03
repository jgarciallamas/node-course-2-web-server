const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view-engine','hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/',(req,res)=>{
  // res.send('<h1>Hello Express! - Hola Express!</h1>');
  // res.send({
  //   name:'Jose',
  //   likes:['Biking','Cities']
  // });
  res.render('home.hbs',{
    pageTitle:'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage:'Welcome to this new brand website'
  });
});

app.get('/about', (req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000, ()=>{
  console.log('Server is up on port 3000');
});
