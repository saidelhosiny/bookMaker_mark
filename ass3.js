var siteNameInp = document.getElementById("siteName");
var siteUrlInp  = document.getElementById("siteUrl");
var inp1= document.getElementById("input1");
var inp2= document.getElementById("input2");
var pockMarkCountainer;

if(localStorage.getItem("mark")==null)
    {
        pockMarkCountainer=[];
    }
   else
   {
       pockMarkCountainer=JSON.parse(localStorage.getItem("mark"));
       display();
   }


var btn   = document.getElementById("myBtn");
btn.onclick=function(){
    
    if(reg()==true)
        {
              addPockmark();
              display();
              clearForm();
        }
    else
        {

            inp1.style.opacity=1;
            inp2.style.opacity=1;
        }
 
    
   
}


function addPockmark()
{
    var pockMark= 
    {
       pockMarkName: siteNameInp.value,
       pockMarkUrl:siteUrlInp.value 
    };
    pockMarkCountainer.push(pockMark);
    localStorage.setItem("mark", JSON.stringify(pockMarkCountainer));
}

function reg()
{ 
    
    var regex=/^[A-Z]/;
    var regex2=/^((https?))/;
    if(regex.test(siteNameInp.value) == false ||  
                       regex2.test(siteUrlInp.value) == false)
        {
          alert("false");
          return false;   
        }
    else
        {
            return true;
        }
}
function display()
{
    var col="";
    for(var i=0 ;i<pockMarkCountainer.length;i++)
        {
            col+=`<div >
                 <div class="row py-3 ">
                      <div class="col-md-6 col-sm-9 py-3 " style="background-color:#EEE">
     <h2 style="  padding-left: 10px;" >`+pockMarkCountainer[i].pockMarkName+`</h2>
                      </div>

               <div class="col-md-6 col-sm-3  py-3 " style="background-color:#EEE">
   <a class="btn btn-primary " href="`+pockMarkCountainer[i].pockMarkUrl+`" target="_blank">visit</a>
 <button class="btn btn-danger btndelete" onclick="deleteMark(`+i+`)">Delete</button>
                    </div>
       

               </div>
         </div>`
        }
    
    document.getElementById("bookmarkList").innerHTML=col;
    
}
function deleteMark(i)
{
    pockMarkCountainer.splice(i,1);
    localStorage.setItem("mark", JSON.stringify(pockMarkCountainer));
    display();
}
function clearForm()
{
     siteNameInp.value="";
     siteUrlInp.value="";
    
}