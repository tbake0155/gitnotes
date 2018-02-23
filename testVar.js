@@ -0,0 +1,79 @@

var arr, i, j, x = "";

arr = {
    "example" :[
		{"key": "def printer(text)","description": "this function prints a text string that is passed as the parameter 'text'"},
		
		{"key": "def main(text)","description": "this function prints a text string that is passed as the parameter 'text'"}
		]
}
/*
arr = {
    "fileName":"example.py" :[
		{
		"key": "def printer(text)",
		"description": "this function prints a text string that is passed as the parameter 'text'"
		
		"key": "def main(text)",
		"description": "this function prints a text string that is passed as the parameter 'text'"
		
		
		}
		]
}
/*
function printArray(arr) {
    for (var i = 0; i < arr.length; i++)
        if (Array.isArray(arr[i]))
            printArray(arr[i])
        else
            console.log(arr[i])
}

*/
for (i in arr.example) {
    x += "<h2>" + arr.example[i].key+ "</h2>";
	x += arr.example[i].description + "<br>";
	/*for (var j= 0; j < arr.length; j++)
	{
	x += myObj.fileName[i].key[j] + "<br>";
	x += myObj.fileName[i].description[j] + "<br>";
	}*/
}

document.body.innerHTML = x;


var myArray = [
	{
	"display": "JavaScript Tutorial",
	"url": "https://www.w3schools.com/js/default.asp"
	},
	{
	"display": "HTML Tutorial",
	"url": "https://www.w3schools.com/html/default.asp"
	},
	{
	"display": "CSS Tutorial",
	"url": "https://www.w3schools.com/css/default.asp"
	}
]

myFunction(myArray);

function myFunction(arr1) {
    var out = "";
    var i;
    for(i = 0; i < arr1.length; i++) {
        out += '<a href="' + arr1[i].url + '">' + 
        arr1[i].display + '</a><br>';
		console.log(out);
		console.log(arr1[i]);
		document.body.innerHTML = x;
    }
 
	
}

 document.body.innerHTML = x;