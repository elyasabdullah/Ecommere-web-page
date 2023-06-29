

// ======================================  Navbar Events  ==============================================
// Get Elements
let links = document.querySelectorAll("header nav ul li");

links.forEach((ele) => {
    ele.addEventListener('mouseenter', function() {
        
        links.forEach((ele) => {
            ele.classList.remove('after')
        })
        
        ele.classList.add('after');
    })
    ele.addEventListener('mouseleave', function() {
        ele.classList.remove('after')
    })
})
// ==============================  Switch Images ========================================================
// Array of all the Images
let images = [
    './images/image-product-1.jpg',
'./images/image-product-2.jpg',
'./images/image-product-3.jpg',
'./images/image-product-4.jpg'];
// Get Elements 
let imgs = document.querySelectorAll('main .main-content .pictures .other-images img');
let theMainImg = document.querySelector('main .main-content .pictures .image');
let imgsParent = document.querySelector('main .main-content .pictures .other-images');
let pictureFull = document.querySelector('.pictures-full')
let otherFullImages = document.querySelector('.other-images-full');
let allFullImages = document.querySelectorAll('.other-images-full img');
let activeFullImage = document.querySelector('.pictures-full .image-full .image:first-child');
let next = document.querySelector('.pictures-full .image-full img:nth-child(3)');
let previous = document.querySelector('.pictures-full .image-full img:nth-child(2)');
let closeFullImages = document.querySelector('.pictures-full .image-full .close');

imgs.forEach((img) => {
    img.addEventListener('click', function() {
        
        imgs.forEach((img) => {
            img.classList.remove('active')
        })
        img.classList.add('active')
        
        if(img === imgsParent.children[1]) {
            theMainImg.children[0].src = images[1]
        }else if(img === imgsParent.children[2]) {
            theMainImg.children[0].src = images[2]
        }else if(img === imgsParent.children[3]) {
            theMainImg.children[0].src = images[3]
        }else if(img === imgsParent.children[0]) {
            theMainImg.children[0].src = images[0]
        }
    })
})

theMainImg.addEventListener('click', function() {
    pictureFull.style.display = 'flex';
})

closeFullImages.addEventListener('click', function() {
    pictureFull.style.display = 'none'
})


allFullImages.forEach((img) => {
    img.addEventListener('click', _ => {

        allFullImages.forEach((item) => {
            item.classList.remove('active')
        })
        img.classList.add('active');

        if(img === otherFullImages.children[1]) {
            activeFullImage.children[0].src = images[1]
        }else if(img === otherFullImages.children[2]) {
            activeFullImage.children[0].src = images[2]
        }else if(img === otherFullImages.children[3]) {
            activeFullImage.children[0].src = images[3]
        }else if(img === otherFullImages.children[0]) {
            activeFullImage.children[0].src = images[0]
        }
    })
})
 // if(img === otherFullImages.children[1]) {
        //     activeFullImage.innerHTML = `<img src=${images[1]}>`;
        // }else if(img === otherFullImages.children[2]) {
        //     activeFullImage.innerHTML = `<img src=${images[2]}>`;
        // }else if(img === otherFullImages.children[3]) {
        //     activeFullImage.innerHTML = `<img src=${images[3]}>`;
        // }else if(img === otherFullImages.children[0]) {
        //     activeFullImage.innerHTML = `<img src=${images[0]}>`;
        // }

let i = 0;
next.addEventListener('click', function(e) {
    if(i < 4) {
        i++;
        if( i > 3 ) {
            e.preventDefault();
        }else {
            activeFullImage.innerHTML = `<img src=${images[i]}>`;
            if(i == 0) {
                allFullImages.forEach((ele) => {
                    ele.classList.remove('active');
                })
                otherFullImages.children[0].classList.add('active')
            }else if(i == 1) {
                allFullImages.forEach((ele) => {
                    ele.classList.remove('active');
                })
                otherFullImages.children[1].classList.add('active');
                
            }else if(i == 2) {
                allFullImages.forEach((ele) => {
                    ele.classList.remove('active');
                })
                otherFullImages.children[2].classList.add('active')
            }else if(i == 3) {
                allFullImages.forEach((ele) => {
                    ele.classList.remove('active');
                })
                otherFullImages.children[3].classList.add('active')
            }
            
        }
        console.log(i)
    }
})

previous.addEventListener('click', function(e) {
    if(i > 0 ) {
        i--;
        if( i < 0 ) {
            e.preventDefault();
        }else {
            activeFullImage.innerHTML = `<img src=${images[i]}>`;
            if(i == 0) {
                allFullImages.forEach((ele) => {
                    ele.classList.remove('active');
                })
                otherFullImages.children[0].classList.add('active')
            }else if(i == 1) {
                allFullImages.forEach((ele) => {
                    ele.classList.remove('active');
                })
                otherFullImages.children[1].classList.add('active');
                
            }else if(i == 2) {
                allFullImages.forEach((ele) => {
                    ele.classList.remove('active');
                })
                otherFullImages.children[2].classList.add('active')
            }else if(i == 3) {
                allFullImages.forEach((ele) => {
                    ele.classList.remove('active');
                })
                otherFullImages.children[3].classList.add('active')
            }
        }
        console.log(i)
    }
    
})


