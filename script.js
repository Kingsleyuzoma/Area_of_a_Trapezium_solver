
const form2 = document.getElementById('trapezium');
const result2Element = document.getElementById('result2')


form2.addEventListener('submit', (event) =>{
    event.preventDefault();

    const base1 = parseFloat(form2.elements['base1'].value);
    
    const base2 = parseFloat(form2.elements['base2'].value);
    const hight1 = parseFloat(form2.elements['hight1'].value);
    const area1 = 0.5 * (base1 + base2) * hight1;

    result2Element.innerHTML = `The area of a trapezium is ${area1},`;

});

