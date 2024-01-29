function postObj(obj){
    const article = document.createElement('div');
    const title = document.createElement('p');
    const post = document.createAttribute('p');
    title.innerHTML = obj.title;
    post.innerHTML = obj.body;


}



function t(){
fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json))
}
t()