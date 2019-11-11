var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
const md = require('/tmp/guest-irucjq/Desktop/workSchedule-master/afterRefactoring/lib/template.js');

var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
        if(queryData.id === undefined){
                var menu = md.menu();
                var html = md.frame("<meta charset='utf-8'>", menu);
                response.writeHead(200);
                response.end(html);
        }
        else{
            console.log("1.미완성");
        }
    }
    else if(pathname === '/gate'){ // 위병소
        console.log('pathname === /gate');
        var html = md.frame(`
            <meta charset='utf-8'>
            <style>
                .container{display:table;}
                .row{display:table-row;}
                .cell{display:table-cell; width:20%; text-align:center; border-width:1px; border-style:solid; border-color:black;}
            </style>`,
            md.menu() + md.gate('./json/unit.json', 'false'));

        response.writeHead(200);
        response.end(html);
    }
    else if(pathname === '/nightMove'){ // 동초
        console.log('pathname === /nightMove');
    }
    else if(pathname === '/nightStand'){ // 불침번
        console.log('pathname === /nightStand');
    }
    else if(pathname === '/cctv'){
        console.log('pathname === /cctv');
    }
    else if(pathname === '/update'){
        console.log('pathname === /update');
        var html = md.frame(`
        <meta charset='utf-8'>
        <style>
            .container{display:table;}
            .row{display:table-row;}
            .cell{display:table-cell; width:20%; text-align:center; border-width:1px; border-style:solid; border-color:black;}
        </style>
        `,
        md.menu() + md.gate('./json/unit.json', 'true'));
        response.writeHead(200);
        response.end(html);
    }
    else if(pathname === '/update_process'){
        var body = '';
        request.on('data', function(data){
          body += data;
        })
        request.on('end', function(){
          var post = qs.parse(body);
          var id= post.id;
          var title = post.title;
          var description = post.description;
          console.log(post);
          /*
          fs.rename(`data/${id}`, `data/${title}`, function(err){
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
              response.writeHead(302, {Location: `/?id=${title}`});
              response.end();
            })
          })
          */
        })
      }
});
app.listen(3000);