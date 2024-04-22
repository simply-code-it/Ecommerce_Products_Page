// Requirements:

// Core Features:
// Dynamic Product Cards Display:
// let data = {
//     "products": 
let products = [
      {
        "id": 1,
        "title": "Multi-Purpose Blender",
        "price": 49.99,
        "description": "A versatile kitchen blender with 5 speed settings and a robust glass jar.",
        "category": "Kitchen Appliances",
        "image": "",
        "rating": 4.5
      },
      {
        "id": 2,
        "title": "Stylish Desk Lamp",
        "price": 29.99,
        "description": "A sleek and modern desk lamp perfect for any office or study area.",
        "category": "Home Decor",
        "image": "",
        "rating": 4.8
      },
      {
        "id": 3,
        "title": "Leather Office Chair",
        "price": 189.99,
        "description": "Ergonomic office chair with adjustable height and recline functions.",
        "category": "Home Decor",
        "image": "",
        "rating": 4.3
      },
      {
        "id": 4,
        "title": "Bluetooth Speaker",
        "price": 59.99,
        "description": "Portable Bluetooth speaker with excellent sound quality and a durable exterior.",
        "category": "Electronics",
        "image": "",
        "rating": 4.7
      },
      {
        "id": 5,
        "title": "Electric Toothbrush",
        "price": 39.99,
        "description": "Advanced electric toothbrush with multiple brushing modes and a timer.",
        "category": "Personal Care",
        "image": "",
        "rating": 4.4
      },
      {
        "id": 6,
        "title": "Thermal Coffee Maker",
        "price": 99.99,
        "description": "12-cup coffee maker with a thermal carafe to keep coffee hot for hours.",
        "category": "Kitchen Appliances",
        "image": "",
        "rating": 4.6
      },
      {
        "id": 7,
        "title": "Wireless Gaming Mouse",
        "price": 29.99,
        "description": "High precision wireless mouse with customizable buttons for gaming.",
        "category": "Electronics",
        "image": "",
        "rating": 4.2
      },
      {
        "id": 8,
        "title": "High-Definition Monitor",
        "price": 249.99,
        "description": "27-inch high-definition monitor ideal for gaming and professional use.",
        "category": "Electronics",
        "image": "",
        "rating": 4.9
      },
      {
        "id": 9,
        "title": "Yoga Mat",
        "price": 19.99,
        "description": "Eco-friendly yoga mat with superior grip and cushion.",
        "category": "Fitness Equipment",
        "image": "",
        "rating": 4.1
      },
      {
        "id": 10,
        "title": "Running Shoes",
        "price": 79.99,
        "description": "Lightweight and durable running shoes designed for long-distance trails.",
        "category": "Fitness Equipment",
        "image": "",
        "rating": 4.0
      },
      {
        "id": 11,
        "title": "Smart Watch",
        "price": 199.99,
        "description": "Fitness and health tracking smart watch with customizable watch faces.",
        "category": "Electronics",
        "image": "",
        "rating": 4.6
      },
      {
        "id": 12,
        "title": "Stainless Steel Water Bottle",
        "price": 24.99,
        "description": "Insulated stainless steel water bottle that keeps liquids cold or hot for hours.",
        "category": "Fitness Equipment",
        "image": "",
        "rating": 4.8
      },
      {
        "id": 13,
        "title": "Camping Tent",
        "price": 149.99,
        "description": "Spacious 4-person tent perfect for family camping trips.",
        "category": "Fitness Equipment",
        "image": "",
        "rating": 4.3
      },
      {
        "id": 14,
        "title": "E-reader",
        "price": 129.99,
        "description": "Lightweight e-reader with a paper-like display and weeks-long battery life.",
        "category": "Electronics",
        "image": "",
        "rating": 4.5
      },
      {
        "id": 15,
        "title": "Mechanical Keyboard",
        "price": 69.99,
        "description": "Responsive mechanical keyboard with customizable backlit keys.",
        "category": "Electronics",
        "image": "",
        "rating": 4.7
      },
      {
        "id": 16,
        "title": "Gourmet Baking Set",
        "price": 49.99,
        "description": "Complete baking set with nonstick pans and silicone utensils.",
        "category": "Kitchen Appliances",
        "image": "",
        "rating": 4.6
      },
      {
        "id": 17,
        "title": "Organic Facial Moisturizer",
        "price": 29.99,
        "description": "Hydrating organic moisturizer suitable for all skin types.",
        "category": "Personal Care",
        "image": "",
        "rating": 4.4
      },
      {
        "id": 18,
        "title": "Digital Camera",
        "price": 399.99,
        "description": "Compact digital camera with high-resolution photos and video capabilities.",
        "category": "Electronics",
        "image": "",
        "rating": 4.8
      },
      {
        "id": 19,
        "title": "Classic Board Games Set",
        "price": 34.99,
        "description": "Collection of classic board games including chess, checkers, and backgammon.",
        "category": "Home Decor",
        "image": "",
        "rating": 4.2
      },
      {
        "id": 20,
        "title": "Electric Kettle",
        "price": 29.99,
        "description": "Fast boiling electric kettle with auto-shutoff and temperature control.",
        "category": "Kitchen Appliances",
        "image": "",
        "rating": 4.1
      },
      {
        "id": 21,
        "title": "Exercise Bike",
        "price": 299.99,
        "description": "Stable and quiet exercise bike with adjustable resistance levels.",
        "category": "Fitness Equipment",
        "image": "",
        "rating": 4.3
      },
      {
        "id": 22,
        "title": "Luxury Bath Towels",
        "price": 39.99,
        "description": "Set of ultra-soft and absorbent bath towels.",
        "category": "Home Decor",
        "image": "",
        "rating": 4.6
      },
      {
        "id": 23,
        "title": "Hiking Backpack",
        "price": 79.99,
        "description": "Durable hiking backpack with ample storage and hydration compatibility.",
        "category": "Fitness Equipment",
        "image": "",
        "rating": 4.7
      },
      {
        "id": 24,
        "title": "Wireless Earbuds",
        "price": 99.99,
        "description": "True wireless earbuds with active noise cancellation and long battery life.",
        "category": "Electronics",
        "image": "",
        "rating": 4.9
      },
      {
        "id": 25,
        "title": "Silicone Cooking Utensils",
        "price": 24.99,
        "description": "Set of heat-resistant silicone cooking utensils.",
        "category": "Kitchen Appliances",
        "image": "",
        "rating": 4.4
      },
      {
        "id": 26,
        "title": "Sunscreen Lotion",
        "price": 14.99,
        "description": "Broad-spectrum sunscreen lotion with SPF 50+ protection.",
        "category": "Personal Care",
        "image": "",
        "rating": 4.3
      },
      {
        "id": 27,
        "title": "Herbal Tea Assortment",
        "price": 19.99,
        "description": "Variety pack of organic herbal teas.",
        "category": "Kitchen Appliances",
        "image": "",
        "rating": 4.1
      },
      {
        "id": 28,
        "title": "Adjustable Dumbbells",
        "price": 199.99,
        "description": "Set of adjustable dumbbells for a versatile home workout.",
        "category": "Fitness Equipment",
        "image": "",
        "rating": 4.8
      },
      {
        "id": 29,
        "title": "Scented Candles",
        "price": 29.99,
        "description": "Set of three scented candles with calming fragrances.",
        "category": "Home Decor",
        "image": "",
        "rating": 4.2
      },
      {
        "id": 30,
        "title": "Facial Cleansing Brush",
        "price": 49.99,
        "description": "Electric facial cleansing brush for deep cleansing and exfoliation.",
        "category": "Personal Care",
        "image": "",
        "rating": 4.7
      }
    ]

