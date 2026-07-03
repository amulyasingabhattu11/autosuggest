const users=[
    {
        "name": "Jane Doe",
        "gender": "Female",
        "image": "../Images/jane.png"
    },
    {
    "name" :"John Doe",
    "gender" : "Male",
    "image" : "../Images/john.png"
  },
];
let curUserId=0;
function toggle(){
    if(curUserId==0){
        curUserId=1;
    }
    else{
        curUserId=0;
    }
    document.getElementById("img").src=users[curUserId].image;
     document.getElementById("card-name").innerText=users[curUserId].name;
     document.getElementById("card-gender").innerText=users[curUserId].gender;
}
console.log("Hello from JS");
//alert("Hello from JS");