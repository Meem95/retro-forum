const discussionCard = document.getElementById('discussion-card');
const latestPostCard = document.getElementById('post-card');
//console.log(discussionCard);
const fetchDiscussionCategory = () =>{
    const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
    fetch(url)
    .then((res) => res.json())
    .then((response) => {
        //console.log(response.posts);
    response.posts.forEach((card) => {
        //console.log(card);
        const discussionCardBody =  document.createElement('div');
            discussionCardBody.innerHTML = `
            <div  class="card lg:w-[780px] bg-[#7D7DFC1A] shadow-xl lg:p-8 mb-6">
              <div class="">
                <div class="avatar online placeholder">
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
                  <div class=""><img src="images/email.svg" alt="" /></div>
                </div>
              </div>
            </div>
            `
              discussionCard.appendChild(discussionCardBody);
    });

        
        
    })
}
fetchDiscussionCategory();
const fetchPostCard = () =>{
    const url = "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
    fetch (url)
    .then((res) => res.json())
    .then((data)=> {
        data.forEach((item) => {
            console.log(item)
            const latestPostCardBody = document.createElement("div");
            latestPostCardBody.innerHTML = ` 
            <div class="card lg:w-96  border border-[[#12132D99]] shadow-sm mb-5">
            <div class="card-body">
              <div class="w-full">
                <img src="${item.cover_image}" alt="" />
              </div>
              <div class="flex lg:flex-row w-full">
                <img class="" src="images/cal.svg" alt="" />
                <p>29 January 2024</p>
              </div>

              <h2 class="card-title" style="font-size: 18px!important;">
              ${item.title}
              </h2>
              <p class="text-[#12132D99]">
              ${item.description}
              </p>
              <hr class="border-dashed border-t border-2" />

              <div class="card-actions items-center justify-center lg:justify-start">
                <div ><img class="w-12 rounded-full" src="${item.profile_image}" alt="" /></div>
                <div class=""><p>${item.author.name}</p></div>
              </div>
              <div class="lg:text-left text-center  lg:ml-14 lg:-mt-2">
                  <p>${item.author.designation}</p>
              </div>
            </div>
          </div>
            `;

            latestPostCard.appendChild(latestPostCardBody);
        })
    })
}

fetchPostCard()