<!-- The redirect created by the event listener from the homepageArtItem use url and passes the parameters which are:
1. Value for #slidepage-image
2. value for viewImage button to the ViewImage modal  
3. Value for #image-details
4. Value for #artist-image
5. Value for #art-year  
6. Value for #art-desc
7. Value for #image-link-->

<!-- Pending fixes
The url passed from the event listener get doesn't carry index to calculate the expected width of the progressbar at the slideshow page.

the position of the galleriaData Display 
creates a problem when moved behind the supposed redirectUpdater() which suppose udpate the slideshow content from the homepageRedirectReceiver()
Where's the galleriaDataDisplay() should be placed?

However if is placed before the redirectUpdater()function ,the return of the redirectUpdater() doesn't replace the already content within the slideshow page--->