// let js = 'harika'
// if (js === 'harika') alert('Javascript süper')
// 40 + 23 + 56 - 23
// console.log(40 + 23 + 56 - 23)
// console.log('Murat')
// console.log(23)

// let firstName = 'Namık'
// console.log(firstName)
// console.log(firstName)
// console.log(firstName)
// first_name

//Değişken Adı Kuralları

// let 3yıl =
// let murat$namık = 'Selam'
// let new = 27
// let $function = 27

// let Person = 'murat'
// let pi = 3.141519

// let ilkİşim = 'mühendis'
// let mevcutİşim = 'öğretmen'

// let iş1 = 'mühendis'
// let iş2 = 'öğretmen'
// console.log(ilkİşim)

// let ben = {
//  name : " Murat"
// }

// let firstName = 'Murat'
// let age = 36.0

// let country

// console.log(true)
// console.log(firstName)

// let ready = false
// console.log(ready)

// console.log(typeof true)
// console.log(typeof ready)
// console.log(typeof age)
// console.log(typeof firstName)

// ready = 'evet'
// console.log(typeof ready)
// console.log(ready)

// let year
// console.log(year)
// console.log(typeof year)

// year = 1986
// console.log(typeof year)

// console.log(typeof null)

// let age = 36
// age = 37

// const doğumYılı = 1986

// doğumYılı = 1990

// const job;

// var job = 'mühendis'
// job = 'öğretmen'

// lastName = 'Akdağ'
// console.log(lastName)

// Matematik İşlemleri

// const şimdi = 2040

// const yaşMurat = şimdi - 1986

// const yaşNamık = şimdi - 2000
// console.log(yaşMurat, yaşNamık)
// console.log(yaşMurat * 2, yaşMurat / 10, 2 ** 3)

// const ad = 'Murat'

// const soyad = 'Akdağ'

// console.log(ad + ' ' + soyad)

//Atama İşlemleri

// let x = 10 + 5 //15
// console.log(x)
// x += 10 // x = x + 10
// console.log(x)

// x *= 4 // x = x * 4 = 100
// console.log(x)

// x++ // x = x + 1
// console.log(x)

// x-- // x = x - 1
// console.log(x)

//Karşılaştırma Operatörleri

// const şimdi = 2040

// const yaşMurat = şimdi - 1986

// const yaşNamık = şimdi - 2023

// console.log(yaşMurat > yaşNamık) // >,<, >= , <=

// console.log(yaşNamık >= 18)

// const reşitMi = yaşNamık >= 18

// console.log(şimdi - 1986 > şimdi - 2023)

//Operatör Önceliği

// const şimdi = 2040

// const yaşMurat = şimdi - 1986

// const yaşNamık = şimdi - 2023

// console.log(şimdi - 1986 > şimdi - 2023)

// console.log(35 - 10 - 5)

// let x, y

// x = y = 35 - 10 - 5 // x = y = 20

// console.log(x, y)

// const ortalamaYaş = (yaşMurat + yaşNamık) / 2

// console.log(yaşMurat, yaşNamık, ortalamaYaş)

// Strings & Template Literals

// const ad = 'Murat'

// const iş = 'öğretmen'

// const doğumYılı = 1986

// const yıl = 2040

// console.log("I'm")

// const murat = "I'm " + ad + ', ' + (yıl - doğumYılı) + ' years old ' + iş

// console.log(murat)

// let dize = 'Hello'

// dize += ' '

// dize += 'World'

// console.log(dize)

// const yeniMurat = `I'm ${ad}, ${yıl - doğumYılı} years old ${iş} `

// console.log(yeniMurat)

// console.log(` bu sadece bir dize`)

// console.log('Bu bir çok satırlı \n\
// dizedir. burası da ikinci satır')

// console.log(`Bu bir çok satırlı
// dizedir.ikinci satır`)

//IF ELSE STATEMENT

// const yaş = 18

// const yaşUygunMu = yaş >= 18
// console.log(yaşUygunMu)

// if (yaş >= 18) {
//   console.log('Murat ehliyet alabilir')
// } else {
//   const kaçYılKaldı = 18 - yaş
//   console.log(`Murat çok genç. ${kaçYılKaldı} kadar beklemesi gerekiyor`)
// }

// const doğumYılı = 2012
// let yüzyıl

// if (doğumYılı <= 2000) {
//   yüzyıl = 20
// } else {
//   yüzyıl = 21
// }

// console.log(yüzyıl)

//TYPE CONVERTION

// const girişYılı = '1986'
// console.log(Number(girişYılı), girişYılı)

// console.log(Number(girişYılı) + 18)

// console.log(Number('Murat'))

// console.log(typeof NaN)

// console.log(String(23), 23)

//TYPE COERCION

// console.log('Ben ' + 36 + ' yaşındayım')
// console.log('Ben ' + '36' + ' yaşındayım')
// console.log('Ben ' + String(36) + ' yaşındayım')

