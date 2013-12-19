var fs = require('fs');
var md = require("marked");

md.setOptions({
        gfm: true, //git hub flavored markdown
        tables: true, // gfm tables
        breaks: false, // gfm breaks
        pedantic: false, 
        sanitize: true, //ignore html
        smartLists:true, // better lists
        smartypants:false, //smart punctuation
});


var text = fs.readFileSync('text.md');

md(text.toString(),function(err,content) {
        if(err) throw err;
    fs.writeFileSync('text.html',
        "<html><body>"
        +content+
        "</body></html>");
    console.log('done');
});