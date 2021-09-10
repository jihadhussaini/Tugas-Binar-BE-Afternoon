// Urutan mencuci baju yang benar
// 1. Rendam
// 2. Kucek
// 3. Bilas
// 4. Jemur
// 5. Setrika

function rendam() {
  return new Promise ((resolve, reject) => {
      setTimeout(function() { 
          console.log("Mulai rendam. Setelah ini kucek")
          let err = false

          if(err == false) {
              resolve()
          } else {
              reject('salah urutan')
          }
      }, 3000);
  })
}

function kucek() {
  return new Promise ((resolve, reject) => {
      setTimeout(function() {
          console.log("Sedang kucek. Setelah ini bilas")
          let err = false

          if(err == false) {
              resolve()
          } else {
              reject('salah urutan')
          }
      }, 2000);
  })
}

function bilas() {
  setTimeout(function() {
    console.log("Sedang bilas. Setelah ini jemur")
  }, 1000);
};

function jemur() {
  return new Promise ((resolve, reject) => {
      setTimeout(function() {
          console.log("Sedang jemur. Setelah ini setrika")
          let err = false

          if(err == false) {
              resolve()
          } else {
              reject('salah urutan')
          }
      }, 5000);
  })
};

function setrika() {
  setTimeout(function() {
    console.log("Sedang setrika. Setelah ini selesai")
  }, 4000);
}

async function washingClothes() { // washingClothes
    await rendam();
    await kucek();
    bilas();
    await jemur();
    setrika();
};

washingClothes();

  // Output:
  // Sedang bilas. Setelah ini jemur
  // Sedang kucek. Setelah ini bilas
  // Mulai rendam. Setelah ini kucek
  // Sedang setrika. Setelah ini selesai
  // Sedang jemur. Setelah ini setrika
  
  // Ekspektasi:
  // Mulai rendam. Setelah ini kucek
  // Sedang kucek. Setelah ini bilas
  // Sedang bilas. Setelah ini jemur
  // Sedang jemur. Setelah ini setrika
  // Sedang setrika. Setelah ini selesai