var ruze = sessionStorage.getItem('kol_ruza');
var ljiljani = sessionStorage.getItem('kol_ljiljan');
var gerber = sessionStorage.getItem('kol_gerber');
var ukRuze = sessionStorage.getItem('ukCena_ruza');
var ukLjiljan = sessionStorage.getItem('ukCena_ljiljan');
var ukGerber = sessionStorage.getItem('ukCena_gerber');
var ukCena = sessionStorage.getItem('ukupnaCena');

var kol_ruza = document.getElementById('kol_1');
var kol_ljiljan = document.getElementById('kol_2');
var kol_gerber = document.getElementById('kol_3');
var ukCena_ruza = document.getElementById('ukupna_cena_1');
var ukCena_ljiljan = document.getElementById('ukupna_cena_2');
var ukCena_gerber = document.getElementById('ukupna_cena_3');
var ukupnaCena = document.getElementById('sum');

var red = document.getElementsByTagName('tr');

var div = document.getElementsByClassName('podaci');
var ime = sessionStorage.getItem('ime');
var prezime = sessionStorage.getItem('prezime');
var card1 = sessionStorage.getItem('masterCard');
var card2 = sessionStorage.getItem('visaCard');
var dostava = sessionStorage.getItem('dostava');

function ispis1() {
    if (!(ruze == "") && !(ruze == "0") && !(ruze == null)) {
        red[0].removeAttribute('hidden');
        kol_ruza.value = ruze;
        ukCena_ruza.value = ukRuze;
    }
}

function ispis2() {
    if (!(ljiljani == "") && !(ljiljani == "0") && !(ljiljani == null)) {
        red[1].removeAttribute('hidden');
        kol_ljiljan.value = ljiljani;
        ukCena_ljiljan.value = ukLjiljan;
    }
}

function ispis3() {
    if (!(gerber == "") && !(gerber == "0") && !(gerber == null)) {
        red[2].removeAttribute('hidden');
        kol_gerber.value = gerber;
        ukCena_gerber.value = ukGerber;
    }
}

function ispisSum() {
    if (!(ukCena == "" || ukCena == 0) && !(ukCena == null)) {
        red[4].removeAttribute('hidden');
        ukupnaCena.value = ukCena;
    }
}

function korpa() {
    if (ukCena == "" || ukCena == 0 || ukCena == null) {
        document.getElementsByClassName('prikaz')[0].removeAttribute('hidden');
        document.getElementById('btn2').removeAttribute('hidden');
        document.getElementById('btn0').setAttribute('hidden', 'hidden');
        alert('- Vaša korpa je prazna!');
    } else {
        document.getElementById('btn1').removeAttribute('hidden');
    }
}

function podaci() {
    if (!(ukCena == "" || ukCena == 0) && !(ukCena == null)) {
        if (!(ime == "" && prezime == "")) {
            div[0].removeAttribute('hidden');
            div[0].innerHTML = `- Ime i prezime: ${ime} ${prezime}`;
        }
    }
}

function podaci2() {
    if (!(ukCena == "" || ukCena == 0)) {
        if (card1 == "true") {
            div[1].removeAttribute('hidden');
            div[1].innerHTML = `- Odabrali ste kreditnu karticu: MasterCard`;
        } else if (card2 == "true") {
            div[1].removeAttribute('hidden');
            div[1].innerHTML = `- Odabrali ste karticu za plaćanje: VisaCard`;
        }
    }
}

function podaci3() {
    if (!(ukCena == "" || ukCena == 0)) {
        if (dostava == "true") {
            div[2].removeAttribute('hidden');
            div[2].innerHTML = "- Odabrali ste dostavu po ceni od 350 dinara," + "<br>" + "koja je uracunata u ukupnoj ceni";
            red[3].removeAttribute('hidden');
            ukupnaCena.value = parseFloat(ukupnaCena.value) + 350;
        }
    }
}

function ispis() {
    korpa();
    ispis1();
    ispis2();
    ispis3();
    ispisSum();
    podaci();
    podaci2();
    podaci3();
}

function brisanjeStorage() {
    sessionStorage.removeItem('kol_ruza');
    sessionStorage.removeItem('kol_ljiljan');
    sessionStorage.removeItem('kol_gerber');
    sessionStorage.removeItem('ukCena_ruza');
    sessionStorage.removeItem('ukCena_ljiljan');
    sessionStorage.removeItem('ukCena_gerber');
    sessionStorage.removeItem('ukupnaCena');
    sessionStorage.removeItem('ime');
    sessionStorage.removeItem('prezime');
    sessionStorage.removeItem('masterCard');
    sessionStorage.removeItem('visaCard');
    sessionStorage.removeItem('dostava');
}

document.getElementsByClassName('korpa')[0].addEventListener('click', function () {
    history.back();
});

document.getElementsByClassName('korpa')[1].addEventListener('click', function () {
    alert(`Vaša porudzbina je potvrdjena. I Vas racun iznosi: ${parseInt(ukCena) + (dostava == "true" ? 350 : 0)} dinara.\nHvala na ukazanom poverenju!`);
    location.href = "index.html";
    brisanjeStorage();
});

document.getElementsByClassName('korpa')[2].addEventListener('click', function () {
    location.href = "index.html";
    brisanjeStorage();
});