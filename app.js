let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "Submiting..";
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbwFten9S_CLQOoTU7iZ1jqFmr94u2tJPgej8OnGnbGwWd3iogdr7yYV9LuCJXsPUEAIqw/exec', {
            method: "POST",
        })
})