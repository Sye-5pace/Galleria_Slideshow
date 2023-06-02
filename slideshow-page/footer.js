document.querySelector('#footer').innerHTML = `

    <div class=" flex flex-col">
        <div class="relative bg-mercury w-full h-[0.0625rem]">
             <div id="progress-bar"  class="bg-black w-[1.5625rem] h-[0.0625rem]"></div> 
        </div>
        <div class="flex flex-row tablet:gap-[16rem] tablet:my-6 mobile:my-4 border-2 border-dashed border-[#fa7f0c] mobile:mx-6 tablet:mx-10  items-center tablet:w-[43.1056rem] tablet:h-[2.9375rem] mobile:h-[2.4375rem]" >
            <div class="tablet:w-[22.4375rem] tablet:gap-y-[0.7rem] mobile:h-[2.375rem] mobile:flex mobile:flex-col mobile:gap-y-[0.5rem]">
                <h3 id="footer-h3" class="tablet:text-[1.125rem] tablet:leading-[1.375rem] font-libre font-bold mobile:text-[0.875rem] mobile:leading-[1.085rem] text-black"></h3>
                <p id="footer-p" class="font-libre tablet:text-[0.8125rem] tablet:leading-[1rem] tablet:text-opacity-[0.75] mobile:text-[0.625rem] mobile:leading-[0.775rem]"></p>
            </div>
            <div class="mobile:w-[4rem] mobile:h-[1rem] mobile:my-2 flex flex-row  gap-6">
                <div id="back-btn" class="fill-none w-[1.04875rem]">
                    <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2"/>
                        <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/></g>
                    </svg>
                </div>
                <div id="forward-btn" class="w-[1.04875rem]" >
                    <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd">
                        <path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/></g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    `;
