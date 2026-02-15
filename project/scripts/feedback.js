//Footer date
const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

currentyear.innerHTML = `&copy${today.getFullYear()}`;

lastmodified.innerHTML = document.lastModified;
//end footer date

function setUsername() {    
    let user = document.getElementById("user");
    let userLogo = document.getElementById("userLogo");

    userLogo.addEventListener('click', function() {
        user.showPicker();
    });

    user.addEventListener('change', function() {
        const selectedValue = event.target.value;

        if (selectedValue == 'telemain'){
            userLogo.innerHTML = getLogo('telemain')
            localStorage.setItem('username', JSON.stringify('telemain'));
        }
        else if (selectedValue == 'orfan'){
            userLogo.innerHTML = getLogo('orfan')
            localStorage.setItem('username', JSON.stringify('orfan'));
        }
        else if (selectedValue == 'calderian'){
            userLogo.innerHTML = getLogo('calderian')
            localStorage.setItem('username', JSON.stringify('calderian'));
        }
        else if (selectedValue == 'feldoren'){
            userLogo.innerHTML = getLogo('feldoren')
            localStorage.setItem('username', JSON.stringify('feldoren'));
        }

        setColors(JSON.parse(localStorage.getItem('username')));
        
    });
}

function loadUsername() {
    let username = JSON.parse(localStorage.getItem('username'))
    if (!username) 
    {
        localStorage.setItem('username', JSON.stringify('hanz'))
        userLogo.innerHTML = getLogo('hanz');
    }
    else
    {
        user.value = username;
        userLogo.innerHTML = getLogo(username);
    }
}

function getLogo(username){
    let telemainLogo = "<img src=\"images/telemain.svg\" alt=\"telemain logo\"></img>";
    let orfanLogo = "<img src=\"images/orfan.svg\" alt=\"orfan logo\"></img>";
    let calderianLogo = "<img src=\"images/calderian.svg\" alt=\"calderian logo\"></img>";
    let feldorenLogo = "<img src=\"images/feldoren.svg\" alt=\"feldoren logo></img>";
    let expertsLogo = "<img src=\"images/experts.svg\" alt=\"experts for hire logo\"></img>";

    if (username == 'telemain'){
            return telemainLogo;
        }
        else if (username == 'orfan'){
            return orfanLogo;
        }
        else if (username == 'calderian'){
            return calderianLogo;
        }
        else if (username == 'feldoren'){
            return feldorenLogo;
        }
        else if (username == 'hanz'){
            return expertsLogo;
        }
}

function setColors(username){
    const root = document.documentElement;

    if (username == "orfan"){
        root.style.setProperty('--primary-background', 'tan');
        root.style.setProperty('--overlay-background', 'rgba(210, 180, 140, 0.426)');
        root.style.setProperty('--secondary-background', 'saddlebrown');
    }
    else if (username == "telemain"){
        root.style.setProperty('--primary-background', 'lightgrey');
        root.style.setProperty('--overlay-background', 'rgba(211, 211, 211, 0.377)');
        root.style.setProperty('--secondary-background', 'rgb(94, 94, 94)');
    }
    else if (username == "calderian"){
        root.style.setProperty('--primary-background', 'rgb(252, 222, 252)');
        root.style.setProperty('--overlay-background', 'rgba(252, 222, 252, 0.399)');
        root.style.setProperty('--secondary-background', 'purple');
    }
    else if (username == "feldoren"){
        root.style.setProperty('--primary-background', 'rgb(186, 229, 255)');
        root.style.setProperty('--overlay-background', 'rgba(186, 229, 255, 0.456)');
        root.style.setProperty('--secondary-background', 'navy');
    }
    
}

setUsername();

loadUsername();

setColors(JSON.parse(localStorage.getItem('username')));