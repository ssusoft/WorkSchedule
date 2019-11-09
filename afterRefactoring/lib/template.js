var fs = require('fs');

module.exports={
    gate : function(jsonFile){
        console.log("template.gate");
        var write = `
                    <div class='container'>
                        <div class='row'>
                            <div class='cell'>
                                <h5>소대</h5>
                            </div>
                            <div class='cell'>
                                <h5>이름</h5>
                            </div>
                            <div class='cell'>
                                <h5>직업</h5>
                            </div>
                        </div>
            `;
        var content = fs.readFileSync(jsonFile, 'utf8');
        var jsonContent = JSON.parse(content);
        for(var key in jsonContent){
            for(var index = 0; index < jsonContent[key].length; ++index){
                if(key === "platoon_1"){
                    write += "<div class='row'><div class='cell'><h5>1</h5></div>";
                    write += `<div class='cell'><h5>${jsonContent[key][index].name}</h5></div>`;
                    write += `<div class='cell'><h5>${jsonContent[key][index].job}</h5></div>`;
                }
                else if(key === "platoon_2"){
                    write += "<div class='row'><div class='cell'><h5>2</h5></div>";
                    write += `<div class='cell'><h5>${jsonContent[key][index].name}</h5></div>`;
                    write += `<div class='cell'><h5>${jsonContent[key][index].job}</h5></div>`;
                }
                else if(key === "platoon_3"){
                    write += "<div class='row'><div class='cell'><h5>3</h5></div>";
                    write += `<div class='cell'><h5>${jsonContent[key][index].name}</h5></div>`;
                    write += `<div class='cell'><h5>${jsonContent[key][index].job}</h5></div>`;
                }
                write += `</div>`;
            }
        }
        write += "</div>";
        return write;
    },

    frame : function(head, body){
        return `
            <!DOCTYPE html>
            <html>
                <head>
                    ${head}
                </head>
                <body>
                    ${body}
                </body>
            </html>
        `;
    },

    menu : function(){
        var filelist = fs.readdirSync('./data'); 
        var header = '<h1>메인 메뉴</h1>';
        var body = '<ul>';
        for(var i=0; i<filelist.length; ++i){
            body += `<li><a href="/${filelist[i]}">${filelist[i]}</a></li>`;
        }
        body += '</ul>';
        return header + body;
    }
}