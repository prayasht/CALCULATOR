let num = "";
let sol;
    function show(n) {
        if(n==="+"||n==="-"||n==="*"||n==="/")
            num+=" "+n+" ";
        else
        num += n;
        document.getElementById("b1").value = num;
    }
    function erase(){
        num= "";
        document.getElementById("b1").value= "";
    }
    function back(){
       num= num.slice(0,-1);
       document.getElementById("b1").value = num; 
    }
    function result(){
    let res=num.split(" ");
      console.log(res);    
                while(res.length>1){
            var a=res.indexOf("/");
           var b=res.indexOf("*");
           var c=res.indexOf("+");
           var d=res.indexOf("-");
           if(a!=-1){
            res[a-1]=res[a-1]/res[a+1];
            res.splice(a,2);
            console.log(res);
            }
        else if(b!=-1){
        res[b-1]=res[b-1]*res[b+1];
        res.splice(b,2);
        console.log(res);

        }
        else if(c!=-1){
            res[c-1]=parseFloat(res[c-1])+parseFloat(res[c+1]);
            res.splice(c,2);
            console.log(res);
            }
         else if(d!=-1){
                res[d-1]=res[d-1]-res[d+1];
                res.splice(d,2);
                console.log(res);    
            }  
        }
        document.getElementById("b1").value=res;
    }