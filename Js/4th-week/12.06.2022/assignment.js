let country = 'İtalya'
let continent = 'Avrupa'
let population = 12

// console.log(country)
// console.log(continent)
// console.log(population)

let adaMı = true
let dil
dil = 'mandarin'
// console.log(typeof country)
// console.log(typeof continent)
// console.log(typeof population)
// console.log(typeof adaMı)
// console.log(typeof dil)

// console.log(population / 2)
// population++
// console.log(population)
// console.log(population > 6)
// console.log(population < 33)

// const açıklama =
//   country +
//   ' ' +
//   continent +
//   "'da ve " +
//   population +
//   ' milyon insan ' +
//   dil +
//   ' konuşuyor'

// console.log(açıklama)

// const açıklama2 = `${country} ${continent}'da ve ${population} milyon insan ${dil} konuşuyor`

// console.log(açıklama2)

// CHALLENGE 25

// const ağırlıkMurat = 71

// const boyMurat = 1.87

// const ağırlıkEngin = 92

// const boyEngin = 1.95

// const ağırlıkMurat = 110

// const boyMurat = 1.88

// const ağırlıkEngin = 85

// const boyEngin = 1.76

// const BMIMurat = ağırlıkMurat / boyMurat ** 2

// const BMIEngin = ağırlıkEngin / (boyEngin * boyEngin)

// const büyükBMI = BMIMurat < BMIEngin

// console.log(BMIMurat, BMIEngin, büyükBMI)

// if (population > 33) {
//   console.log(`${country}'s population is above average`)
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`
//   )
// }

// if (BMIMurat > BMIEngin) {
//   console.log(`Murat'ın BMI (${BMIMurat}) Engin'in (${BMIEngin}) daha yüksek`)
// } else {
//   console.log(`Engin'in BMI (${BMIEngin}) Murat'ın ${BMIMurat} daha yüksek`)
// }

// console.log(BMIMurat, BMIEngin)
// const komşuSayı = Number(prompt('Ülkenizin kaç komşusu var'))

// if (komşuSayı === 1) {
//   console.log('Sadece 1 komşu')
// } else if (komşuSayı > 1) {
//   console.log("1'den fazla")
// } else {
//   console.log('Komşu yok')
// }

// if(typeof komşuSayı === "number"){
//  //bişeyler yap
// }

// if (Number.isNaN(komşuSayı)) {
//   // NaN değeri kontrol et
//   console.log('Lütfen sayı giriniz')
// } else if (komşuSayı != 2) {
// }

// if (dil === 'İngilizce' && population < 50 && !adaMı) {
//   console.log(`${country} uygun `)
// } else {
//   console.log(`${country} ihtiyaçlarını karşılamıyor `)
// }

// JavaScript Temelleri – Bölüm 1  Kodlama #27
//1. Çözüm

// const minimumScore = 100
// let kaplanScore1 = 97 //96
// let kaplanScore2 = 112 //108
// let kaplanScore3 = 101 //89

// let kobraScore1 = 109 //109, 88
// let kobraScore2 = 95 //96, 91
// let kobraScore3 = 123 //106, 110

// let ortKaplan = (kaplanScore1 + kaplanScore2 + kaplanScore3) / 3
// let ortKobra = (kobraScore1 + kobraScore2 + kobraScore3) / 3

// if (ortKaplan > ortKobra && ortKaplan >= minimumScore) {
//   console.log(
//     `Average score of kaplan(${ortKaplan}) is greater than average score of kobra(${ortKobra})`
//   )
// } else if (ortKobra > ortKaplan && ortKobra >= minimumScore) {
//   console.log(
//     `Average score of kobra(${ortKobra}) is greater than average score of kaplan(${ortKaplan})`
//   )
// } else if (ortKaplan === ortKobra && ortKaplan >= 100 && ortKobra >= 100) {
//   console.log(
//     `Average score of kaplan(${ortKaplan}) is equal to average score of kobra(${ortKobra})`
//   )
// } else {
//   console.log(
//     `NO TEAM WINS AS AVERAGE SCORE IS LESS THAN MINIMUM SCORE(${minimumScore})`
//   )
// }
// //1. Çözüm Bitimi

// //Nested If
// const scoreKaplan1 = 96
// const scoreKaplan2 = 108
// const scoreKaplan3 = 89

// const scoreKobra1 = 96
// const scoreKobra2 = 108
// const scoreKobra3 = 89

// const scoreOrtKaplan = (scoreKaplan1 + scoreKaplan2 + scoreKaplan3) / 3
// const scoreOrtKobra = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3

// console.log(scoreOrtKaplan, scoreOrtKobra)

// if (scoreOrtKaplan >= 100 || scoreOrtKobra >= 100) {
//   if (scoreOrtKaplan > scoreOrtKobra) {
//     console.log(`Kaplanlar have the highest avg score!`)
//   } else if (scoreOrtKaplan < scoreOrtKobra) {
//     console.log(`Kobralar have the highest avg score!`)
//   } else {
//     console.log(`it's a draw!`)
//   }
// } else {
//   console.log(`Teams are not qualified`)
// }

