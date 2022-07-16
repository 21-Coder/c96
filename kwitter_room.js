
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();
function addRoom()
{
    room_name= document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}
