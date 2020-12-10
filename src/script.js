//Track Elemnt 
let form = document.getElementById('form');


//on change function
form.onchange = event=>{
    //track element
    let amount = Number(document.getElementById('amount').value);
    let tip = document.getElementById('tip').value;
    
    //Update tip value in span
    document.getElementById('tip-value').innerHTML = `${tip}%`

    // Calculate
    let tipAmount = amount*(tip/100);
    let totalAmount = amount + tipAmount;
    
    if(tipAmount != 0){
        // Display Result Part
        document.getElementById('hr').style.display = 'block';
        document.getElementById('result-part').style.display = 'block';

        //Show Result
        document.getElementById("tip-amount").value =  `> ${tipAmount.toFixed(2)}$`;
        document.getElementById("total-amount").value = `> ${totalAmount.toFixed(2)}$`;
    }
}