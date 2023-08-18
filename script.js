let start = Date.now(); //Starts timer

            function getRandomColor() {
                const letters = '0123456789ABCDEF'; //Hexadecimals
                let color = '#';

                for (var i = 0; i < 6; i++) {
                    color = color + letters[Math.floor(Math.random() * 16)]; //Random color selected
                    }
                return color;
                }
                            

            function shapeAppear() {
                let top = Math.random() * 400; // Random numbers for the TOP property
                let left = Math.random() * 400; //Random numbers for the LEFT property
                let height = (Math.random() * 400) + 100; // Random numbers for the HEIGHT property

                if(Math.random() > 0.5) {
                    document.getElementById("square").style.borderRadius = "50%"; //Change shape to circle
                } else {
                    document.getElementById("square").style.borderRadius = "0%"; //Change shape back to square
                }

                document.getElementById("square").style.backgroundColor  = getRandomColor(); //Change the background color of the square
                document.getElementById("square").style.top = top + "px"; // Move the square randomly relative to the TOP property
                document.getElementById("square").style.left = left + "px"; // Move the square randomly relative to the LEFT property
                document.getElementById("square").style.height = height + "px"; //Move the square randomly relative to the HEIGHT property
                document.getElementById("square").style.width = height + "px"; //Move the square randomly relative to the WIDTH property using the HEIGHT declaration
                document.getElementById("square").style.display = "block"; //Display Shape
                start = Date.now(); // Updating the timer to start again
            }

            function timeDelay() {
                setTimeout(shapeAppear, (Math.random() + 2000)); //Time it takes for shape to appear
            }
            timeDelay();// Shape appears after delay

            document.getElementById("square").onclick = function() {
                let timeTaken = (Date.now() - start) / 1000; // Difference between START TIME and END TIME (converted to seconds)
                document.getElementById("square").style.display = "none"; // Shape disappears
                document.getElementById("akoko").innerHTML = timeTaken + "seconds"; // Comment after shape disappears
                timeDelay(); //Shape appears after delay
            } 