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

        displayCharacterCards();
        
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

let characters = [
    {
        username: "hanz",
        name: "Hanz",
        img: "images/hanz.webp",
        quote: "I am not restored, I am continued.",
        preferredWeapon: "none",
        priority: 2
    },
    {
        username: "telemain",
        name: "Telemain Världsvävar",
        img: "images/telemain.webp",
        quote: "On the Necessity of Firsthand Inquiry",
        preferredWeapon: "Spellbook",
        priority: 1
    },
    {
        username: "orfan",
        name: "Orfan Loudiron",
        img: "images/orfan.webp",
        quote: "The Heart of the Experts",
        preferredWeapon: "Bow",
        priority: 1
    },
    {
        username: "calderian",
        name: "Calderian Rookwood",
        img: "images/calderian.webp",
        quote: "I do what is necessary",
        preferredWeapon: "Maul",
        priority: 1
    },
    {
        username: "feldoren",
        name: "Feldoren Torianwen",
        img: "images/feldoren.webp",
        quote: "A contingency for every occasion",
        preferredWeapon: "Armor",
        priority: 1
    }
];

function displayCharacterCards() {
    let cards = document.querySelector('.character-cards');

    characters.forEach(character => {
        if (character.username == JSON.parse(localStorage.getItem('username'))) 
        {
            character.priority = 2;
        }
        else 
        {
            character.priority = 1;
        }
    }); 

    characters.sort((a, b) => b.priority - a.priority);

    cards.innerHTML = "";

    characters.forEach(character => {
        let box = document.createElement("div");
        let image = document.createElement("img");
        let quote = document.createElement("p");
        let weapon = document.createElement("p");
        let name = document.createElement("p");

        quote.innerHTML = `<i>"${character.quote}"</i>`;
        weapon.innerHTML = `<b>Preferred Weapon</b>: ${character.preferredWeapon}`;
        name.innerHTML = `<b>Name</b>: ${character.name}`;

        image.setAttribute("src", character.img);
        image.setAttribute("alt", `${character.username} profile pic`)
        image.setAttribute("loading", "lazy")

        box.appendChild(image);
        box.appendChild(quote);
        box.appendChild(name);
        box.appendChild(weapon);

        cards.appendChild(box);
    });
}

function setSessionInfo(){
    let session = document.getElementById("sessionInfo")

    session.innerHTML = "";

    let gameDay = document.createElement("p");
    gameDay.innerHTML = `<b>Next Game</b>: ${nextGame.toDateString()}`;

    let gameTime = document.createElement("p");
    gameTime.innerHTML = `<b>Time</b>: ${nextGame.toLocaleTimeString()} (Pacific)`;

    let level = document.createElement("p");
    level.innerHTML = `<b>Level</b>: ${characterLevel}`;

    let DM = document.createElement("p");
    DM.innerHTML = `<b>Dungeon Master</b>: ${dungeonMaster}`;

    let quest = document.createElement("p");
    quest.innerHTML = `<b>Current Quest</b>: ${currentQuest}`;

    if (!nextGamePlanned){
        gameDay.innerHTML = `<b>Next Game</b>: Not Planned`;
        gameTime.innerHTML = `<b>Time</b>: Not Planned`;
    }
   
    session.appendChild(gameDay);
    session.appendChild(gameTime);
    session.appendChild(level);
    session.appendChild(DM);
    session.appendChild(quest);
}

const nextGame = new Date(2026, 1, 14, 15, 0) //Feb 14, 3:00pm my time, 2026
const nextGamePlanned = false;
const characterLevel = 6;
const dungeonMaster = "Riley";
const currentQuest = "With the aid of the night hag bella, seek out the current whereabouts of Eric Conway. Then kill the night hag.";

setUsername();

loadUsername();

setColors(JSON.parse(localStorage.getItem('username')));

displayCharacterCards();

setSessionInfo();

