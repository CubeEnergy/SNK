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