//   }
// console.log(data);

localStorage.setItem("data", JSON.stringify(products));

let container = document.getElementById("container");

function displayCards(db) {
    db.forEach(product=> {
        let card = createCard(product);
        container.append(card);
    })
}

let data = JSON.parse(localStorage.getItem("data"));
displayCards(data);
// Display all products as cards on the homepage using data from the JSON file.
// Each card should include the product's image, title, price, and rating.

function createCard(product) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    img.src = product.image;
    img.alt = "Image alt";
    h3.innerText = product.title;
    p1.innerText = product.price;
    p2.innerText = product.rating;

    div.append(img, h3, p1, p2);
    div.classList.add('card');

    div.addEventListener('click', ()=>{
        localStorage.setItem("product", JSON.stringify(product));
        const url = new URL("http://127.0.0.1:5500/product.html");
        window.location.replace(url);
    });

    return div;
}

// Filtering Feature:
// Implement a dropdown menu to filter products by category.
// Extra points for dynamically creating the dropdown options based on unique categories present in the JSON data.

let categories = data.map(obj => {
    return obj.category;
})

let set = new Set(categories);
categories = Array.from(set);

let select = document.createElement('select');
let option1 = document.createElement('option');
select.name = 'category';
select.id = 'sel_cate';
option1.value="";
option1.innerText = "Please choose an option";

