document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        var navbar = document.getElementById("NavBar");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            navbar.classList.add("navbar_scroll");
        } else {
            navbar.classList.remove("navbar_scroll");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        var navbar = document.getElementById("NavBar");
        var scrollPosition = window.scrollY;

        // Check the scroll position and add/remove the active class accordingly
        var sections = document.querySelectorAll("section");
        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                var sectionId = section.getAttribute("id");
                var menuItem = document.querySelector('.menu_op[data-section="' + sectionId + '"]');
                // Remove active class from all menu items
                document.querySelectorAll('.menu_op').forEach(function(item) {
                    item.classList.remove("active");
                });
                // Add active class to the current menu item
                menuItem.classList.add("active");
            }
        });

        if (scrollPosition > 0) {
            navbar.classList.add("navbar_scroll");
        } else {
            navbar.classList.remove("navbar_scroll");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    scrollImages();
});

function openGmailCompose() {
    var email = 'aaryanshconstruction2000@gmail.com';
    var subject = 'Subject here';
    var body = 'Message here';
    var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email) + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.open(gmailUrl, '_blank');
}

function copyToClipboard_email()
{
    var text = "aaryanshconstruction2000@gmail.com";

    var textarea = document.createElement("textarea");
    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.opacity = 0;

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    // Remove the textarea
    document.body.removeChild(textarea);

    alert("Gmail is copied to clipboard");
}

function copyToClipboard_phone()
{
    var text = "aaryanshconstruction2000@gmail.com";

    var textarea = document.createElement("textarea");
    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.opacity = 0;

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    // Remove the textarea
    document.body.removeChild(textarea);

    alert("Phone number is copied to clipboard: ");
}

function menu_popup()
{
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}

function home(){
    document.getElementById("home_page").scrollIntoView({behavior: "smooth", block: "start"});
}

function Home() 
{
    document.getElementById("home_page").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}
function About(){
    document.getElementById("about_us").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}
function Works() {
    document.getElementById("our_works").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}  
function Teamp(){
    document.getElementById("our_team").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}
function Contact(){
    document.getElementById("contact_us").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}

function Home_popup() 
{
    document.getElementById("home_page").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}
function About_popup(){
    document.getElementById("about_us").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}
function Works_popup() {
    document.getElementById("our_works").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}  
function Team_popup(){
    document.getElementById("our_team").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}
function Contact_popup(){
    document.getElementById("contact_us").scrollIntoView({behavior: "smooth", block: "start"});
    var menu_popup = document.getElementById("popup");
    menu_popup.classList.toggle("popup_click");
}

