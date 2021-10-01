let form = document.getElementById("myForm");

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let search = document.getElementById('search').value
    let userName = search.split(' ').join('').toLowerCase()
    let result = document.getElementById('result');
    
    result.innerHTML = '';

    fetch("https://api.github.com/users/" + userName)
    .then((result) => result.json())
    .then((data)=>{
        // console.log(data);
        result.innerHTML = `<img src="${data.avatar_url}" />`
    })
})