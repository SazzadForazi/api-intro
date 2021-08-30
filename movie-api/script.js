fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setpost(data))

const setpost = (posts) => {
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <div class=" p-5 bg-light border border-primary border-3 m-3">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <p>${post.id}</p>
        </div>
       
        
        `;

        postContainer.appendChild(postDiv);
    }
}