// ============ Switch Images for Mobile and small devices ================
//  Get Elements 
let nextForMobile = document.querySelector('.image-full-mobile img:nth-child(3)');
let previousForMobile = document.querySelector('.image-full-mobile img:nth-child(2)');
let parentImageMobile = document.querySelector('.image-full-mobile > .image');
let ind = 0;

nextForMobile.addEventListener('click', function(e) {
    if(ind > -1 && ind < 4) {
        if(ind == 3) {
            // nextForMobile.classList.add('no-image');
            parentImageMobile.children[0].src = images[ind];
        }else {
            ind++;
            parentImageMobile.children[0].src = images[ind];
        }
    }else {
        e.preventDefault();
    }
    // if(ind == 3) {
    //     nextForMobile.addEventListener('mouseleave', () => nextForMobile.classList.remove('no-image'))
    //     nextForMobile.addEventListener('mouseenter', () => nextForMobile.classList.add('no-image'))
    // }
})

previousForMobile.addEventListener('click', function(e) {
    if(ind > -1 && ind < 4) {
        if (ind == 0) {
            // previousForMobile.classList.add('no-image');
            parentImageMobile.children[0].src = images[ind];
        }else {
            ind--;
            parentImageMobile.children[0].src = images[ind];
        }
    }else {
        e.preventDefault();
    }
    // if(ind == 0) {
    //     previousForMobile.addEventListener('mouseleave', () => previousForMobile.classList.remove('no-image'))
    //     previousForMobile.addEventListener('mouseenter', () => previousForMobile.classList.add('no-image'))
    // }
})


// ========================================== Add items to my cart ==========================================
// Get Elements
let plus = document.querySelector('.description .text-three .number .plus');
let minus = document.querySelector('.description .text-three .number .minus');
let number = document.querySelector('.description .text-three .number div:nth-child(2)');
let addToCart = document.querySelector('.description .text-three .add-to-cart');
let right = document.querySelector('nav .right');
let cart = document.querySelector('nav .right > .image');
let navImage = document.querySelector('nav .right img:nth-child(2)');
let navcart = document.querySelector('nav .right .image img:first-child');
let total = document.querySelector('nav .card .card-text .spans span:last-child')
let spanTwo = document.querySelector('nav .card .card-text .spans span:nth-child(2)');
let card = document.querySelector("nav .card");
let cardText = document.querySelector('nav .card .card-text')
let cardButton = document.querySelector('nav .card .button');
let trash = document.querySelector('nav .card .card-text > img:last-child');
let empty = document.querySelector('nav .empty');
let main = document.querySelector('main')
let navLeft = document.querySelector('nav .left')



let pay = 0;
let num = +number.innerHTML;

let span = document.createElement("span");
cart.appendChild(span);

trash.addEventListener('click', function() {
    span.innerHTML = 0;
    span.style.backgroundColor = 'transparent';
    card.style.cssText = 'z-index:10';
})

plus.addEventListener('click', () => {
    num += 1; 
    number.innerHTML = num;
    spanTwo.innerHTML = num;
    // =========================
    
});
minus.addEventListener('click', (e) => {
    if(num <= 0) {
        e.preventDefault();
    }else {
        num -= 1; 
        number.innerHTML = num;
        spanTwo.innerHTML = num;
    }
})


addToCart.addEventListener('click', function() {
    if(num == 0 ) {
        card.style.cssText = 'z-index:10';
        span.style.backgroundColor = 'transparent';
    }else {
        card.style.cssText = 'z-index:13';
        span.innerHTML = num;
        span.style.backgroundColor = 'var(--main-color)';
        pay = 125.00 * num;
        total.innerHTML = `$${pay}.00`;
    }
})

navcart.addEventListener('click', function() {
    card.classList.toggle('none')
    empty.classList.toggle('none')
});

navImage.addEventListener('click', function() {
    card.classList.toggle('none')
    empty.classList.toggle('none')
});


document.body.addEventListener('click', function(e) {
    if( e.target == navImage || e.target == navcart) {
        e.preventDefault();
    } else {
        card.classList.add('none')
        empty.classList.add('none')
    }
})



// ================================== show sidebar =====================================

let iconMenu = document.querySelector('nav .left img:first-child');
let sidebar = document.querySelector('.sidebar-for-mobile');
let closeBtn = document.querySelector('.sidebar .image img');


iconMenu.addEventListener('click', function() {
    sidebar.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    sidebar.style.display = 'none';
})
