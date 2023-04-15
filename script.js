const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gridWidth = canvas.width / 4;
const gridHeight = canvas.height / 2;


// Dessiner grand segment du milieu et segment verti
for (let i = 0; i <= 9; i++) {
  ctx.beginPath();
  ctx.moveTo(0, i * gridHeight);
  ctx.lineTo(canvas.width, i * gridHeight);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(i * gridWidth, 0);
  ctx.lineTo(i * gridWidth, canvas.height);
  ctx.stroke();
}

// base de dessin de tous les diago et bissec
const startX = gridWidth * 4.5;
const startY = gridHeight * 4.5;

ctx.beginPath();
ctx.arc(startX, startY, gridWidth / 5, 0, 2 * Math.PI);
ctx.fill();


// Dessiner les pions
const pawnRadius = gridWidth / 2.2;

ctx.beginPath();
ctx.arc(startX - gridWidth * 2, startY, pawnRadius, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.arc(startX + gridWidth * 2, startY, pawnRadius, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();

 

// boucles principales des diagonales et les bissectrices pour chaque petit carré de la grille
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
        const centerX = i * gridWidth + gridWidth / 2;
        const centerY = j * gridHeight + gridHeight / 2;
  
      // Dessiner la diagonale supérieure gauche à la diagonale inférieure droite
      ctx.beginPath();
      ctx.moveTo(centerX - gridWidth / 2, centerY - gridHeight / 2);
      ctx.lineTo(centerX + gridWidth / 2, centerY + gridHeight / 2);
      ctx.stroke();
  
      // Dessiner la diagonale supérieure droite à la diagonale inférieure gauche
      ctx.beginPath();
      ctx.moveTo(centerX + gridWidth / 2, centerY - gridHeight / 2);
      ctx.lineTo(centerX - gridWidth / 2, centerY + gridHeight / 2);
      ctx.stroke();
  
      // Dessiner la bissectrice supérieure à la bissectrice inférieure
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - gridHeight / 2);
      ctx.lineTo(centerX, centerY + gridHeight / 2);
      ctx.stroke();
  
      // Dessiner la bissectrice gauche à la bissectrice droite
      ctx.beginPath();
      ctx.moveTo(centerX - gridWidth / 2, centerY);
      ctx.lineTo(centerX + gridWidth / 2, centerY);
      ctx.stroke();
    }
  }

// dessiner tous les pions
ctx.beginPath();
ctx.arc(10, 10, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.arc(110, 10, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.arc(230, 10, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.arc(340, 10, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.arc(450, 10, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.arc(560, 10, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.arc(670, 10, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.arc(780, 10, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.arc(890, 10, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

//--------------------2ere lignes----------------------

ctx.beginPath();//9
ctx.arc(895, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//8
ctx.arc(780, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//7
ctx.arc(670, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//6
ctx.arc(560, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//5
ctx.arc(450, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//4
ctx.arc(340, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//3
ctx.arc(220, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//2
ctx.arc(110, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//1
ctx.arc(10, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

//-------------------------3e lignes---------------------------
ctx.beginPath();//centre rouge
ctx.arc(10, 250, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();//centre 
ctx.arc(110, 250, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//centre
ctx.arc(220, 250, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();//centre 
ctx.arc(340, 250, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

/*CENTRE VIDE DU PLATEAU*/

ctx.beginPath();//centre rouge
ctx.arc(560, 250, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();//centre rouge
ctx.arc(680, 250, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();//centre rouge
ctx.arc(790, 250, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();//centre rouge
ctx.arc(890, 250, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();




//----------------------------4e liggnes-----------------------
ctx.beginPath();
ctx.arc(10, 370, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(110, 370, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();


ctx.beginPath();
ctx.arc(220, 370, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(340, 370, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(450, 370, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(560, 370, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(670, 370, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(780, 370, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(890, 370, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();


//--------------------------5e lignes---------------------------
//cercle blanc
ctx.beginPath();
ctx.arc(10, 490, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(110, 490, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(220, 490, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(340, 490, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(450, 490, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();//6
ctx.arc(560, 490, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();//7
ctx.arc(670, 490, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();//8
ctx.arc(780, 490, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();//9
ctx.arc(890, 490, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();


  
  //vrai pions
/*for (let i = 1; i <= 44; i++) {
    const div = document.createElement("div");
    div.classList.add("dragablebox");
    div.textContent = i;
    document.body.appendChild(div);
  }
  
// les dimensions du plateau de Fanorona
//const plateauWidth = 9;
//const plateauHeight = 5;

// les positions de chaque intersection du plateau
const intersections = [];
for (let row = 0; row < plateauHeight; row++) {
    for (let col = 0; col < plateauWidth; col++) {
        intersections.push({ x: col, y: row });
    }
}

// créer et positionner les divs
intersections.forEach((inter, index) => {
  const div = document.createElement("div");
  div.classList.add("dragablebox");
  div.textContent = index + 1;
  div.style.left = inter.x * 50 + "px";
  div.style.top = inter.y * 50 + "px";
  document.body.appendChild(div);
});

//...................................................................
//drag and 
/*(function (){
	var storage = [];

	function addEvent(element,event,func){
		if(element.attachEvent){
			element.attachEvent('on' + event, func);
		}else{
			element.addEventListener(event,func,true);
		}
	}
	function init(){
		var elements = document.getElementsByTagName('div'),
			elementsLength = elements.length;

		for (var i = 0; i < elementsLength; i++) {
			if(elements[i].className == 'dragablebox'){
				addEvent(elements[i],'mousedown',function(e){
					console.log(e);
					var s = storage;
					//console.log('hello mousedown');
					s.target = e.target || event.scrElement;
					s.offsetX = e.clientX - s.target.offsetLeft;
					s.offsetY = e.clientY - s.target.offsetTop;
					//console.log(s.offsetX + " | " + s.offsetY);
				});

				addEvent(document,'mousemove',function(e){
					var target = storage.target;
						//console.log('hello mousemove');
					if(target){
						target.style.top = e.clientY - storage.offsetY + 'px';
						target.style.left  = e.clientX - storage.offsetX + 'px';
					}
				});
				addEvent(elements[i],'mouseup',function(){
					storage = {};
				});
			}
		}
	}
	init();
})();*/


//deplacement cercle
/*const circle = document.getElementById('circle');

		let x = parseInt(circle.style.left);
		let y = parseInt(circle.style.top);
		let speed = 10;

		function updatePosition() {
			circle.style.left = x + 'px';
			circle.style.top = y + 'px';
		}

		function handleKeyDown(event) {
			switch (event.keyCode) {
				case 37: // Left arrow
					x -= speed;
					break;
				case 38: // Up arrow
					y -= speed;
					break;
				case 39: // Right arrow
					x += speed;
					break;
				case 40: // Down arrow
					y += speed;
					break;
			}
			updatePosition();
		}

		document.addEventListener('keydown', handleKeyDown);*/