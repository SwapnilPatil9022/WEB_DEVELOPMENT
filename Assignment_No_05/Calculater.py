<!DOCTYPE html>
<html>
    <head>
        <title>calculator</title>
        <style>
            table,tr,td{
                border: 1px solid;
                border-collapse: collapse;
                border-radius: 15px;   
            }
            td{
                height: 60px;
                width: 70px;
                text-align: center;

            }
            button{
                background-color:#ccc;
                height: 100%;
                width: 100%;
            }
            button:hover{
                background-color: #aaa;
                color: white;
            }
            #div1 input{
                width:920px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 30px;
            }
            #div2 input{
                width:850px;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 30px;
            }
            #equal{
                background-color: rgb(49, 216, 49);
                color: white;
            }
            #equal:hover{
                background-color:orange;
                color: black;
            }
            .group{
                background-color: rgb(255, 2, 2);
            }
            .group:hover{
                background-color: rgb(160, 11, 11);
            }

        </style>
    </head>
    <body>
        <table>
            <tr>
                <td  id="div1" colspan="11"><input type="text"></td>
            </tr>
            <tr>
                <td><button></button></td>
                <td id="div2" colspan="10"><input type="textbox" value=""></td>
            </tr>
            <tr>
                <td><button>mod</button></td>
                <td colspan="5"><input type="radio" name="choice" id="deg">
                    <label for="deg">deg</label>

                    <input type="radio" name="choice" id="rad">
                    <label for="rad">rad</label>
                </td>
                <td><button>MC</button></td>
                <td><button>MR</button></td>
                <td><button>MS</button></td>
                <td><button>M+</button></td>
                <td><button>M-</button></td>
            </tr>
            <tr>
                <td><button>sinh</button></td>
                <td><button>cosh</button></td>
                <td><button>tanh</button></td>
                <td><button>Exp</button></td>
                <td><button>(</button></td>
                <td><button>)</button></td>
                <td colspan="2"><button class="group"><-</button></td>
                <td><button class="group">C</button></td>
                <td><button class="group">+/-</button></td>
                <td><button>&radic;</button></td>
                </tr>

                <tr>
                    <td><button>sinh <sup>-1</sup></button></td>
                    <td><button>cosh <sup>-1</sup></button></td>
                    <td><button>tanh <sup>-1</sup</button></td>
                    <td><button>log <sub>2</sub>x</button></td>
                    <td><button>In</button></td>
                    <td><button>log</button></td>
                    <td><button>7</button></td>
                    <td><button>8</button></td>
                    <td><button>9</button></td>
                    <td><button>/</button></td>
                    <td><button>%</button></td>
                </tr>
                <tr>
                    <td><button>&prod;</button></td>
                    <td><button>e</button></td>
                    <td><button>n!</button></td>
                    <td><button>log <sub>y</sub>x</button></td>
                    <td><button>e <sup>x</sup></button></td>
                    <td><button>10 <sup>x</sup></button></td>
                    <td><button>4</button></td>
                    <td><button>5</button></td>
                    <td><button>6</button></td>
                    <td><button>*</button></td>
                    <td><button>1/x</button></td>
                </tr>
                <tr>
                    <td><button>sin</button></td>
                    <td><button>cos</button></td>
                    <td><button>tan</button></td>
                    <td><button>x <sup>y</sup></button></td>
                    <td><button>x <sup>3</sup></button></td>
                    <td><button>x <sup>2</sup></button></td>
                    <td><button>1</button></td>
                    <td><button>2</button></td>
                    <td><button>3</button></td>
                    <td><button>-</button></td>
                    <td rowspan="2"><button id="equal">=</button></td>
                </tr>
                <tr>
                    <td><button>sin <sup>-1</sup></button></td>
                    <td><button>cos <sup>-1</sup></button></td>
                    <td><button>tan <sup>-1</sup></button></td>
                    <td><button>y <sub>&radic;</sub></button></td>
                    <td><button>3 <sub>&radic;</sub></button></td>
                    <td><button>|x|</button></td>
                    <td colspan="2"><button>0</button></td>
                    <td><button>.</button></td>
                    <td><button>+</button></td>
                </tr>
        </table>
    </body>
</html>
