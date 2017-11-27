// connect to firebase
var config = {
    apiKey: "AIzaSyAcB74amXzK2ESQ6Plqb9mr_vKMk0qNk6k",
    authDomain: "fypus-demo.firebaseapp.com",
    databaseURL: "https://fypus-demo.firebaseio.com",
    projectId: "fypus-demo",
    storageBucket: "",
    messagingSenderId: "794573127007"
};
firebase.initializeApp(config);

// read data
var ref = firebase.database().ref();

var data;
ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    data = snapshot.val()
    $(document).ready(function () {
        regress(data);
    });
}, function (error) {
    console.log("Error: " + error.code);
});