// console.log('36' - '10' - 3)
// console.log('36' + '10' + 3)
// console.log('36' * '2')

// let n = '1' + 1 // "11"
// console.log(n)

// n = n - 1

// console.log(n)

//Truthy & Falsy Values

//5 falsy(sözde yanlış) değerler: 0, "", undefined, null, NaN

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean(''))

// const money = 0

// if (money) {
//   console.log('Sakın harcama')
// } else {
//   console.log('Çok çalışmalısın')
// }

// let yükseklik = 0

// if (yükseklik) {
//   console.log('Yükseklik tanımlanmış')
// } else {
//   console.log('Yükseklik yok')
// }

//Eşitlik Operatörleri

// const yaş = '18'

// if (yaş === 18) console.log('Yeni yetişkin oldum(katı)')
// if (yaş == 18) console.log('Yeni yetişkin oldum(gevşek)')

// const favori = Number(prompt('En sevdiğim numara'))
// console.log(typeof favori)

// if (favori == 23) { // "23" == 23
//   console.log('23 bir sayıdır')
// }

// if (favori === 23) {
//   // "23" === 23
//   console.log('23 bir sayıdır')
// } else if (favori === 7) {
//   console.log('7 şanslı numaram')
// } else if (favori === 9) {
//   console.log('9 fena değil')
// } else {
//   console.log('sayı 23,9 ve 7 değil')
// }

// if (favori !== 23) {
//   console.log('Neden 23 değil')
// } else if (favori === 9) {
//   console.log('9 fena değil')
// }

//Boolean Logic

// A.Murat'ın ehliyeti var
// B.Murat gözlük kullanıyor

// Murat'ın ehliyeti var AND Murat gözlük kullanıyor

// Murat'ın ehliyeti var OR Murat gözlük kullanıyor

// A//false  NOT => true

// yaş = 16

// A. yaşın 20'den büyük veya eşit olması => false
// B. yaşın 30'dan küçük olması  => true

// !A false ==> true

// A AND B ==> false

// A OR B ==>  true

// !A AND B ==> true

// A OR !B ==> false

// const ehliyetiVarMı = true //A

// const görüşüVarMı = true //B

// console.log(ehliyetiVarMı && görüşüVarMı)

// console.log(ehliyetiVarMı || görüşüVarMı)

// console.log(!ehliyetiVarMı)

// const kullanabilirMi = ehliyetiVarMı && görüşüVarMı

// if (ehliyetiVarMı && görüşüVarMı) {
//   console.log('Murat araç kullanabilir')
// } else {
//   console.log('Murat araç kullanamaz')
// }

// const yorgunMu = false //C
// // console.log(ehliyetiVarMı || görüşüVarMı || yorgunMu)
// console.log(ehliyetiVarMı && görüşüVarMı && yorgunMu)

// if (ehliyetiVarMı && görüşüVarMı && !yorgunMu) {
//   console.log('Murat araç kullanabilir')
// } else {
//   console.log('Murat araç kullanamaz')
// }

//Switch Case

// const gün = 'cuma'

// switch (gün) {
//   case 'pazartesi': //gün === "pazartesi"
//     console.log('Kurs planlaması')
//     console.log('Sabah toplantısı')
//     break
//   case 'salı':
//     console.log('Spora git')
//     break
//   case 'çarşamba':
//   case 'perşembe':
//     console.log('Yemek yap')
//     break
//   case 'cuma':
//     console.log('Dinlen')
//     break
//   case 'cumartesi':
//   case 'pazar':
//     console.log('Haftasonunun tadını çıkar')
//     break
//   default:
//     console.log('Geçerli bir gün değil')
// }

// if (gün === 'pazartesi') {
//   console.log('Kurs planlaması')
//   console.log('Sabah toplantısı')
// } else if (gün === 'salı') {
//   console.log('Spora git')
// } else if (gün === 'çarşamba' || gün === 'perşembe') {
//   console.log('Yemek yap')
// } else if (gün === 'cuma') {
//   console.log('Dinlen')
// } else if (gün === 'cumartesi' || gün === 'pazar') {
//   console.log('Haftasonunun tadını çıkar')
// } else {
//   console.log('Geçerli bir gün değil')
// }

//Statement & Expression
// if (23 > 10) {
//   const str = '23 büyük'
// }
// const ben = 'Murat'

// console.log(`Ben ${2040 - 1986} yaşındayım ${ben}`)

//Ternary Operator

// const yaş = 23

// yaş >= 18
//   ? console.log('Araba kullanabilirim')
//   : console.log('Yan koltuk benim')

// const araba = yaş >= 18 ? 'Araba kullanabilirim' : 'Yan koltuk benim'
// console.log(araba)

// let araba2
// if (yaş >= 18) {
//   araba2 = 'bmw'
// } else {
//   araba2 = 'oyuncak'
// }
// console.log(araba2)

// console.log(
//   `Bu yaşta ${yaş >= 18 ? 'Araba kullanabilirim' : 'Yan koltuk benim'}`
// )
