function carloanCalculate(){
    //principal
    //rate= percent in decimal / 12
    //total payments= term (months)
    //principal / [(1+rate)^terms]-1 / [rate(1+rate)^terms] = monthly payment

    //parse commas and trim to 2 decimal places
    var principal = parseFloat((document.getElementById("loan").value).replace(',','')).toFixed(2);
    var terms = parseFloat((document.getElementById("term").value));
    var rate = parseFloat((document.getElementById("interest").value));
    var result = document.getElementById("loanResult");

    if(!principal || !terms || !rate){
        //for this example website, just doesn't calculate anything for null/bad input
        result.innerHTML = "";
    }
    else{
        //broke up equation for simplicity
        var fixedRate = (rate/100) / 12;
        console.log(fixedRate);

        var exponent = Math.pow((1+fixedRate), terms);
        console.log(exponent);

        var numerator = principal / (exponent - 1);
        console.log(numerator);

        var denominator = fixedRate * exponent;
        console.log("denom "+ denominator);

        var monthly = principal * ((fixedRate * exponent)/(exponent - 1));

        result.innerHTML = "$"+monthly.toFixed(2);
    }
   
}