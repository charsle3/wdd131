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
    let telemainLogo = "<img src=\"images/telemain.svg\"></img>";
    let orfanLogo = "<img src=\"images/orfan.svg\"></img>";
    let calderianLogo = "<img src=\"images/calderian.svg\"></img>";
    let feldorenLogo = "<img src=\"images/feldoren.svg\"></img>";
    let expertsLogo = "<img src=\"images/experts.svg\"></img>";

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
        let level = document.createElement("p");
        let quote = document.createElement("p");
        let weapon = document.createElement("p");
        let name = document.createElement("p");

        level.innerHTML = `<b>Level</b>: ${characterLevel}`;
        quote.innerHTML = `<i>"${character.quote}"</i>`;
        weapon.innerHTML = `<b>Preferred Weapon</b>: ${character.preferredWeapon}`;
        name.innerHTML = `<b>Name</b>: ${character.name}`;

        image.setAttribute("src", character.img);
        image.setAttribute("alt", `${character.username} profile pic`)
        image.setAttribute("loading", "lazy")

        box.appendChild(image);
        box.appendChild(quote);
        box.appendChild(name);
        box.appendChild(level);
        box.appendChild(weapon);

        cards.appendChild(box);
    });
}

const characterLevel = 6;

setUsername();

loadUsername();

displayCharacterCards();