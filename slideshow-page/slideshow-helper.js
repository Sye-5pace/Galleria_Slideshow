import galleriaData from '../data.json'

document.addEventListener('DOMContentLoaded',()=>{
        let currentIndex = 0;
        const progressBar = document.getElementById('progress-bar');

        const galleriaDataDisplay = ()=>{
                 // Clear previous content before appending new content
                document.getElementById('image-details').innerHTML = '';
                document.getElementById('slidepage-image').innerHTML = '';
                document.getElementById('artist-image').innerHTML = '';
                document.getElementById('art-year').textContent = '';
                document.getElementById('art-desc').textContent = '';


                const currentArt = galleriaData[currentIndex];

                //Assign corresponding values from the galleriaData.json
                let smallImage = currentArt.images['hero'].small;
                let imageTitledata = currentArt.name;
                let artistNamedata = currentArt.artist['name'];
                let artistImagedata = currentArt.artist['image'];
                let artYeardata = currentArt.year;
                let artDescdata = currentArt.description;
                let artSourcedata = currentArt.source;

                // Creating corresponding/Missing Dom elements and assigning respective values
                const imageTitleH3 = document.createElement('h3');
                imageTitleH3.textContent = imageTitledata;
                imageTitleH3.classList.add('text-[1.5rem]','font-bold','leading-[1.8125rem]','font-libre','text-black');

                const artistName = document.createElement('p');
                artistName.textContent = artistNamedata;
                artistName.classList.add('text-[0.9375rem]','leading-[1.1625rem]','font-libre');        

                // Create and set the source attribute of the img element
                const artistImage = document.createElement('img');
                artistImage.src = artistImagedata;
                console.log(artistImage);

                // Create and set the text content of the h1 element
                const artYear = document.createElement('h1');
                artYear.textContent = artYeardata;
                artYear.classList.add('text-[6.25rem]', 'text-concrete', 'font-bold', 'font-libre', 'text-left');

                // Set the text content of the artDesc element
                const artDesc = document.getElementById('art-desc');
                artDesc.textContent = artDescdata;
                artDesc.classList.add('font-libre', 'font-bold', 'leading-[1.75rem]', 'text-[0.875rem]', 'text-boulder');

                // Set the href attribute and text content of the artSource element
                const artSource = document.getElementById('image-link');
                artSource.href = artSourcedata;
                artSource.textContent = 'GO TO SOURCE';

                // Set the text content of the footer-h3 element
                document.getElementById('footer-h3').textContent = imageTitledata;

                // Set the text content of the footer-p element
                document.getElementById('footer-p').textContent = artistNamedata;

                // Create a container element for appending the respective elements
                const imageDetailsContainer = document.getElementById('image-details');

                // Append the $imageTitle and $artistName elements to the image-details container
                imageDetailsContainer.appendChild(imageTitleH3);
                imageDetailsContainer.appendChild(artistName);

                // Append the $artistImage to the artist-image element
                document.getElementById('artist-image').appendChild(artistImage);

                // Append the $artYear to the art-year element and add a class
                const artYearH1= document.getElementById('art-year');
                artYearH1.appendChild(artYear);
                artYearH1.classList.add('pt-[1.2rem]');

                //Appending content to the corresponding
                //html element
                const img = document.createElement('img');
                img.src = smallImage;
                img.classList.add('-mt-10');
                document.getElementById('slidepage-image').appendChild(img);
        }

        document.getElementById('back-btn').addEventListener('click',() => {
                currentIndex = Math.max(currentIndex - 1, 0);
                galleriaDataDisplay();
                const progressPercentage = ( currentIndex + 1) * 6.67;
                progressBar.style.width = progressPercentage;
        });

        document.getElementById('forward-btn').addEventListener('click',() => {
                currentIndex = Math.min(currentIndex + 1, galleriaData.length -1);
                galleriaDataDisplay();
                const progressPercentage = (currentIndex + 1) * 6.67;
                progressBar.style.width = progressPercentage;
        });

        galleriaDataDisplay();
});



