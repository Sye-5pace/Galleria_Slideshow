import galleriaData from "../data.json";

document.addEventListener('DOMContentLoaded', function (){
     //A function to pass images from data.json
    //into homepage's main content.
    // const homepageGallery = document.getElementById('homepage-gallery');
    const homepageDetails = galleriaData.map( (item,index) => {
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
        imgTitleH2.classList.add('mt-[-6rem]','ml-8','text-white','font-libre','font-bold','laptop:w-[11.3rem]','tablet:w-[11.5rem]','mobile:w-[11.5rem]','bg-gradient-to-b' ,'from-transparent','to-black');

        const artistNameP = document.createElement('p');
        artistNameP.textContent = artistName;
        artistNameP.classList.add('ml-8','font-libre','text-white','text-opacity-75','bg-gradient-to-b','from-transparent','to-black');

        img.src= thumbnail;

        
        imgContainer.classList.add('homepage-art-item');
        imgContainer.setAttribute('data-index',index);

        imgContainer.appendChild(img);
        imgContainer.appendChild(imgTitleH2);
        imgContainer.appendChild(artistNameP);
        // imgContainer.style.marginLeft = '2rem';
        // imgContainer.style.marginRight = '2rem';


        return imgContainer;
    })
    
    
    //Function to redirect homepage to corresponding content
    //on slideshow page
    const homepageArtRedirect = (event)=>{
        const index = event.currentTarget.dataset.index;
        const galleriaIndex = galleriaData[index];
        const url = "slideshowpage.html?" + 
            "&galleriaIndex=" + encodeURIComponent(index) +
            "&redirectImage=" + encodeURIComponent(galleriaIndex.images['hero'].small) +
            // "&redirectModalcontent" + encodeURIComponent(galleriaIndex.artist['name']) +
            "&redirectImageTitle=" + encodeURIComponent(galleriaIndex.name) +
            "&redirectArtistName=" + encodeURIComponent(galleriaIndex.artist['name']) +
            "&redirectArtistImage=" + encodeURIComponent(galleriaIndex.artist['image']) +
            "&redirectArtYear=" + encodeURIComponent(galleriaIndex.year) +
            "&redirectArtDesc=" + encodeURIComponent(galleriaIndex.description) +
            "&redirectImageLink=" + encodeURIComponent(galleriaIndex.source); 
        window.location.href = url;
    }

    
    const artItems = document.querySelectorAll('.art-item')
    artItems.forEach((artItem, index) => {
      const itemDetails = homepageDetails[index];
      artItem.appendChild(itemDetails);
    });
})

