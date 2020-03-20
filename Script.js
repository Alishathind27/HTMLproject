function addData(){


// open Database
let openRequest = indexedDB.open("Travel_Database", 1);

// call when create table
openRequest.onupgradeneeded = function() {
console.log("OUN");

// add table code
  let db = openRequest.result;
  if (!db.objectStoreNames.contains('register_table')) {
  db.createObjectStore('register_table', {keyPath: 'username'});
}
};

// if error occurs
openRequest.onerror = function() {
console.log("err");
};

// call when adding data
openRequest.onsuccess = function() {
console.log("success");

var username = document.getElementById('txt1').value;
// var name = document.getElementById('txt2').value;
var email = document.getElementById('txt2').value;
var password = document.getElementById('txt3').value;
var phone = document.getElementById('txt4').value;


let db = openRequest.result;
db.onversionchange = function() {
db.close();
};

// add data to table - code
let transaction = db.transaction("register_table", "readwrite"); // (1)
let t = transaction.objectStore("register_table"); // (2)

   let data = {
      username: username,
      // name: name,
      email: email,
      password: password,
      phone: phone,
      mylist: []
      };


let addRequest = t.add(data); // (3)

  addRequest.onsuccess = function() { // (4)
  alert("Successfully Registered. Username: " + addRequest.result);
  };

addRequest.onerror = function() {
console.log("Error", request.error);
  };

  // function ends(onsuccess)
};
openRequest.onblocked = function() {
console.log("on block called");
};

// function ends
}



//
function checkLoginUser(){
  // open Database
  let openRequest = indexedDB.open("Travel_Database", 1);

  // call when create table
  openRequest.onupgradeneeded = function() {
  console.log("OUN");

  // add table code
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('register_table')) {
    db.createObjectStore('register_table', {keyPath: 'username'});
  }
  };

  // if error occurs
  openRequest.onerror = function() {
  console.log("err");
  };

  // call when adding data
  openRequest.onsuccess = function() {
  console.log("success");

  let db = openRequest.result;
  db.onversionchange = function() {
  db.close();
  };

  // add data to table - code
  let transaction = db.transaction("register_table", "readwrite"); // (1)
  let t = transaction.objectStore("register_table"); // (2)

         let getreq = t.get("logInUser"); // (3)

          getreq.onsuccess = function() {
            console.log("log in - on success called"); // (4)
          var data = getreq.result;
          var user = data.value;

          if(user == ""){

                document.getElementById('mylist').style.visibility = "hidden";
                document.getElementById('login').innerHTML = "LogIn";


          }else{

            document.getElementById('mylist').style.visibility = "visible";
            document.getElementById('login').innerHTML = "LogOut";
          }

      };

    getreq.onerror = function() {
    console.log("Error", request.error);

    };

    // function ends(onsuccess)
  };
  openRequest.onblocked = function() {
  console.log("on block called");
  };
}



//
function saveLoginUser(){
// open Database
let openRequest = indexedDB.open("Travel_Database", 1);

// call when create table
openRequest.onupgradeneeded = function() {
console.log("OUN");

// add table code
  let db = openRequest.result;
  if (!db.objectStoreNames.contains('register_table')) {
  db.createObjectStore('register_table', {keyPath: 'username'});
}
};

// if error occurs
openRequest.onerror = function() {
console.log("err");
};

// call when adding data
openRequest.onsuccess = function() {
console.log("success");

var username = document.getElementById('txt1').value;

let db = openRequest.result;
db.onversionchange = function() {
db.close();
};

// add data to table - code
let transaction = db.transaction("register_table", "readwrite"); // (1)
let t = transaction.objectStore("register_table"); // (2)

   let data = {
      username: "logInUser",
      // name: name,
      value: username,

      };

  let addRequest = t.put(data); // (3)

  addRequest.onsuccess = function() { // (4)
  alert("LogIn successful");
  window.location.href = "index.html";
  };

addRequest.onerror = function() {
console.log("Error", request.error);
  };

  // function ends(onsuccess)
};
openRequest.onblocked = function() {
console.log("on block called");
};

// function ends
}


//
function loginLogout(){

  let btnName = document.getElementById("login").innerHTML;

  if (btnName == "LogIn"){
    window.location.href = "Login.html";
  }else{
    logout();
  }
}


//
function logout(){

 // open Database
  let openRequest = indexedDB.open("Travel_Database", 1);

  // call when create table
  openRequest.onupgradeneeded = function() {
  console.log("OUN");

  // add table code
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('register_table')) {
    db.createObjectStore('register_table', {keyPath: 'username'});
  }
  };

  // if error occurs
  openRequest.onerror = function() {
  console.log("err");
  };

  // call when adding data
  openRequest.onsuccess = function() {
  console.log("success");

  let db = openRequest.result;
  db.onversionchange = function() {
  db.close();
  };

  // add data to table - code
  let transaction = db.transaction("register_table", "readwrite"); // (1)
  let t = transaction.objectStore("register_table"); // (2)

     let data = {
        username: "logInUser",
        // name: name,
        value: "",

        };
     let addRequest = t.put(data); // (3)

    addRequest.onsuccess = function() { // (4)
    alert("You are logged out successfully");
    window.location.href = "index.html";
    };

  addRequest.onerror = function() {
  console.log("Error", request.error);
    };

    // function ends(onsuccess)
  };
  openRequest.onblocked = function() {
  console.log("on block called");
  };

  // function ends

}// logout ends



// for logIn
function logIn(){

  // open database
  let openRequest = indexedDB.open("Travel_Database", 1);

  openRequest.onupgradeneeded = function() {
  console.log("OUN");
  };

  openRequest.onerror = function() {
  console.log("err");
  };

  openRequest.onsuccess = function() {
  console.log("success");

   var userName = document.getElementById('txt1').value;
   var password = document.getElementById('txt2').value;

    let db = openRequest.result;
    db.onversionchange = function() {
    db.close();
  };


  // add data to table - code
  let transaction = db.transaction("register_table", "readwrite"); // (1)
  let t = transaction.objectStore("register_table"); // (2)


 var uName = userName;
 var pw= password;


     let readReq = t.get(uName);

    readReq.onsuccess = function() { // (4)
    var received = readReq.result;
    console.log(received)

    if (received == null){
      alert("User nor registered");
    }else{
       if(pw == received.password){

        saveLoginUser();
     document.getElementById("login").innerHTML="Log Out";

     // remove latr


    }else{
      alert("Wrong password");
    }
    }
};

    readReq.onerror = function() {
  console.log("Error", readReq.error);
    };
// success function ends
};


openRequest.onblocked = function() {
  console.log("on block called");
};
// Login function ends
}