// import galleriaData from '../public/data.json'



// $(function(){
//     let currentIndex = 0;
//     const $progressBar = $('#progress-bar');



    
//         const galleriaDataDisplay = () =>{
//                 const currentArt = galleriaData[currentIndex];

//                 //Assign corresponding values from the galleriaData.json
//                 let smallImage = currentArt.images['hero'].small;
//                 let imageTitledata = currentArt.name;
//                 let artistNamedata = currentArt.artist['name'];
//                 let artistImagedata = currentArt.artist['image'];
//                 let artYeardata = currentArt.year;
//                 let artDescdata = currentArt.description;
//                 let artSourcedata = currentArt.source;

//                   // Clear previous content before appending new content
//                 $('#image-details').empty();
//                 $('#artist-image').empty();
//                 $('#art-year').empty();
//                 $('#art-desc').empty();
//                 $('#slidepage-image').empty();

//                 // Creating corresponding/Missing Dom elements and assigning respective values
//                 const  $imageTitle = $('<h3>')
//                 $imageTitle.text(imageTitledata)
//                 $imageTitle.addClass('text-[1.5rem] font-bold leading-[1.8125rem] font-libre text-black')

//                 const $artistName = $('<p>')
//                 $artistName.text(artistNamedata)
//                 $artistName.addClass('text-[0.9375rem] leading-[1.1625rem] font-libre')

//                 const $artistImage = $('<img/>')
//                 $artistImage.attr('src', artistImagedata)

//                 const $artYear = $('<h1>')
//                 $artYear.text(artYeardata);
//                 $artYear.addClass('text-[6.25rem] text-concrete font-bold font-libre text-left')


//                 const $artSource = $('#image-link')
//                 $artSource.attr('href', artSourcedata)
//                 $artSource.text('GO TO SOURCE')

//                 $('#footer-h3').text(imageTitledata)

//                 $('#footer-p').text(artistNamedata)

//                 //target corresponding DOM element to append their respective elements
//                 $('#image-details').append( $imageTitle,$artistName );
//                 $('#artist-image').append($artistImage)
//                 $('#art-year').append($artYear).addClass('pt-[1.2rem]')
//                 const $artDesc = $('#art-desc')
//                 $artDesc.text(artDescdata)
//                 $('#art-desc').append($artDesc).addClass('font-libre font-bold leading-[1.75rem] text-[0.875rem] text-boulder ')
        

//                 //Appending content to the corresponding
//                 //html element
//                 const $img = $('<img />')
//                 $img.attr('src',smallImage);
//                 $img.addClass('-mt-10')
//                 $('#slidepage-image').append($img)
//         }

//         $('#back-btn').on('click',()=>{
//                 currentIndex = Math.max(currentIndex - 1, 0);
//                 galleriaDataDisplay();
//                 const progressPercentage = (currentIndex+1) * 6.667;
//                 $progressBar.css('width', `${progressPercentage}%`);

//         })

//         $('#forward-btn').on('click',() => {
//                 currentIndex = Math.min(currentIndex + 1, galleriaData.length - 1);
//                 galleriaDataDisplay();
//                 const progressPercentage = (currentIndex+1) * 6.667;
//                 $progressBar.css('width', `${progressPercentage}%`);
//         });

//         galleriaDataDisplay();
// });



// console.log(smallImage);

        // $('#image-link').att/* r('href',)
        /* console.log(smallImage);
        console.log(imageTitle);
        console.log(artistName);
        console.log(artistImage);
        console.log(artYear);
        console.log(artDesc);
        console.log(artSource); */



        // console.log(small);
// const $slidepageImage = $('#slidepage-image');
// const $slideImg = $('<img/>')
// $slideImg.attr('src',)

// fetch('../public/data.json')
//   .then( response => response.json())
//   .then( data => {
//     const galleriaData = data;
//     console.log(galleriaData);
//   })
//  .catch(err=>{console.log(err)}); 