// //Nested If bitimi

// // 3.çözüm Part-1

// const scoreKaplanTeam = 96 + 108 + 89
// const scoreKobraTeam = 88 + 91 + 110

// const averageKaplanTeamScore = scoreKaplanTeam / 3
// const averageKobraTeamScore = scoreKobraTeam / 3
// console.log(averageKaplanTeamScore)
// console.log(averageKobraTeamScore)

// if (averageKaplanTeamScore > averageKobraTeamScore) {
//   console.log('Kaplan team is the winner')
// } else if (averageKaplanTeamScore < averageKobraTeamScore) {
//   console.log('Kobra team is winner')
// } else if (averageKaplanTeamScore === averageKobraTeamScore) {
//   console.log('It is a draw!')
// }

// // Include two bonus
// const scoreKaplanTeam = 96 + 108 + 89
// const scoreKobraTeam = 109 + 95 + 106

// const averageKaplanTeamScore = scoreKaplanTeam / 3
// const averageKobraTeamScore = scoreKobraTeam / 3
// console.log(averageKaplanTeamScore)
// console.log(averageKobraTeamScore)

// if (
//   averageKaplanTeamScore > averageKobraTeamScore &&
//   averageKaplanTeamScore >= 100
// ) {
//   console.log('Kaplan team is the winner')
// } else if (
//   averageKobraTeamScore > averageKaplanTeamScore &&
//   averageKobraTeamScore >= 100
// ) {
//   console.log('Kobra team is the winner')
// } else if (
//   averageKobraTeamScore === averageKaplanTeamScore &&
//   averageKaplanTeamScore &&
//   averageKobraTeamScore >= 100
// ) {
//   console.log('It is a draw')
// } else {
//   console.log('Both teams lost')
// }

// // 3.çözüm bitimi

//Switch ile Challenge 27 çözümü
// let winner
// if(scoreKaplan > scoreKobra && scoreKaplan >=100){
//  winner= "kaplan"
// }else if(scoreKaplan < scoreKobra && scoreKobra >=100){
//  winner="kobra"
// }else if(scoreKaplan === scoreKobra && scoreKaplan >= 100){
//  winner="both"
// }

// switch(winner){
//  case "kaplan":
//   console.log("Kaplanlar kazndı");
//   break
//  case "kobra":
//   console.log("Kobralar kazandı");
//   break
//  case "both":
//   console.log("Her ikisi de kazandı");
//   break
//  default:
//   console.log("Kimse kazanamadı");
//   break
// }

// switch (dil) {
//   case 'çince':
//   case 'mandarin':
//     console.log('Çok konuşuluyor')
//     break
//   case 'ispanyolca':
//     console.log('2nci sırada')
//     break
//   case 'ingilizce':
//     console.log('3')
//     break
//   case 'hintçe':
//     console.log('4')
//     break
//   case 'arapça':
//     console.log('5')
//     break
//   default:
//     console.log('Diğer diller harika')
// }

// console.log(
//   `${country}'nın nüfusu ortalamanın ${
//     population > 33 ? 'üstünde' : 'altında'
//   } `
// )

// let fatura = 40

// let bahşiş = fatura <= 300 && fatura >= 50 ? fatura * 0.15 : fatura * 0.2
// console.log(bahşiş)

// console.log(
//   `Fatura ${fatura}, bahşiş ${bahşiş} ve toplam değer ${fatura + bahşiş}`
// )

// console.log(
//   `Tip is ${
//     50 <= fatura <= 300 // false <= 300 ===> 0 <= 300 ==> true
//       ? (bahşiş = (fatura * 15) / 100)
//       : (bahşiş = (fatura * 20) / 100)
//   }`
// )

// let fatura = Number(prompt('Fatura giriniz'))

// fatura >= 50 && fatura <= 300
//   ? alert(
//       `Fatura $${fatura}, bahşiş $${(bahşiş =
//         fatura * (0.15).toFixed(2))} total $${fatura + bahşiş}`
//     )
//   : alert(
//       `Fatura $${fatura}, bahşiş $${(bahşiş = fatura * 0.2).toFixed(
//         2
//       )} total $${fatura + bahşiş}`
//     )
//--------------Challenge 29 Start---------
// const ortHesap = (a, b, c) => (a + b + c) / 3
// console.log(ortHesap(3, 4, 5))
// // Test 1
// let kaplanSkor = ortHesap(44, 23, 71)
// let kobraSkor = ortHesap(65, 54, 49)
// console.log(kaplanSkor, kobraSkor)

// const kazananKim = function (ortKaplanlar, ortKobralar) {
//   if (ortKaplanlar >= 2 * ortKobralar) {
//     console.log(`Kaplanlar Kazandı (${ortKaplanlar} vs. ${ortKobralar})`)
//   } else if (ortKobralar >= 2 * ortKaplanlar) {
//     console.log(`Kobralar Kazandı (${ortKaplanlar} vs. ${ortKobralar})`)
//   } else {
//     console.log(`Kazanan yok`)
//   }
// }

// kazananKim(kaplanSkor, kobraSkor)
// kazananKim(200, 600)

