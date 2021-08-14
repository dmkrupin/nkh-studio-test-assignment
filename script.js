var acc = document.getElementsByClassName("accordion__link");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.maxHeight){
      contents.style.maxHeight = null;
    } else {
      contents.style.maxHeight = 30 + "px";
    }
  });
}
