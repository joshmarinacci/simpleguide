var fs = require('fs');
var md = require("marked");

md.setOptions({
        gfm: true, //git hub flavored markdown
        tables: true, // gfm tables
        breaks: false, // gfm breaks
        pedantic: false, 
        sanitize: false, //ignore html
        smartLists:true, // better lists
        smartypants:false, //smart punctuation
});


var text = fs.readFileSync('text.md');

md(text.toString(),function(err,content) {
        if(err) throw err;
    fs.writeFileSync('text.html',
        "<html>"
        +'<meta http-equiv="Content-Type" content="text/html;charset=utf-8">'
        +"<head>"
        +"<link rel='stylesheet' href='style.css'/>"
        +"</head>"
        +"<body><div id='content'>"
        +content+
        "</div></body></html>");
    console.log('done');
});
