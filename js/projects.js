    function closeModal()  /*this function is triggered when the close modal button is clicked */
    {
       let getModal=document.querySelector('.closeModal');
       let modal=document.querySelector('.modalDiv');
       let modalImage=document.querySelector('.modalImg')
       getModal.addEventListener('click',()=>{
         modal.style.display="none"
         document.body.style.overflow="scroll"

       })
       let getProjects=document.querySelectorAll(".project")
       getProjects.forEach(project => {project.addEventListener('click',(e)=>{
        let getImg=e.target.getAttribute('src')
        modalImage.src=getImg;
         modal.style.display="flex"
         document.body.style.overflow="hidden"
       })
    })
    }
   
  //check the page location if we are located at the projects page, then show the Modal
    closeModal()