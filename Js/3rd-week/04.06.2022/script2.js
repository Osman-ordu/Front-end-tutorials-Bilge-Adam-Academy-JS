//Use strict
'use strict'

// let ehliyetiVarMı = false
// const testiGeçtiMi = true
// if (testiGeçtiMi) ehliyetiVarMı = true

// if (ehliyetiVarMı) {
//   console.log('Araba kullanabiliyor')
// }

// // const interface = 'ses'
// // const private = 123
// const if = 456

//Functions

// function logger() {
//   console.log('Benim adım Murat')
// }
// logger(23) //calling/running/invoking a function
// logger()
// logger()
// logger()

// function meyveİşleme(elmalar, portakallar) {
//   // console.log(elmalar, portakallar)
//   const meyveSuyu = `${elmalar} elma ve ${portakallar} portakal`
//   return meyveSuyu
// }

// const elmaSuyu = meyveİşleme(5, 0) // `${elmalar} elma ve ${portakallar} portakal`
// console.log(meyveİşleme(5, 0))
// // console.log(elmaSuyu)

// const elmaPortakalSuyu = meyveİşleme(2, 4)
// console.log(elmaPortakalSuyu)

// const num = Number('23')

//Function Declarations
// const yaş1 = yaşHesap1(1986)
// function yaşHesap1(doğumYılı) {
//   return 2040 - doğumYılı
// }

//Function Expressions
// const yaşHesap2 = function (doğumYılı) {
//   const yaş = 2040 - doğumYılı
//   return yaş
// }

// const yaş2 = yaşHesap2(1986)
// const yaş3 = yaşHesap2(2002)
// console.log(yaşHesap2(1986), yaşHesap2(2002))

// const dönüşYok = function () {
//   // no return
// }
// console.log(dönüşYok()) // undefined

function dünyanınYüzdesi1(popülasyon) {
  return (popülasyon / 7900) * 100
}

// const dünyanınYüzdesi2 = function (qweqwre) {
//   return (qweqwre / 7900) * 100
// }
// // console.log(dünyanınYüzdesi1(60), dünyanınYüzdesi2(60))

// const italyaYüzdesi = dünyanınYüzdesi1(50)
// console.log(italyaYüzdesi)

//Arrow Functions

// const yaşHesap2 = function (doğumYılı) {
//   return 2040 - doğumYılı
// }

// const yaşHesap3 = (doğumYılı) => 2040 - doğumYılı

// const yaş3 = yaşHesap3(1986)
// // console.log(yaş3)

// const emekliliğeKalanSüre = (doğumYılı, ad) => {
//   const yaş = 2040 - doğumYılı
//   const emeklilik = 65 - yaş
//   // return emeklilik
//   return `${ad} ${emeklilik} içinde emekli oluyor `
// }

// console.log(emekliliğeKalanSüre(1986, 'Murat'))
// console.log(emekliliğeKalanSüre(1980, 'Namık'))

// const dünyanınYüzdesi3 = (population) => (population / 7900) * 100

// console.log(dünyanınYüzdesi3(85))

//Function Calling Other Functions

// function meyveleriParçala(meyve) {
//   return meyve * 3
// }

// function meyveİşleme(elmalar, portakallar) {
//   const elmaParçaları = meyveleriParçala(elmalar)
//   const portakalParçaları = meyveleriParçala(portakallar)
//   // console.log(elmalar, portakallar)
//   const meyveSuyu = `${elmaParçaları} elma parçası ve ${portakalParçaları} portakal parçası `
//   return meyveSuyu
// }

// console.log(meyveİşleme(2, 3))

// const nüfusuTanımla = (ülke, nüfus) => {
//   const yüzde = dünyanınYüzdesi3(nüfus)
//   const tanım = `${ülke}'de ${nüfus} milyon insan var, ki bu da dünyanın yaklaşık %${yüzde}'sidir`
//   console.log(tanım)
// }

// nüfusuTanımla('USA', 350)

// const yaşHesap = function (doğumYılı) {
//   return 2040 - doğumYılı
// }

// const emekliliğeKalanSüre = function (doğumYılı, ad) {
//   const yaş = yaşHesap(doğumYılı)
//   const emeklilik = 65 - yaş
//   if (emeklilik > 0) {
//     console.log(`${ad} ${emeklilik} içinde emekli oluyor `)
//     return emeklilik
//   } else {
//     console.log('🎉✨🎉')
//     return -1
//   }
//   // return `${ad} ${emeklilik} içinde emekli oluyor `
// }

// console.log(emekliliğeKalanSüre(1986, 'Murat'))
// console.log(emekliliğeKalanSüre(1959, 'Namık'))

// const arkadaş1 = 'Namık'
// const arkadaş2 = 'Engin'
// const arkadaş3 = 'Ayşe'

// const arkadaş = ['Namık', 'Engin', 'Ayşe']
// console.log(arkadaş)

// const yıl = new Array(1986, 12657, 123, 1233)
// // console.log(yıl)
// console.log(arkadaş[2])
// console.log(arkadaş.length)
// console.log(arkadaş[arkadaş.length - 1])
