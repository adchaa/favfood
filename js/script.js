const t=["html.","css.","javascript."];
let i=0;
let j=0;
let a;
function x()
{
    setTimeout(textch,2500);
}
document.addEventListener("DOMContentLoaded",x());
function text_clear()
{
    if (i!=0)
    {
        a.innerHTML=a.innerHTML.substring(0,a.innerHTML.length-1);
        i--;
        setTimeout(text_clear,150);
    }
    else
    {
        if (j==2)
        {
            j=0;
        }
        else
        {
            j++; 
        }

        setTimeout(textch,3000);
    }
}
function textch()
{
    a=document.getElementById("text");
    if (i<t[j].length)
    {
        a.innerHTML+=t[j].charAt(i);
        i++;
        
        setTimeout(textch,250);
    }
    else
    {
        setTimeout(text_clear,3500);
    }
}