'use strict';

function yaşHesap(doğumYılı) {
  const yaş = 2040 - doğumYılı;
  // console.log(isim);
  function yaşıYazdır() {
    let çıktı = `${isim},${doğumYılı} doğumlu ${yaş} yaşında`;
    console.log(çıktı);
    if (doğumYılı >= 1981 && doğumYılı <= 1996) {
      var millenial = true;
      //Dış kapsamdaki değişken ile aynı isimde yeni değişken oluşturma
      const isim = 'Namık';
      //Dış kapsamdaki değişkene yeniden atama
      çıktı = 'Yeni Çıktı';
      const str = `${isim} millenial kuşağında doğmuşsun`;
      console.log(str);
      function ekle(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(ekle(2, 3));
    console.log(çıktı);
  }
  yaşıYazdır();
  return yaş;
}

const isim = 'Murat';

yaşHesap(1986);
// console.log(yaş);
// yaşıYazdır();
