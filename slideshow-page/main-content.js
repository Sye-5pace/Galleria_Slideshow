document.querySelector('#main-content').innerHTML =`

    <div class="mobile:flex mobile:flex-col  mobile:h-[55.9375rem] mobile:mt-8 mobile:mx-6">
        <div class="border-2 border-dashed border-[#6ac] mobile:h-[24.875rem]">
            <div id="slidepage-image"  class="mobile:h-[17.5rem] mobile:mt-10 ">
            </div>
            <div id="viewImage-btn" class="mobile:w-[9.5rem] flex flex-row items-center justify-center gap-[0.875rem] mobile:h-10 mobile:z-[500] mobile:bg-black mobile:relative mobile:bottom-[17rem]  mobile:left-4">
                <svg class="w-[0.75rem] h-[0.75rem]" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#FFF" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g>
                </svg>
                <h2 class="font-libre text-white font-bold text-[0.625rem] leading-[0.75rem] tracking-[0.125rem] text-right" >VIEW IMAGE</h2>
            </div>
            <div id="image-details"  class="mobile:h-[6.5rem] mobile:w-[17.5rem] mobile:relative mobile:bottom-14 p-4 bg-[#fff] "></div>
            <div id="artist-image"  class="h-[4rem] w-[4rem] mobile:relative mobile:bottom-14 mobile:left-3 " ></div>
        </div>
        <div class="mobile:flex mobile:flex-col mobile:h-[33rem] mobile:items-end mobile:gap-y-10 mobile:mt-[-1.3rem]  children:border-2 children:border-dashed children:border-[#f13] mobile:border-2 mobile:border-dashed mobile:border-[#23a]">
            <div class="mobile:flex mobile:flex-col">
                <h1 id="art-year"  class="mobile:w-[14.875rem] mobile:h-[6.25rem] self-end font-libre text-[6.25rem] leading-[6.25rem]"></h1>     
                <p id="art-desc" class="mobile:relative mobile:bottom-7"></p>
            </div>
            <a id="image-link"  class="link2  w-[6.375rem] h-[0.6875rem]  mobile:self-start" href='' target='_blank'></a>     
        </div>
    </div>
`;