// 1) Elemente aus dem DOM holen
let menuIcon = document.querySelector('#menu-icon'); // Das Element mit id="menu-icon" (Hamburger-Icon)
let navbar = document.querySelector('.navbar');  // Die Navigation mit class="navbar"
let sections = document.querySelectorAll('section'); // Alle <section>-Elemente auf der Seite
let navLinks = document.querySelectorAll('header nav a'); // Alle Links im <header> innerhalb von <nav>

// 2) Scroll-Handler: läuft jedes Mal, wenn gescrollt wird
window.onscroll = () => {                // Für jede Section prüfen, ob sie gerade im (gedachten) Sichtbereich ist
    sections.forEach(sec => {
        let top = window.scrollY;        // Aktuelle Scroll-Position von oben (in px)
        let offset = sec.offsetTop - 150; // Oberkante der Section relativ zum Dokument, 150px früher ausgelöst (für „Vorpuffer“)
        let height = sec.offsetHeight;    // Höhe der Section (in px)
        let id = sec.getAttribute('id');  // Die id der Section (z.B. "about", "contact")

// 3) Liegt die aktuelle Scroll-Position innerhalb dieser Section?
        //    Bedingung: ab (offset) bis (offset + height), also innerhalb der Section.
        if (top >= offset && top < offset + height) {
// 4) Im Menü: erst alle aktiven Zustände entfernen …
            navLinks.forEach(links => {
                links.classList.remove('active');
                // … dann genau dem Link "active" geben, dessen href die id enthält.
                //    Beispiel: Section id="about" -> trifft <a href="#about">.
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
// 5) Klick-Handler für das Menü-Icon (typisch: Mobile Navigation ein-/ausklappen)
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}