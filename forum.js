const discussionCard = document.getElementById('discussion-card');
const latestPostCard = document.getElementById('post-card');

let searchData = false;


const fetchDiscussionCategory = () =>{
  const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
  console.log(searchData);
  
    fetch(url)
    .then((res) => res.json())
    .then((response) => {
       // discussionCard.textContent = '';
       response.posts.forEach((card) => {
        //console.log(card);
        const discussionCardBody =  document.createElement('div');
            discussionCardBody.innerHTML = `
            <div  class="card lg:w-[780px] bg-[#7D7DFC1A] shadow-xl lg:p-8 mb-6">
              <div class="">
                <div id="online" class="avatar online placeholder">
                  <div
                    class="bg-neutral text-neutral-content rounded-full w-16"
                  >
                    <span class="text-xl"> <img src="${card.image}" alt="" /> </span>
                  </div>
                </div>
              </div>
              <div class="card-body ml-16 lg:-mt-20">
                <div class="flex flex-col lg:flex-row">
                  <div>
                    <p># <span>${card.category}</span></p>
                  </div>
                  <div class="lg:ml-6">
                    <p>Author : <span>${card.author.name}</span></p>
                  </div>
                </div>
                <h2 id= "title" class="card-title">
                ${card.title}
                </h2>
                <p class="text-[#12132D99]">
                ${card.description}
                </p>
                <hr class="border-dashed border-t border-2" />
                <div
                  class="card-actions flex-col lg:flex-row lg:justify-start items-center"
                >
                  <div class="flex flex-col lg:flex-row">
                    <img src="images/t1.svg" alt="" />${card.comment_count}
                  </div>
                  <div class="flex flex-col lg:flex-row">
                    <img src="images/eye.svg" alt="" /> <span id="view-count"> ${card.view_count}</span>
                  </div>
                  <div class="flex flex-col lg:flex-row">
                    <img src="images/clock.svg" alt="" />${card.posted_time} min
                  </div>
                </div>
                <div
                  class="card-actions items-center justify-center lg:justify-end"
                >
                  <div onClick="msg('${card.title}.${card.view_count}')" id = "msg1" class=""><img src="images/email.svg" alt="" /></div>
                </div>
              </div>
            </div>
            `;
              discussionCard.appendChild(discussionCardBody);
              const authorOnline = document.getElementById('online');
              if (!authorOnline) {
                console.error('Author online element not found');
                return;
            }
    
            //Update classList based on response
            if (card.isActive === false || card.isActive === "") {
              
                authorOnline.classList.remove('online');
            } else {
                authorOnline.classList.add('online');
            }
    });
    })
}
let clickCount = 0;
const msg = (values) => {
  const [title, viewCount] = values.split('.');
  
  // Logging the individual values
  console.log('Title:', title);
  console.log('View Count:', viewCount);
  
  clickCount++;
  
  // Display the click count in another div
  const countContainer = document.getElementById('click-count');
  countContainer.textContent = `Mark as read: ${clickCount}`;


  const titleContainer = document.getElementById('title-container');
  const newTitle = document.createElement('div');
  newTitle.textContent = title;

   newTitle.innerHTML = `<div
   class="flex flex-col lg:flex-row lg:w-[390px] bg-white lg:p-6 rounded-lg mb-4"
  >
    <div>
      <h2>${title}<div class="flex flex-col lg:flex-row">
      <img class="w-5" src="images/eye.svg" alt=""/> <span>${viewCount}</span>
    </div></h2>
    </div>
    <div>
      
    </div>
  </div>`;
  
  console.log(titleContainer);
 
  titleContainer.appendChild(newTitle);
}

