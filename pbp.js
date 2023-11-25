window.onload=()=>{
  //where "iv" represents initial investment
//"ac" represents annual cashflow
  
  function pbp(iv,ac){
 
   let yr = 0;
   
   for(let i = iv; i >= ac;i-=ac){
       yr++
        
    }
    return yr
      
  }
  
  console.log(pbp(1000,300))
  
  ￼Enter
