
// exempel - inte riktig kod

let password;
const dictionary = []  // ordlista med kända ord

// Brute force: prova alla möjliga lösenord
for( let i=0; i<dictionary.length; i++ ) {
	if( password == dictionary[i] ) {
		console.log('Password is: ' + dictionary[i]);
	}
}


for( let x=0; x<Infinity; x++ ) {
	if( x == password ) {
		console.log('Password is: ' + x);
	}
}

// Om ett tecken är en vanlig engelsk bokstav: 27 alternativ, a-z
// Med stora bokstäver: +27
// Med siffror: +10
// Specialtecken: ...
