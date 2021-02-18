// CR :: Can you think of a better name for your function?
function fun() {
    // CR :: its better to use const and some variables should not be defined within the function
    let naam = "Henk";
    let color = ["brown", "red", "orange", "green", "purple"];  let random = Math.floor(Math.random() * color.length);
    document.getElementById("herp").innerHTML = `Hallo, ${naam}!`;
    document.getElementById("herp").style.color = color[random];
  }// CR :: para is not really a proper name for an id, think of when being in a project group and someone else has to work with your code
  // See if you can make this code work with 'addEventListener('click', fun);', to make it shorter
  document.getElementById("para").addEventListener('click', fun)