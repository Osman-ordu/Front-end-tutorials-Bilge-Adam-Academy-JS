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

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/turkey');
request.send();
// console.log(request.responseText);
request.addEventListener('load', function () {
  // console.log(this.responseText);
  const [data] = JSON.parse(this.responseText);
  // const data = JSON.parse(this.responseText)[0];
  console.log(data);
  const html = `  <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages.tur}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.TRY.name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});

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
