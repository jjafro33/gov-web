  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAuth ,GoogleAuthProvider ,signInWithPopup } from  "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAIzmw5SGlce_m2z2hZp4Oxgd_FwLd89Bw",
    authDomain: "kalviihub.firebaseapp.com",
    projectId: "kalviihub",
    storageBucket: "kalviihub.firebasestorage.app",
    messagingSenderId: "192046960029",
    appId: "1:192046960029:web:a8be44baffb1905a7e3374",
    measurementId: "G-YYMZ8H6M4N"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);  
    auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const googleLoginButton = document.getElementById('googleSignIn');
  googleLoginButton.addEventListener("click", function() {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "";
   
  } )
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
  });   