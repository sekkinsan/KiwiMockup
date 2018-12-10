//tabs
function openBlurb(event, blurb) {
  //declare variables
  var i, tabcontent, tablinks;

  // hide elements
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // remove active class from tablinks
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //show current tab and add active class to button associated with that tab
  document.getElementById(blurb).style.display = "block";
  event.currentTarget.className += " active";
}