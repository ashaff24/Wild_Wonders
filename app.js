function askUserNameQuestion(){
    var userName = prompt("Please enter your name");
    document.write("Welcome, " + userName.toUpperCase() + "!"); 
}

function askToLearnAboutAnimals(){
    var animalsQuestion = confirm("Would you like to learn about animals?");
    if (animalsQuestion==true){
        alert("LET'S LEARN!");
    } else if (animalsQuestion==false){
        alert("This page might not be for you!");
        window.location.replace('https://fupenguin.com/');
    }
}  
    
function askUserHowManyContinents(){
    var userAnswer = prompt ('How many continents have animals?');
    while (userAnswer != 7){
        userAnswer = prompt('Not quite, try again!');
    } if (userAnswer = 7){
        alert('You got it!')
    }
}

function placeCurrentDate(){
    var todayDate = new Date(); 
    document.write(todayDate);
}

function numberGame(){
    var gameAnswer = prompt('Pick a number between 1 and 10. You have 5 guesses!');
    for (var i = 0; i < 6; i++){
        if(gameAnswer === '4'){
            alert('You got it right! Congratulations!');
            break;
        } 
        if(i === 5 && gameAnswer != 4){
            alert('You did not get it right...better luck next time!'); 
        }
        gameAnswer = prompt(`Pick a number between 1 and 10. You have ${4-i} guesses!`); 
    }
}
// for(var i = 0; i<5; i++){
//     var correctPassword = prompt('Enter your password: ');
//     if(correctPassword ===password){
//         alert('You entered the correct password');
//         break;
//     }
//     if (i ===4 && correctPassword != password){
//         alert('You have been locked out for 5 min');
//     }
// }