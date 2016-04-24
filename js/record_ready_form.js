$(document).ready(function(){

   $(".record").click(function(){
    showpopup();
   });
  

});


function showpopup() {

    //create a form
  var f = document.createElement('form');
  f.setAttribute('method',"post");
  f.setAttribute('action',"#");

  //create input element
  var i = document.createElement("input");
  i.type = "text";
  i.name = "email";
  i.id = "email";

  //create a button
  var s = document.createElement("input");
  s.type = "submit";
  s.value = "Submit";

  // add all elements to the form
  f.appendChild(i);
  f.appendChild(s);

  // add the form inside the body
  $("body").append(f);  
  
}
