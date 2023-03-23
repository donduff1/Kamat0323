const betetInput = document.querySelector('#betet');
const tokeszamInput = document.querySelector('#tokesites_szam');
const nevlegesInput = document.querySelector('#nevleges');
const tenylegesResult = document.querySelector('#tenyleges')
const calcButton = document.querySelector('#calcButton');


calcButton.addEventListener('click', () => {
    console.log('Tényleges éves kamat:')
    const betet = Number(betetInput.value);
    const tokesites_szam = Number(tokeszamInput.value);
    const nevleges = Number(nevlegesInput.value);
    let tenyleges = ((1+nevleges/(100 * tokesites_szam))^(tokesites_szam)-1) * betet;
    console.log(tenyleges)
    tenylegesResult.value = tenyleges + "%";
});
