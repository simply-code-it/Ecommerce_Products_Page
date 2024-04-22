let container = document.getElementById("container");

// Individual Product Pages:
// Clicking on a product card opens a detailed product page.
// This page displays all product details, including a full description from the JSON data.
// Include a reviews section where users can add reviews with their names. These reviews should persist between sessions using Local Storage.



function createCard(product={}) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');

    
    img.src = product.image;
    img.alt = "Image alt";
    h3.innerText = product.title;
    p1.innerText = product.price;
    p2.innerText = product.rating;
    p3.innerText = product.category;
    p4.innerText = product.description;

    if(product.review) {
        let str = product.review.reduce((prev, cur) => prev+cur+"\n", "");
        // let str = product.review.toString();
        p5.innerText = "\n Reveiws \n\n"+str;
    }

    let indiv = document.createElement('form');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let button = document.createElement('input');
    
    label.innerText = 'add reviews: ';
    input.type = 'text';
    input.id = 'review';
    input.value = "";
    
    button.type = 'submit';
    button.innerText = 'submit';
    
    button.addEventListener('click', (e)=> {
        e.preventDefault();
        let loggedin = localStorage.getItem("loggedin");
        let userName;
        if(!loggedin) {
            alert('you are not loggedin');
            let username = window.prompt("what is your name");
            let password = window.prompt('what is your password');
            // let user = {username, password: btoa(password)}
            let user = JSON.parse(localStorage.getItem("user"));
            let pass = atob(user.password);
        
            if(username === user.username && pass === password) {
                localStorage.setItem('loggedin', true);
                userName = username;
            }else {
                window.alert("wrong credentials");
                return;
            }
        }
        let input = document.getElementById("review");
        let value = input.value;
        // console.log(value);

        // get element using id
        let reviews = product.review ||[];
        reviews.push(userName+": "+value);

        product.review= reviews;

        //get the data and add the array of reviews to the particular product

        let data = JSON.parse(localStorage.getItem("data"));
        // console.log(data);
        data[product.id-1] = product;

        localStorage.setItem("product", JSON.stringify(product));

        localStorage.setItem("data", JSON.stringify(data));
        // data = JSON.parse(localStorage.getItem("data"));
        // console.log(data);
        
        // // let pd = data.
        window.location.reload();
    });

    indiv.append(label, input, button);


    div.append(img, h3, p1, p2, p3, p4, p5, indiv);
    div.classList.add('card');

    return div;
}


let product = JSON.parse(localStorage.getItem("product"));
let card = createCard(product);
container.append(card);