let name="madhav shukla";
let birthdate="04/09/2005";
let favcolor="black";
let favperson="gandu";
let hobby="traveling";
 let Birthdate;
 let color;
 let person;
 let Hobby;
 let Name;
 let ready=prompt("Let's play game (How much you know me ?) Type Ready or Quick");
 while((ready!="Quick")&&(ready!="Ready")){
    ready=prompt("Write Ready or Quick (as case senstive)");
}
if(ready=="Ready"){
    console.log("You Start the game");
    Name= prompt("Enter My Name (name surname)");
}
else{Name=ready;}
 while((Name!=name)&&(Name!="Quick")){
    Name=prompt("Wrong Try Again or Write Quick to quick the game");
}
if(Name==name){
    console.log("1 . Right : madhav shukla");
      Birthdate=prompt("Enter my Birthdate (DD/MM/YYYY)");
    
}
else{Birthdate=Name;}
while((Birthdate!=birthdate)&&(Birthdate!="Quick")){
    Birthdate=prompt("Wrong Try Again or Write Quick to quick the game");
}
if(Birthdate==birthdate){
    console.log("2 . Right : 04/09/2005");
    color=prompt("Enter my favourite color"); 
}
else{color=Birthdate;}
while((color!=favcolor)&&(color!="Quick")){
    color=prompt("Wrong Try Again or Write Quick to quick the game");
}
if(color==favcolor){
    console.log("3 . Right : black");
    person=prompt("Enter my girlfriend nickname "); 
}
else{person=color;}
while((person!=favperson)&&(person!="Quick")){
    person=prompt("Wrong Try Again or Write Quick to quick the game");
}
if(person==favperson){
    console.log("4 . Right : gandu");
    Hobby=prompt("Enter my hobby  "); 
}
else{Hobby=person;}
while((Hobby!=hobby)&&(Hobby!="Quick")){
    Hobby=prompt("Wrong Try Again or Write Quick to quick the game");
}
if(Hobby==hobby){
    console.log("5 . Right : traveling");
    console.log("You give all correct Answer");
    console.log("Your Game is END");
}
else{
    console.log("You Quick the game");
}
