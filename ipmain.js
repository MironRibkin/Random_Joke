const button = document.querySelector(".button")
const image = document.querySelector(".image")
const text = document.querySelector(".text")

async function fetchCall() {
    const dataFetch = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await dataFetch.json()
    console.log(data);
    text.innerHTML = data.value
    image.src = data.icon_url
}

button.addEventListener('click', function () {
    fetchCall();

})