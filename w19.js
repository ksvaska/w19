function createNode(element) {
    return document.createElement(element);
    
}

function append(parent, el) {
  return parent.appendChild(el);
}

function article(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => resp.json())
    .then((data)=>{
        data.forEach(function(elem){
            const title = createNode('p');
            const post = createNode('div');
            title.setAttribute('class','title');
        post.setAttribute('class','post');
            title.innerHTML = `Заголовок: ${elem.title}`;
            post.innerHTML = `Статья: ${elem.body}`;
            append(document.body,title);
            append(title,post); 
        });
        


    })
    .catch((err)=>console.log(err))
}
article();