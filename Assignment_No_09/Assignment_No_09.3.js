// print the sum of all elemenet in the given array arr = [2,4,6,8,2,4,6,8]
// output : 40

function SumOfArr()
{
    let Arr = [2,4,6,8,2,4,6,8];
    var sum = 0;

    for(let i = 0; i <= Arr.length - 1; i++)
    {
        sum = sum + Arr[i];
        console.log(sum);
    }

    console.log("Sum of array element is :",sum);
}

SumOfArr();