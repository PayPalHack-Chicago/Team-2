(function(){

const config = {
    apiKey: "AIzaSyAE2oIm99Yz0lTHVidmQSRQKS9DE884j3E",
    authDomain: "hackathon-ajo-7b2f8.firebaseapp.com",
    databaseURL: "https://hackathon-ajo-7b2f8.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

document.getElementById("sign").onclick= function (){
    const email=document.getElementById("email").value;
    const password=document.getElementById("pswd").value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise.catch(e=> console.log(e.message));
    
}

}());