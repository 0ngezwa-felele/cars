// console.log(exios);
let carsElement = document.querySelector(".cars");
let colorsElement = document.querySelector(".colours");
let colorsElem = document.querySelector(".col");
let makeElement = document.querySelector(".make");
let brandsElement = document.querySelector(".brands");


axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function (display) {
        console.log(display.data);
        display.data.forEach(cars => {
            let li = document.createElement("tr")

                li.innerHTML = `<tr> 
            <td>${cars.model}</td>
            <td>${cars.make}</td>
            <td>${cars.color}</td> 
            <td>${cars.price}</td> 
            <td>${cars.reg_number}</td> 


            </tr>`

            carsElement.appendChild(li)

        });



    })


axios.get("https://api-tutor.herokuapp.com/v1/colors")
    .then(function (results) {
        // console.log(results.data)
        results.data.forEach(color => {
            let li = document.createElement("li")
            li.innerHTML = `<li>${color}</li>`
            colorsElement.appendChild(li)
            console.log(li);
        })
    })


axios.get("https://api-tutor.herokuapp.com/v1/makes")
    .then(function (params) {
        // console.log(params.data);
        params.data.forEach(makes => {
            let list = document.createElement("list")
            list.innerHTML = `<li>${makes}</li>`
            makeElement.appendChild(list)

        })

    })

// const carsElement = document.querySelector(".cars");
const colors = document.querySelector(".colors");
const enterElem = document.querySelector(".enter");
const displayElem = document.querySelector(".display");




let displayList = () => {

    axios.get(`https://api-tutor.herokuapp.com/v1/cars/make/${brandsElement.value}/color/${colorsElem.value}`)
        .then(function (display) {
            console.log(display.data[0]);
            display.data.forEach(cars => {

            

                    let li = document.createElement("tr")
                    li.innerHTML = `<tr> 
                    <td>${cars.model}</td>
                <td>${cars.make}</td>
                <td>${cars.color}</td>`
                
                carsElement.appendChild(li)
            });
        })
}

enterElem.addEventListener("click", displayList)