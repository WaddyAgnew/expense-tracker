
 var openlist= document.getElementsByTagName("LI");



function list_Update()
{
var list = document.createElement('LI');
var input = document.getElementById("text").value;
var t = document.createTextNode(input);
list.appendChild(t);
if(input ==='') {
false;
} else {
    document.getElementById("list").appendChild(list);
}

document.getElementById("text").value ="";


var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
list.appendChild(span); 

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
document.getElementById('btn').onclick = list_Update;