var nowyElement = document.createElement("div");
fetch('https://api.github.com/repos/Microsoft/TypeScript/commits')
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    var addr = data[data.length - 1].author.avatar_url;
    var author = data[data.length - 1].author.repos_url;
    nowyElement.innerHTML = 'Photo of last TypeScript commit author <br> <img src=' + addr + ' class = "logo">';
    // console.log(nowyElement.innerHTML);
    document.body.appendChild(nowyElement);
    fetch(author)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        var names = [];
        for (var i = 0; i < data.length; i++) {
            names.push(data[i].name);
        }
        names.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        console.log(names);
    });
});
