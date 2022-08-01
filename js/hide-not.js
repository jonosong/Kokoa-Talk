const hideItems = document.getElementsByClassName('to-hide');
const wasHere = sessionStorage.getItem('visited');

if (wasHere){
    for (const i of hideItems){
        i.classList.add('hidden');
    }
}