
// buttons:
let AboutButton = document.getElementById("AboutButton");

let SettingUpButton = document.getElementById('SettingUpButton');

let UsingServiceButton = document.getElementById('UsingServiceButton');

let ContactButton = document.getElementById('ContactButton');




// divs:
let About = document.getElementById('About');

let SettingUp = document.getElementById('SettingUp');

let UsingService = document.getElementById('UsingService');


let Contact = document.getElementById('Contact');



// colours:
let greenDark = '#5a8006';
let greenLight = '#adcf02';
let white = '#d0d3d6';
let greyDark = '#9ea0a3';
let greyLight = '#d0d3d6';

let colorNormal = greenDark;
let colorHighlight = white;
let colorHover = greenDark;

let backgroundColorNormal = greyLight;
let backgroundColorHighlight = greenDark;
let backgroundColorHover = white;


// font weights:
let fontWeightNormal = 'normal';
let fontWeightBold = '900';







// on Clicks:

AboutButton.addEventListener('click', () => {
        // Hide all sections
        SettingUp.style.display = 'none';
        UsingService.style.display = 'none';
        Contact.style.display = 'none';

        // Show the About section
        About.style.display = 'block';

        // change colours:
        AboutButton.style.backgroundColor = backgroundColorHighlight;
        AboutButton.style.color = colorHighlight;
        AboutButton.style.fontWeight = fontWeightBold;


        SettingUpButton.style.backgroundColor = backgroundColorNormal;
        SettingUpButton.style.color = colorNormal;
        SettingUpButton.style.fontWeight = fontWeightNormal;


        UsingServiceButton.style.backgroundColor = backgroundColorNormal;
        UsingServiceButton.style.color = colorNormal;
        UsingServiceButton.style.fontWeight = fontWeightNormal;


        ContactButton.style.backgroundColor = backgroundColorNormal;
        ContactButton.style.color = colorNormal;
        ContactButton.style.fontWeight = fontWeightNormal;











});


SettingUpButton.addEventListener('click', () => {
        // Hide all sections
        About.style.display = 'none';
        UsingService.style.display = 'none';
        Contact.style.display = 'none';

        // Show the Setting Up section
        SettingUp.style.display = 'block';


        // changing colors:

        SettingUpButton.style.backgroundColor = backgroundColorHighlight;
        SettingUpButton.style.color = colorHighlight;
        SettingUpButton.style.fontWeight = fontWeightBold;

        AboutButton.style.backgroundColor = backgroundColorNormal;
        AboutButton.style.color = colorNormal;
        AboutButton.style.fontWeight = fontWeightNormal;

        UsingServiceButton.style.backgroundColor = backgroundColorNormal;
        UsingServiceButton.style.color = colorNormal;
        UsingServiceButton.style.fontWeight = fontWeightNormal;

        ContactButton.style.backgroundColor = backgroundColorNormal;
        ContactButton.style.color = colorNormal;
        ContactButton.style.fontWeight = fontWeightNormal;

});



UsingServiceButton.addEventListener('click', () => {
        // Hide all sections
        About.style.display = 'none';
        SettingUp.style.display = 'none';
        Contact.style.display = 'none';

        // Show the Using Service section
        UsingService.style.display = 'block';


        // changing colours:
        UsingServiceButton.style.backgroundColor = backgroundColorHighlight;
        UsingServiceButton.style.color = colorHighlight;
        UsingServiceButton.style.fontWeight = fontWeightBold;


        AboutButton.style.backgroundColor = backgroundColorNormal;
        AboutButton.style.color = colorNormal;
        AboutButton.style.fontWeight = fontWeightNormal;

        SettingUpButton.style.backgroundColor = backgroundColorNormal;
        SettingUpButton.style.color = colorNormal;
        SettingUpButton.style.fontWeight = fontWeightNormal;


        ContactButton.style.backgroundColor = backgroundColorNormal;
        ContactButton.style.color = colorNormal;
        ContactButton.style.fontWeight = fontWeightNormal;




});


ContactButton.addEventListener('click', () => {
        // Hide all sections
        About.style.display = 'none';
        SettingUp.style.display = 'none';
        UsingService.style.display = 'none';

        // Show the Contact section
        Contact.style.display = 'block';


        // changing colour:
        ContactButton.style.backgroundColor = backgroundColorHighlight;
        ContactButton.style.color = colorHighlight;
        ContactButton.style.fontWeight = fontWeightBold;



        AboutButton.style.backgroundColor = backgroundColorNormal;
        AboutButton.style.color = colorNormal;
        AboutButton.style.fontWeight = fontWeightNormal;

        SettingUpButton.style.backgroundColor = backgroundColorNormal;
        SettingUpButton.style.color = colorNormal;
        SettingUpButton.style.fontWeight = fontWeightNormal;

        UsingServiceButton.style.backgroundColor = backgroundColorNormal;
        UsingServiceButton.style.color = colorNormal;
        UsingServiceButton.style.fontWeight = fontWeightNormal;
});








// on hovers:


