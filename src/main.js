import React from 'react'
import './style.css'

fetch('https://jsonplaceholder.typicode.com/users')
//fetch('data.json')
.then(resp=>resp.json())
.then(console.log)

var fs = require('fs');
var json_data = require('./data.json');

fs.readFile(json_data, 'utf8', function (err, data) {
  try {
    data = JSON.parse(data)
    console.log('Name:',data)
  } catch (e) {
    console.log('ERROR=: '+e)
    // Catch error in case file doesn't exist or isn't valid JSON
  }
});

const urls=[
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url=>
  fetch(url).then(resp=> resp.json()
  ))).then(arr=>{
    console.log('users',arr[0])
    console.log('posts',arr[1])
    console.log('albums',arr[2])
  }).catch('oops');

  const urls=[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
  ]
const getData = async function(){
  const [users,posts,albums] = await Promise.all(urls.map(url=>
    fetch(url).then(resp=>resp.json())
    ))
    console.log('users',users)
    console.log('posts',posts)
    console.log('albums',albums)
}



const Main = () => {    
    return (
      <div id="top-nav"className="topnav">
      <a id ="txt-col-1"className="class-name">BAVITHRAN</a>
      <a id="txt-col-2" className="active" href="#home">Home</a>
      <a id="txt-col-3" href="#news">News</a>
      <a id="txt-col-4" href="#contact">Contact</a>
      <a id="txt-col-5" href="#about">About</a>
    </div>        
    );
    }    
    //window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 0|| document.documentElement.scrollTop > 0) {
    //document.getElementById("top-nav").style.color="black";
    document.getElementById("top-nav").style.position= "sticky";
   document.getElementById("top-nav").style.backgroundColor="#FFD000";
  // alert(document.getElementById("top-nav").style.color); 
  document.getElementById("txt-col-1").style.color="black";
  document.getElementById("txt-col-2").style.color="black";
  document.getElementById("txt-col-3").style.color="black";
  document.getElementById("txt-col-4").style.color="black";
  document.getElementById("txt-col-5").style.color="black";
  
  
  // document.getElementById("top-nav").style.color="#000000";
   // document.getElementById("top-nav").style.padding = "14px 16px";
    //document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("top-nav").style.position= "sticky";
    document.getElementById("top-nav").style.backgroundColor="";
    document.getElementById("txt-col-1").style.color="white";
    document.getElementById("txt-col-2").style.color="white";
    document.getElementById("txt-col-3").style.color="white";
    document.getElementById("txt-col-4").style.color="white";
    document.getElementById("txt-col-5").style.color="white";
    //document.getElementById("top-nav").style.padding = "14px 16px";
    //document.getElementById("logo").style.fontSize = "35px";
  }
} 


    export default Main
