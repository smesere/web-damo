// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "5px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "55px";
  }
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function btnonmouseover () { document.getElementById('1').innerHTML="welcame to web";
}
  function btnonmouseout () { document.getElementById('1').innerHTML="";}
  import "bootswatch/dist/[theme]/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com/ for current theme names.)
