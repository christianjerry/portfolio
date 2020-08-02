document.addEventListener("DOMContentLoaded",()=>{
    var count=0;
   function transitionningRole()
   {
      let jobArray=['a Mobile | Web Developper','a freelancer'];
     let getSubtitle=document.querySelector('.subtitle')
      for(let i=0;i<jobArray.length;i++)
      {
         // getSubtitle.innerHTML=' '
      }
      count++;
      if(count>jobArray.length){
         count=1
      }
      getSubtitle.style.display="block"
      getSubtitle.innerHTML=jobArray[count-1];
      setTimeout( 
         transitionningRole, 2000);
   } 
 //check the page location if we are located at the index page, then show the role
    transitionningRole()
})