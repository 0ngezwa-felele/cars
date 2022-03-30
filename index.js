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