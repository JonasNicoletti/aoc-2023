import fs from 'fs';


const lines = fs
.readFileSync('1/input.txt', 'utf8')
.trim()
.split('\n');

const input1 = lines.
	map(line => line.split('').filter(l => Number.isInteger(+l)))
	.map(n => Number(n.at(0) + n.at(-1)))
	.reduce((s,a) => s+a);


console.log(input2);


const getKey = (s) =>  {
	for (let key of letterToDigit.keys()) {
		if (s.includes(key)) {
			return key;
		}
	}
}

const letterToDigit = new Map([
	['one', 'o1e'],
	['two', 't2o'],
	['three', 'thr3e'],
	['four', 'fo4r'],
	['five', 'f5ve'],
	['six', 's6x'],
	['seven', 'se7en'],
	['eight', 'ei8ht'],
	['nine', 'ni9e']
]
);

const input2 = lines.
	map(line => {
		for (let i = 1; i < line.length; i++) {
			let key = getKey(line.substring(0,i+1))
			if (key) {
				line = line.replace(key, letterToDigit.get(key));
			}

		}
		return line.split('').filter(l => Number.isInteger(+l))
		;
	})
	.map(n => Number(n.at(0) + n.at(-1)))
	.reduce((s,a) => s+a);


console.log(input2);
