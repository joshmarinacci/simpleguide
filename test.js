var fs = require('fs');
var md = require("marked");
var easyimg = require('easyimage');

fs.mkdir("thumbs");

var r = new md.Renderer();
r.image = function(href, title, text) {
    console.log(href,title,text);
    easyimg.resize({
        src:href,
        dst:'thumbs/'+href,
        height:500,
        width:500,
    },function(err,stdout,stderr) {
        console.log('resized = ', err);
    });
    return "<div class='photo'><a href='"+href+"'><img src='thumbs/"+href+"' title='"+text+"'/></a></div>";
}

md.setOptions({
        gfm: true, //git hub flavored markdown
        tables: true, // gfm tables
        breaks: false, // gfm breaks
        pedantic: false, 
        sanitize: false, //ignore html
        smartLists:true, // better lists
        smartypants:false, //smart punctuation
        renderer: r,
});


var text = fs.readFileSync('text.md');

md(text.toString(),function(err,content) {
        if(err) throw err;
    fs.writeFileSync('text.html',
        "<html>"
        +'<meta http-equiv="Content-Type" content="text/html;charset=utf-8">'
        +"<head>"
        +"<title>Printrbot Simple Guide</title>"
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
