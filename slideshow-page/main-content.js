document.querySelector('#main-content').innerHTML =`

    <div class="laptop:flex laptop:flex-row laptop:gap-4 laptop:mx-10 laptop:mt-4 laptop:mb-[4rem]  tablet:mt-10 tablet:mx-10 tablet:flex tablet:flex-col tablet:gap-y-16 mobile:flex mobile:flex-col  mobile:h-[55.9375rem] mobile:mt-8 mobile:mx-6">
        <div class="border-2 border-dashed border-[#6ac] laptop:flex laptop:flex-row laptop:w-[53.4375rem] laptop:h-[39rem] tablet:flex tablet:flex-row tablet:h-[35rem] tablet:w-[43rem] mobile:h-[24.875rem]">
            <div id="slidepage-image"  class="mobile:h-[17.5rem] mobile:mt-10 ">
            </div>
            <div id="viewImage-btn" class="mobile:w-[9.5rem]  flex-row mobile:items-center mobile:justify-center mobile:gap-[0.875rem] mobile:h-10 mobile:z-[500] mobile:bg-black hidden  mobile:bottom-[17rem]  mobile:left-4">
                <svg class="w-[0.75rem] h-[0.75rem]" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#FFF" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g>
                </svg>
                <h2 class="font-libre text-white font-bold text-[0.625rem] leading-[0.75rem] tracking-[0.125rem] text-right" >VIEW IMAGE</h2>
            </div>
            <div class="laptop:flex laptop:flex-col  laptop:left-[31%] children:border-2 children:border-dashed children:border-[#4081aa] absolute tablet:left-[37%] tablet:flex tablet:flex-col">
                <div id="image-details"  class="w-[27.8125rem]  tablet:pl-[4.0625rem] flex flex-col laptop:gap-y-2 tablet:gap-y-4 h-[14.875rem] mobile:h-[6.5rem] mobile:w-[17.5rem] relative mobile:bottom-14 p-4 bg-[#fff] "></div>
                <div id="artist-image"  class="laptop:ml-[6rem] tablet:ml-[16.4rem] laptop:mt-[16rem] w-[8rem] h-[8rem] mobile:h-[4rem] mobile:w-[4rem] relative mobile:bottom-14 mobile:left-3 " ></div>

            </div>
        </div>
        <div class="border-2 border-dashed border-[#2190be] laptop:w-[29.75rem] laptop:h-[36.375rem] laptop:gap-y-[10rem] tablet:w-[32.8125rem] tablet:h-[25.375rem] tablet:gap-y-7 flex flex-col mobile:h-[33rem] mobile:items-end mobile:gap-y-10 mobile:mt-[-1.3rem] ">
            <div class="flex flex-col ">
                <h1 id="art-year"  class="laptop: tablet:ml-[-5rem] mobile:w-[14.875rem] mobile:h-[6.25rem] mobile:self-end font-libre  mobile:text-[6.25rem] leading-[6.25rem]"></h1>     
                <p id="art-desc" class="mobile:relative mobile:bottom-7"></p>
            </div>
            <a id="image-link"  class="link2 underline text-boulder font-libre font-bold  w-[6.375rem] h-[0.6875rem] tablet:ml-[4rem] mobile:self-start" href='' target='_blank'></a>     
        </div>
    </div>
`;


