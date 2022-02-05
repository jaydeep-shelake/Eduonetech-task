//sigin

const email= document.getElementById('email');
const password = document.getElementById('password');
    console.log(email.value)
const form = document.getElementById('form')
const container = document.getElementById('container')
const userElem = document.getElementById('userEmai')
const userCon = document.getElementById('user')
const logoutBtn = document.getElementById('logoutBtn')?document.getElementById('logoutBtn'):null
console.log(logoutBtn)
form.addEventListener('submit',async(e)=>{
    e.preventDefault()
    try {
    const data= await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
        console.log(data)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    
        window.alert("Error : " + errorMessage); 
    }
})
firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      // User is signed in.
  
     
  
      const user = firebase.auth().currentUser;
  
      if(user != null){
  
        const userEmail = user.email;
         container.style.display="none"
         userCon.style.display="flex"
      userElem.innerText=userEmail
        // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
      userCon.style.display="none"

      container.style.display="flex"
    //   document.getElementById("user_div").style.display = "none";
    //   document.getElementById("login_div").style.display = "block";
  
    }
  });

  logoutBtn.addEventListener('click',async()=>{
      console.log('logout')
    await firebase.auth().signOut();
  })