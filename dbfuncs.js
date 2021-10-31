import {} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzd6dVoVNiLhlAOCS7tgovHnhmYB-_2Ek",
  authDomain: "pharmaflow.firebaseapp.com",
  projectId: "pharmaflow",
  storageBucket: "pharmaflow.appspot.com",
  messagingSenderId: "684270527080",
  appId: "1:684270527080:web:d1c24b2a02ed77ff6751dd",
  measurementId: "G-BPMY4FPM6Q",
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";

const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";

function createUser() {
  const db = getDatabase();
  let email = document.getElementById("email").value;
  let index = 0;
  while (email.substring(index, index + 1) !== "@") {
    index++;
  }
  let username = email.substring(0, index);
  console.log(username);
  let password = document.getElementById("password").value;
  set(ref(db, "Users/" + username), {
    Username: username,
    Password: password,
    CurrentTasks: 0,
    CompletedTasks: 0,
  });
}

function getUser() {
  //const dbref = ref(db);
  // let email = document.getElementById("email").value;
  // let index = 0;
  // while (email.substring(index, index + 1) !== "@") {
  //   index++;
  // }
  // let username = email.substring(0, index);
  const db = getDatabase();
  let username = "salehahmad";
  const starCountRef = ref(db, "Users/" + username);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

function updateUser(username, currTasks, completedTasks) {
  const db = getDatabase();
}

function removeUser() {}

export { createUser, getUser, updateUser, removeUser };
