var txt;
var r = confirm("Would you like to learn about animals?");
if (r==true) {
    txt = "Let's go!";
} else if(r==false) {
    txt = "This page might not be for you!";
}

document.write(txt)