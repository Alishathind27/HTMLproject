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
      phone: phone
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
      alert("user nor registered");
    }else{
       if(pw == received.password){
      alert("log in successful");
    }else{
      alert("wrong password");
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
