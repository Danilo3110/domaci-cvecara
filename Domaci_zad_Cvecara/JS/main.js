var kol_ruza = document.getElementById('kol_1');
var kol_ljiljan = document.getElementById('kol_2');
var kol_gerber = document.getElementById('kol_3');

var ukCena_ruza = document.getElementById('ukupna_cena_1');
var ukCena_ljiljan = document.getElementById('ukupna_cena_2');
var ukCena_gerber = document.getElementById('ukupna_cena_3');

var cena_ruza = document.getElementById('cena_1');
var cena_ljiljan = document.getElementById('cena_2');
var cena_gerber = document.getElementById('cena_3');

var naStanju_ruza = document.getElementById('stanje_1');
var naStanju_ljiljan = document.getElementById('stanje_2');
var naStanju_gerber = document.getElementById('stanje_3');

var ukupnaCena = document.getElementById('sum');
var naruci = document.getElementsByClassName('korpa')[0];

var ime = document.getElementById('ime');
var prezime = document.getElementById('prezime');
var card1 = document.getElementById('masterCard');
var card2 = document.getElementById('visaCard');
var dostava = document.getElementById('dostava');

function cvece(obj) {
    if (obj.value <= 0 || !Number.isInteger(+obj.value)) {
        alert('Pogrešan unos! Unesite količinu željenog cveća.');
        obj.value = null;
    }
    if (obj == kol_ruza) {
        if (parseInt(obj.value) > parseInt(naStanju_ruza.value)) {
            alert("Nema dovoljno ruža na stanju.\nZa više, molimo dodjite kasnije.");
            obj.value = null;
        }
        ukCena_ruza.value = (obj.value * cena_ruza.value);
    } else if (obj == kol_ljiljan) {
        if (parseInt(obj.value) > parseInt(naStanju_ljiljan.value)) {
            alert("Nema dovoljno ljiljana na stanju.\nZa više, molimo dodjite kasnije.");
            obj.value = null;
        }
        ukCena_ljiljan.value = (obj.value * cena_ljiljan.value);
    } else {
        if (parseInt(obj.value) > parseInt(naStanju_gerber.value)) {
            alert("Nema dovoljno gerbera na stanju.\nZa više, molimo dodjite kasnije.");
            obj.value = null;
        }
        ukCena_gerber.value = (obj.value * cena_gerber.value);
    }
    ukupnaCena.value = parseFloat(ukCena_ruza.value) + parseFloat(ukCena_ljiljan.value) + parseFloat(ukCena_gerber.value);
};

document.getElementsByClassName('korpa2')[0].addEventListener('click', function () {
    kol_ruza.value = '';
    kol_ljiljan.value = '';
    kol_gerber.value = '';
    ukCena_ruza.value = 0;
    ukCena_ljiljan.value = 0;
    ukCena_gerber.value = 0;
    ukupnaCena.value = '';
    stanjeCvecare();
    if (sessionStorage.getItem('ukupnaCena') == null || sessionStorage.getItem('ukupnaCena') == "" || sessionStorage.getItem('ukupnaCena') == "0") {
        ime.value = '';
        prezime.value = '';
        card1.checked = false;
        card2.checked = false;
        dostava.checked = false;
    }
});

naruci.addEventListener('click', function dugme() {
    if (!(ukupnaCena.value == 0 || ukupnaCena.value == "")) {
        if ((ime.value == "" || prezime.value == "") || (card1.checked == false && card2.checked == false)) {
            alert('Morate uneti podatke za placanje!');
        } else {
            store();
            stanje();
            location.href = "racun.html";
        }
    } else {
        store();
        stanje();
        location.href = "racun.html";
    }
});

