function hideResults() {
  document.getElementById("output").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
}

function checkLanguage(a, b, c, d, e) {
  const newList = [];
  
  newList.push(a);
  newList.push(b);
  newList.push(c);
  newList.push(d);
  newList.push(e);
  
  let ruby = 0;
  let python = 0;
  let csharp = 0;

  for(let f in newList){
  if (newList[f] === 1) {
    ruby +=1;
  } else if (newList[f] === 2) {
    csharp +=1;
  } else if (newList[f] ===3) {
    python +=1;
  };
};

if (ruby >= csharp && ruby >= python){
  return "Ruby!";
} else if (python >= ruby && python >= csharp) {
  return "Python!";
} else if (csharp >= ruby && csharp >= python) {
  return "C#!";
}

}
function quizResult(o){
  document.getElementById("results").removeAttribute("class");
  document.getElementById(o).removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("quiz-input");
  document.addEventListener("submit", submitLanguage);
  
});

function submitLanguage(event) {
  event.preventDefault();
  const difficulty = parseInt(document.getElementById("difficulty").value);
  const creativity = parseInt(document.getElementById("creativityLevel").value);
  const company = parseInt(document.getElementById("companyType").value);
  const project = parseInt(document.getElementById("projectSize").value);
  const dream = parseInt(document.getElementById("dreamWork").value);
  //hideResults();

  const output = checkLanguage(difficulty, creativity, company, project, dream);
  quizResult(results);
}