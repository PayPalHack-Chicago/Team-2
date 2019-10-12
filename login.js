(function(){

    const config = {
        apiKey: "AIzaSyAE2oIm99Yz0lTHVidmQSRQKS9DE884j3E",
        authDomain: "hackathon-ajo-7b2f8.firebaseapp.com",
        projectId:"hackathon-ajo-7b2f8",
        databaseURL: "https://hackathon-ajo-7b2f8.firebaseio.com/",
        storageBucket: "bucket.appspot.com"
    
    };
    firebase.initializeApp(config);
   // const db = firebase.firestore();
    
    document.getElementById("sign").onclick= function (){
        const email=document.getElementById("email").value;
        const password=document.getElementById("pswd").value;
        
        // db.collection("users").add({
        //     name: fullname,
        //     email: email,
        //     dob: dob,
        //     username: username,
        //     country:country,
        //     address:address,
        //     postal:postal,
        //     State:State
        // })
        // .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,password);
        promise.catch(e=> console.log(e.message));
        location.replace("profile.html");
    }
    
    }());