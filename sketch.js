var cat_image1,mouse_image1,ground,cat_image2,cat_image3,mouse_2,mouse_3
function preload() {
    cat_image1=loadAnimation("images/cat1.png")
    cat_image2=loadAnimation("images/cat2.png","images/cat3.png")
    cat_image3=loadAnimation("images/cat4.png")
    mouse_image1=loadAnimation("images/mouse1.png")
    mouse_2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse_3=loadAnimation("images/mouse3.png")
    ground=loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    ground1=createSprite(500,400,1000,800)
    ground1.addImage("ground",ground)
    cat=createSprite(650,600,10,10)
    cat.addAnimation("cat_image1",cat_image1)
    cat.scale=0.2
    mouse=createSprite(100,600,40,40)
    mouse.addAnimation("mouse_image1",mouse_image1)
    mouse.scale=0.1
}

function draw() {

    background(255);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX=0
        cat.addAnimation("cat_image3",cat_image3)
        cat.changeAnimation("cat_image3",cat_image3)
        mouse.addAnimation("mouse_3",mouse_3)
        mouse.changeAnimation("mouse_3",mouse_3)
    }

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-4
    cat.addAnimation("cat_image2",cat_image2)
    cat.changeAnimation("cat_image2",cat_image2)
    mouse.addAnimation("mouse_2",mouse_2)
    mouse.changeAnimation("mouse_2",mouse_2)
}


}
