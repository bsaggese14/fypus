var config = {
		    apiKey: "AIzaSyBB-FnBUDcX58sJUC_3Px-Zg8Wy5Q-qy2c",
		    authDomain: "fypus-b50d0.firebaseapp.com",
		    databaseURL: "https://fypus-b50d0.firebaseio.com",
		    projectId: "fypus-b50d0",
		    storageBucket: "",
			messagingSenderId: "173044464319"
		};
		firebase.initializeApp(config);

		var database = firebase.database();

		//read database
		var ref = firebase.database().ref();
		var data;
		ref.on("value", function(snapshot) {
			
			//prepare data to be viable for regression
			data = snapshot.val()["Data"]
			strData = "";

			$( document ).ready(function() {
					regress(data);
			});

		}, function (error) {
		   console.log("Error: " + error.code);
		});