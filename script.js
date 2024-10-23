// function kicikededitapmaq(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }}
//   return min;
// }

// const matris = [9, 7, 2, -1];
// console.log(kicikededitapmaq(matris));

// function cutindekslerdenyenimatrisyaratmaq(arr) {
// const yeniarr=[]
//     for (let i = 0; i < arr.length; i+=2) {
//        yeniarr.push(arr[i])
// }
// return yeniarr
// }

// const matris=[0,1,2,0,4]
// console.log(cutindekslerdenyenimatrisyaratmaq(matris));

// function minmaksyerdeyisme(arr) {

//   let minindeks = 0
//    let maxindeks = 0
//   for (i = 0; i < arr.length; i++) {
//     if (arr[minindeks] > arr[i]) minindeks = i;
//     if (arr[maxindeks] < arr[i]) maxindeks = i;
//   }
//   let temp = arr[minindeks];
//   arr[minindeks] = arr[maxindeks];
//   arr[maxindeks] = temp;
//   return arr
// }
// const matris=[4,1,2,0]
// console.log(minmaksyerdeyisme(matris));
// let string = "anar";
// let boyukstring = " ";
// for (let i = 0; i < string.length; i++) {
//   let charCode = string.charCodeAt(i);
//   if (charCode >= 97 && charCode <= 122) {
//     boyukstring += String.fromCharCode(charCode - 32);
//   }
// }
// console.log(boyukstring);

// let string="anar"
// let tersstring=" "
// for (let i=string.length-1; i >=0 ; i--) {
//     tersstring+=string[i]
// }
// console.log(tersstring);

// let cumle = "eve gedek pls";
// let yenicumle = '';

// for (let i = 0; i < cumle.length; i++) {
//     if (cumle[i] !== ' ') {
//         yenicumle += cumle[i];
//     }
// }

// console.log(yenicumle);

// let string = ["sheep", "sheep", "sheep", "sheep"];
// let result = '';

// for (let i = 0; i < string.length; i++) {
//     result += (i + 1) + string[i];
//     if (i < string.length - 1) {
//         result += '...';
//     }
// }

// console.log(result);

// let string = "anar";
// let eded = 4;

// function stringtekrarlama(word, number) {
//   newstring = "";
//   for (i = 1; i <= number; i++) {
//     newstring += word;
//   }
//   return newstring;
// }
// let teze=stringtekrarlama(string,eded)
// console.log(teze);

// function myindexof(word, char) {
//   for (let i = 0; i < word.length; i++) {
//     if (char === word[i]) {
//       return i;
//     }
//   }
//   return -1;
// }
// let s = "faker";
// let m = "m";
// console.log(myindexof(s, m));

// function customTrim(str) {
//   let start = 0;
//   let end = str.length - 1;

//   while (
//     start <= end &&
//     (str[start] === " " || str[start] === "\n" || str[start] === "\t")
//   ) {
//     start++;
//   }

//   while (
//     end >= start &&
//     (str[end] === " " || str[end] === "\n" || str[end] === "\t")
//   ) {
//     end--;
//   }

//   return str.slice(start, end + 1);
// }

// let myString = "   salamlar   ";
// let trimmedString = customTrim(myString);
// console.log(trimmedString);

// const arr=[4,9,7,2,1]

// function myfindindex(arr,cb) {
//   for (let i = 0; i < arr.length; i++) {
//     if(cb(arr[i]))
//     return i
//   }
//   return -1
// }
// let result = myfindindex(arr,x=>x===9)

// console.log(result);

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];
// countries.forEach((x) => {
//   console.log(x);
// });
// names.forEach((name) => console.log(name));
// numbers.forEach((number) => console.log(number));
// const upperCountries = countries.map((country) => country.toUpperCase());
// const countryLengths = countries.map((country) => country.length);
// const squareNumbers = numbers.map((number) => number ** 2);
// const upperNames = countries.map((name) => name.toUpperCase());
// console.log(upperCountries);
// console.log(countryLengths);
// console.log(squareNumbers);
// console.log(upperNames);

// products.map((products) => {
//   if (products.price != 0) {
//     console.log(products.product + ":" + products.price);
//   } else {
//     console.log(products.product + ":" + "0");
//   }
// });

// const countriesWithLand = countries.filter((country) =>
//   country.toLocaleLowerCase().includes("land")
// );
// console.log(countriesWithLand);
// const countriesWithSixCharacter = countries.filter(
//   (country) => country.length === 6
// );
// console.log(countriesWithSixCharacter);
// const countriesWithSixCharacterAndMore = countries.filter(
//   (country) => country.length >= 6
// );
// console.log(countriesWithSixCharacterAndMore);
// const countriesStartsWithE = countries.filter((country) => country[0] === "N");
// console.log(countriesStartsWithE);

// const massiv = [1, 5, "faker", "gumayusi"];
// function getStringLists(arr) {
//   return arr.filter((element) => typeof element === "string");
// }
// console.log(getStringLists(massiv));

