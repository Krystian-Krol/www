setTimeout(() => {
    console.log('No już wreszcie.');
}, 2000);

let x = 0;
function run(time) {
    return new Promise(function (resolve, reject) {
        try {
            switch(x%7) {
                case 0: {
                    document.body.style.background = 'red';
                    break;
                }
                case 1: {
                    document.body.style.background = 'orange';
                    break;
                }
                case 2: {
                    document.body.style.background = 'yellow';
                    break;
                }
                case 3: {
                    document.body.style.background = 'green';
                    break;
                }
                case 4: {
                    document.body.style.background = 'blue';
                    break;
                }
                case 5: {
                    document.body.style.background = 'indigo';
                    break;
                }
                case 6: {
                    document.body.style.background = 'purple';
                    break;
                }
            }
            x++;
            return resolve();
        }
        catch (e) {
            return reject(e);
        }
    }).then(setTimeout(function () { run(time); }, time));
}
run(1000);

function fib(x) {
    if(x <= 1) return x;
    
    return fib(x-1) + fib(x-2);
}
let color = 1;
let c_click = 0;
let ps = document.getElementById('right_menu');


function del_click(e){
    //zmień program tak, żeby zmianą koloru tła reagował na kliknięcie w dowolne miejsce tabelki za wyjątkiem obszaru formularza rezerwacji
    c_click++;
    fib(c_click);
    if(e.clientY > 450 || e.clientY == 0) {
        console.log('Klikanie w formularz');
        return;
    }
    //
    if(e.target == ps || e.target.id == 'resch_info' || e.target.id == 'form') {
        console.log('Puste miejsce');
        if(color)
            e.currentTarget.style.background = "green";
        else
            e.currentTarget.style.background = 'none';
        color^=1;
        return;
    }
    
    if(color)
        e.currentTarget.style.background = "red";
    else
        e.currentTarget.style.background = 'none';
    color^=1;
}
  
ps.addEventListener('click', del_click);

let p_form = document.getElementById('form');

function check_input(e){
    //zmień program tak, żeby zmianą koloru tła reagował na kliknięcie w dowolne miejsce tabelki za wyjątkiem obszaru formularza rezerwacji
    let stat = false;
    var el = document.querySelector('input[name=fname]') as HTMLInputElement;
    if(el.value.length == 0) stat = true;

    el = document.querySelector('input[name=lname]') as HTMLInputElement;
    if(el.value.length == 0) stat = true;

    el = document.querySelector('input[name=trip-start]') as HTMLInputElement;
    
    let today = new Date();
    let dd = today.getDate().toString();
    let mm = (today.getMonth()+1).toString(); 
    let yyyy = today.getFullYear().toString();
    
    if(dd.length == 1) dd='0'+dd;
    if(mm.length == 1) mm='0'+mm;

    let curr_date = yyyy+'-'+mm+'-'+dd;
    
    if(curr_date > el.value) stat = true;
    
    el = document.getElementById('sub') as HTMLInputElement;
    if(!stat) {
        el.style.display = 'inline';
    }
    else {
        el.style.display = 'none';
    }
}
check_input();
ps.addEventListener('input', check_input);
