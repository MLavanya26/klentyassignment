const dataPost = [
  {
      name:'Trees',
      post:'https://images.unsplash.com/photo-1609805620003-2a785a3b8a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      desc:'Dark',
      productCost:'₹555'
  },
  
  {
    name:'HD Snow',
    post:'https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    desc:'Cool and Present',
    productCost:'₹975'
},
{
  name:'Bridge',
  post:'https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  desc:'snowfall',
  productCost:'₹605'
},

{
  name:'Coconut trees',
  post:'https://images.unsplash.com/photo-1507187632231-5beb21a654a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  desc:'greenery',
  productCost:'₹300'
},
{
  name:'Nature',
  post:'https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  desc:'Hd snow',
  productCost:'₹505'
},
{
  name:"Cool nature",
  post:"https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  desc: 'Mng climate',
  productCost:'₹805'
}

]

const container = document.querySelector('.container');

dataPost.forEach(function(item){
container.innerHTML +=`<div class="container ">
<div class="post">
     <img src="${item.post}" alt="postImg">
            <h2>${item.name}</h2>
            <p>${item.desc}</p>
            <strong>${item.productCost}</strong>
    </div>
</div>`
})

