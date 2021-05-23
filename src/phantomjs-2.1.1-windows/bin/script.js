var page = require('webpage').create();

page.open('http://google.com', function (s) {
    console.log(s);
    phantom.exit();
});