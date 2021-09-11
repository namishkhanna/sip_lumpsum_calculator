var principalInput = "", rateOfInterestInput = "", totalTimeInvestInput = "", totalTimeHoldInput = "", futureValueOutput = "", increaseInvestmentAnnualyRateInput = "";
var principal = 0, compoundedInterest = 0, totalTimeInvest = 0, totalTimeHold = 0, rateOfInterest = 0, depositAmount = 0, totalInterest = 0, futureValueBeforeHold = 0, futureValue = 0;
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
    totalTimeInvestInput = document.getElementById("totalTimeInvest").value;
    totalTimeHoldInput = document.getElementById("totalTimeHold").value;
    

    principal = parseFloat(principalInput);
    rateOfInterest = parseFloat(rateOfInterestInput);
    totalTimeInvest = parseInt(totalTimeInvestInput);
    totalTimeHold = parseInt(totalTimeHoldInput);
    

    compoundedInterest = rateOfInterest / 1200;
    futureValueBeforeHold = Math.round(principal * (Math.pow((1 + compoundedInterest), totalTimeInvest * 12) - 1) * (1 + compoundedInterest) / compoundedInterest);

    
    if(isNaN(totalTimeHold) || totalTimeHold == 0){
        futureValue = futureValueBeforeHold;
    }
    else{
        futureValue = Math.round(futureValueBeforeHold * (Math.pow((1 + rateOfInterest / 100), (totalTimeHold))));
    }
    

    depositAmount = principal * totalTimeInvest * 12;
    totalInterest = (futureValue - depositAmount);
    

    if(isNaN(depositAmount) || depositAmount == 0 || isNaN(totalTimeInvest) || totalTimeInvest == 0){
        depositAmount = 0;
        totalInterest = 0;
        futureValue = 0;
    }

    if(isNaN(rateOfInterest) || rateOfInterest == 0){
        totalInterest = 0;
        futureValue = 0;
    }

    
    if(isNaN(depositAmount) || depositAmount == 0){
        document.getElementById("depositAmount").innerHTML = "0";
        document.getElementById("depositAmountWords").innerHTML = "";
    }
    else{
        document.getElementById("depositAmount").innerHTML = depositAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("depositAmountWords").innerHTML = " ( " + inWords(depositAmount) + ")";
    }

    if(isNaN(totalInterest) || totalInterest == 0){
        document.getElementById("totalInterest").innerHTML = "0";
        document.getElementById("totalInterestWords").innerHTML = "";
    }
    else{
        document.getElementById("totalInterest").innerHTML = totalInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("totalInterestWords").innerHTML = " ( " + inWords(totalInterest) + ")";
    }

    if(isNaN(futureValue) || futureValue == 0){
        document.getElementById("futureValue").innerHTML = "0";
        document.getElementById("futureValueWords").innerHTML = "";
    }
    else{
        document.getElementById("futureValue").innerHTML = futureValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("futureValueWords").innerHTML = " ( " + inWords(futureValue) + ")";
    }
}