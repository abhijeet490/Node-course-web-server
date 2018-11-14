const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials')
var app = express();
app.set('view engine', 'hbs');


// app.use((req, res, next) => {
// res.render('maintenance.hbs')
// });



app.get('/', (req, res) => {
   // res.send('<h1>Hello Express</h1>')
 /*  res.send({
       name: 'Abhijeet Pandey',
      likes: [
          'Biking',
          'Roaming','Treking'
        ]
   });*/
   res.render('home.hbs',{
       pageTitle: "Home Page",
       welcomeMsg: 'Welcome to my website',
       currentYear: new Date().getFullYear()

   });
});
app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'about hbs',
        currentYear: new Date().getFullYear()
    });
});
app.get('/bad', (req,res) => {
    res.send(
    {
        err: 404,
        msg: 'unable to fetch'
    });
    app.use(express.static(__dirname +'/public'));
    
})
app.listen(5000);