'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const p = document.querySelector('.p');
// p.textContent = 'Benim adım Murat';
// alert('Hazır Metin');
// p.style.color = 'red';

// const p = document.querySelector('.p');
// setTimeout(function () {
//   p.textContent = 'Benim adım Murat';
// }, 5000);
// p.style.color = 'red';

// function testFonksiyon() {
//   console.log('setTimeout fonksiyonu çalıştı');
// }
// setTimeout(testFonksiyon, 3000);

// let sayılar = [1, 2, 3, 5, 8, 10];

// let yeniDizi = sayılar.map(function (değer) {
//   return değer * 5;
// });

// console.log(yeniDizi.toString());
// [1, 2, 3].map(v => v + 2);

// const img = document.querySelector('.dog');
// img.src = 'dog.jpg';
// img.addEventListener('load', function () {
//   img.classList.add('fadeIn');
// });

// p.style.width = '300px';

// function Kullanici(isim) {
//   this.isim = isim;
//   this.yöneticiMi = false;
// }

// let kullanici = new Kullanici('Murat');

// alert(kullanici.isim);
// alert(kullanici.yöneticiMi);

// function Kullanici(isim) {
//  //this = {}
//  // bu nesneye yeni özellikler ekle
//   this.isim = isim;
//   this.yöneticiMi = false;
//   // return this;
// }

// let kullanici = new Kullanici('Murat');

// // let kullanici = {
// //  isim : "Murat",
// //  yöneticiMi : false,
// // }
// new Kullanici("Namık")

// alert(kullanici.isim);
// alert(kullanici.yöneticiMi);

// const ülkeBilgisiAl = function (ülke) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     // const data = JSON.parse(this.responseText)[0];
//     console.log(data);
//     const languages = Object.values(data.languages);
//     console.log(languages);
//     const currencies = Object.values(data.currencies);
//     console.log(currencies[0]);
//     const html = `  <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//             <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// ülkeBilgisiAl('turkey');
// ülkeBilgisiAl('italy');
// ülkeBilgisiAl('germany');

const ülkeyiGöster = function (data, className = '') {
  const languages = Object.values(data.languages);
  // console.log(languages);
  const currencies = Object.values(data.currencies);
  // console.log(currencies[0]);
  const html = `  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${languages[0]}</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const hataGöster = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const ülkeVeKomşuÜlkeBilgisiAl = function (ülke) {
  //1. Ülke İçin Ajax Çağrısı
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`);
  request.send();
  // console.log(request.responseText);
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // const data = JSON.parse(this.responseText)[0];
    // console.log(data);
    //1.Ülkeyi Göster
    ülkeyiGöster(data);
    //Komşu Ülkeyi Al
    const [komşu] = data.borders;
    // console.log(komşu);
    if (!komşu) return;
    //2. Ajax Çağrısı Yap
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${komşu}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      // console.log(data2);
      ülkeyiGöster(data2, 'neighbour');
      // console.log(this.responseText);
    });
  });
};
// ülkeVeKomşuÜlkeBilgisiAl('turkey');
// ülkeVeKomşuÜlkeBilgisiAl('spain');

//--------Object Methodları Başlangıç-----------------

// let kullanıcı = {
//   adı : "Murat",
//   yaşı: 36
// }

// Object.keys(kullanıcı) ==> [adı,yaşı]
// Object.values(kullanıcı) ==> ["Murat", 36]
// Object.entries(kullanıcı) ==> [["adı","Murat"], ["yaşı", 36]]

//Örnek2
// const object1 = {
//   a: 'Metin',
//   b: 42,
//   c: false,
// };

// console.log(Object.keys(object1));
// console.log(Object.values(object1));
// console.log(Object.entries(object1));

//--------Object Methodları Bitiş-----------------
// let personel = {
//   adi: 'Murat',
//   soyadi: 'Akdağ',
// };

// let isim = personel.adi;
// let surname = personel.soyadi;
// let { isim: adi, surname: soyadi } = personel;
// console.log(isim, surname);