// //Test 2
// kaplanSkor = ortHesap(85, 54, 41)
// kobraSkor = ortHesap(23, 34, 27)
// console.log(kaplanSkor, kobraSkor)
// kazananKim(kaplanSkor, kobraSkor)
//--------------Challenge 29 End---------

// ------------Ternary Çözüm Start--------------

// function ortHesap(x, y, z) {
//   return (x + y + z) / 3
// }

// const ortKaplanlar = ortHesap(44, 23, 71)
// const ortKobralar = ortHesap(65, 54, 49)

// function kazananKim(ortKaplanlar, ortKobralar) {
//   return ortKaplanlar >= 2 * ortKobralar
//     ? console.log(`Kaplanlar kazandı ${ortKaplanlar}: puan`)
//     : ortKobralar >= 2 * ortKaplanlar
//     ? console.log(`Kobralar kazandı ${ortKobralar}: puan`)
//     : console.log(`Kimse kazanamadı`)
// }
// const kimKazandı = kazananKim(ortKaplanlar, ortKobralar)

// ------------Ternary Çözüm End--------------

//--------------Challenge 30 Start------------

// const bahşişHesap = function (fatura) {
//   return fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2
// }

// const bahşişHesap = (fatura) =>
//   fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2

// const fatura = [125, 555, 44]
// const bahşişler = [
//   bahşişHesap(fatura[0]),
//   bahşişHesap(fatura[1]),
//   bahşişHesap(fatura[2]),
// ]
// console.log(fatura, bahşişler)

// const toplam = [
//   fatura[0] + bahşişler[0],
//   fatura[1] + bahşişler[1],
//   fatura[2] + bahşişler[2],
// ]
// console.log(toplam)
//--------------Challenge 30 End------------

// const ülkem = {
//   ülke: 'Türkiye',
//   başkent: 'Ankara',
//   dil: 'Türkçe',
//   nüfus: 90,
//   komşular: ['Gürcistan', 'Irak', 'İran'],
//   açıklama: function () {
//     console.log(
//       `${this.ülke}'de ${this.nüfus} milyon ${this.dil} konuşan insan, ${this.komşular.length} komşu ülkesi ve ${this.başkent} adında bir başkenti var`
//     )
//   },
//   adaKontrol: function () {
//     // this.adaMı = this.komşular.length === 0 ? true : false
//     this.adaMı = !Boolean(this.komşular.length)
//   },
// }
// ülkem.açıklama()
// ülkem.adaKontrol()
// console.log(ülkem)

// Finlandiya'da 6 milyon Fince konuşan insan, 3 komşu ülkesi ve Helsinki adında bir başkenti var'
// console.log(ülkem)
//--------------Challenge 31 Start------------
// const murat = {
//   tamAdı: 'Murat Akdağ',
//   kilo: 78,
//   boy: 1.69,
//   BMIHesap: function () {
//     this.bmi = this.kilo / this.boy ** 2
//     return this.bmi
//   },
// }
// const engin = {
//   tamAdı: 'Engin Derin',
//   kilo: 92,
//   boy: 1.95,
//   BMIHesap: function () {
//     this.bmi = (this.kilo / this.boy ** 2).toFixed(2)
//     return this.bmi
//   },
//   // BMIHesap: () => {
//   //   this.bmi = this.kilo / this.boy ** 2
//   //   return this.bmi
//   // },
// }

// murat.BMIHesap()
// console.log(murat.bmi)
// engin.BMIHesap()
// console.log(engin.bmi)

// if (murat.bmi > engin.bmi) {
//   console.log(
//     `${murat.tamAdı}'ın BMI ${murat.bmi} ${engin.tamAdı}'in BMI ${engin.bmi}'ından büyüktür`
//   )
// } else if (engin.bmi > murat.bmi) {
//   console.log(
//     `${engin.tamAdı}'ın BMI ${engin.bmi > murat.bmi} ${engin.tamAdı}'in BMI ${
//       engin > murat.bmi
//     }'ından büyüktür`
//   )
// } else {
//   console.log('Berabere')
// }

//--------------Challenge 31 End------------
//--------------Challenge 32 Start------------
const fatura = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const bahşişler = []
const toplamlar = []

const bahşişHesap = (değer) => {
  return değer >= 50 && değer <= 300 ? değer * 0.15 : değer * 0.2
}

const ortHesap = (arr) => {
  let toplam = 0
  for (let i = 0; i < arr.length; i++) {
    toplam += arr[i]
  }
  return toplam / arr.length
}

for (let i = 0; i < fatura.length; i++) {
  bahşişler.push(bahşişHesap(fatura[i]))
  toplamlar.push(fatura[i] + bahşişler[i])
}
console.log(toplamlar, ortHesap(toplamlar))

//Bonus #2
const ortHesap2 = (arr) => {
  let toplam = 0
  let sayaç = 0

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue
    toplam += arr[i]
    sayaç++
  }

  toplam === 0
    ? console.log('There were no numbers in the array.')
    : console.log(`The average is ${toplam / sayaç}`)
}

ortHesap2([40, 30, 'hello', true, 50])
//--------------Challenge 32 End------------