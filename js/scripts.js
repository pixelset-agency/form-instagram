const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#name");

    const value = name.value;

    document.getElementById('codigo').innerHTML = value;

});

const copy = document.getElementById("copy");

copy.addEventListener("click", function(e) {

    const code = document.getElementById("codigo");

    code.select();

    document.execCommand('copy');

});