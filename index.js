const userInfo = {
  username: "flatUser123",
  description: "hi, welcome to my webpage. just a new user of this website!",
  theme: "blue",
};

function displayUser(userInfo){
const header=document.querySelector("#main")
header.textContent=userInfo.username+"'s Personal Webpage"
header.className=userInfo.theme

const description=document.createElement("p")
const body=document.querySelector("body")

description.textContent=userInfo.description
description.className=userInfo.theme

body.append(description)
}

displayUser(userInfo)