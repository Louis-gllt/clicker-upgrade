let NbCadeaux = 0;
let Check = 0;

document.getElementById("BoutonPereNoel").addEventListener("click", function(){
    NbCadeaux += 1;
    updateDisplay();
    if (NbCadeaux == 10)
        if (Check == 9)
            alert("🎉 Bravo ! Tu as créé 10 cadeaux ! 🎁 Continue, Noël dépend de toi !");
            Check++;
            console.log(Check);
});

let CoutMachineMagique = 50;
let NbMachineMagique = 0;

document.getElementById("MachineMagique").addEventListener("click", function() {
    if (NbCadeaux >= CoutMachineMagique) {
        NbCadeaux -= CoutMachineMagique;
        NbMachineMagique++;
        updateDisplay();
    }
});

let CoutLutin = 10;
let NbLutin = 0;

document.getElementById("Lutin").addEventListener("click", function() {
    if (NbMachineMagique >= CoutLutin) {
        NbMachineMagique -= CoutLutin;
        NbLutin++;
        updateDisplay();
    }
});

let CountTraineau = 20;
let NbTraineau = 0;

document.getElementById("Traineau").addEventListener("click", function() {
    if (NbLutin >= CountTraineau) {
        NbLutin -= CountTraineau;
        NbTraineau++;
        updateDisplay();
    }
});

let NbEmbalage = 0;
let Countgift_pack = 100;
let Nbgift_pack = 0;

document.getElementById("package").addEventListener("click", function() {
    if (NbEmbalage >= Countgift_pack) {
        NbEmbalage -= Countgift_pack;
        Nbgift_pack++;
        updateDisplay();
    }
});


function updateGifts() {
    // Production par machine magique
    NbCadeaux += NbMachineMagique * 1;
    NbCadeaux += NbLutin * 7;
    NbEmbalage += NbTraineau * 0.5;
    NbEmbalage += Nbgift_pack * 1;
    // Sauvegarder les cookies
    setCookie("NbEmbalage", NbEmbalage.toString(), 7);
    setCookie("NbCadeaux", NbCadeaux.toString(), 7);
    setCookie("NbMachineMagique", NbMachineMagique.toString(), 7);
    setCookie("NbLutin", NbLutin.toString(), 7);
    setCookie("NbTraineau", NbTraineau.toString(), 7);
    setCookie("Nbgift_pack", Nbgift_pack.toString(), 7);
    //met a jour l'affichage
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("NbCadeaux").textContent = NbCadeaux;
    document.getElementById("NbEmbalage").textContent = NbEmbalage;
    document.getElementById("NbMachineMagique").textContent = NbMachineMagique;
    document.getElementById("NbLutin").textContent = NbLutin;
    document.getElementById("NbTraineau").textContent = NbTraineau;
    document.getElementById("Nbgift_pack").textContent = Nbgift_pack;
}

setInterval(updateGifts, 1000);

// Fonction pour créer un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Durée en jours
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Fonction pour lire un cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name + "=") === 0) {
            return c.substring(name.length + 1);
        }
    }
    return null;
}

window.onload = function() {
    const savedGiftCount = getCookie("NbCadeaux");
    if (savedGiftCount) {
        NbCadeaux = parseInt(savedGiftCount, 10);
        document.getElementById("NbCadeaux").textContent = NbCadeaux;
    }
    const savedGiftCount2 = getCookie("NbMachineMagique");
    if (savedGiftCount2) {
        NbMachineMagique = parseInt(savedGiftCount2, 10);
        document.getElementById("NbMachineMagique").textContent = NbMachineMagique;
    }
    const savedGiftCount3 = getCookie("NbLutin");
    if (savedGiftCount3) {
        NbLutin = parseInt(savedGiftCount3, 10);
        document.getElementById("NbLutin").textContent = NbLutin;

    }
    const savedGiftCount4 = getCookie("NbTraineau");
    if (savedGiftCount4) {
        NbTraineau = parseInt(savedGiftCount4, 10);
        document.getElementById("NbTraineau").textContent = NbTraineau;
    }
    const savedGiftCount5 = getCookie("NbEmbalage");
    if (savedGiftCount5) {
        NbEmbalage = parseInt(savedGiftCount5, 10);
        document.getElementById("NbEmbalage").textContent = NbEmbalage;
    }
    const savedGiftCount6 = getCookie("Nbgift_pack");
    if (savedGiftCount6) {
        Nbgift_pack = parseInt(savedGiftCount6, 10);
        document.getElementById("Nbgift_pack").textContent = Nbgift_pack;
    }
}

document.getElementById("Reset").addEventListener("click", function() {
    cookie : NbCadeaux = 0;
    cookie : NbMachineMagique = 0;
    cookie : NbLutin = 0;
    cookie : NbTraineau = 0;
    cookie : NbEmbalage = 0;
    cookie : Nbgift_pack = 0;
    updateDisplay();
});

document.getElementById("give").addEventListener("click", function() {
    cookie : NbCadeaux = 1000;
    cookie : NbMachineMagique = 10;
    cookie : NbLutin = 10;
    cookie : NbTraineau = 10;
    cookie : NbEmbalage = 1000;
    cookie : Nbgift_pack = 10;
    alert("Bon... ce bouton c'est juste pour le dev... c'est de la triche un peu non ?");
    console.log("TRICHEUR !!!");
    updateDisplay();
});

// Fonction pour mesurer le temps de réponse du serveur
async function measureServerResponseTime(url) {
    console.time("Server Response Time"); // Démarre le chronomètre

    try {
        // Effectue une requête HTTP GET vers le serveur
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        console.timeLog("Server Response Time", "Requête réussie"); // Affiche le temps intermédiaire
    } catch (error) {
        console.error("Erreur lors de la requête:", error.message);
    } finally {
        console.timeEnd("Server Response Time"); // Termine et affiche le temps total
    }
}

// Fonction pour exécuter la mesure toutes les 60 secondes
function startMonitoring(url, interval = 60000) {
    console.log(`Démarrage de la surveillance du serveur : ${url}`);
    setInterval(() => {
        measureServerResponseTime(url);
    }, interval);
}

// URL du serveur à surveiller
const serverUrl = "https://louis-gllt.github.io/clicker-upgrade/";

// Démarre la surveillance toutes les 60 secondes
startMonitoring(serverUrl);