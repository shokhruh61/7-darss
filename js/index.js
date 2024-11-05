// const p = document.querySelector('#hi')


// console.log(p.innerHTML);

// console.log(p.textContent);

// p.innerHTML = '<a>qandaydir link </a>'



// const image = document.createElement('img');

// image.setAttribute('src', 'https://picsum.photos/200/300')

// image.setAttribute('alt', 'tasodifiy rasim');

// block.appendChild(image)

// const data = {
//     home: "Home",
//     About: "About",
//     contact: "contact"
// }
// const block = document.querySelector('#block');
// const button = document.querySelector('#btn');

// function createCard(data) {
//     return `
//     <div class="card">
//        <img src="${data.image}" alt="">
//        <h1>${data.title}</h1>
//          <p>${data.text}</p>
//     </div>
// `    
// }


// button && button.addEventListener('click', function() {
//     let data = {
//       image: "https://picsum.photos/200/300",

//       title: "sarlavha",

//       title: "lorem ipsum"
//     }

//     let card = createCard(data);

//     block.innerHTML += card;



// })



// const button = document.querySelector("#btn");
// const cards = document.querySelector(".cards");
// const loader = document.querySelector(".loader");
// function createCard(data) {
//   return `
//       <div class="card">
//         <p>Ism: ${data.ism}</p>
//         <p>Familya: ${data.familya}</p>
//         <p>Yosh: ${data.yosh}</p>
//         <p>Telefon: ${data.tel}</p>
//         <p>Email: ${data.email}</p>
//         <img src="${data.rasm}" alt="Rasm mavjud emas" >
//       </div>`;
// }
// button &&
//   button.addEventListener("click", function () {
//     const data = {
//       ism: document.querySelector("#ism").value,
//       familya: document.querySelector("#familya").value,
//       yosh: document.querySelector("#yosh").value,
//       tel: document.querySelector("#tel").value,
//       email: document.querySelector("#email").value,
//       rasm: document.querySelector("#rasm").value,
//     };
//     const block = createCard(data);
//     cards.innerHTML += block;
//   });

function displayUserData() {
  // Foydalanuvchi kiritgan qiymatlarni olish
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const birthdate = document.getElementById('birthdate').value;
  const photoUrl = document.getElementById('photo').value;

  // Foydalanuvchi kiritgan ma'lumotlarni chiqarish uchun yangi HTML yaratish
  const userDataDiv = document.getElementById('userData');
  userDataDiv.innerHTML = `
  <div class="card p-4 shadow">
    <h5>Foydalanuvchi Ma'lumotlari:</h5>
    <p><strong>Ism:</strong> ${name}</p>
    <p><strong>Familiya:</strong> ${surname}</p>
    <p><strong>Tug'ilgan Kuni:</strong> ${birthdate}</p>
    <p><strong>Rasm:</strong></p>
    <img src="${photoUrl}" alt="Foydalanuvchi rasmi" class="img-fluid rounded mb-3" style="max-width: 200px; height: auto;">
  </div>
  `;

  // Input maydonlarini tozalash
  document.getElementById('userForm').reset();
}
