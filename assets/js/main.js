//navn

let forNavn = 'Marlene';
let efterNavn = 'Rask';
let fuldtNavn =forNavn+' '+efterNavn
console.log(fuldtNavn);

//velkomst
let brugerNavn = fuldtNavn;
let velkomst = 'Velkommen ' + [brugerNavn] + '! - Velkommen her';
console.log(velkomst);

//by
let byNavn = 'Svenstrup';
let postNummer = 9230;
let adresse = byNavn+' '+postNummer;
console.log(adresse);

//ferie
let ferieDesitination = 'New Zealand';
let feriePlan = 'Jeg planlægger at skulle til ' + ferieDesitination + ' i næste uge';
console.log(feriePlan);

//produkt
let produktNavn = 'havre';
let produktPris = 90;
let besked = 'Det valgte produkt er ' + produktNavn + ', og det koster ' + produktPris + ' dollars.';
console.log(besked);

//OPGAVE 2:javascript concat() funktion

//navn
let forNavn2 = 'Marlene';
let efterNavn2 = 'Rask';
let fuldtNavn2 = forNavn2.concat(' ', efterNavn2);
console.log(fuldtNavn2);

//velkomst
let brugerNavn2 = fuldtNavn2;
let velkomst2 = 'Velkommen '.concat(brugerNavn2, '! - Velkommen her');
console.log(velkomst2);

//by
let byNavn2 = 'Svenstrup';
let postNummer2 = 9230;
let adresse2 = byNavn2.concat(' ', postNummer2);
console.log(adresse2);

//ferie
let ferieDesitination2 = 'New Zealand';
let feriePlan2 = 'Jeg planlægger at skulle til '.concat(ferieDesitination2, ' i næste uge');
console.log(feriePlan2);

//produkt
let produktNavn2 = 'havre';
let produktPris2 = 90;
let besked2 = 'Det valgte produkt er '.concat(produktNavn2, ', og det koster ', produktPris2, ' dollars.');
console.log(besked2);