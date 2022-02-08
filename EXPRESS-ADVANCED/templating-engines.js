const app = require('express');

app.set('view engine', 'pug');
app.set('views', './views')

// CREATE THE FOLDER 'VIEWS'
// index.pug

app.get('/', (req, res) => {
    res.render('index', {title= 'My express  App', message= 'Hello'})
})
// index.pug
// with an html markup and return it to the client. So instead of send method we use render. 


//A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

//  Image result for template engines node Template engine helps us to create an HTML template with minimal code. Also, it can inject data into HTML template at client side and produce the final HTML