function hideResults(){
  document.getElementById("output").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
}

function checkLanguage(a, b, c, d, e){
  const newList = [];
  

  if (input5 === '1') {
    return "Ruby on Rails!";
  } else if (input5 === '2') {
    return "C#!";
  } else if (input5 ==='3') {
    return "Python!";
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("quiz-input");
  document.querySelector("form").onsubmit = function(e){
    e.preventDefault();
  let a = document.querySelector("difficulty#difficulty-").value;
  let b = document.querySelector().value;
  let c = document.querySelector().value;
  const result = checkLanguage(a, b, c, d, e);
  document.getElementById("output").innerText = result;
  }
});