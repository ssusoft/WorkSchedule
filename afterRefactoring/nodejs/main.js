var http = require('http');
var url = require('url');
var fs = require('fs');
const md = require('/tmp/guest-aqxqyw/Desktop/WorkSchedule-master/scheduler/lib/template.js');

var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
        if(queryData.id === undefined){
            fs.readdir('./data', function(error, filelist){
                var header = '<h1>메인 메뉴</h1>';
                var body = '<ul>';
                for(var i=0; i<filelist.length; ++i){
                    body += `<li><a href="/${filelist[i]}">${filelist[i]}</a></li>`;
                }
                body += '</ul>';
                var html = md.basic(header, body);
                response.writeHead(200);
                response.end(html);
            });
        }
        else{
            console.log("1.미완성");
        }
    }
    else if(pathname === '/gate'){ // 위병소
        console.log('pathname === /gate');
        response.writeHead(200);
        response.end(md.gate('./data/unit.json'));
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
});
app.listen(3000);