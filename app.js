// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "profile1.png",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "person-1.jpeg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "Personal Website.png",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "profile2.png",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let arrIndex = 0;
const showPerson = (index) =>{
  const item = reviews[index];
  img.src = item.img;
  author.innerText = item.name;
  job.innerText = item.job;
  info.innerText =item.text;
}
nextBtn.addEventListener('click', () => {
  arrIndex++;
  if (arrIndex > reviews.length - 1){
    arrIndex = 0;
  }
  showPerson(arrIndex)
})
preBtn.addEventListener('click', () => {
  arrIndex--;
  if (arrIndex < 0){
    arrIndex = reviews.length -1;
  }
  showPerson(arrIndex)
})
randomBtn.addEventListener('click', () => {
  arrIndex = Math.floor(Math.random()*reviews.length);
  showPerson(arrIndex)
})
