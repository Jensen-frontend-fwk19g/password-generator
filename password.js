/*
Skapa en enklare lösenordsgenerator i form av en function passwordGenerator(length) där enda argumentet är längd på lösenordet. Funktionen ska returnera ett slumpat lösenord som visas på skärmen. Använd Math.random() för att skapa slumptal.
*/

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

let pw = passwordGenerator(8);
console.log('Vi skapade lösenordet: ' + pw);
