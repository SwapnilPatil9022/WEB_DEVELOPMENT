// Print the given number of given array Arr = [2,3,4,7,9,8,8]
// output : 
// 2
// 4
// 8
// 8

function EvenNumArray()
{
    Arr = [2,3,4,7,9,8,8]
    cnt = 0;

    for(let i = 0; i <= Arr.length; i++)
    {
        if((Arr[i] % 2)=== 0)
        {
            console.log(Arr[i]);
        }
    }
}

EvenNumArray()