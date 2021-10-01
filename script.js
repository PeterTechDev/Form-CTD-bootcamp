let form = document.getElementById("myForm");

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let search = document.getElementById('search').value
    
    let originalName = search.split(' ').join('')

    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data)=>{
        console.log(data);

        document.getElementById('result')
        .innerHTML = `<img src="${data.avatar_url}" />`
    })
})