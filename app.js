const date=document.querySelector("#date");
const day=document.querySelector("#day");
const month=document.querySelector("#month");
const year=document.querySelector("#year");

const today=new Date();

const days=["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
const months=["January" , "February" , "March" , "April" ,"May" , "June" ,"July" , "August" ,"September" ,"October" ,"November" , "December"];

console.log(today);
date.innerHTML= (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML=days[today.getDay()];
month.innerHTML=months[today.getMonth()];
year.innerHTML=today.getFullYear();