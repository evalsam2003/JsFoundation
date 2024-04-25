const form = document.getElementById("form");
form.addEventListener("submit", function (_form) {
  _form.preventDefault();
  display();
});
function display() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const display = document.getElementById("display");
  let vote = false;
  if (age >= 18) {
    //eligible
     
     display.textContent = name + "is eligible"
  } else {
    //not eligible
    display.textContent = name + "is not eligible"
  }
  vote = true;

 
}
