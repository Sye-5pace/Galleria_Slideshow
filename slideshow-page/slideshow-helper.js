import galleriaData from '../data.json';

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
                document.getElementById('image-link').href = '';


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
                imageTitleH3.classList.add('tablet:text-[3.5rem]','tablet:leading-[3rem]','mobile:text-[1.5rem]','font-bold','mobile:leading-[1.8125rem]','font-libre','text-black');

                const artistName = document.createElement('p');
                artistName.textContent = artistNamedata;
                artistName.classList.add('text-[0.9375rem]','leading-[1.1625rem]','font-libre');        

                // Create and set the source attribute of the img element
                const artistImage = document.createElement('img');
                artistImage.src = artistImagedata;
                // console.log(artistImage);

                // Create and set the text content of the h1 element
                const artYear = document.createElement('h1');
                artYear.textContent = artYeardata;
                artYear.classList.add('tablet:ml-[4rem]','tablet:text-[12.5rem]','mobile:text-[6.25rem]', 'text-concrete', 'font-bold', 'font-libre', 'text-left');

                // Set the text content of the artDesc element
                const artDesc = document.getElementById('art-desc');
                artDesc.textContent = artDescdata;
                artDesc.classList.add('tablet:self-end','tablet:mt-[-2rem]','tablet:w-[28.5625rem]','tablet:h-[17.5625rem]','mobile:text-right','font-libre', 'font-bold', 'leading-[1.75rem]', 'text-[0.875rem]', 'text-boulder');

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
                img.classList.add('mobile:-mt-10','tablet:h-[35rem]','tablet:w-[29.6875rem]');
                document.getElementById('slidepage-image').appendChild(img);
        }
        
                
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
        const redirectUpdater =()=>{
                // // Clear existing content before appending new content
                 document.getElementById('image-details').innerHTML = '';
                 document.getElementById('slidepage-image').innerHTML = '';
                 document.getElementById('artist-image').innerHTML = '';
                 document.getElementById('art-year').textContent = '';
                 document.getElementById('art-desc').textContent = '';
                 document.getElementById('image-link').href = '';

                //receiving parameters from homepageRedirectReciever function
                const galleriaIndex = homepageRedirectReceiver('galleriaIndex')
                const receivedImage = homepageRedirectReceiver('redirectImage');
                const receivedImageTitle = homepageRedirectReceiver('redirectImageTitle');
                const receivedArtistName = homepageRedirectReceiver('redirectArtistName');   
                const receivedArtistImage = homepageRedirectReceiver('redirectArtistImage');
                const receivedArtYear = homepageRedirectReceiver('redirectArtYear');
                const receivedArtDesc = homepageRedirectReceiver('redirectArtDesc');
                const receivedImageLink = homepageRedirectReceiver('redirectImageLink');
                
                console.log(galleriaIndex)
                console.log(receivedImage)
                /* console.log(receivedImageTitle)
                console.log(receivedArtistName)
                console.log(receivedArtistImage)
                console.log(receivedArtYear)
                console.log(receivedArtDesc)
                console.log(receivedImageLink) */
                
                
                //reassigning passed values from HomepageRedirectReceiver()
                const slideshowImageContainer = document.getElementById('slidepage-image');
                const imgElement = document.createElement('img');
                imgElement.src = receivedImage;
                imgElement.classList.add('-mt-10');
                slideshowImageContainer.appendChild(imgElement);
                
                const imageTitleH3 = document.createElement('h3');
                imageTitleH3.textContent = receivedImageTitle;
                imageTitleH3.classList.add('text-[1.5rem]','font-bold','leading-[1.8125rem]','font-libre','text-black');
                document.getElementById('image-details').appendChild(imageTitleH3);
                console.log(imageTitleH3.textContent);
                
                const artistName = document.createElement('p');
                artistName.textContent = receivedArtistName;
                artistName.classList.add('text-[0.9375rem]','leading-[1.1625rem]','font-libre');        
                document.getElementById('image-details').appendChild(artistName);
                console.log(artistName.textContent);
                
                const artistImage = document.createElement('img');
                artistImage.src = receivedArtistImage;
                document.getElementById('artist-image').appendChild(artistImage); 
                
                document.getElementById('art-year').textContent = receivedArtYear;
                document.getElementById('art-desc').textContent = receivedArtDesc;
                document.getElementById('image-link').href = receivedImageLink;   
                
                console.log( document.getElementById('image-details').innerHTML)
                
                //recalculate the width of the progress bar per the index of sent url
                const progressBarPercentage = (galleriaIndex + 1) * 6.67;
                const progressBar = document.getElementById('progress-bar');
                progressBar.style.width = `${progressBarPercentage}%`;
        }
                
        // redirectUpdater();
        galleriaDataDisplay();
});



//               // function redirectUpdater(){
//                 
              
                
       
                
                
//                 // }
//                 // redirectUpdater();
                