//var imported = document.createElement("script");
//imported.src = "other src/scripts/makeTooltip.js"; 
//document.getElementsByTagName("head")[0].appendChild(imported);


var currentURL = window.location.href;
var rawURL = currentURL.replace("https://github.com/", "https://raw.githubusercontent.com/");
rawURL = rawURL.substring(0, rawURL.indexOf('/blob/'));
var attributes_file = rawURL + "/master/gitnotes.json";

//document.body.innerHTML = attributes_file;

var fileName = currentURL.substring(currentURL.lastIndexOf('/'));
fileName = fileName.replace("/","");


    var doc = document.body.innerHTML;
    var tbody_beg = "<tbody>";
    var tbody_end = "</tbody>";
    var cut_beginning = doc.indexOf(tbody_beg);
    var cut_ending = doc.indexOf(tbody_end);
    var body = doc.substring(cut_beginning, cut_ending);
    
    var mod_body = makeTooltip(attributes_file, body, fileName);

    //var re = new RegExp(["def"," ","printer"], "gi");

   // var mod_body = body.replace(/def.*printer/gi, "<a href='https://www.google.com'> test </a>");

    doc = doc.replace(body, mod_body);
    document.body.innerHTML = doc;




