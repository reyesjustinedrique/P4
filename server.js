var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
	'article-one': {
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
		</div>
		<div class="footer">
			<p>© WeebDev 2021</p>
		</div>`
	},
	'article-two': {
		title: 'ScheduList'
	  	content: `   
		<ul>
			<li><a class="active" href="index.html">Home</a></li>
			<li><a href="article-one.html">About</a></li>
			<li><a href="article-two.html">Contacts</a></li>
			<li><a href="article-three.html">Download</a></li>
		</ul>
		<div class="logos">
			<h5 class="artclii">Contact Us</h5>
			<img class="fb" src="imgs/messenger.png"><p class="lnk"><a href="https://www.facebook.com/GordonCollegeCcs">Send Private Message</a></p><br>
			<img class="gm" src="imgs/gmail.png"><p class="lnkb"><a href = "contactus@gordoncollegeccs.edu.ph">Send Email</a></p>
		</div>
		<div class="footer">
			<p>© WeebDev 2021</p>
		</div>`
	},
    	'article-three': {
		title: 'ScheduList'
	  	content: `   
		<ul>
			<li><a class="active" href="index.html">Home</a></li>
			<li><a href="article-one.html">About</a></li>
			<li><a href="article-two.html">Contacts</a></li>
			<li><a href="article-three.html">Download</a></li>
		</ul>
		<div class="container">
			<h5 class="artcliii">Coming Soon ...</h5>
			<img class="droid" src="imgs/droid.png">
		</div>
		<div class="footer">
			<p>© WeebDev 2021</p>
		</div>`
	},
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

app.get('/articleName', function(req, res){
	var articleName = req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});

app.get('/ui/:style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
