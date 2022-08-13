function hideResults(){
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("see-sharp").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
}

function submitQuestions(e) {
  e.preventDefault();
  hideResults();
  const input1 = document.querySelector("input[name='difficulty']:checked").value;
  const input2 = document.querySelector("input[name='creativity-level']:checked").value;
  const input3 = document.querySelector("input[name='company-type']:checked").value;
  const input4 = document.querySelector("input[name='project-size']:checked").value;
  const input5 = document.querySelector("input[name='']:checked").value;

  if (input1 === '1' && (input2 === '' || input3 === '' || input4 === '' || input5 === '')){
    document.getElementById("ruby").removeAttribute("class");
  } else if (input1 === '' && input2 === ''){
    document.getElementById("see-sharp").removeAttribute("class");
  } else if ((input1 ==='' && (input2 === '' || input2 === '')) || (input1 === '' && (input2 === '' || input2 ==='' || input2 === ''))){
    document.getElementById("python").removeAttribute("class");
  }
}

window.addEventListener("load",function( {
  const form = this.document.getElementById("quiz-input")
  form.addEventListener("submit", submitQuestions);
}));