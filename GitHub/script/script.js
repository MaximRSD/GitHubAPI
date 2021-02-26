
var form = document.getElementById("myForm");

form.addEventListener("submit", function(e){
    e.preventDefault()
    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('');

    document.getElementById("result").innerHTML = "";

    fetch("https://api.github.com/users/" +originalName)
    .then((result) => result.json())
    .then((data)=> {
        console.log(data);

        document.getElementById("result").innerHTML =  ` 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/cd5c74d312.js" crossorigin="anonymous"></script>
        <a href="https://github.com/${originalName}" target="_blank"><img style="width: 225px; height:auto;" class="justify-content-center align-items-center d-flex" src="${data.avatar_url}"/></a>
        <p style="font-weight: bold;">${data.login}</p>
        <hr class="w-100">
        <p><i class="fas fa-user" style="color:darkgrey;"></i> ${data.followers} followers </p>
        <hr>
        <p><i class="fas fa-book" style="color:darkgrey;"></i> ${data.public_repos} repos</p>
        <hr>
        <p><i class="fas fa-user" style="color:darkgrey;"></i> ${data.following}  following </p>
        `;
    })
})