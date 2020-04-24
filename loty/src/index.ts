let nowyElement = document.createElement("div");

fetch('https://api.github.com/repos/Microsoft/TypeScript/commits')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let addr = data[data.length-1].author.avatar_url;
        let author = data[data.length-1].author.repos_url;
        nowyElement.innerHTML = 'Photo of last TypeScript commit author <br> <img src='+addr+' class = "logo">';
        // console.log(nowyElement.innerHTML);
        document.body.appendChild(nowyElement);
        fetch(author)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let names: string[] = [];
                for (let i = 0; i < data.length; i++) {
                    names.push(data[i].name);
                }
                names.sort(function (a, b) {
                    return a.toLowerCase().localeCompare(b.toLowerCase());
                });
                console.log(names);
            });
    });



