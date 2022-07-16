//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBFh4zCjRHLdfp6xmqswL0mZFl3BIc9KiU",
      authDomain: "kwitter-ee132.firebaseapp.com",
      databaseURL: "https://kwitter-ee132-default-rtdb.firebaseio.com",
      projectId: "kwitter-ee132",
      storageBucket: "kwitter-ee132.appspot.com",
      messagingSenderId: "1036873197698",
      appId: "1:1036873197698:web:5665252617bb9043ea2c9b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      })
  }