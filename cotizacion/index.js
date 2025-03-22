const select = document.getElementById('service-select');
const form = document.querySelector('.form');
const service = document.querySelector('.service');
const aquariumService = document.querySelector('.aquarium-cleaning');
const otherServices = document.querySelector('.other-services');
const formBtn = document.querySelector('.form-btn');

select.addEventListener('change', (e) => {
    const val = e.target.value;
    console.log(val);

    if (val === 'acuario') {
        aquariumService.style.display = 'flex';
        otherServices.style.display = 'none';
    } else {
        otherServices.style.display = 'flex';
        aquariumService.style.display = 'none';
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formBtn.textContent = '......';
    formBtn.style.backgroundColor = '#2d2d2d';
    setTimeout(() => {
        alert('Formulario enviado.');
        form.reset();
        formBtn.style.backgroundColor = '#14a278';
        formBtn.textContent = 'Cotizar';
    }, 2000);
});