/*
Se till att din lösenordsgenerator genererar lösenord som uppfyller följande krav:

Minst 10 tecken
En siffra
En stor bokstav
En liten bokstav
Ett specialtecken (!"#$%&'()*+,-./:;<=>?@[\]^{|})
*/
function passwordGenerator2() {
	const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,-./:;<=>?@[\]^{|}`;

	let password = '';
	for(let i=0; i<10; i++) {
		let randomIndex = Math.floor(Math.random() * characters.length);
		let newCharacter = characters[randomIndex];
		password += newCharacter;
	}

	// kontrollera om det är okej
	if( hasCapitalLetter(password) && hasLowercaseLetter(password) && hasNumber(password) && hasSpecialCharacter(password) ) {
		return password;
	}

	console.log('Misslyckades med att skapa ett bra lösenord: ' + password);
	return passwordGenerator2();  // rekursion
}
/* Alternativ metod:
function hasCapitalLetter(string) {
	const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for( let i=0; i<string.length; i++ ) {
		let c = string.charAt(i);
		if( capitalLetters.includes(c) ) {
			return true;
		}
	}
	return false;
}*/
function hasCharacter(string, characters) {
	// Higher order functions: find, filter, map, reduce, some, every
	let array = string.split('');
	return array.some(c => characters.includes(c));
}
function hasCapitalLetter(string) {
	return hasCharacter(string, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}
function hasLowercaseLetter(string) {
	return hasCharacter(string, 'abcdefghijklmnopqrstuvwxyz');
}
function hasNumber(string) {
	return hasCharacter(string, '0123456789');
}
function hasSpecialCharacter(string) {
	return hasCharacter(string, `!"#$%&'()*+,-./:;<=>?@[\]^{|}`);
}

function passwordGenerator(length) {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let password = '';

	for(let i=0; i<length; i++) {
		// "01234"  <-- 5 tecken lång, men sista tecknet har index 4
		let randomIndex = Math.floor(Math.random() * characters.length);
		let newCharacter = characters[randomIndex];
		password += newCharacter;
	}

	return password;
}

let pw = passwordGenerator2();
console.log('Vi skapade lösenordet: ' + pw);
