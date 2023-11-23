
var keys = document.querySelectorAll("#keyboard>div")
var bag=""
for(var i=0;i<keys.length;i++)
    {
        keys[i].addEventListener("click",myCalc)
    }

function myCalc()
    {
        var targetNumber=event.target.innerText

        if(targetNumber=="C")
        {
            document.querySelector("#display").innerText=""
            bag="";
        }
        else if(targetNumber=="=")
        {
            document.querySelector("#display").innerText=eval(bag);
        }
        else
        {
            bag = bag+targetNumber;
            document.querySelector("#display").innerText=bag;
        } 
    }