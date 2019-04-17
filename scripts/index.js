
function search() {
    let viewSearch = document.getElementsByClassName('search');
    console.log('oui');
    viewSearch[0].classList.toggle('hidden');
}


let img = document.getElementById('img');
img.addEventListener('click', search);