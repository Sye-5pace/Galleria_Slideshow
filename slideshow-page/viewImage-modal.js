document.addEventListener("DOMContentLoaded",()=>{
    const viewImageBtn = document.getElementById('viewImage-btn');
    const viewImageModal = document.getElementById('viewimage-modal')

    viewImageBtn.addEventListener('click',()=>{
        viewImageModal.style.display = 'block';
        const modalCard = document.createElement('div');
        modalCard.classList.add('bg-[#25a]','mobile:h-[27.44rem]');

        const  viewImageContainer = document.createElement('div');
        viewImageContainer.classList.add('border-2','border-dashed','border-[#1af]','mt-[5.625rem]');

        const modalImageAdded = true;
        if(!modalImageAdded ){
            viewImageContainer.appendChild(modalCard);
        }
        viewImageModal.appendChild(viewImageContainer);
    });
})






