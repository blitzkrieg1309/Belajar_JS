let answer;
let maximum;

function getData(maximum) {
  maximum = parseInt(document.getElementById("max").value);

  while (!maximum) {
    alert("Wajib memasukkan Angka !!");
    break;
  }

  answer = Math.floor(Math.random() * maximum) + 1;
}

function tebak(tebak) {
  tebak = parseInt(document.getElementById("tebak").value);

  if (tebak == answer) {
    alert(`Selamat anda berhasil menebak angka ${answer}`);
  } else if (tebak > answer) {
    alert("terlalu besar");
  } else if (tebak < answer) {
    alert(" terlalu kecil");
  }
}
