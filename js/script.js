
document.addEventListener("DOMContentLoaded",()=>{
toggleNightMode()//check if the user has already activated the night mode , if not, switch on
   document.querySelector('.switchBtn').addEventListener('click',slideBtn);
   function slideBtn(){
       let Body=document.body;
       let getBtn=document.querySelector("#toggleBg");
       let StoryDIv=document.querySelector('.story')
      getBtn.classList.toggle('pushBtn');
      if(!localStorage.nightMode)
      {
         Body.classList.toggle('nightBg')
         localStorage.setItem('nightMode',"set")
      }
      else {
            Body.classList.remove('nightBg')
            localStorage.removeItem('nightMode')
      }
   } 
   function toggleNightMode()
   {
      const getLocation=window.location.pathname
      if(localStorage.nightMode)
      {
         document.body.classList.add('nightBg')
         document.querySelector('#toggleBg').classList.add('pushBtn')
         if(getLocation.indexOf('story')!==-1)
         {
           document.querySelector('.story').classList.toggle('text-black') 
         }
      }
      }


})