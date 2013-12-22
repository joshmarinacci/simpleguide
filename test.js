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
        +content
        +"</div>"
        +'<script type="text/javascript">(function() { var sc = document.createElement("script"); sc.type = "text/javascript";'
        +'sc.async = true; sc.src = "http://joshy.org:3056/ping.js?referrer="+document.referrer; var s = document.getElementsByTagName("script")[0];'
        +'s.parentNode.insertBefore(sc, s); console.log("pinged"); })(); </script>'
        +"</body></html>");
    console.log('done');
});
