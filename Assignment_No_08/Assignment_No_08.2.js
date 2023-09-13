// Write a program in javascript to check whether given number is prime or not.

function ChkPrimes(No)
{
    {let factor=0;
    
    for(let i=0;i<=number;i++)
        {
            if((number%i)===0)
            {
                factor++
            }
        }
        if(factor==2)
        {
            console.log("prime");
        }
        else
        {
            console.log("Not prime");
        }
    }
}

const prompt = require("prompt-sync")();
var number = prompt("Enter the number : ");

ChkPrimes(number);