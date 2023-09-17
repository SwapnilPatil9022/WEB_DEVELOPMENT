
// Write a javascript program to Display given outputs using for loop.
// output : 
// 2   20
// 4   18
// 6   16
// 8   14
// 10  12
// 12  10
// 14  8
// 16  6
// 18  4
// 20  2


function DisplayNum()
{
    var iNo = 44;
    var cnt = 2;
    for(i = 10; i >= 1; i--)
    {
        console.log((iNo/2-2*i),(cnt*i));
    }
}
DisplayNum();