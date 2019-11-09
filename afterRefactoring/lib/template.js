var fs = require('fs');

module.exports={
    gate : function(jsonFile){
        console.log("template.gate");
        var write = `
            <!DOCTYPE html>
                <html lang='ko'>
                <meta charset="UTF-8">
                <head>
                    <style>
                    .container{display:table;}
                    .row{display:table-row;}
                    .cell{display:table-cell;}
                </head>
                <body>
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
        var jsonContent = JSON.stringify(content);
        for(var exKey in jsonContent){
            if(exKey === "platoon_1"){
                write += "<div class='row'>div class='cell'><h5>1</h5></div>";
                write += `<div class='cell'><h5>${jsonContent[exKey].name}</h5></div>`;
                write += `<div class='cell'><h5>${jsonContent[exKey].job}</h5></div>`;                
            }
            else if(exKey === "platoon_2"){
                write += "<div class='row'>div class='cell'><h5>2</h5></div>";
                write += `<div class='cell'><h5>${jsonContent[exKey].name}</h5></div>`;
                write += `<div class='cell'><h5>${jsonContent[exKey].job}</h5></div>`; 
            }
            else if(exKey === "platoon_3"){
                write += "<div class='row'>div class='cell'><h5>3</h5></div>";
                write += `<div class='cell'><h5>${jsonContent[exKey].name}</h5></div>`;
                write += `<div class='cell'><h5>${jsonContent[exKey].job}</h5></div>`; 
            }
            write += `</div>`;
        }
        write += "</div></body></html>";
        return write;
    },

    basic : function(header, body){
        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    ${header}
                    ${body}
                </body>
            </html>
        `;
    }
}