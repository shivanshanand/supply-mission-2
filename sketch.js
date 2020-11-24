    var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
	var packageBody,ground,bgImage,bg;
	var wall1,wall2,wall3;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	var engine,world;
 function preload()
  {
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	bgImage=loadImage("bg90.png");
   }

 function setup() 
 {
	createCanvas(1200, 500);
	rectMode(CENTER);
	
	bg=createSprite(600,190,20,20);
	bg.addImage( "bg",bgImage);
	bg.scale=1.4;
	
	packageSprite=createSprite(600, 90, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(600, 90, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(600,490,1200,10);
	groundSprite.shapeColor=color(100)

	wall1=createSprite(600,470,200,20);
	wall1.shapeColor="red"

	wall2=createSprite(500,430,20,100);
	wall2.shapeColor="red"

	wall3=createSprite(700,430,20,100);
	wall3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(600,90,10, {restitution:0.2,isStatic:true});
	World.add(world, packageBody);
	
	//give shape
	 ground = Bodies.rectangle(600,480,1200,10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall1=Bodies.rectangle(600,440,200,20, {isStatic:true});
	 World.add(world,wall1);

	 wall2=Bodies.rectangle(500,250,20,100, {isStatic:true});
	 World.add(world,wall2);

	 wall3=Bodies.rectangle(700,250,20,100, {isStatic:true});
	 World.add(world,wall3);
 }

 function draw() 
 {
	rectMode(CENTER);
	background(0);
	drawSprites();

	Engine.update(engine);

	packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ;
	
	rectMode(CENTER);
	rect(wall1.position.x,wall1.position.x,200,20);

	rectMode(CENTER);
	rect(wall2.position.x,wall2.position.x,100,20);

	rectMode(CENTER);
	rect(wall3.position.x,wall3.position.x,100,20);

   }

	function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		packageSprite.velocityY = 4;
		Matter.Body.setStatic( packageBody , false);
	}
   } 