// let personel = ['Murat', 'Namık', 'Berna'];
// // let p1 = personel[0];
// // let p2 = personel[1];
// // let p3 = personel[2];
// // console.log(p1, p2, p3);

// let [p1, p2, p3] = personel;
// console.log(p1, p2, p3);

//-----SetTimeOut CallBack Hell Start ---------------

// setTimeout(() => {
//   console.log('1 saniye geçti');
//   setTimeout(() => {
//     console.log('2 saniye geçti');
//     setTimeout(() => {
//       console.log('3 saniye geçti');
//       setTimeout(() => {
//         console.log('4 saniye geçti');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
//-----SetTimeOut CallBack Hell End ---------------

//----Promise && Fetch API Start-------------

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`);
//   request.send();

// const request = fetch('https://restcountries.com/v3.1/name/turkey');
// console.log(request);

// const ülkeBilgisiAl = function (ülke) {
//   fetch(`https://restcountries.com/v3.1/name/${ülke}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       ülkeyiGöster(data[0]);
//     });
// };

// ülkeBilgisiAl('turkey');
const getJSON = function (url, hataMsj = 'Bir şeyler ters gitti') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${hataMsj} (${response.status})`);
    return response.json();
  });
};

// const ülkeBilgisiAl = function (ülke) {
//   //Ülke 1
//   fetch(`https://restcountries.com/v3.1/name/${ülke}`)
//     .then(
//       response => {
//         console.log(response);
//         if (!response.ok)
//           throw new Error(`Ülke bulunamadı (${response.status})`);
//         return response.json();
//       }
//       // err => alert(err)
//     )
//     .then(data => {
//       ülkeyiGöster(data[0]);
//       // const komşu = data[0].borders[0];
//       const komşu = 'wqwqwqw';
//       if (!komşu) return;
//       //Ülke 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${komşu}`);

//       //----------Hatalı Promise Kullanma----------
//       //  fetch(`https://restcountries.com/v3.1/alpha/${komşu}`).then(respone => respone.json());
//       // return 23;
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Ülke bulunamadı (${response.status})`);
//       response.json();
//     })
//     .then(data => ülkeyiGöster(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err} 🧨🧨🧨`);
//       hataGöster(`Bir şeyler ters gitti 🎃🎃🎃 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
//   // .then(data => alert(data));
// };
// const ülkeBilgisiAl = function (ülke) {
//   //Ülke 1
//   getJSON(`https://restcountries.com/v3.1/name/${ülke}`, 'Ülke Bulunamadı')
//     // fetch(`https://restcountries.com/v3.1/name/${ülke}`)
//     //   .then(
//     //     response => {
//     //       console.log(response);
//     //       if (!response.ok)
//     //         throw new Error(`Ülke bulunamadı (${response.status})`);
//     //       return response.json();
//     //     }
//     //     // err => alert(err)
//     //   )
//     .then(data => {
//       ülkeyiGöster(data[0]);
//       console.log(data[0]);
//       if (!data[0].borders) throw new Error('Komşu Yok');
//       const komşu = data[0].borders[0];
//       // const komşu = 'wqwqwqw';
//       if (!komşu) return;
//       //Ülke 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${komşu}`,
//         'Ülke Bulunamadı'
//       );
//       // return fetch(`https://restcountries.com/v3.1/alpha/${komşu}`);

//       //----------Hatalı Promise Kullanma----------
//       //  fetch(`https://restcountries.com/v3.1/alpha/${komşu}`).then(respone => respone.json());
//       // return 23;
//     })
//     // .then(response => {
//     //   if (!response.ok) throw new Error(`Ülke bulunamadı (${response.status})`);
//     //   response.json();
//     // })
//     .then(data => ülkeyiGöster(data[0], 'neighbour'))
//     .catch(err => {
//       // console.log(`${err} 🧨🧨🧨`);
//       hataGöster(`Bir şeyler ters gitti 🎃🎃🎃 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
//   // .then(data => alert(data));
// };
// btn.addEventListener('click', function () {
//   ülkeBilgisiAl('turkey');
// });

