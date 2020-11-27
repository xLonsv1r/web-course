

class Apartment{
    constructor(adress,numberOfRooms,price, isRepair){
        if(numberOfRooms >0 && price> 0){
            this.numberOfRooms = numberOfRooms;
            this.price = price;
        }
        else{
            this.numberOfRooms = 1;
            this.price = 1000.0;
        }
        this.adress = adress;
        this.isRepair = isRepair;

    }
    show(){
        let html = "";
        html += "<tr>";
        html += "<td>" + this.adress + "</td>";
        html += "<td>" + this.numberOfRooms + "</td>";
        html += "<td>" + this.price + "</td>";
        html += "<td>" + this.isRepair + "</td>";
        html += "</tr>";
        return html;
    }
}
function calculatePrice(numberOfRooms, isRepair){
    let housePrice = numberOfRooms * 1000;
    if(isRepair == true){
        housePrice += housePrice * 2;
    }
    return housePrice;
}
function randomRapair(){

    return Math.round((Math.random() * 1) + 0) === 0;
}
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
var streets  = ['Софиевская','Льва Толстого', 'Крещатик','Софиевская', 'Саксаганского'];
function randomStreetName(){
    randomStreet = randomInteger(0, streets.length - 1);
    return streets[randomStreet];
}
function show_table(){
    let n = document.getElementById('numberRowItems').value;
    if(n <= 0 ){
        n = 5;
    }
    console.log(n);
    let html = "<table class='b-table'>";
    html += "<tr class='b-table__th'><td>Адреса</td><td>Кількість кімнат</td><td>Ціна</td><td>Ремонт</td></tr>";
    n++;
    for(let i = 1; i < n; i++){
        let isRapair = randomRapair();
        console.log(isRapair);
        let housePrice = calculatePrice(i,isRapair);
        adress = randomStreetName();
        let apartment = new Apartment(adress, i, housePrice, isRapair);
        html += apartment.show();
    }
    html += "</table>";
    document.getElementById('result_table').innerHTML = html;
}