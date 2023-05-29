import galleriaData from "../public/data.json";

document.addEventListener('DOMContentLoaded', ()=>{
     //A function to pass images from data.json
    //into homepage's main content.
    const homepageGallery = document.getElementById('homepage-gallery');
    const homepageDetails = galleriaData.map( item => {
        let thumbnail = item.images['thumbnail'];
        let imageTitle = item.name;
        let artistName = item.artist['name']

        //create a div container for the small image
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');

        //creating h3 and p element for the images
        // and inserting the title and artist text.
        const imgTitleH2 = document.createElement('h2');
        imgTitleH2.textContent =  imageTitle;
        imgTitleH2.classList.add('mt-[-6rem]','ml-8','text-white','font-libre','font-bold','w-[12rem]','bg-gradient-to-b' ,'from-transparent','to-black');

        const artistNameP = document.createElement('p');
        artistNameP.textContent = artistName;
        artistNameP.classList.add('ml-8','font-libre','text-white','text-opacity-75','bg-gradient-to-b','from-transparent','to black');

        img.setAttribute('src',thumbnail);

        imgContainer.appendChild(img);
        imgContainer.appendChild(imgTitleH2);
        imgContainer.appendChild(artistNameP);

        return imgContainer;
    })

    //append the imgContainer to the already created div container
    //from the main page
    homepageGallery.appendChild(homepageDetails);
})