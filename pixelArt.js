
	// var box = document.createElement('box')
	// box.style.height = "2.1%"
	// box.style.width = "2.1%"
	// box.style.float = "left"
	// box.style.paddingBottom = "11.1%"
	// box.style.backgroundColor = "black"
	// document.body.appendChild(box)

var color = "red"

	// square creation
	for (i = 0 ; i < 2024 ; i++) {
		var box = document.createElement('box')
		box.addEventListener('click', function() {
			this.style.backgroundColor = color
		})

		box.style.width = "2%"
		box.style.float = "left"
		box.style.paddingBottom = "2%"
		box.style.backgroundColor = "white"
		box.style.border = "1px dotted indianRed"

		box.addEventListener('dragenter', function() {
			this.style.backgroundColor = color
		})		
		document.body.appendChild(box)
	}


		/// RED
		var red = document.createElement('red')

		red.addEventListener('click', function() {
			color = "red"
		})
		
		red.style.width = "16.14%"
		red.style.float = "left"
		red.style.boarder="2px bold black"
		red.style.paddingBottom = "2%"
		red.style.backgroundColor = "white"
		red.style.border = "2px solid black";
		red.style.backgroundColor = "red"
		document.body.appendChild(red)		

		/// ORANGE
		var orange = document.createElement('orange')

		orange.addEventListener('click', function() {
			color = "orange"
		})
		
		orange.style.width = "16.14%"
		orange.style.float = "left"
		orange.style.paddingBottom = "2%"
		orange.style.backgroundColor = "white"
		orange.style.border = "2px solid black"
		orange.style.backgroundColor = "orange"
		document.body.appendChild(orange)		

		/// YELLOW
		var yellow = document.createElement('yellow')

		yellow.addEventListener('click', function() {
			color = "yellow"
		})
		
		yellow.style.width = "16.14%"
		yellow.style.float = "left"
		yellow.style.paddingBottom = "2%"
		yellow.style.backgroundColor = "white"
		yellow.style.border = "2px solid black"
		yellow.style.backgroundColor = "yellow"
		document.body.appendChild(yellow)		

		/// GREEN
		var green = document.createElement('green')

		green.addEventListener('click', function() {
			color = "green"
		})
		
		green.style.width = "16.14%"
		green.style.float = "left"
		green.style.paddingBottom = "2%"
		green.style.backgroundColor = "white"
		green.style.border = "2px solid black"
		green.style.backgroundColor = "green"
		document.body.appendChild(green)		

		/// BLUE
		var blue = document.createElement('blue')

		blue.addEventListener('click', function() {
			color = "blue"
		})
		
		blue.style.width = "16.14%"
		blue.style.float = "left"
		blue.style.paddingBottom = "2%"
		blue.style.backgroundColor = "white"
		blue.style.border = "2px solid black"
		blue.style.backgroundColor = "blue"
		document.body.appendChild(blue)		

		/// PURPLE
		var purple = document.createElement('purple')

		purple.addEventListener('click', function() {
			color = "purple"
		})
		
		purple.style.width = "16.14%"
		purple.style.float = "left"
		purple.style.paddingBottom = "2%"
		purple.style.backgroundColor = "white"
		purple.style.border = "2px solid black"
		purple.style.backgroundColor = "purple"
		document.body.appendChild(purple)	


		addEventListener("mousemove", moved)					


//box

