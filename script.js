function count(){
    let inputText = document.getElementById('input-text');
    let counter = document.getElementById('counter');

    counter.innerHTML = inputText.value.length;
}