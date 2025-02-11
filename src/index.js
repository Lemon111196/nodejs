const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
        res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});