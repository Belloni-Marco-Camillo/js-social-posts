//creo un array di oggetti
const posts = [{
        post_id: 1,
        autoreName: `marco`,
        autoreSeconName: `belloni`,
        data: `21/09/2021`,
        ImageProfile: `https://picsum.photos/id/237/200/200`,
        testo_post: `prova testo`,
        Image: `https://picsum.photos/id/27/800/500`,
        like: 0,
    },
    {
        post_id: 2,
        autoreName: `giuseppe`,
        autoreSeconName: `belloni`,
        data: `05/09/2021`,
        ImageProfile: `https://picsum.photos/id/27/200/200`,
        testo_post: `prova testo di giuseppe`,
        Image: `https://picsum.photos/id/237/800/500`,
        like: 0,
    },
    {
        post_id: 3,
        autoreName: `luisa`,
        autoreSeconName: `belloni`,
        data: `05/09/2021`,
        ImageProfile: `https://picsum.photos/id/27/200/200`,
        testo_post: `prova testo di giuseppe`,
        Image: ``,
        like: 0,
    }
];




i = 0
while (i <= posts.length) {
    const post = document.createElement(`div`);
    post.classList.add(`post`)
    post.classList.add(`col-8`)
    post.classList.add(`offset-2`)
    post.classList.add(`my-5`)
    post.classList.add(`shadowPost`)
    post.innerHTML =
        `
        <div class="post_header px-4">
            <div class="datiAutore d-flex">
                <div class="col-1 py-4 me-4 ">
                    <img class="imgProfile img-fluid" src="${posts[i].ImageProfile}" width=200px>
                </div>
                <div class="specifiche d-flex align-items-center">
                <div>${posts[i].autoreName} ${posts[i].autoreSeconName}</div>  <div>${posts[i].data}</div>
                </div>
            </div>
            <div class="testoPost">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis suscipit ea itaque! Aspernatur id dolorem fugit impedit praesentium neque repellendus rerum maxime placeat aut.</p>
            </div>
        </div>

        <div class="post_body">
        <img class="img-fluid px-4" src="${posts[i].Image}">
        </div>
        <div class="post_footer d-flex text-center">
            <div class="like_it col-6">
                <button id="" class="btnLike px-5 py-2 m-3"><i class="fa-solid fa-thumbs-up"></i> metti like</button>
            </div>
            <div id="" class=" numlike col-6 text-center"></div>
        </div>
    `;


    document.querySelector(`.timeLine`).appendChild(post)
    i++
}