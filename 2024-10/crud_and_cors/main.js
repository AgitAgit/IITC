const _baseUrl = 'https://api-playground-ten.vercel.app';

const _createPost = document.querySelector('#createPost');
_createPost.addEventListener('submit', (event) => handleSubmitCreatePost(event));

const _patchPost = document.querySelector('#patchPost');
_patchPost.addEventListener('submit', event => handleSubmitPatchPost(event));

//exercise 8
async function getPosts() {
    const data = await axios.get(`${_baseUrl}/posts`);
    // console.log(data.data);
    return data.data;
}

//exercise 9
async function postsToList(){
    const posts = await getPosts();
    const ul = document.querySelector('#list1');
    posts.forEach(postData => {
        const { title, content, date } = postData;
        const li = document.createElement('li');
        // li.textContent = `title:${title} date:${date} content:${content}`;
        li.innerHTML = `<div>title:${title}<br>date:${date}<br>content:${content}</div>`;
        ul.appendChild(li);
    })
}

//exercise 10
async function getPostById(id){
    const post = await axios.get(`${_baseUrl}/posts/${id}`);
    console.log(post.data);
}

//exercise 11
async function createPost(title, content){
    const response = await axios.post(`${_baseUrl}/posts`,{
        title,
        content
    });
    console.log(response.data);
}
function handleSubmitCreatePost(event){
    event.preventDefault();
    const {title, content} = event.target.elements;
    createPost(title.value, content.value);
    title.value = '';
    content.value = '';
}
function toggleElement(id){
    const element = document.querySelector(`#${id}`);
    element.classList.toggle('hidden');
}

//exercise 12
async function patchPost(title, content, postId){
    const response = await axios.patch(`${_baseUrl}/posts/${postId}`,{
        title,
        content
    });
    console.log(response.data);
}
// patchPost('duck duck','quack quack',"670e2332c3c56c455ad8b40e");
async function handleSubmitPatchPost(event){
    event.preventDefault();
    const {postId, title, content} = event.target.elements;
    await patchPost(title.value, content.value, postId.value);
    title.value = '';
    content.value = '';
    postId.value = '';
    getPosts();
}

//exercise 13
async function deletePost(postId){
    const response = await axios.delete(`${_baseUrl}/posts/${postId}`);
    console.log(response);
}
getPosts();

async function handleFetchPosts(){
    const posts = getPosts();
    const ul = document.querySelector('#list2');
    posts.forEach(post => {
        
    });
}
// postsToList();
// getPostById('670d1480b45f25be4c034e97');
// createPost('3000 title','3000 content');