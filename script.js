let string ="";
let buttons=document.querySelectorAll("button")
Array.from(buttons).forEach((e)=>{
    e.addEventListener('click', (a)=>{
        if(a.target.innerHTML =='='){
            string= eval(string)
            document.querySelector("input").value=string    
        }
         else if(a.target.innerHTML =='Clear'){
            string= ""
            document.querySelector("input").value=string    
        }
        
        else{
            
        console.log(a.target)
        string= string + a.target.innerHTML;
       document.querySelector("input").value=string
        }
    })
});