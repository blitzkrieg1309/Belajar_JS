function calculate(operation) {
  // ambil value dari input
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  //   cek validasi input
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent = "Mohon masukkan angka";
    return;
  }

  // operasi berdasarkan tombol yang ditekan
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        document.getElementById("result").textContent = "tidak bisa membagi dengan 0";
      }
      result = num1 / num2;
      break;
    default:
      result = "operasi tidak dikenal";
  }

  // Hasil
  document.getElementById("result").textContent = `Hasil : ${result}`;
}
