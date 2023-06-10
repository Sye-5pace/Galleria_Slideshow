// import galleriaData from "./data.json";

// const galleriaData = require('./data.json');
import galleriaData from '../data.json';


document.addEventListener('DOMContentLoaded',() => {
        let currentIndex = 0;
        const progressBar = document.getElementById('progress-bar');

        const galleriaDataDisplay = ()=>{
                 // Clear previous content before appending new content
                document.getElementById('image-details').innerHTML = '';
                document.getElementById('slidepage-image').innerHTML = '';
                document.getElementById('artist-image').innerHTML = '';
                document.getElementById('art-year').textContent = '';
                document.getElementById('art-desc').textContent = '';
                document.getElementById('image-link').href = '';


                const currentArt = galleriaData[currentIndex];

                //Assign corresponding values from the galleriaData.json
                let smallImage = currentArt.images['hero'].small;
                let largeImage = currentArt.images['hero'].large;
                let previewImage = currentArt.images['gallery'];
                let imageTitledata = currentArt.name;
                let artistNamedata = currentArt.artist['name'];
                let artistImagedata = currentArt.artist['image'];
                let artYeardata = currentArt.year;
                let artDescdata = currentArt.description;
                let artSourcedata = currentArt.source;

                // Creating corresponding/Missing Dom elements and assigning respective values
                const imageTitleH3 = document.createElement('h3');
                imageTitleH3.textContent = imageTitledata;
                imageTitleH3.classList.add('laptop:leading-[4rem]','laptop:text-left' ,'text-[3.5rem]','tablet:leading-[3rem]','mobile:text-[1.5rem]','font-bold','mobile:leading-[1.8125rem]','font-libre','text-black');

                const artistName = document.createElement('p');
                artistName.textContent = artistNamedata;
                artistName.classList.add('text-boulder','text-[0.9375rem]','leading-[1.1625rem]','font-libre');       


                // Create and set the source attribute of the img element
                const artistImage = document.createElement('img');
                artistImage.src = artistImagedata;
                // console.log(artistImage);

                // Create and set the text content of the h1 element
                const artYear = document.createElement('h1');
                artYear.textContent = artYeardata;
                artYear.classList.add('laptop:text-[12.5rem]','laptop:leading-[9.375rem]','tablet:ml-[4rem]','tablet:text-[12.5rem]','mobile:text-[6.25rem]', 'text-concrete', 'font-bold', 'font-libre', 'text-left');

                // Set the text content of the artDesc element
                const artDesc = document.getElementById('art-desc');
                artDesc.textContent = artDescdata;
                artDesc.classList.add('laptop:w-[21.875rem]','laptop:text-left','laptop:mt-[-2.4rem]','tablet:self-end','tablet:mt-[-2rem]','tablet:w-[28.5625rem]','tablet:h-[17.5625rem]','mobile:text-right','font-libre', 'font-bold', 'leading-[1.75rem]', 'text-[0.875rem]', 'text-boulder');

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
                img.classList.add('mobile:-mt-10','tablet:h-[35rem]','tablet:w-[29.6875rem]','laptop:w-[29.6875rem]','laptop:h-[35rem]', 'laptop:hidden');
                document.getElementById('slidepage-image').appendChild(img);

                const imgLarge = document.createElement('img');
                imgLarge.src = largeImage;
                imgLarge.classList.add('mobile:hidden','tablet:hidden','laptop:w-[29.6875rem]','laptop:h-[35rem]');
                document.getElementById('slidepage-image').appendChild(imgLarge);

                document.getElementById('preview-image').src = previewImage;
        }

        //Modal control for Slideshow page
        const modalViewer = document.getElementById('viewImage-btn');
        const modalCloser = document.getElementById('modal-closer')
        const viewImagemodal = document.getElementById('viewimage-modal');

        modalViewer.addEventListener('click', () =>{
                viewImagemodal.style.display = 'block';
        })

        modalCloser.addEventListener('click', () =>{
                viewImagemodal.style.display = 'none';
        })
        
        document.getElementById('back-btn').addEventListener('click',() => {
                currentIndex = Math.max(currentIndex - 1, 0);
                galleriaDataDisplay();
                const progressPercentage = ( currentIndex + 1) * 6.67;
                progressBar.style.width = progressPercentage + '%';
        });
        
        document.getElementById('forward-btn').addEventListener('click',() => {
                currentIndex = Math.min(currentIndex + 1, galleriaData.length -1);
                galleriaDataDisplay();
                const progressPercentage = (currentIndex + 1) * 6.67;
                progressBar.style.width = progressPercentage + '%';
        });
        

        
        const homepageRedirectReceiver =( paramName,url)=>{
                if (!url) url = window.location.href;
                paramName = paramName.replace(/[[\]]/g, "\\$&");
                const regex = new RegExp("[?&]" + paramName + "(=([^&#]*)|&|#|$)");
                let results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        
        //A function to receive the url params sent from by event listeners
        //homepage , that inteprets HomepageArtRedirect() from artItem
        const redirectUpdater = () => {
                const galleriaIndex = homepageRedirectReceiver('galleriaIndex');
                currentIndex = parseInt(galleriaIndex, 10) || 0;
                // Recalculate the width of the progress bar based on the index
                // console.log(galleriaIndex)
                const progressBarPercentage = (parseInt(galleriaIndex, 10) + 1) * 6.67;
                const progressBar = document.getElementById('progress-bar');
                progressBar.style.width = `${progressBarPercentage}%`;

                // Call galleriaDataDisplay() with the updated currentIndex
                galleriaDataDisplay();
        };
        redirectUpdater();
        
        galleriaDataDisplay();
});


