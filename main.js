canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_1_heigth=100;
car_1_width=110;
car_1_x=10;
car_1_y=10;

car_2_heigth=100;
car_2_width=90;
car_2_x=10;
car_2_y=100;


background_img="racingtrackcanvas.png";
car1_img = "car1.png";
car2_img = "car2.png";


function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground_img;
    background_imgTag.src=background_img;

    car1_img_Tag = new Image();
    car1_img_Tag.onload = uploadcar1;
    car1_img_Tag.src=car1_img;

    car2_img_Tag = new Image();
    car2_img_Tag.onload = uploadcar2;
    car2_img_Tag.src=car2_img;
}

function uploadbackground_img(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_img_Tag,car_1_x,car_1_y,car_1_width,car_1_heigth);
}

function uploadcar2(){
    ctx.drawImage(car2_img_Tag,car_2_x,car_2_y,car_2_width,car_2_heigth);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(keypress == 38){
        car1_up();
        console.log("car1up");
    }

    if(keypress == 40){
        car1_down();
        console.log("car1down");
    }

 if(keypress == 37){
    car1_left();
     console.log("car1left");
 }

 if(keypress == 39){
    car1_right();
     console.log("car1right")
 }
     if(keypress == 87){
        car2_up();
        console.log("car2up");
    }

    if(keypress == 83){
        car2_down();
        console.log("car2down");
    }

 if(keypress == 65){
    car2_left();
     console.log("car2left");
 }

 if(keypress == 68){
    car2_right();
     console.log("car2right")
 }

}

function car1_up(){
    if(car_1_y >= 0){
        car_1_y = car_1_y-10;
        console.log("the x position of car1 is"+car_1_x+"the y is"+car_1_y);
        uploadbackground_img();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down(){
    if(car_1_y <= 500){
        car_1_y=car_1_y+10;
        console.log("the x position of car1 is"+car_1_x+"the y is"+car_1_y)
        uploadbackground_img();
        uploadcar1();
        uploadcar2();
    } 
}

function car1_right(){
    if(car_1_x <= 710){
        car_1_x=car_1_x+10;
        console.log("the x position of car1 is"+car_1_x+"the y is"+car_1_y)
        uploadbackground_img();
        uploadcar1();
        uploadcar2();
    }

    if(car_1_x >  710){
        console.log("car1 has won!");
        document.getElementById("gamestatus").innerHTML = "Car 1 has won"
    }
}

function car1_left(){
    if(car_1_x >= 0){
        car_1_x = car_1_x - 10;
        console.log("the x position of car1 is"+car_1_x+"the y is"+car_1_y);
        uploadbackground_img();
        uploadcar1();
        uploadcar2();
}
}
function car2_up(){
    if(car_2_y >= 0){
        car_2_y = car_2_y-10;
        console.log("the x position of car2 is"+car_2_x+"the y is"+car_2_y);
        uploadbackground_img();
        uploadcar1();

        uploadcar2();
    }
}
function car2_down(){
    if(car_2_y <= 500){
        car_2_y=car_2_y+10;
        console.log("the x position of car2 is"+car_2_x+"the y is"+car_2_y)
        uploadbackground_img();
        uploadcar1();

        uploadcar2();
    }
}

function car2_right(){
    if(car_2_x <= 710){
        car_2_x=car_2_x+10;
        console.log("the x position of car2 is"+car_2_x+"the y is"+car_2_y)
        uploadbackground_img();
        uploadcar1();

        uploadcar2();
    }

    if(car_2_x > 710){
        console.log("car2 has won!");
        document.getElementById("gamestatus").innerHTML = "Car 2 has won"
    }
}
function car2_left(){
    if(car_2_x >= 0){
        car_2_x = car_2_x-10;
        console.log("the x position of car2 is"+car_2_x+"the y is"+car_2_y);
        uploadbackground_img();
        uploadcar1();

        uploadcar2();
}
}