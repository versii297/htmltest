const reviews = [
    {
        id: 1,
        author: "jerry",
        job: "cheese-thief",
        img: "images/Jerry.jpg",
        info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem tempore aliquam recusandae soluta accusamus ab, quaerat culpa, eum numquam dolores blanditiis quisquam necessitatibus. Quas porro soluta culpa ratione nam distinctio molestias, totam ipsam? Harum, quisquam veniam! Suscipit, natus debitis?"
    },
    {
        id: 2,
        author: "popeye",
        job: "sailer & treasure hunter",
        img: "images/popeye.jpg",
        info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem tempore aliquam recusandae soluta accusamus ab, quaerat culpa, eum numquam dolores blanditiis quisquam necessitatibus. Quas porro soluta culpa ratione nam distinctio molestias, totam ipsam? Harum, quisquam veniam! Suscipit, natus debitis?"   
    },
    {
        id: 3,
        author: "pikachu",
        job: "detective",
        img: "images/pikachu.png",
        info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem tempore aliquam recusandae soluta accusamus ab, quaerat culpa, eum numquam dolores blanditiis quisquam necessitatibus. Quas porro soluta culpa ratione nam distinctio molestias, totam ipsam? Harum, quisquam veniam! Suscipit, natus debitis?"
    },
    {
        id: 4,
        author: "SpongeBob",
        job: "fry cook",
        img: "images/Spongebob.jpg",
        info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem tempore aliquam recusandae soluta accusamus ab, quaerat culpa, eum numquam dolores blanditiis quisquam necessitatibus. Quas porro soluta culpa ratione nam distinctio molestias, totam ipsam? Harum, quisquam veniam! Suscipit, natus debitis?"
    }/*,
    {
        id: 5,
        author: "mr. bean",
        job: "security staff",
        img: "images/Mr Bean.png",
        info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem tempore aliquam recusandae soluta accusamus ab, quaerat culpa, eum numquam dolores blanditiis quisquam necessitatibus. Quas porro soluta culpa ratione nam distinctio molestias, totam ipsam? Harum, quisquam veniam! Suscipit, natus debitis?"
    }*/
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job  = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set strating item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson();
});

// show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson();
});

//random person

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})
