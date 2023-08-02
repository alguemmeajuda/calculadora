function somar() {
  var v1 = document.getElementById("n1").value;
  var v2 = document.getElementById("n2").value;
  var v3 = parseInt(v1) + parseInt(v2);
  alert(v3);
}

function subtrair() {
  var v1 = document.getElementById("n1").value;
  var v2 = document.getElementById("n2").value;
  var v3 = v1 - v2;
  alert(v3);
}

function multiplicar() {
  var v1 = document.getElementById("n1").value;
  var v2 = document.getElementById("n2").value;
  var v3 = v1 * v2;
  alert(v3);
}

function dividir() {
  var v1 = document.getElementById("n1").value;
  var v2 = document.getElementById("n2").value;
  var v3 = v1 / v2;
  alert(v3);
}
