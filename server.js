var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
  title: 'ScheduList'
  content: `   
     <ul>
			<li><a class="active" href="index.html">Home</a></li>
			<li><a href="article-one.html">About</a></li>
			<li><a href="article-two.html">Contacts</a></li>
			<li><a href="article-three.html">Download</a></li>
		</ul>

		<div class="abt">
			<h3>About</h3>
			<p class="pgr">- A scheduling application, designed to allow users to manage tasks and time more efficiently.</p>

			<h4>Dev Team</h4>
			<p class="names">Von Denuelle Tandoc &emsp; Justin Edrique Reyes &emsp; Jackson Alipao &emsp;</p>
		</div>`
};

function createTemplate (data){
  var title = data.title;
  var content = data.content;
  var htmlTemplate = `
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
      ${content}
      <div class="footer">
        <p>© WeebDev 2021</p>
      </div>
    </body>
  </html>
  `;
  return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req, res){
  res.send('Article two requested and will be served here');
});

app.get('/article-three', function(req, res){
  res.send('Article three requested and will be served here');
});

app.get('/ui/:style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
