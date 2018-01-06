// plaintext alphabet
const alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

// keyword + encrypted texts go here
const KEYWORD = 'DARKKNIGHT'
const ENCRYPTEDTEXTS = [
	'APURNWDYJNTQADSFDJ',
	'TBSWLJBK'
]

function generateEncryptedAlphabet(keyword) {
	let keywordArray = keyword
		.toUpperCase()
		.split('')
		.concat(alphabet)

	let alphaCount = 0 // keep track of the alphabet's index
	return keywordArray
		.reduce((obj, letter, index) => {
			if (keywordArray.indexOf(letter) === index) {
				obj[letter] = alphabet[alphaCount]
				alphaCount++
			}
			return obj
		}, {})
}

function decipher(encryptedAlphabet, encryptedText) {
	return encryptedText
		.toUpperCase()
		.split('')
		.reduce((decrypted, letter) => {
			decrypted += (encryptedAlphabet[letter]) || letter
			return decrypted
		}, '')
}

function execute() {
	let encryptedAlphabet = generateEncryptedAlphabet(KEYWORD)
	return ENCRYPTEDTEXTS.map((encryptedText) => decipher(encryptedAlphabet, encryptedText))
}

console.log(execute())
