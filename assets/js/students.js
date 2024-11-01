let students = [
  {
    id: 1,
    name: "Ali Rıza",
    lastname: "Çinibulak",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 2,
    name: "Berk",
    lastname: "Kalkan",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 3,
    name: "Bora",
    lastname: "Kalaycıoğlu",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 4,
    name: "Elif",
    lastname: "Yiğit",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 5,
    name: "Emre",
    lastname: "Çelik",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 6,
    name: "Kerem",
    lastname: "Özsobacı",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 7,
    name: "Muhammed",
    lastname: "Aslan",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 8,
    name: "Mücahit",
    lastname: "Yıldız",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 9,
    name: "Sude",
    lastname: "Çakır",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 10,
    name: "Zennur",
    lastname: "Gömek",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 11,
    name: "İrem",
    lastname: "Çoban",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 12,
    name: "Şura",
    lastname: "Dede",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
];
const btnList = document.querySelector(".btnList");
const studentList = document.querySelector(".studentList");
btnList.addEventListener("click", handleShowList);

let womenCount = 0;
let menCount = 0;
let womenList = [];
let menList = [];
indexWomen = 0;
indexMen = 0;

function handleShowList() {
  studentList.innerHTML = "";
  womenCount = 0;
  menCount = 0;
  womenList = [];
  menList = [];
  indexWomen = 0;
  indexMen = 0;

  if (studentList.innerHTML.length > 0) {
    studentList.innerHTML = "";
  } else {
    for (const stu of students) {
      studentList.innerHTML += `<li class='list-item'><h4>ID: </h4>${stu.id} <h4>İsim: </h4> ${stu.name} <h4>Soyisim: </h4> ${stu.lastname}
              <h4>Cinsiyet: </h4> ${stu.gender} <h4>Bölüm: </h4>  ${stu.section} <h4>Rol: </h4> ${stu.role}</li>`;
      if (stu.gender === "Kadın") {
        womenList[indexWomen] = stu;
        womenCount++;
        indexWomen++;
      } else {
        menList[indexMen] = stu;
        menCount++;
        indexMen++;
      }
    }
  }
  womenCountTxt.innerText = womenCount;
  menCountTxt.innerText = menCount;
}

const womenCountTxt = document.querySelector(".womenCountTxt");
const menCountTxt = document.querySelector(".menCountTxt");

const womenBtn = document.querySelector(".womenBtn");
const womenLists = document.querySelector(".womenLists");
womenBtn.addEventListener("click", handleWomenList);

function handleWomenList() {
  if (womenLists.innerHTML.length > 0) {
    womenLists.innerHTML = "";
  } else {
    for (const wom of womenList) {
      womenLists.innerHTML += `<li class='list-item'> <h4>İsim: </h4>${wom.name} <h4>Soyisim: </h4>${wom.lastname} </li>`;
    }
  }
}

const menBtn = document.querySelector(".menBtn");
const menLists = document.querySelector(".menLists");
menBtn.addEventListener("click", handleMenList);

function handleMenList() {
  if (menLists.innerHTML.length > 0) {
    menLists.innerHTML = "";
  } else {
    for (const men of menList) {
      menLists.innerHTML += `<li class='list-item'> <h4>İsim: </h4>${men.name} <h4>Soyisim: </h4>${men.lastname} </li>`;
    }
  }
}
