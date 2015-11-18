require(
   //Use this library to "fix" some annoying things about Raphel paper and graphical elements:
         //a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
         //b) call element.addEventListener(...) instead of element.node.addEventListner(...)
            ["../jslibs/raphael.lonce"],  // include a custom-built library

    function () {

        console.log("Yo, I am alive!");

        var currentPage; 
        //Page 1 of story
        currentPage=0;

        //Response for when the start button to initiate story (PAGE 1) is clicked
        document.getElementById("startButton").addEventListener('click', function(){
            console.log("Start button has been clicked!");

            ambient= new Audio("css/resources/AmbientSound.wav");
            ambient.play();
            ambient.loop=true;

	        document.getElementById("ButtonPrev").style.display = "none";
	        document.getElementById("ButtonNext").style.display = "inline";
	        document.getElementById("startButton").style.display = "none";
	        document.getElementById("story").style.display="inline";

            });

        document.getElementById("ButtonNext").addEventListener('click', function(){

        	//Add 1 to the current page variable everytime the next button is clicked
        	currentPage++;

        	if(currentPage==1){
        		//Page 2 of story
        		console.log("Next button has been clicked!");
        		console.log("Current page count is " + currentPage);

				document.getElementById("ButtonPrev").style.display = "inline";
		        document.getElementById("ButtonNext").style.display = "inline";
		        document.getElementById("startButton").style.display = "none";
		        document.getElementById("story2").style.display="inline";
        	} else if(currentPage==2){
        		//Page 3 of story
        		console.log("Next button has been clicked again!");
        		console.log("Current page count is " + currentPage);

				document.getElementById("ButtonPrev").style.display = "inline";
		        document.getElementById("ButtonNext").style.display = "inline";
		        document.getElementById("startButton").style.display = "none";
		        document.getElementById("story3").style.display="inline";
		        document.getElementById("story2").style.display="none";
        	} else if(currentPage==3){
        		//Note page of the story
        		console.log("Next button has been clicked again! On the note page now.");
        		console.log("Current page count is " + currentPage); 

        		document.getElementById("ButtonPrev").style.display = "inline";
        		document.getElementById("ButtonNext").style.display = "inline";
		        document.getElementById("startButton").style.display = "none";
		        document.getElementById("story3").style.display="none";
		        document.getElementById("story2").style.display="none";
		        document.getElementById("story").style.display="none";
		        document.getElementById("note").style.display="inline";
        	} else if(currentPage==4){
        		//Enter the game page of the story 
        		console.log("Game is about to start");
        		console.log("Current page count is " + currentPage);

        		document.getElementById("startButton").style.display="none";
        		document.getElementById("ButtonPrev").style.display = "none";
        		document.getElementById("ButtonNext").style.display = "none";
        		document.getElementById("enter").style.display="inline";
        		document.getElementById("note").style.display="none";
        	}
        });

		document.getElementById("ButtonPrev").addEventListener('click', function(){

			currentPage--;

			if(currentPage==0){
				//Page 1 of story
        		console.log("Previous button has been clicked!");
        		console.log("Current page count is " + currentPage);

				document.getElementById("ButtonPrev").style.display = "none";
		        document.getElementById("ButtonNext").style.display = "inline";
		        document.getElementById("startButton").style.display = "none";
		        document.getElementById("story").style.display="inline";
		        document.getElementById("story2").style.display="none";
			} else if(currentPage==1){
				//Page 2 of story
        		console.log("Previous button has been clicked again!");
        		console.log("Current page count is " + currentPage);

				document.getElementById("ButtonPrev").style.display = "inline";
		        document.getElementById("ButtonNext").style.display = "inline";
		        document.getElementById("startButton").style.display = "none";
		        document.getElementById("story2").style.display="inline";
		        document.getElementById("story3").style.display="none";
			} else if(currentPage==2){
				//Page 3 of story
        		console.log("Previous button has been clicked again! On the note page now.");
        		console.log("Current page count is " + currentPage); 

        		document.getElementById("ButtonPrev").style.display = "inline";
        		document.getElementById("ButtonNext").style.display = "inline";
		        document.getElementById("startButton").style.display = "none";
		        document.getElementById("story3").style.display="inline";
		        document.getElementById("note").style.display="none";
			}
		});

		document.getElementById("enter").addEventListener("click", function(){
			console.log("The Game has started!");

			document.getElementById("enter").style.display="none";
			document.getElementById("mySVGCanvas").style.backgroundImage= "url('css/resources/level1.jpg')";
			document.getElementById("continue").style.display="inline";
			document.getElementById("level1").style.display="inline";
		});

		document.getElementById("continue").addEventListener("click", function(){
			console.log("Level 1, dialogue part 2.");

			document.getElementById("mySVGCanvas").style.backgroundImage= "url('css/resources/level1.jpg')";
			document.getElementById("level1p2").style.display="inline";
			document.getElementById("level1").style.display="none";
			document.getElementById("continue").style.display="none";
			document.getElementById("weepingAngels").style.display="inline";
			document.getElementById("answer").style.display="inline";

		});

		document.getElementById("weepingAngels").addEventListener("click", function(){
			console.log("Redirecting to Weeping Angels Wikipedia page...");

			window.open("http://tardis.wikia.com/wiki/Weeping_Angel");
		});

		//Playing WEEPING ANGELS game 
		document.getElementById("answer").addEventListener("click", function(){
			console.log("Playing Weeping Angels game now...");

			document.getElementById("mySVGCanvas").style.backgroundImage= "url('css/resources/weepingangelsbackground.jpg')";
			document.getElementById("level1p2").style.display="none";
			document.getElementById("weepingAngels").style.display="none";
			document.getElementById("answer").style.display="none";
			ambient.pause();
			gameSound= new Audio("css/resources/gameAudio.mp3");
	        gameSound.play();

			//WEEPING ANGELS gameplay code
			var paper = Raphael(document.getElementById("mySVGCanvas"));
			console.log("Canvas detacted")

			var counter = 0;
	        //var maxCount = 10;
	        var starttime;
	        //var totaltime;
	        var angel = setInterval(moveAngel, setInterval);

	        var startAngels = paper.circle(700, 300, 80);
	        var startText = paper.text(700,  300, "DON'T BLINK");
	        startAngels.attr({
	        	stroke: "white",
	        	"stroke-width": 2,
	        	fill: "black"
	        });
	        startText.attr({
	        	"font-family": "Helvetica",
	        	"font-size": 20,
	        	fill: "white"
	        });

	        //This is to generate a random number to change coordinates of the squares so we can change the direction of the square. 
	        //We used -0.5 to shift the range into the negative number zone as we want the square to be able to move in different directions. 
	        var randNumber = function() {
	            return Math.random()-0.5;
	        }

	        //Making the X and Y directions (i.e. coordinates) of the angel random 
	        var xdirection = randNumber();
	        var ydirection = randNumber();
	        //startAngels.hide();
        	//startText.hide();

        	var timer;

	        var start = function (){
	        	console.log("game is starting");
	        	startAngels.hide();
	        	startText.hide();

	        	timer = setTimeout(function(ev){ endGame=true; alert("Your time is up!")}, 10000); //To set the game to run for a fixed amount of time.
	        	counter = 0;
	        	starttime = Date.now();
	        	console.log("time = " + starttime);
	            //anchoring the starting position of the square
	            angel1.attr({
	                    x: 250,
	                    y: 150
	                });
	        	randomAngel = setInterval(moveAngel, 1);
	        }

	        startAngels.addEventListener('click', start);

	        var angel1 = paper.image("css/resources/angel.png",-100,-100,100,100);

        //To tell whether the game has ended 
        var endGame = false; 


        var moveAngel = function(){

        	console.log("your Angel click count is now " + counter);

        	if (endGame){
                
                //Adding the Game Over audio when the time is up 
                //backgroundSound.pause();
                //gameoverSound.play();

                //The score displayed at the end is the number of clicks on the target the user made.
                //confirm("You have made " + counter + " clicks in 10 seconds!");  

           		endText = paper.text(700, 300, "You made " + counter + " clicks in 10 seconds.");
                endText.attr({
                	"font-family": "Helvetica",
		        	"font-size": 40,
		        	fill: "red"
                });
            	if(counter>=5){
                	proceedText=paper.text(700, 450, "Lady luck must be watching over you. Proceed.");
                	proceedText.attr({
	                	"font-family": "Helvetica",
			        	"font-size": 40,
			        	fill: "red"
	                });
	                document.getElementById("proceed").style.display="inline";
                } else {
                	failText=paper.text(700, 400, "Goodbye.");
                	failText.attr({
	                	"font-family": "Helvetica",
			        	"font-size": 40,
			        	fill: "red"
	            	});
	            	document.getElementById("answer").style.display="inline";
	            }

        		clearInterval(randomAngel);
        		clearInterval(timer);
                angel1.attr({
                    x: -100,
                    y: -100
                });
                //To reset the entire game 
                endGame = false;

        	} else {

                var xpos = angel1.attr("x")
                var ypos = angel1.attr("y")

                console.log("x=" + xpos + " , y=" + ypos)

                //Linked to the difficulty of the game.
                var rate = 5 
                xpos += rate*xdirection
                ypos += rate*ydirection

                angel1.attr({
                    x: xpos,
                    y: ypos
                })

                //When the edge is reached, it will change the Angel's direction to a random direction. 
                //The angel1.attr() is used to limit the area in which the Angel moves within. 
                if (xpos > 1400) {xdirection = randNumber(); ydirection=randNumber(); angel1.attr("x", 1400);}
                if (ypos > 600) {ydirection = randNumber(); xdirection=randNumber(); angel1.attr("y", 600)};
                if (xpos < 0) {xdirection = randNumber(); ydirection=randNumber(); angel1.attr("x", 0);}
                if (ypos < 0) {ydirection = randNumber(); xdirection=randNumber(); angel1.attr("y", 0)};
                };
            };

	        //Increasing the counter by one whenever the user clicks the square.
	        angel1.addEventListener('click', function(){
	        	counter++;

	        	angelSound= new Audio("css/resources/weepingangels.wav");
	        	angelSound.play();

	        	/*var counterDisplay=paper.text(1300, 500, counter);
	        	counterDisplay.attr({
	        		fill: "red",
	        		"font-family": "Helvetica",
	        		"font-size": 30
	        	})*/
	        });


	    document.getElementById("proceed").addEventListener("click", function(){

	    	gameSound.pause(); 
	    	ambient.play();
	    	document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/level2.jpg')";
	    	document.getElementById("level2").style.display="inline";
	    	document.getElementById("continue2").style.display="inline";
	    	document.getElementById("proceed").style.display="none";
	    	proceedText.hide();
	    	endText.hide();
	    	failText.hide();
	    	//counterDisplay.hide();

	    });

	    document.getElementById("continue2").addEventListener("click", function(){

	    	document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/level2.jpg')";
	    	document.getElementById("level2").style.display="none";
	    	document.getElementById("level2p2").style.display="inline";
	    	document.getElementById("slenderMan").style.display="inline";
	    	document.getElementById("hide").style.display="inline";
	    	document.getElementById("continue2").style.display="none";

	    });

	    document.getElementById("slenderMan").addEventListener("click", function(){
	    	console.log("Redirecting to Slender Man Wikipedia page...");

			window.open("https://www.youtube.com/watch?v=ysgQ9spsphk");
	    });


	    document.getElementById("hide").addEventListener("click", function(){
	    	console.log("Playing Slender Man game now...");

	    	ambient.pause();
	    	gameSound.play();

			document.getElementById("mySVGCanvas").style.backgroundImage= "url('css/resources/slendermanbackground.jpg')";
			document.getElementById("level2p2").style.display="none";
			document.getElementById("hide").style.display="none";
			document.getElementById("slenderMan").style.display="none";

	    	//SLENDER MAN game code starts HERE 
			var paper = Raphael(document.getElementById("mySVGCanvas"));
			console.log("Canvas detacted")

			var livecounter = 5;
	        //var maxCount = 10;
	        var starttime;
	        //var totaltime;
	        //var slenderman = setInterval(moveSlender, setInterval);

	        var startSlender = paper.circle(700, 300, 80);
	        var startText = paper.text(700,  300, "HIDE!");
	        startSlender.attr({
	        	stroke: "white",
	        	"stroke-width": 2,
	        	fill: "black"
	        });
	        startText.attr({
	        	"font-family": "Helvetica",
	        	"font-size": 20,
	        	fill: "white"
	        });

        	var timer;

        	//To tell whether the game has ended 
        	var endGame = false; 

	        var start = function (){
	        	console.log("game is starting");
	        	startSlender.hide();
	        	startText.hide();
	        	timer = setTimeout(function(ev){ endGame=true; alert("Your time is up!")}, 10000); //To set the game to run for a fixed amount of time.
	        	livecounter = 5;
	        	starttime = Date.now();
	        	console.log("time = " + starttime);
	            
	        	randomSlender = setInterval(moveSlender, 1);
	        	var slenderInterval=setInterval(createSlender, 500);
	        }

	        startSlender.addEventListener('click', start);


        var pWidth = paper.canvas.offsetWidth;
		var pHeight = paper.canvas.offsetHeight;
		console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);


        var numSlender=40;
        var livingSlender=0;
		// Initialize array to empty
		var slender = [];

		function getRandomArbitrary(min, max){
				return Math.floor(Math.random()*(max-min))+ min;
			};

		
		var slenderInterval=setInterval(createSlender, 500);
		var createSlender= function(){
		//Creating the random slender men 
			for(i=0; i<10; i++){

				var randNumber = getRandomArbitrary(0, 1400);
				slender[i+livingSlender]=paper.image("css/resources/slenderman.png",randNumber, -200 ,50,100);

				slender[i+livingSlender].addEventListener('mouseover', function(){
	        	livecounter--;
	        	console.log("You touched him!");

	        	slenderSound= new Audio("css/resources/slendersound.wav");
	        	slenderSound.play();
	       		 });


		        //Making the X location (i.e. coordinates) from where Slender Man falls from random 
		        //var xlocation = randNumber();
		        slender[i+livingSlender].xpos= randNumber;
		        slender[i+livingSlender].ypos=0;
		        //slender[i].xrate= 5+10*Math.random();
	            slender[i+livingSlender].yrate= 4*Math.random();
			};

			livingSlender+=10
		};

        var moveSlender=function(){
        	console.log("Slender man is dropping...");

        	if (endGame){
        		endingText=paper.text(700, 300, "You have " + livecounter + " lives left after 10 seconds.")
        		//ADD VERDICT STATEMENT AFTER THIS
                endingText.attr({
                	"font-family": "Helvetica",
		        	"font-size": 40,
		        	fill: "red"
                })
  				endingText.show();

  				if(livecounter>0){
                	carryonText=paper.text(700, 450, "He let you off the hook this time! You won't be so lucky the next time!");
                	carryonText.attr({
	                	"font-family": "Helvetica",
			        	"font-size": 40,
			        	fill: "red"
	                });
	                document.getElementById("save").style.display="inline";
                } else {
                	failedText=paper.text(700, 400, "You cannot escape The Slender Man.");
                	failedText.attr({
	                	"font-family": "Helvetica",
			        	"font-size": 40,
			        	fill: "red"
	            	});
	            	document.getElementById("hide").style.display="inline";
	            }

        		clearInterval(randomSlender);
        		clearInterval(timer);
        		for(i=0; i<livingSlender; i++){
        			slender[i].attr({
        			x: -100,
        			y: -100,
        		})};
                //To reset the entire game 
                clearInterval(slenderInterval);
                endGame = false;
        	} else {

				var i=0;

				while(i<livingSlender){
				var xpos = slender[i].attr("x")
                var ypos = slender[i].attr("y")

                console.log("x=" + xpos + " , y=" + ypos)

                //xpos += rate*xdirection
                ypos += slender[i].yrate;

                slender[i].attr({
                    //x: xpos,
                    y: ypos
                });

                i++
            };

        	}; //else bracket
        }; //function bracket 

	    });

		var lastStage; 
        //Page 1 of last stage 
        lastStage=0;

		document.getElementById("save").addEventListener("click", function(){

			document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/level3.jpg')";
			document.getElementById("save").style.display="none";
			document.getElementById("lastchp").style.display="inline";
			document.getElementById("continue3").style.display="inline";
			endingText.hide();
			carryonText.hide();
			gameSound.pause();
			ambient.play();
			failedText.hide();

		}); //save button bracket 

		document.getElementById("continue3").addEventListener("click", function(){

			lastStage++;

			if(lastStage==1){

				document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/violet.jpg')";
				document.getElementById("violet").style.display="inline"; 
				document.getElementById("lastchp").style.display="none";
				document.getElementById("continue3").style.display="inline";
			} else if(lastStage==2){

				document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/level3.jpg')";
				document.getElementById("lastchp2").style.display="inline";
				document.getElementById("violet").style.display="none"; 
				document.getElementById("continue3").style.display="inline";
			} else if(lastStage==3){

				document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/lighter.jpg')";
				document.getElementById("lastchp2").style.display="none";
				document.getElementById("choice").style.display="inline";
				document.getElementById("risk").style.display="inline";
				document.getElementById("wrongchoice").style.display="inline";
				document.getElementById("continue3").style.display="none";
			}

		});//continue3 bracket

		document.getElementById("wrongchoice").addEventListener("click", function(){

			theendscream= new Audio("css/resources/theendscream.wav");
			ambient.pause();
			theendscream.play();

			document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/wrongchoice.jpg')"
			document.getElementById("choice").style.display="none";
			document.getElementById("risk").style.display="none";
			document.getElementById("wrongchoice").style.display="none";
		});

		var incar;

		incar=0; 

		document.getElementById("risk").addEventListener("click", function(){

			musicbox= new Audio("css/resources/violetinthecar.wav");
			ambient.pause();
			musicbox.play();

			document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/mirrorviolet.jpg')";
			document.getElementById("continue4").style.display="inline";
			document.getElementById("choice").style.display="none";
			document.getElementById("risk").style.display="none";
			document.getElementById("wrongchoice").style.display="none";
			document.getElementById("car1").style.display="inline";

		}); //risk bracket 

		document.getElementById("continue4").addEventListener("click", function(){

			incar++

			if(incar==1){
				document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/mirrorempty.jpg')";
				document.getElementById("continue4").style.display="inline";
				document.getElementById("car1").style.display="none";

			} else if(incar==2){
				dollface= new Audio("css/resources/dollface.wav");
				dollface.play();
				document.getElementById("mySVGCanvas").style.backgroundImage="url('css/resources/mirrordollface.jpg')";
				document.getElementById("continue4").style.display="none";
			}
		}); //continue4 bracket 

	        });

       });