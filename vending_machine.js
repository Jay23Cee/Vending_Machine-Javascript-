
// VENDING MACHINE SELECTION
var Machine= {1:["coke", 2.60], 2:["Orange Fanta", 2.60], 3:["7up", 2.75], 4:["Water", 1.50]}

  
//When user Click on an option. This functino is  activated
function Payment(clicked_id){
   
    // getting the user Selection (id name  of html) of the form.
    selection = document.getElementById(clicked_id).value
            // getting value of this key.
        var dis = Machine[selection]
        // getting -0 element
        var name= dis[0].toString()
        //getting 1 element. cost and having 2 decimal places
            var cost = dis[1].toFixed(2)
            //displaying an alerrt
            alert("you selected a " +name)
            alert("your payment is: $" + cost )

            //
    

}

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

