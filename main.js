const convrt = document.getElementById('converter');

convrt.addEventListener('click', function(){
    const real = document.getElementById('real').value;
    const calculo = real * 0.20;

    document.getElementById('resultado').textContent = calculo.toFixed(2);
})

const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener("click", function(){
    body.classList.toggle("dark-mode") 
})