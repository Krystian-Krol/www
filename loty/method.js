var nE = document.createElement("div");
function dismiss() {
    document.getElementById('custom_error').remove();
}
function on_click() {
    var stat = false;
    nE = document.createElement("div");
    nE.className = 'over';
    nE.id = 'custom_error';
    var el = document.querySelector('input[name=fname]');
    if (el.value.length == 0) {
        nE.innerHTML += 'Brak imienia!<br>';
        stat = true;
    }
    else {
        nE.innerHTML += el.value + '<br>';
    }
    el = document.querySelector('input[name=lname]');
    if (el.value.length == 0) {
        nE.innerHTML += 'Brak nazwiska!<br>';
        stat = true;
    }
    else {
        nE.innerHTML += el.value + '<br>';
    }
    el = document.querySelector('input[name=trip-start]');
    var today = new Date();
    var dd = today.getDate().toString();
    var mm = (today.getMonth() + 1).toString();
    var yyyy = today.getFullYear().toString();
    if (dd.length == 1)
        dd = '0' + dd;
    if (mm.length == 1)
        mm = '0' + mm;
    var curr_date = yyyy + '-' + mm + '-' + dd;
    if (curr_date > el.value) {
        nE.innerHTML += 'Zła data!<br>';
        stat = true;
    }
    else {
        nE.innerHTML += el.value + '<br>';
    }
    if (!stat) {
        el = document.getElementById('from');
        console.log(el);
        nE.innerHTML += el.value + '<br>';
        el = document.getElementById('to');
        nE.innerHTML += el.value + '<br>';
    }
    nE.innerHTML += '<button class="success" onclick="dismiss()">Dismiss</button>';
    document.body.appendChild(nE);
}
