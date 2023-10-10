// Write Program to find each element from inputted array is divisible by both 3 & 8 or
// only by 3 or only by 8 or not by both 3 & 8 and print given number with comment
// shown in output.(Use template literal for output string.)
// const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];
// Output :
//  12 is divisible by 3.
//  56 is divisible by 8.
//  755 is not divisible by 8 and 3.
//  . . . .
// i. Write a first approach using for loop with if…else ladder.
// ii. Write a second approach using while loop with switch statement.
// iii. Write a third approach using for of loop with switch statement.
// iv. Write a fourth approach using for in loop with switch statement.


const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];
for(let i=0;i<InputtedNumbers.length;i++)
{
    if(InputtedNumbers[i]%3===0 && InputtedNumbers[i]%8===0)
    {
        console.log(InputtedNumbers[i],"is Divisible both 3 and 8");
    }
    else if(InputtedNumbers[i]%3===0)
    {
        console.log(InputtedNumbers[i],"is Divisible by 3 ");
    }
    else if(InputtedNumbers[i]%8===0)
    {
        console.log(InputtedNumbers[i],"is Divisible by 8");
    }
    else
    {
        console.log(InputtedNumbers[i],"is not divisible by 3 and 8");
    }
}