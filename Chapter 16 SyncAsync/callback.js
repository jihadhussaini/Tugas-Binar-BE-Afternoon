// Urutan mencuci baju yang benar
// 1. Rendam
// 2. Kucek
// 3. Bilas
// 4. Jemur
// 5. Setrika

function rendam(callback) {
  setTimeout(function() { 
    console.log("Mulai rendam. Setelah ini kucek");
    callback();
  }, 3000);
}

function kucek(callback) {
  setTimeout(function() {
    console.log("Sedang kucek. Setelah ini bilas");
    callback()
  }, 2000);
}

function bilas(callback) {
  setTimeout(function() {
    console.log("Sedang bilas. Setelah ini jemur")
    callback()
  }, 1000);
}

function jemur(callback) {
  setTimeout(function() {
    console.log("Sedang jemur. Setelah ini setrika")
    callback()
  }, 5000);
}

function setrika() {
  setTimeout(function() {
    console.log("Sedang setrika. Setelah ini selesai")
  }, 4000);
}

function washingClothes() {
 rendam(function(){
   kucek(function() {
    bilas(function() {
      jemur(function () {
        setrika();
      })
    })
   })
 })
 return washingClothes
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
