
let imageSection = document.querySelector('.imageSection');
let search_input = document.querySelector('#search_input');
let btn = document.querySelector('searchButton');
let form  = document.querySelector('form');
let showMoreBtn = document.querySelector('.showMoreBtn');
let inputData = "";
let page = 1;
const apiKey = '6QCnnvu2kOfbSD8rB_7OTGEhUwg-E7EhQbDvCFt7Dow';
async function fetchImages(){
    inputData = search_input.value;
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`);
    console.log(response);
    const images = await response.json();
    if(page===1){
        imageSection.innerHTML = "";
    }

    const processData = images.results;

    processData.forEach((result) =>{
        let div = document.createElement('div');
        div.classList.add('appImages');

        let img = document.createElement('img');
        img.src = result.urls.raw;
        img.alt = result.alt_description;

        let desc = document.createElement('p');
        desc.innerText = result.alt_description;

        div.appendChild(img);
        div.appendChild(desc);
        
        
        imageSection.appendChild(div);
    });
    page++;
    if(page>1){
        showMoreBtn.style.display = "flex";
    }
   
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    page=1;
    fetchImages();
})
showMoreBtn.addEventListener('click', () =>{
    fetchImages();
});


// fetchImages().then(images =>{
    
//     images.forEach((items) =>{
//         let div = document.createElement('div');
//         let img = document.createElement('img');
//         let desc = document.createElement('p');
        
//         div.append(img, desc);
//         desc.innerText = items.alt_description;
//         img.src = items.urls.raw;
//         imageSection.append(div);
//         div.classList.add('appImages');
        
//     });

   
// });

// btn.addEventListener('click', ()=>{
//     let allImages = document.querySelectorAll('.appImages');
//     // console.log(allImages); 
//     let imagesArr = Array.from(allImages);
//     imagesArr.forEach((ele) => {
//         let desc = ele.children[1].innerText;
//         // console.log(desc);
//         if(desc.startsWith(search_input.value)){
//             ele.style.display = "flex";
//             // ele.style.display = "center";

//             ele.add.classList('appImages');
//          }
//         //  else{
//         //     ele.style.display = allImages;
//         // }
//     })
// });