// ülkeBilgisiAl('australia');

// const benNeredeyim = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=251328541052023517027x14455`
//   )
//     .then(res => {
//       if (!res.ok)
//         throw new Error(`Geocoding ile ilgili problem ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`${data.country}, ${data.city}'desiniz`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Ülke bulunamadı (${res.status})`);
//       return res.json();
//     })
//     .then(data => ülkeyiGöster(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

// benNeredeyim(52.508, 13.381);
// benNeredeyim(19.037, 72.873);
// benNeredeyim(-33.933, 18.474);

// console.log('Testi başlasın');
// setTimeout(() => console.log('0 saniye zamanlayıcısı'), 0);
// Promise.resolve('Çözülmüş promise 1').then(res => console.log(res));
// Promise.resolve('Çözülmüş promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test bitti');

// const piyangoUmudu = new Promise(function (resolve, reject) {
//   console.log('Bugün Çekiliyor!!');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('Kazandınız ✨🎉👌');
//     } else {
//       reject(new Error('Kaybettiniz 🎃🎃🎃'));
//     }
//   }, 2000);
// });

// piyangoUmudu.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 saniye geçti');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 saniye geçti');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 saniye geçti');
//     return wait(1);
//   })
//   .then(() => console.log('4 saniye geçti'));

// setTimeout(() => {
//   console.log('1 saniye geçti');
//   setTimeout(() => {
//     console.log('2 saniye geçti');
//     setTimeout(() => {
//       console.log('3 saniye geçti');
//       setTimeout(() => {
//         console.log('4 saniye geçti');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

//------------Geolocation API-------------

// navigator.geolocation.getCurrentPosition(
//   konum => console.log(konum),
//   err => console.log(err)
// );
// console.log('Konum öğrenme');

// const konumAl = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   konum => resolve(konum),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// konumAl().then(konum => console.log(konum));

// const benNeredeyim = function () {
//   konumAl()
//     .then(konum => {
//       const { latitude: lat, longitude: lng } = konum.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=251328541052023517027x14455`
//       );
//     })
//     .then(res => {
//       if (!res.ok)
//         throw new Error(`Geocoding ile ilgili problem ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`${data.country}, ${data.city}'desiniz`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Ülke bulunamadı (${res.status})`);
//       return res.json();
//     })
//     .then(data => ülkeyiGöster(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

// btn.addEventListener('click', benNeredeyim);

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Görüntü Bulunamadı'));
//     });
//   });
// };
// let mevcutImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     mevcutImg = img;
//     console.log('1. Fotoğraf Yüklendi');
//     return wait(2);
//   })
//   .then(() => {
//     mevcutImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     mevcutImg = img;
//     console.log('2. Fotoğraf Yüklendi');
//     return wait(2);
//   })
//   .then(() => {
//     mevcutImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

//-------- Promiseleri Async/Await ile Tüketmek---------
const konumAl = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const benNeredeyim = async function (ülke) {
  //Geolocation
  try {
    const konum = await konumAl();
    const { latitude: lat, longitude: lng } = konum.coords;
    //Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=251328541052023517027x14455`
    );
    if (!resGeo.ok) throw new Error('Konum Bulunamıyor');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    //Country Data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Ülke Bulunamıyor');
    const data = await res.json();
    // console.log(data);
    ülkeyiGöster(data[0]);
    return `${dataGeo.country}, ${dataGeo.city}'desiniz`;
  } catch (err) {
    console.error(`${err}`);
    hataGöster(`🎇✨${err.message} `);
    //Asenkron işlevden dönen vaadi reddet
    throw err;
  }
};
console.log('0. Konum alacak');
// const city = benNeredeyim();
// console.log(city);
benNeredeyim()
  .then(city => console.log(`1. : ${city}`))
  .catch(err => console.error(`2. hata mesajı: ${err.message}`))
  .finally(() => console.log('2. Konum Alındı'));

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
