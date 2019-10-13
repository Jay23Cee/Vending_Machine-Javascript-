// Need to be worked on more. 
// Needs to display the menu to html.



var menu_html = document.getElementsByName("menu")
var machine = []; // create an empty array
var Machine= {1:["coke", 2.60], 2:["Orange Fanta", 2.60], 3:["7up", 2.75], 4:["Water", 1.50]}
machine[1]= ["coke", 2.60]
machine[2]= ["Orange Fanta", 2.60],
machine[3]= [ "7up", 2.75 ],
machine[5]= [ 'water',  1.50 ]


function Payment(){

    // getting the user Selection (id name  of html) of the form.
    selection = document.getElementById("selection").value
            // getting value of this key.
        var dis = Machine[selection]
        // getting -0 element
        var name= dis[0].toString()
        //getting 1 element. cost and having 2 decimal places
            var cost = dis[1].toFixed(2)
            //displaying an alerrt
            alert("you selected a " +name)
            alert("your payment is: $" + cost )
    alert("PAYMENT WAS RECEIVED")

}

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