function store() {
    if (sessionStorage.getItem('kol_ruza') == null) {
        sessionStorage.setItem('kol_ruza', kol_ruza.value);
    } else {
        if (kol_ruza.value == "") {
            kol_ruza.value = 0;
        }
        if (sessionStorage.getItem('kol_ruza') == "") {
            sessionStorage.setItem('kol_ruza', 0);
        }
        var zbir = parseInt(kol_ruza.value) + parseInt(sessionStorage.getItem('kol_ruza'));
        sessionStorage.setItem('kol_ruza', zbir);
    }

    if (sessionStorage.getItem('kol_ljiljan') == null) {
        sessionStorage.setItem('kol_ljiljan', kol_ljiljan.value);
    } else {
        if (kol_ljiljan.value == "") {
            kol_ljiljan.value = 0;
        }
        if (sessionStorage.getItem('kol_ljiljan') == "") {
            sessionStorage.setItem('kol_ljiljan', 0);
        }
        var zbir1 = parseInt(kol_ljiljan.value) + parseInt(sessionStorage.getItem('kol_ljiljan'));
        sessionStorage.setItem('kol_ljiljan', zbir1);
    }

    if (sessionStorage.getItem('kol_gerber') == null) {
        sessionStorage.setItem('kol_gerber', kol_gerber.value);
    } else {
        if (kol_gerber.value == "") {
            kol_gerber.value = 0;
        }
        if (sessionStorage.getItem('kol_gerber') == "") {
            sessionStorage.setItem('kol_gerber', 0);
        }
        var zbir2 = parseInt(kol_gerber.value) + parseInt(sessionStorage.getItem('kol_gerber'));
        sessionStorage.setItem('kol_gerber', zbir2);
    }

    if (sessionStorage.getItem('ukCena_ruza') == null) {
        sessionStorage.setItem('ukCena_ruza', ukCena_ruza.value);
    } else {
        var zbir3 = parseInt(ukCena_ruza.value) + parseInt(sessionStorage.getItem('ukCena_ruza'));
        sessionStorage.setItem('ukCena_ruza', zbir3);
    }

    if (sessionStorage.getItem('ukCena_ljiljan') == null) {
        sessionStorage.setItem('ukCena_ljiljan', ukCena_ljiljan.value);
    } else {
        var zbir4 = parseInt(ukCena_ljiljan.value) + parseInt(sessionStorage.getItem('ukCena_ljiljan'));
        sessionStorage.setItem('ukCena_ljiljan', zbir4);
    }

    if (sessionStorage.getItem('ukCena_gerber') == null) {
        sessionStorage.setItem('ukCena_gerber', ukCena_gerber.value);
    } else {
        var zbir5 = parseInt(ukCena_gerber.value) + parseInt(sessionStorage.getItem('ukCena_gerber'));
        sessionStorage.setItem('ukCena_gerber', zbir5);
    }

    if (sessionStorage.getItem('ukupnaCena') == null) {
        sessionStorage.setItem('ukupnaCena', ukupnaCena.value);
    } else {
        if (ukupnaCena.value == "") {
            ukupnaCena.value = 0;
        }
        var zbir6 = parseInt(ukupnaCena.value) + parseInt(sessionStorage.getItem('ukupnaCena'));
        sessionStorage.setItem('ukupnaCena', zbir6);
    }

    sessionStorage.setItem('ime', ime.value);
    sessionStorage.setItem('prezime', prezime.value);
    sessionStorage.setItem('masterCard', card1.checked);
    sessionStorage.setItem('visaCard', card2.checked);
    sessionStorage.setItem('dostava', dostava.checked);
};

function stanje() {
    naStanju_ruza.value -= kol_ruza.value;
    naStanju_ljiljan.value -= kol_ljiljan.value;
    naStanju_gerber.value -= kol_gerber.value;

    sessionStorage.setItem('stanjeRuza', naStanju_ruza.value);
    sessionStorage.setItem('stanjeLjiljana', naStanju_ljiljan.value);
    sessionStorage.setItem('stanjeGerbera', naStanju_gerber.value);

    kol_ruza.value = '';
    kol_ljiljan.value = '';
    kol_gerber.value = '';
    ukCena_ruza.value = 0;
    ukCena_ljiljan.value = 0;
    ukCena_gerber.value = 0;
    ukupnaCena.value = '';
}

function stanjeR() {
    if (!(sessionStorage.getItem('stanjeRuza') == null)) {
        naStanju_ruza.value = sessionStorage.getItem('stanjeRuza');
    }
}

function stanjeLj() {
    if (!(sessionStorage.getItem('stanjeLjiljana') == null)) {
        naStanju_ljiljan.value = sessionStorage.getItem('stanjeLjiljana');
    }
}

function stanjeG() {
    if (!(sessionStorage.getItem('stanjeGerbera') == null)) {
        naStanju_gerber.value = sessionStorage.getItem('stanjeGerbera');
    }
}

function stanjeCvecare() {
    stanjeR();
    stanjeLj();
    stanjeG();
}

document.body.addEventListener('load', stanjeCvecare());
document.getElementById('cart').addEventListener('click', function () {
    if (sessionStorage.getItem('ukupnaCena') == null) {
        if (confirm("- Vaša korpa je prazna!\n- Da li ipak želite da pogledate vašu korpu...?")) {
            location.href = "racun.html";
        }
    } else {
        location.href = "racun.html";
    }
});