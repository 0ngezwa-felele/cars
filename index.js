// console.log(exios);
let carsElement = document.querySelector(".cars")
axios
.get("https://api-tutor.herokuapp.com/v1/cars")
.then(function(display){
    console.log(display.data);
    display.data.forEach(cars => {
        let li = document.createElement("tr")
        li.innerHTML = `<tr> 
        <td>${cars.model}</td>
        <td>${cars.make}</td>
        <td>${cars.color}</td> 
        </tr>`
        
        carsElement.appendChild(li)
    
    });
   

    
})

// // const carsElement = document.querySelector(".cars");
// const colors = document.querySelector(".colors");
// const enterElem = document.querySelector(".enter");
// const displayElem = document.querySelector(".display");

// let carList = [{ make: 'Volkswagen', model: 'Touran', color: 'Red' },
// { make: 'Volkswagen', model: 'Jetta', color: 'Blue' },
// { make: 'Ford', model: 'Ranger', color: 'White' },
// { make: 'Nissan', model: 'Qashqai', color: 'Orange' },
// { make: 'Toyota', model: 'Corolla', color: 'Orange' },
// { make: 'Nissan', model: 'Micra', color: 'Blue' },
// { make: 'Nissan', model: 'Sentra', color: 'Orange' },
// { make: 'Volkswagen', model: 'Jetta', color: 'Orange' },
// { make: 'Ford', model: 'Fiesta', color: 'Blue' },
// { make: 'Nissan', model: 'Juke', color: 'Blue' },
// { make: 'Ford', model: 'Focus', color: 'Orange' },
// { make: 'Ford', model: 'EcoSport', color: 'Red' },
// { make: 'Nissan', model: 'Qashqai', color: 'Blue' },
// { make: 'Toyota', model: 'Yaris', color: 'Orange' },
// { make: 'Toyota', model: 'Yaris', color: 'Blue' },
// { make: 'Toyota', model: 'Corolla', color: 'Blue' },
// { make: 'Nissan', model: 'Micra', color: 'Blue' },
// { make: 'Ford', model: 'Fiesta', color: 'Orange' },
// { make: 'Nissan', model: 'Micra', color: 'White' },
// { make: 'Nissan', model: 'Qashqai', color: 'Red' },
// { make: 'Nissan', model: 'Sentra', color: 'Red' }];


// let displayList = async () => {
//     // alert("google")
//     let list = await axios.get("https://api-tutor.herokuapp.com/v1/cars")
//         .then(function (display) {
//             console.log(display.data);
//             display.data.forEach(cars => {
//                 let li = document.createElement("tr")
//                 li.innerHTML = `<tr> 
//         <td>${cars.color}<td/> `

//                 carsElement.appendChild(li)
//                 console.log(cars);

//             });



//         })
 
        
// }
// enterElem.addEventListener("click",displayList)