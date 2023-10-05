// Write Program to print “WEBx86” on first line & “Infotech” on second line.
//  Print this 10 times (use only one while loop).
// Output:
// WEBx86
// Infotech
// WEBx86
// Infotech
// WEBx86
// Infotech
// .
// .
// .
// WEBx86
// Infotech


function Display()
{
    const Num = [12, 58, 65, 85, 35, 75, 6, 24];
    let MaxNum = 0;
    let MinNum = 0;
    let Secound_MaxNum = 0;

    for(i = 0; i <= Num.length; i++)
    {
        if(Num[i] > MaxNum)
        {
            console.log(Num[i])       
        }
        if(Num[i] < MinNum)
        {
            console.log(Num[i])       
        }
    }
}
Display();

