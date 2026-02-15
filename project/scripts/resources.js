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
    let feldorenLogo = "<img src=\"images/feldoren.svg\" alt=\"feldoren logo\"></img>";
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

const sessions = [
    {
        name: "The White Canopy",
        description: "The party meets on the road, Telemain and Orfan rescue Feldoren from spiders and they all kill the brood mother."
    },
    {
        name: "Graduation Day",
        description: "The party explores and conquers an old ruin of a training school for adventurers"
    },
    {
        name: "A Taste of Banditry",
        description: "The party discovers a missing architect, his driver slain. After returning the driver's remains, the party busts a conman on the way to the architect's last known destination"
    },
    {
        name: "A Bone to Pick",
        description: "Investigating the architect's disappearance, the party discovers a map of the proposed temple site. Following it, they delve into the underdark, slaying the corrupted architect in front of a forgotten shrine to Lolth"
    },
    {
        name: "It's a Wonderful Unlife",
        description: "Following rumors (and a bounty) of disappearing villagers and loose body parts, the party discovers a smuggling ring, necrotic drug manufacture, and a self-aware zombie."
    },
    {
        name: "The First Regevenant",
        description: "After clearing the drug lab and slaying the mafia representative that was visiting, the party experiments with a lich's phylactery and upgrades Hanz into a never before seen variant of holy undead."
    },
    {
        name: "A Family Favor",
        description: "Following a commision from Calderian's family, the party travel to Glenshire to investigate an odd series of deaths. Night Hags are the suspected culprits"
    },
    {
        name: "Dating Night Hags for Dummies",
        description: "Deep in the investigation, the party discover a barrier blocking divine vision, and eric the cleric's disappearance. After a spectacular bomb disposal, the party clash briefly with the night hag, bella, and on the way to Everglade, Hanz purifies Mary."
    },
    {
        name: "Bobbing for Night Hags",
        description: "Discovering the night hag has been predating on Telemain, the party prepare to investigate Eric's death and lay a trap for the night hag. After realizing she's been duped, the hag bargains with the party to delay their conflict until Eric is located."
    },
]

function displayDescriptions(){
    let summary = document.getElementById("summary")
    let i = 0;

    sessions.forEach(session => {
        i++;
        let number = document.createElement("p");
        number.innerHTML = `<b>Session #${i}`;

        let title = document.createElement("p");
        title.innerHTML = `<b>Title</b>: ${session.name}`;

        let description = document.createElement("p");
        description.innerHTML = `<b>Summary</B>: ${session.description}`;

        let spacer = document.createElement("p");
        spacer.id = "spacer";

        summary.appendChild(number);
        summary.appendChild(title);
        summary.appendChild(description);
        summary.appendChild(spacer);
    });
}

setUsername();

loadUsername();

setColors(JSON.parse(localStorage.getItem('username')));

displayDescriptions();