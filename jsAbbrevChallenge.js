const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

/* 
Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).*/

const consonantsLower = "bcdfghjklmnpqrstvwxyz";
const consonants = consonantsLower.concat(consonantsLower.toUpperCase()).split("")

function getEndCode (dob, gender) {
	const dobArray = dob.split("/")
	const year = dobArray[2]
	const month = dobArray[1]
	const day = dobArray[0]

	const codeFirstNumber = getYearCode(year)
	const codeLetter = getMonthCode(month)
	const codeGender = getGenderCode(day, gender)

	
	return codeFirstNumber + codeLetter + codeGender
}

function getGenderCode (day, gender) {
	if (gender === "M") {
		return getMaleCode(day)
	} else if (gender === "F") {
		return getFemaleCode(day)
	}
}

function getFemaleCode (day) {
	const dayNum = parseInt(day)
	return dayNum + 40
}

function getMaleCode (day) {
	const dayNum = parseInt(day)
	if (dayNum < 10) {
		return day.padStart(2, "0")
	} else {
		return day
	}
}

function getMonthCode (month) {
	return months[month]
}

function getYearCode (year) {
	return year.slice(-2)
}

function getConcatNameAndCount (name) {
	const wordArray = name.split("")
	const totalConsonants = []
	const totalVowels = []
	let consonantCount = 0;
	for (let i = 0; i < wordArray.length; i++) {
		if (consonants.includes(wordArray[i])) {
			totalConsonants.push(wordArray[i])
			consonantCount++
		} else {
			totalVowels.push(wordArray[i])
		}
	}
	const concatName = totalConsonants.concat(totalVowels);
	
	return {
		consonantCount,
		concatName,
	}
	
}

function getAbbreviation (concatSurname) {
	const abbrevArray = []
	let j = 0
	while (abbrevArray.length < 3) {
		if (typeof concatSurname[j] === "string") {
			abbrevArray.push(concatSurname[j]);
			j++;
		} else {
			abbrevArray.push("X");
		}
	}
	
	const abbrevString = abbrevArray.join("").toUpperCase();
	return abbrevString
}

function getFirstName (name) {
	const abbreviatedName = []
	
	const {
		consonantCount,
		concatName,
	} = getConcatNameAndCount(name)
		
	if (consonantCount > 3) {
		abbreviatedName.push(concatName[0])
		abbreviatedName.push(concatName[2])
		abbreviatedName.push(concatName[3])
		return abbreviatedName.join("").toUpperCase();
	} else {
		return getAbbreviation(concatName)
	}
}

function getSurname (surname) {
	const { concatName } = getConcatNameAndCount(surname)
	const abbrev = getAbbreviation(concatName)
	
	return abbrev
}

function fiscalCode(person) {
	const { name, surname, gender, dob } = person;
	const abbrevSurname = getSurname(surname);
	const abbrevName = getFirstName(name);
	const endCode = getEndCode(dob, gender);

    console.log(abbrevSurname + abbrevName + endCode)

}

fiscalCode({
	name: "Mickey",
	surname: "Mouse",
	gender: "M",
	dob: "16/1/1928"
  })