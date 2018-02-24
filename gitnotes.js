var currentURL = window.location.href;
var rawURL = currentURL.replace("https://github.com/", "https://raw.githubusercontent.com/");
rawURL = rawURL.substring(0, rawURL.indexOf('/blob/'));
var attributes_file = rawURL + "/master/.gitnotes/notes";

var original_doc = document.body.innerHTML;
var modded_doc = original_doc;
var tbody_beg = "<tbody>"; // the  code exists inside these tbody tags
var tbody_end = "</tbody>";
var cut_beginning = modded_doc.indexOf(tbody_beg);
var cut_ending = modded_doc.indexOf(tbody_end);
var body = modded_doc.substring(cut_beginning, cut_ending);

var fileName = currentURL.substring(currentURL.lastIndexOf('/'));
fileName = fileName.replace("/",""); // we only want the notes for this file

var attributes = "";
var request = new XMLHttpRequest();
request.open('GET', attributes_file, false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
    attributes = request.responseText;  // wait for the file to load 
}

var mod_body = body;
var lines = attributes.split('\n');

for(var i = 0;i < lines.length;i++)
{
    if(lines[i] == "#ENTRY#")
    {
        if(lines[i+1] == fileName)
        {
            var key = lines[i+2]; // code
            var val = lines[i+3]; // documentation
            var img = lines[i+4]; // image
            var ref = lines[i+5]; // media
            i++;i++;i++;i++;i++;
    
            var exact_key = "\\b" + key + "\\b";
            var injected = "";
	       
            if(ref=="#") //developer did not provide media
            {  
                ref = currentURL;
            }
			else{ //if the developer did provide media
				val = val +"<font color='red'>Note: This tool-tip contains a link to another page.</font>";
			}

            if(img == "#") // developer did not provide image
            {
                injected = "<a class=\"tooltip\" href=\"" + ref + "\">" +key + "<span>" +  val + "</span></a>";
            }
            else // developer did provide image
            {
                injected = "<a class=\"tooltip\"  href=\"" + ref + "\">" + key + "<span><img src=" + img + ">" + val + "</span></a>";	   
            }
		   		   		 		   
            var re = new RegExp(exact_key, "g");
            mod_body = mod_body.replace(re, injected);
        }
    }
}

modded_doc = modded_doc.replace(body, mod_body);
document.body.innerHTML = modded_doc;







