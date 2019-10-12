// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyAE2oIm99Yz0lTHVidmQSRQKS9DE884j3E",
    authDomain: "hackathon-ajo-7b2f8.firebaseapp.com",
    databaseURL: "https://hackathon-ajo-7b2f8.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
