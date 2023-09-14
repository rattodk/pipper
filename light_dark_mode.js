
//* Vi henter body'en og class'en toggler
const body = document.querySelector('body'),
toggle = document.querySelector('.toggle');

 //* Vi henter moden light eller dark i local storage via en variabel
 let getMode = localStorage.getItem('mode');

 //* Hvis den henter moden fra local storage og den er lig med dark, så tilføjer den class list'en dark til body'en og div'en der hedder toggle
 if(getMode && getMode === 'dark') {
    body.classList.add('dark');
    toggle.classList.add('active')
 }

 //* Vi consolelogger hvilken mode den står på og gemmer det
 console.log(getMode);


//* Den starter på light mode, så når du klikker på knappen, sætter den class'en dark på body'en
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark');


//* Hvis body'en IKKE indeholder class'en dark, så siger den til local storage, at den skal stå på light mode
        if(!body.classList.contains('dark')){
            return localStorage.setItem('mode', 'light');
        }
            
    })


//* Når du klikker på knappen så sætter den class'en active på div'en der hedder toggle
 toggle.addEventListener('click', () => toggle.classList.toggle('active'));