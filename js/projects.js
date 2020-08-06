function hideLoader(){ // this function will be triggered once the page has finished loading
  let getDiv=document.querySelectorAll('.project');
  getDiv.forEach(div=>{
    div.classList.remove("loaderProject")
  })
}
var width=-0;
function animateLoader()
{
  let projectDivWidth=document.querySelector('.project');
  console.log(projectDivWidth.innerWidth)
  let getLoaders=document.querySelectorAll('.loader');
  getLoaders.forEach(loader=>{
    if( window.innerWidth<400 && width>300)
    {
      width=0;
    }
    else
    {
      loader.style.width=width+'px';
      width+=10;
    }
})

}
let interval=setInterval(animateLoader,150);

  document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
      hideLoader()
      clearInterval(interval);
    }
      ,1000)
   function closeModal()  /*this function is triggered when the close modal button is clicked */
    {
       let getModal=document.querySelector('.closeModal');
       let modal=document.querySelector('.modalDiv');
       let modalImage=document.querySelector('.modalImg')
       getModal.addEventListener('click',()=>{
         modal.style.display="none"
         document.body.style.overflow="scroll"
         document.body.classList.remove('bgOpacity')

       })
       let getProjects=document.querySelectorAll(".project")
       getProjects.forEach(project => {project.addEventListener('click',(e)=>{
        let getImg=e.target.getAttribute('src')
        modalImage.src=getImg;
         modal.style.display="flex"
         document.body.style.overflow="hidden"
         document.body.classList.add('bgOpacity')
       })
    })
    }
   
  //check the page location if we are located at the projects page, then show the Modal
    closeModal()  
   })
   
   
   
   