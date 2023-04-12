
         var items=[...document.querySelectorAll("input")];
        
        document.querySelector("button").addEventListener('click',function(){

            
                if(items[3].value.length<8){
                    alert("password is too short!!")
                }
    
        })
        