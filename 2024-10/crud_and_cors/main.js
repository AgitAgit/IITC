const _baseUrl = 'https://api-playground-ten.vercel.app';

const _createPost = document.querySelector('#createPost');
_createPost.addEventListener('submit', (event) => handleSubmitCreatePost(event));
const _createPostMessage = document.querySelector('#createPostMessage');
const _patchPost = document.querySelector('#patchPost');
_patchPost.addEventListener('submit', event => handleSubmitPatchPost(event));

let _currentEnd = 4;

async function getPosts() {
    const data = await axios.get(`${_baseUrl}/posts`);
    // console.log(data.data);
    return data.data;
}

 
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

 
async function getPostById(id){
    const post = await axios.get(`${_baseUrl}/posts/${id}`);
    console.log(post.data);
}

 
async function createPost(title, content){
    _createPostMessage.textContent = '';
    try{
        const response = await axios.post(`${_baseUrl}/posts`,{
            title,
            content
        });
        _createPostMessage.textContent = 'new post created';
        setTimeout(() => {
            _createPostMessage.textContent = '';
        },2000);
    }
    catch{
        _createPostMessage.textContent = 'failed to create new post';
        setTimeout(() => {
            _createPostMessage.textContent = '';
        },2000);
    }
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

async function deletePost(postId){
    const response = await axios.delete(`${_baseUrl}/posts/${postId}`);
    console.log(response);
}
getPosts();

async function handleDeleteClick(event, _id) {
    await deletePost(_id);
    handleFetchPosts();
}

async function showAllPosts(){
    const loading = document.querySelector('#displayPostsLoading');
    const ul = document.querySelector('#list2');
    ul.innerHTML = '';
    loading.classList.toggle('hidden');
    const posts = await getPosts();
    loading.classList.toggle('hidden');
    posts.forEach(post => {
        const {title, content, _id} = post;
        const li = document.createElement('li');
        li.innerHTML = `
        title:${title}
        <br>
        content:${content}
        <button onclick="handleDeleteClick(event,'${_id}')">DELETE</button>`
        ul.appendChild(li);
    });
}

async function handleFetchPosts(){
    const loading = document.querySelector('#displayPostsLoading');
    const ul = document.querySelector('#list2');
    ul.innerHTML = '';
    loading.classList.toggle('hidden');
    const posts = await getPosts();
    loading.classList.toggle('hidden');
    for(let i = 0; i <= _currentEnd && i < posts.length; i++){
        const {title, content, _id} = posts[i];
        const li = document.createElement('li');
        li.innerHTML = `
        title:${title}
        <br>
        content:${content}
        <button onclick="handleDeleteClick(event,'${_id}')">DELETE</button>`
        ul.appendChild(li);
    }
}
function clearDisplay(){
    _currentEnd = -1;
    const ul = document.querySelector('#list2');
    ul.innerHTML = '';
    // handleFetchPosts();
}
function showMore(){
    _currentEnd += 5;
    handleFetchPosts();
}
function showLess(){
    if(_currentEnd <= 4){
        _currentEnd = -1;
    }
    else {
        _currentEnd -= 5;
    }
    handleFetchPosts();
}
handleFetchPosts();
// postsToList();
// getPostById('670d1480b45f25be4c034e97');
// createPost('3000 title','3000 content');