
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBm6pwAHHCN7B2iiTGCRAxIERxb2FVBMU8",
    authDomain: "login-demo-7b334.firebaseapp.com",
    projectId: "login-demo-7b334",
    storageBucket: "login-demo-7b334.appspot.com",
    messagingSenderId: "739938115453",
    appId: "1:739938115453:web:4b287bb32070f31f4fb614",
    measurementId: "G-TZ0KD7FMDX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    console.log("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));

  }


  //signOut

  function signOut(){
    auth.signOut();
    console.log("SignOut Successfully from System");
    location.reload();
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      console.log("Active user "+email);
      var form = document.getElementById("main");
      form.style.cssText="display:none;"
      var h1 = document.getElementById("h1");
      h1.innerHTML= "Hello: " + email;
      document.getElementById("signOutHere").style.display="flex";
      document.getElementById('signUpHere').style.cssText="display:none;";
      document.getElementById('signInHere').style.cssText="display:none;";
      document.getElementById('signupDisplay').style.cssText="display:none;";
      document.getElementById('signinDisplay').style.cssText="display:none;";


    }else{
      console.log("No Active user Found");

    }
  })
