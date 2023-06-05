document.getElementById("viewimage-modal").innerHTML = `
    <div class=" flex flex-row justify-center items-center text-white">
        <div class="flex flex-col  laptop:my-3  laptop:gap-y-8 tablet:my-16  tablet:gap-y-8  mobile:my-[12rem] mobile:gap-y-7 ">
            <h3 id="modal-closer" class=" hover:text-opacity-[0.25] cursor-pointer font-libre text-[0.875rem] font-bold tracking-[0.1875rem] self-end text-white">close</h3>
            <img id="preview-image" src="" alt="image preview"  class=" tablet:w-[41.8575rem] tablet:h-[32.5rem] mobile:w-[20.4375rem] mobile:h-[16.4375rem]"/>
        </div>
    </div>


`;