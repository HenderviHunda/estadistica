const miercoles = document.getElementById('miercoles');
const canM = document.getElementById('cantidadM');

const jueves = document.getElementById('jueves');
const canJ = document.getElementById('cantidadJ');

miercoles.addEventListener('mouseenter', () => {
    canM.classList.toggle("hen");
    console.log(miercoles);
});

jueves.addEventListener('mouseenter', () => {
    canJ.classList.toggle("hen");
    console.log(jueves);
});