// const sumOfNumbers = numbers.reduce((acc, number) => acc + number, 0);

// const sentencedCountries = countries.reduce((base,next)=>{
//   let sentence = base + next + ", "
//   if (next===countries[countries.length-1]) {
//     sentence= base + " and" + next + " are nort "

//   }
//   return sentence
// }, " ")

// console.log(sentencedCountries);

// const someNamesLongerThanSeven = names.some(name => name.length > 7);

// const allCountriesContainLand = countries.every(country => country.includes('land'));
// console.log(someNamesLongerThanSeven);
// console.log(allCountriesContainLand);

// const firstSixLetterCountry = countries.find(country => country.length === 6);

// console.log(firstSixLetterCountry);

// const firstSixLetterCountryIndex = countries.findIndex(country => country.length === 6);
// console.log(firstSixLetterCountryIndex);
// const norwayIndex = countries.findIndex(country => country === 'Norway');
// console.log(norwayIndex);
// const russiaIndex = countries.findIndex(country => country === 'Russia')
// console.log(russiaIndex);

const students = [
  {
    name: "Anar",
    surname: "Aliyev",
    grades: [
      {
        lesson: "CS",
        score: 78,
      },
      {
        lesson: "Math",
        score: 86,
      },
    ],
    classid: "BP216",
  },
  {
    name: "Mirana",
    surname: "Miriyeva",
    grades: [
      {
        lesson: "CS",
        score: 98,
      },
      {
        lesson: "Math",
        score: 56,
      },
    ],
    classid: "BP216",
  },
  {
    name: "Ayla",
    surname: "Atakisiyeva",
    grades: [
      {
        name: "CS",
        score: 72,
      },
      {
        name: "Math",
        score: 82,
      },
    ],
    classid: "BP215",
  },
  {
    name: "Nicat",
    surname: "Ibrahimzade",
    grades: [
      {
        name: "CS",
        score: 68,
      },
      {
        name: "Math",
        score: 84,
      },
    ],
    classid: "BP215",
  },
];
const teachers = [
  {
    name: "Emil",
    surname: "Hajizada",
    classid: "BP216",
  },
  {
    name: "Orxan",
    surname: "Karimov",
    classid: "BP215",
  },
];
const classes = [
  {
    classid: "BP216",
    teacher: {
      name: "Emil",
      surname: "Hajizada",
    },
    stundes: [],
  },
  {
    classid: "BP215",
    teacher: {
      name: "Orxan",
      surname: "Karimov",
    },
  },
];

function fullName(a) {
  return a.name + " " + a.surname;
}

let result = students.map((item) => item.grades);
console.log(result);
for (let i = 0; i < students.length; i++) {
  console.log(fullName(students[i]) +" - "+ JSON.stringify(result[i]));
}

function calculateGPA(student) {
  const totalScore = students.grades[1].reduce((sum, subject) => sum + subject.score, 0);
  const gpa = totalScore / students.grades.length;                                                                                            
  return gpa;
}

students.forEach(student => {
  const gpa = calculateGPA(student);
  console.log(`${student.name}'s GPA: ${gpa.toFixed(2)}`);
});

let mainMenu = `
Ne haqqinda melumatlara girmek isteyirsiz?
1.Students 
2.Teachers
3.Classes
4.proqrami dayandirmaq
`;
let studentsMenu = `Ne etmek isteyirsiz?
1.Melumat almaq
2.yeni telebe elave etmek
3.hansisa telebeye konfiqurasiya etmek
4.telebeni silmek
5.geri qayitmaq
`;
let studentsInformationMenu = `Ne ile maraqlanirsiz
1.Butun telebelerin qiymetleri
2.telebelerin gpa lari
.geri qayitmaq

`;
// let isContinue = true;
// while (isContinue) {
//   let userInputForMenu = prompt(mainMenu);

//   switch (userInputForMenu) {
//     case "1":
//       let userInputForStudents = prompt(studentsMenu);
//       switch (userInputForStudents) {
//         case "1":
//           let informationCategoryForStudents = prompt(studentsInformationMenu);
//           switch (informationCategoryForStudents) {
//             case "1":
//               alert("consola baxin")
//               let result = students.map((item)=>item.grades)
//               for (let i = 0; i < students.length; i++) {
//                 console.log(fullName(students[i])+JSON.stringify(result[i]))

//               }
//               case 2:

//               break
//               break;

//             default:

//               break;
//           }
//           break;
//         case "2":
//           break;

//         case "3":
//           break;

//         case "4":
//           break;

//         case "5":
//           break;

//         default:
//           alert("duzgun daxil edin");
//           break;
//       }
//       break;
//     case "2":
//       break;
//     case "3":
//       break;
//     case "4":
//       let exit = confirm("eminsiniz?");
//       if (exit) {
//         isContinue = false;
//       }
//       break;
// case "":
//   isContinue=false
//   break
//     default:
//       alert("duzgun daxil edin");
//   }
// }
