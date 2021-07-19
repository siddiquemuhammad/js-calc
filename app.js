var txt = document.getElementById("display");

function button(a)
{
    txt.value+=a;
}
function res()
{   
    var bool =true;
     for(i=0;i<txt.value.length;i++)
     {
        //console.log(" in the loop");

        if(  (is_op(txt.value[i])) &&  (is_op(txt.value[i+1])) )
       {
        //console.log((txt.value[i]) + (txt.value[i+1]));
        bool = false;
     alert("invalid input");
      txt.value="";
      break;  
       }
        
     } 
     if(bool)
        {
            txt.value=eval(txt.value);
        }
    

  
}

function reset()
{
    txt.value="";
}

function is_op(a)
{
    switch(a)
    {
        case '+' :
        return true;
        break;
        case '-' :
        return true;
        break;
        case '*' :
        return true;
        break;
        case '%' :
        return true;
        break;
        default:
            break;
    }

}