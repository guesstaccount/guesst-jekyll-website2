document.addEventListener('DOMContentLoaded', function () {
    // testing 123
    console.log('im running!');

    // blogImageify();

    // albumArtify();

    imageClassify();

    justPegEm();

    convertToImage();
});

function convertToImage() {
    // Select all <p> elements with the class 'blogImage' or 'listenAlbumArt'
    const elements = document.querySelectorAll('p.blogImage, p.listenAlbumArt');

    elements.forEach(element => {
        // Extract the file name from the content inside the <p> tag
        const content = element.textContent || element.innerText;
        const matches = content.match(/!\[\[(.*?)\]\]/);

        if (matches && matches[1]) {
            const fileName = matches[1];
            const imagePath = `/assets/images/${fileName}`;

            // Create a new <img> element
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.className = element.className; // Maintain the original class of the <p> element

            // Replace the <p> tag with the <img> tag
            element.parentNode.replaceChild(imgElement, element);
        }
    });
}

function imageClassify() {
    let classToAdd = '';
    let pathToCheck = '';

    if (window.location.pathname.includes('/blog/')) {
        classToAdd = 'blogImage';
        pathToCheck = '/blog/';
    } else if (window.location.pathname.includes('/listen/')) {
        classToAdd = 'listenAlbumArt';
        pathToCheck = '/listen/';
    }

    if (pathToCheck) {
        // Get all <p> elements
        var paragraphs = document.getElementsByTagName('p');
        console.log(paragraphs);

        // first were gonna do it for all the text ones

        // Regular expression to match the format ![[SOMETEXT.jpg]]
        var regex = /!\[\[(.*?).(jpg|jpeg|png)\]\]/i;

        // Loop through all <p> elements
        for (var i = 0; i < paragraphs.length; i++) {
            var p = paragraphs[i];

            // Check if the paragraph's text matches the regex
            if (regex.test(p.innerHTML)) {
                // Add the specified class to the <p> element
                p.classList.add(classToAdd);
            }
        }

        // now were gonna do it for all the actual md image ones

        var images = document.getElementsByTagName('img');
            console.log(images);
            
            // Loop through all <img> elements
            for (var i = 0; i < images.length; i++) {
                // avoid changing the class of the logo image
                if (images[i].className != 'logo') {
                    images[i].classList.add(classToAdd);
                }
            }
    }
}

// function blogImageify() {

//     // change all images in /blog/ to blogImage 
//     if (window.location.pathname.includes('/blog/')) {

//         // Get all <p> elements
//         var paragraphs = document.getElementsByTagName('p');

//         // Regular expression to match the format ![[SOMETEXT.jpg]]
//         var regex = /!\[\[(.*?).(jpg|jpeg|png)\]\]/i;

//         // Loop through all <p> elements
//         for (var i = 0; i < paragraphs.length; i++) {
//             var p = paragraphs[i];

//             // Check if the paragraph's text matches the regex
//             if (regex.test(p.innerHTML)) {
//                 // Add the 'blogImage' class to the <p> element
//                 p.classList.add('blogImage');
//             }
//         }

//     }
// }

// function albumArtify() {
    
//     // change all images in /listen/ to listenAlbumArt
//     if (window.location.pathname.includes('/listen/')) {

//         // Get all <p> elements
//         var paragraphs = document.getElementsByTagName('p');

//         // Regular expression to match the format ![[SOMETEXT.jpg]]
//         var regex = /!\[\[(.*?).(jpg|jpeg|png)\]\]/i;

//         // Loop through all <p> elements
//         for (var i = 0; i < paragraphs.length; i++) {
//             var p = paragraphs[i];

//             // Check if the paragraph's text matches the regex
//             if (regex.test(p.innerHTML)) {
//                 console.log('it worked');
//                 // Add the 'blogImage' class to the <p> element
//                 p.classList.add('listenAlbumArt');
//             }
//         }
//     }
// }

function justPegEm() {
    // Wait for 5 milliseconds before performing the action
    setTimeout(function () {

        // Select all images on the page with the listenAlbumArt class
        const images = document.querySelectorAll("img.listenAlbumArt, img.blogImage, img.releaseListImage, img.discogImage");
        console.log(images);

        images.forEach(function (image) {
            console.log('im in');
            // Function to handle missing resource and change src to .jpeg
            const handleMissingResource = (img) => {
                if (img.src.endsWith(".jpg")) {
                    const jpegSrc = img.src.slice(0, -4) + ".jpeg";

                    // Check if the .jpeg version of the image exists
                    fetch(jpegSrc)
                        .then(response => {
                            if (response.ok) {
                                img.src = jpegSrc;
                            } else {
                                console.log("Both .jpg and .jpeg resources are missing: ", img.src);
                            }
                        })
                        .catch(() => {
                            console.log("Error fetching .jpeg resource for: ", img.src);
                        });
                }
            };

            // Check if the .jpg resource exists
            fetch(image.src)
                .then(response => {
                    if (!response.ok) {
                        handleMissingResource(image);
                    }
                })
                .catch(() => {
                    handleMissingResource(image);
                });
        });
    }, 8);


}