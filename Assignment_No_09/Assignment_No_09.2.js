// Write a javascript program to Display given outputs using for loop.
// output :
// 20
// 18
// 16
// 14
// 12
// 10
// 8
// 6
// 4
// 2
// 0

function DisplayNum()
{
    let iNo = 2;
    icnt = 0;
    for(i = 10; i >= 0; i--)
    {
        icnt = iNo * i;
        console.log(icnt);
    }

}

DisplayNum();