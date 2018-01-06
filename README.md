# keywordCipher

Backstory: Over my winter holiday break, I played this really amazing [mystery puzzle box](http://www.armchairdetectiveco.com/the-kidnapped-crossworder) game filled with fun ciphers. After my initial excitement wore off, I realized how time consuming it was to solve the keyword ciphers in particular, by hand, so I wrote this handy script that sped things along.

### generatedEncryptedAlphabet

This will return a hash map of the encrypted alphabet, as well as the corresponding plaintext alphabet.

Keyword: DARKKNIGHT

```json
{
	"D": "A",
	"A": "B",
	"R": "C",
	"K": "D",
	"N": "E",
	"I": "F",
	"G": "G",
	"H": "H",
	"T": "I",
	"B": "J",
	"C": "K",
	"E": "L",
	"F": "M",
	"J": "N",
	"L": "O",
	"M": "P",
	"O": "Q",
	"P": "R",
	"Q": "S",
	"S": "T",
	"U": "U",
	"V": "V",
	"W": "W",
	"X": "X",
	"Y": "Y",
	"Z": "Z"
}
```

### decipher

This method will decrypt letter by letter, and return a decrypted string.

Encrypted text: `APURNWDYJNTQADSFDJ` 

Plaintext: `BRUCEWAYNEISBATMAN`


### execute

This is the entry method for the script. Set your `ENCRYPTEDTEXTS` and `KEYWORD` appropriately around the top of the script file, and simply run `node keywordCipher.js`.