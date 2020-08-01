const reviews = [
  {
    image: 'review-img/bugs_bunny.jpg',
    name: 'Bugs Bunny',
    job: 'Carrot Lover',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus amet eum corporis, harum eos quae libero laudantium. Voluptatem dolor quae, est tenetur dolorem quod. Fugit incidunt facilis vero minima corrupti.'
  },
  {
    image: 'review-img/mr_peach.png',
    name: 'Mr. Peach',
    job: 'Fruit Seller',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis ullam quod quisquam unde cum dolore? Alias suscipit nam quos nostrum commodi explicabo eos at reiciendis fugit minus et magnam quidem veritatis eius praesentium odio, aspernatur harum iste reprehenderit vero?'
  },
  {
    image: 'review-img/mr_scull.jpg',
    name: 'Mr. Scull',
    job: 'Stage Artist',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus pariatur optio enim et labore. Ipsam temporibus, quibusdam vitae laborum ea molestias, tempora illum non culpa modi, adipisci ad provident at!'
  },
  {
    image: 'review-img/phineas_flynn.png',
    name: 'Phineas Flynn',
    job: 'Student from Danville',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quis porro distinctio explicabo officiis obcaecati magnam. Tempore aspernatur sed quod fuga odio placeat harum itaque maiores nemo omnis fugiat, ducimus aliquam nihil ab quidem facere, dolor ea! Dolores, assumenda cupiditate.'
  },
  {
    image: 'review-img/spongebob.jpg',
    name: 'SpongeBob',
    job: 'Fry Cook',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quis porro distinctio explicabo officiis obcaecati magnam. Tempore aspernatur sed quod fuga odio placeat harum itaque maiores nemo omnis fugiat, ducimus aliquam nihil ab quidem facere, dolor ea! Dolores, assumenda cupiditate.'
  },
];

const personImage = document.querySelector('#person-img');
const personName = document.querySelector('#name');
const personJob = document.querySelector('#job');
const personReview = document.querySelector('#review-text');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let currentItem = 2;

window.addEventListener('DOMContentLoaded', function() {
  showReview();
});



function showReview() {
  const item = reviews[currentItem];
  personImage.src = item.image;
  personName.textContent = item.name;
  personJob.textContent = item.job;
  personReview.textContent = item.comment;
}

// show next review
nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview();
})

// show previous review
prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview();
})