let options = categories.map(category => {
    let option = document.createElement('option');
    option.value = category;
    option.innerText = category;
    return option;
});

select.append(option1, ...options);
let dropdown = document.getElementById("dropdown");
dropdown.append(select);

let target = document.getElementById("sel_cate");
// console.log(target);
target.addEventListener('click', (e)=> {
    let category = e.target.value;
    let data = JSON.parse(localStorage.getItem("data")) ||[];
    let fproducts = data.filter(obj => obj.category == category);

    setTimeout(()=> {
        container.innerHTML = "";
        displayCards(fproducts);
    },2000)
});



// Sorting Feature:
// Provide a dropdown to sort products by price (low to high, high to low) and rating (high to low).

let select2 = document.createElement('select');
let option2 = document.createElement('option');
let option3 = document.createElement('option');
let option4 = document.createElement('option');
let option5 = document.createElement('option');

select2.name = 'order';
select2.id = 'sel_order';
option2.value="";
option2.innerText = "Please choose an option";
option3.value = 'low to high';
option3.innerText = 'price: low to high';
option4.value = 'high to low';
option4.innerText = 'price: high to low';
option5.value = 'rating: high to low';
option5.innerText = 'rating: high to low';

select2.append(option2, option3, option4, option5);
dropdown.append(select2);




let orderby = document.getElementById("sel_order");
orderby.addEventListener('click', (e)=> {
    let value = e.target.value;
    // console.log(value);
    let data = JSON.parse(localStorage.getItem("data"))||[];

    if(value === 'low to high') {
        //sort the products price low to high
        let sorted = [...data];
        sorted.sort((o1, o2) => o1.price - o2.price);
        container.innerHTML = "";
        displayCards(sorted);
    }else if(value === 'high to low') {
        //sort the data price high to low
        let sorted = [...data];
        sorted.sort((o1, o2) => o2.price - o1.price);
        container.innerHTML = "";
        displayCards(sorted);
    }else if(value === 'rating: high to low') {
        //sort the data based on rating
        let sorted = [...data];
        sorted.sort((o1, o2) => o2.rating - o1.rating);
        container.innerHTML = "";
        displayCards(sorted);
    }
})



// Individual Product Pages:
// Clicking on a product card opens a detailed product page.
// This page displays all product details, including a full description from the JSON data.
// Include a reviews section where users can add reviews with their names. These reviews should persist between sessions using Local Storage.



// User Authentication (Sign Up and Login):
// Implement sign-up and login functionality using Local Storage.
// Ensure user credentials are stored securely and persist across sessions.

let loggedin;

let login = document.getElementById("login");
let signin = document.getElementById('signin');
let signout = document.getElementById('signout');

signin.addEventListener('click', ()=>{
    let username = window.prompt("what is your name");
    let password = window.prompt('what is your password');
    let user = {username, password: btoa(password)}
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loggedin', true);
});

login.addEventListener('click', ()=> {
    let username = window.prompt("what is your name");
    let password = window.prompt('what is your password');
    // let user = {username, password: btoa(password)}
    let user = JSON.parse(localStorage.getItem("user"));
    let pass = atob(user.password);

    if(username === user.username && pass === password) {
        localStorage.setItem('loggedin', true);
    }else {
        window.alert("wrong credentials");
    }
})

signout.addEventListener('click', ()=> {
    let loggedin = localStorage.getItem('loggedin');
    if(loggedin) {
        localStorage.setItem('loggedin', "");
    }else {
        alert("you are not loggedin");
    }
})



// User Reviews:
// Enable users to add reviews to products.
// Only allow logged-in users to post reviews. Prompt for login if a non-logged user attempts to post a review.
// Display all user reviews on the product page, including the name of the reviewer.





// Additional Guidelines:
// Features Over UI: Ensure all functionalities are fully implemented and working before focusing on the UI and design aspects of the application.



// HTML & CSS: Focus on the functional layout(basic) rather than aesthetics. However, ensure the application is user-friendly.


// JavaScript: Prioritize clean, well-commented code. Focus on implementing the core functionalities, especially dynamic DOM manipulation, Local Storage usage for data persistence, and user authentication.