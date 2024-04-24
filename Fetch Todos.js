
let button = document.getElementById('button')
let fetchdata = document.getElementById('fetchdata')




button.addEventListener('click', function () {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                /* console.log(element.title) */


                let fetchdata = document.getElementById('fetchdata')
                
                let ptag = document.createElement('p')
                ptag.innerText = element.title

                fetchdata.append(ptag)

                let cheakbox = document.createElement('input')
                cheakbox.type = 'checkbox'
                if (element.completed == true) {
                    cheakbox.setAttribute("checked", "checked")
                    ptag.append(cheakbox)
                }
                else {
                    ptag.append(cheakbox)
                }

            });
        })
})






