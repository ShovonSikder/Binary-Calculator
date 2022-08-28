var num1=0;
var num2=0;
var operator='';
var power=0;
var dispaly=document.getElementById("display");

// function for = button
function getResult(){
    switch (operator) {
        case '+':
            dispaly.innerHTML=decimalTobinary(addition());
            break;
        case '-':
            dispaly.innerHTML=decimalTobinary(subtraction());
            break;
        case '*':
            dispaly.innerHTML=decimalTobinary(multiplication());
            break;
        case '/':
            dispaly.innerHTML=decimalTobinary(divition());
            break;
    
        default:
            break;
    }
        
}

//function for 0 1 button
function bulitNumberFromBit(bit){
    var dispalyString=dispaly.innerHTML;
    dispaly.innerHTML=bit+dispalyString;

    var decimal;
    if(bit==='1')
        decimal=Math.pow(2,power);
    else
        decimal=0;

    if(operator==='')
        num1+=decimal;
    else
        num2+=decimal;
    
    power++;
}

// function for +,-,*,/ buttons
function operation(op){
    dispaly.innerHTML=op;
    operator=op;
    power=0;
}


function addition(){
    return num1+num2;

}

function subtraction(){
    return num1-num2;
}

function multiplication(){
    return num1*num2;
}

function divition(){
    return (num2===0) ? "Infinity": num1/num2;
}

// function for C button
function clearContents(){
    num1=0;
    num2=0;
    operator='';
    power=0;
    dispaly.innerHTML="|";
}

// convert decimal to binary
function decimalTobinary(num){
    console.log(num);
    if(num==="Infinity"){
        return "Infinity";
    }
    var floatPart=num-parseInt(num);
    num=parseInt(num);
    var result="";
    while(num!=0){
        result=num%2+result;
        num=parseInt(num/2);
    }

    if(floatPart>0){
        
        result+=".";
        while(floatPart!=0){
            result+=parseInt(floatPart*2);
            floatPart=floatPart*2-parseInt(floatPart*2);
        }
    }  
    
    return result;

}