if(!searchData){
  fetchDiscussionCategory();
}


  const loadPost = async (searchText) => {
    console.log( searchText);
      const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
      const data = await res.json();
      console.log("similar",data)
      const postData = data.posts;
      console.log(postData);
      const searchDiscussionCategory = (postData) => {
        //console.log(postData);
        if(postData){
          discussionCard.textContent = ''; 
          postData.forEach((card) => {
            //console.log(card);
            const discussionCardBody =  document.createElement('div');
                discussionCardBody.innerHTML = `
                <div  class="card lg:w-[780px] bg-[#7D7DFC1A] shadow-xl lg:p-8 mb-6">
                  <div class="">
                    <div id="online" class="avatar online placeholder">
                      <div
                        class="bg-neutral text-neutral-content rounded-full w-16"
                      >
                        <span class="text-xl"> <img src="${card.image}" alt="" /> </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body ml-16 lg:-mt-20">
                    <div class="flex flex-col lg:flex-row">
                      <div>
                        <p># <span>${card.category}</span></p>
                      </div>
                      <div class="lg:ml-6">
                        <p>Author : <span>${card.author.name}</span></p>
                      </div>
                    </div>
                    <h2 class="card-title">
                    ${card.title}
                    </h2>
                    <p class="text-[#12132D99]">
                    ${card.description}
                    </p>
                    <hr class="border-dashed border-t border-2" />
                    <div
                      class="card-actions flex-col lg:flex-row lg:justify-start items-center"
                    >
                      <div class="flex flex-col lg:flex-row">
                        <img src="images/t1.svg" alt="" />${card.comment_count}
                      </div>
                      <div class="flex flex-col lg:flex-row">
                        <img src="images/eye.svg" alt="" /> ${card.view_count}
                      </div>
                      <div class="flex flex-col lg:flex-row">
                        <img src="images/clock.svg" alt="" />${card.posted_time} min
                      </div>
                    </div>
                    <div
                      class="card-actions items-center justify-center lg:justify-end"
                    >
                      <div id="msg" class=""><img src="images/email.svg" alt="" /></div>
                    </div>
                  </div>
                </div>
                `
                  discussionCard.appendChild(discussionCardBody);
        });
        }
      }
      searchDiscussionCategory(postData);
   }
// const fetchPostCard = () =>{
//     const url = "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
//     fetch (url)
//     .then((res) => res.json())
//     .then((data)=> {
//         data.forEach((item) => {
//             //console.log(item)
//             const latestPostCardBody = document.createElement("div");
//             latestPostCardBody.innerHTML = ` 
//             <div class="card lg:w-96  border border-[[#12132D99]] shadow-sm mb-5">
//             <div class="card-body">
//               <div class="w-full">
//                 <img src="${item.cover_image}" alt="" />
//               </div>
//               <div class="flex lg:flex-row w-full">
//                 <img class="" src="images/cal.svg" alt="" />
//                 <p>${item.author.posted_date ? item.author.posted_date : " No Publish Date"}</p>
//               </div>

//               <h2 class="card-title" style="font-size: 18px!important;">
//               ${item.title}
//               </h2>
//               <p class="text-[#12132D99]">
//               ${item.description}
//               </p>
//               <hr class="border-dashed border-t border-2" />

//               <div class="card-actions items-center justify-center lg:justify-start">
//                 <div ><img class="w-12 rounded-full" src="${item.profile_image}" alt="" /></div>
//                 <div class=""><p>${item.author.name}</p></div>
//               </div>
//               <div class="lg:text-left text-center  lg:ml-14 lg:-mt-2">
//                   <p>${item.author.designation ? item.author.designation : "Unknown" }</p>
//               </div>
//             </div>
//           </div>
//             `;

//             latestPostCard.appendChild(latestPostCardBody);
//         })
//     })
// }



/// search handle
const searchHandle = ()=> {
  // toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchValue = searchField.value;
   loadPost(searchValue);
  console.log(searchValue);
  searchField.value ='';
}
const handleShowAll = () => {
  searchData=true;
  console.log(searchData);
  searchHandle(searchData);
}
// fetchPostCard()

  

