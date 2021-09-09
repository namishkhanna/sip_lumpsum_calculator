var principalInput = "", rateOfInterestInput = "", totalTimeInvestMonthInput = "", totalTimeHoldMonthInput = "", futureValueOutput = "";
var principal = 0, compoundedInterest = 0, totalTimeInvestMonth = 0, totalTimeHoldMonth = 0, rateOfInterest = 0, depositAmount = 0, totalInterest = 0, futureValueBeforeHold = 0, futureValue = 0;
var word1 = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
var word2 = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];


function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (word1[Number(n[1])] || word2[n[1][0]] + ' ' + word1[n[1][1]]) + 'Crore ' : '';
    str += (n[2] != 0) ? (word1[Number(n[2])] || word2[n[2][0]] + ' ' + word1[n[2][1]]) + 'Lakh ' : '';
    str += (n[3] != 0) ? (word1[Number(n[3])] || word2[n[3][0]] + ' ' + word1[n[3][1]]) + 'Thousand ' : '';
    str += (n[4] != 0) ? (word1[Number(n[4])] || word2[n[4][0]] + ' ' + word1[n[4][1]]) + 'Hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (word1[Number(n[5])] || word2[n[5][0]] + ' ' + word1[n[5][1]]) + 'only ' : '';
    return str;
}


function calculateValue(){
    principalInput = document.getElementById("principal").value;
    rateOfInterestInput = document.getElementById("rateOfInterest").value;
    totalTimeInvestMonthInput = document.getElementById("totalTimeInvestMonth").value;
    totalTimeHoldMonthInput = document.getElementById("totalTimeHoldMonth").value;
    
    principal = parseFloat(principalInput);
    rateOfInterest = parseFloat(rateOfInterestInput);
    totalTimeInvestMonth = parseInt(totalTimeInvestMonthInput);
    totalTimeHoldMonth = parseInt(totalTimeHoldMonthInput);
    
    compoundedInterest = rateOfInterest / 1200;
    futureValueBeforeHold = Math.round(principal * (Math.pow((1 + compoundedInterest), totalTimeInvestMonth) - 1) * (1 + compoundedInterest) / compoundedInterest);
    futureValue = Math.round(futureValueBeforeHold * (Math.pow((1 + rateOfInterest/100), (totalTimeHoldMonth/12))));
    
    depositAmount = principal * totalTimeInvestMonth;
    totalInterest = (futureValue - depositAmount);

    if(isNaN(depositAmount) || depositAmount == 0 || isNaN(totalTimeInvestMonth) || totalTimeInvestMonth == 0){
        depositAmount = 0;
        totalInterest = 0;
        futureValue = 0;
    }

    if(isNaN(rateOfInterest) || rateOfInterest == 0 || isNaN(totalTimeHoldMonth)){
        totalInterest = 0;
        futureValue = 0;
    }

    document.getElementById("depositAmount").innerHTML = depositAmount.toString();
    document.getElementById("totalInterest").innerHTML = totalInterest.toString();
    document.getElementById("futureValue").innerHTML = futureValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(futureValue != 0){
        document.getElementById('futureValueWords').innerHTML = " ( " + inWords(futureValue) + ")";
    }
    else{
        document.getElementById('futureValueWords').innerHTML = "";
    }
}
