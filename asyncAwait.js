async function fetchPosts() {
    try {
        let res = await fetch("https://dummyjson.com/posts");

        if(!res.ok) {
            const message = `Ocorreu um erro: ${res.status}`;
            throw new Error(message);
        }

        const posts = await res.json();
        const asyncAwaitDiv = document.getElementById("asyncAwait");
        posts.posts.forEach(post => {
            asyncAwaitDiv.innerHTML += `<div><b>Title:</b> ${post.title}<br/> <b>Body:</b> ${post.body}<br/> <b>Tags:</b> ${post.tags} <br/></div>`;
        })

        return posts;
    } catch({name, message}) {
        const asyncAwaitDiv = document.getElementById("asyncAwait");
        asyncAwaitDiv.innerHTML = message;
    }
}