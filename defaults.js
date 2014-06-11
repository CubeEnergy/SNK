function fillNav()
{
  var nav = document.getElementById("nav");
  nav.innerHTML = '<ul class="navbar"> \
      <li><a href="index.html">Startseite</a></li> \
      <li><a href="Bahnstrecke.html">Bahnstrecke</a></li> \
      <li><a href="Schienenfahrzeuge.html">Schienenfahrzeuge</a></li> \
      <li><a href="Literatur.html">Literatur</a></li> \
      <li><a href="Filme.html">Filme</a></li> \
      <li><a href="Draisinenbahn.html">Draisinenbahn</a></li> \
      <li><a href="Downloads.html">Downloads</a></li> \
      <li><a href="Zukunft.html">Zukunft</a></li> \
      <li><a href="Links.html">Links</a></li> \
      <li><a href="Update.html">Update</a></li> \
    </ul>';
}

function fillFooter()
{
  var footer = document.getElementById("footer");
  footer.innerHTML = '<div class="wrapper"> \
      <p>Berichtigungsmitteilungen/ Verbesserungen/ Vorschläge einfach per E-Mail an mich: \
        <a href="mailto:thal1982@gmx.de">thal1982@gmx.de</a> \
      </p> \
      <a href="Impressum.html">Impressum</a> \
    </div>';
}

function fillHead()
{
  var head = document.head;
  head.innerHTML += '<link href="http://fonts.googleapis.com/css?family=Monda" rel="stylesheet" type="text/css"> \
        <link href="http://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css"> \
        <link rel="stylesheet" type="text/css" href="GGS.css"><link> \
        <link rel="stylesheet" type="text/css" href="style.css"><link> \
        <script type="text/javascript" src="GGS.js"></script> \
        <link rel="stylesheet" href="responsive-nav.css"> \
        <script src="responsive-nav.js"></script>';
}

fillHead();
fillNav();
fillFooter();

var nav = responsiveNav(".nav-collapse", { // Selector
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 284, // Integer: Speed of the transition, in milliseconds
  label: "Menu", // String: Label for the navigation toggle
  insert: "before", // String: Insert the toggle before or after the navigation
  customToggle: "", // Selector: Specify the ID of a custom toggle
  closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
  openPos: "relative", // String: Position of the opened nav, relative or static
  navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
  navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
  jsClass: "js", // String: 'JS enabled' class which is added to  element
  init: function(){}, // Function: Init callback
  open: function(){}, // Function: Open callback
  close: function(){} // Function: Close callback
});
