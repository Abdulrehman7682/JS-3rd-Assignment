// Alert Section 
document.getElementById("alert").onclick = function(){
    let mani = " Alert By Abdul Rehman"
    alert(mani)
    document.getElementById("output").innerHTML = mani
}
// Print My Name Setion
function printMyName(){
 let x = document.getElementById("input text").value 
 if(x === ""){
    alert("Please Enter Your Name");
    return;
}
 else{
    document.getElementById("output").innerHTML = x
 }
}
// Print Cities Section 
function printAllCities(){
    document.getElementById("output").innerHTML = ""
    let cities = ["Faisalabad","Lahore","Karachi","Isalambad","Burewala","Sheikhupura","Kashmir",]
   for(i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 + ")" + " " + cities[i] + "<br />"
   }
}
// Add City In List 
function addCity(){
    document.getElementById("output").innerHTML = ""
    let cities = ["Faisalabad","Lahore","Karachi","Isalambad","Burewala","Sheikhupura","Kashmir",]
    let addCity = document.getElementById("input text").value
    if(addCity===""){
        alert("Please Enter Your City");
        return;
    }
    else{
        cities.push(addCity)
        }
        for(i=0; i<cities.length;i++)
         document.getElementById("output").innerHTML += i+1 +")"  + " " + cities[i] +"<br />"
    }
// generate table 
function generateTable(){
    document.getElementById("output").innerHTML = ""
    tableNumber = +prompt("please enter table number that use want to generate")
    // document.getElementById("output").innerHTML = `<h3>Table of ${tableNumber}<h3/> <hr />`
    for(let i=1; i<11; i++){
        let table = tableNumber + " * " + i + " = " + tableNumber*i + "<br />"
        document.getElementById("output").innerHTML += table ;
    }
}
// clear Section 
document.getElementById("clear").onclick = function(){
    document.getElementById("input text").innerHTML = ""
}
document.getElementById("clearout").onclick = function(){
    document.getElementById("output").innerHTML = ""
}


