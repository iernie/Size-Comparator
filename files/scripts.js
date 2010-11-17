function drawGrid(ctx, height, width) {
	for (var x = 0.5; x < width; x += 10) {
		ctx.moveTo(x, 0);
		ctx.lineTo(x, height);
	}
	for (var y = 0.5; y < height; y += 10) {
		ctx.moveTo(0, y);
		ctx.lineTo(width, y);
	}
	ctx.strokeStyle = "#eee";
	ctx.stroke();
}
function draw() {
	var front = document.getElementById('front');
	var ctxfront = front.getContext('2d');
	front.width = front.width;
	drawGrid(ctxfront, 411, 411);
	ctxfront.font = "bold 12px arial";
	ctxfront.fillText("Front View", 185, 20);
	
	var side = document.getElementById('side'); 
	var ctxside = side.getContext('2d');
	side.width = side.width;
	drawGrid(ctxside, 201, 201);
	ctxside.font = "bold 12px arial";
	ctxside.fillText("Side View", 70, 20); 
	
	var top = document.getElementById('top');
	var ctxtop = top.getContext('2d');
	top.width = top.width;
	drawGrid(ctxtop, 201, 201);
	ctxtop.font = "bold 12px arial";
	ctxtop.fillText("Top View", 70, 20);
	
	drawRect(ctxfront, ctxside, ctxtop, "one");
	drawRect(ctxfront, ctxside, ctxtop, "two");
	drawRect(ctxfront, ctxside, ctxtop, "three");
	drawRect(ctxfront, ctxside, ctxtop, "four");
}
function drawRect(ctxfront, ctxside, ctxtop, str) {
	var scale = parseInt(document.getElementById('scaler').value) * 0.5;
	var x = parseInt(document.getElementById('x'+str).value) * scale;
	var y = parseInt(document.getElementById('y'+str).value) * scale;
	var z = parseInt(document.getElementById('z'+str).value) * scale;
	
	switch(document.getElementById('ontop').checked) {
		case false:
			switch(str) {
				case "one":
					var start1 = 0;
					var start2 = 0;
					var color = "rgba(200,50,0, 0.5)";
					break;
				case "two":
					var start1 = parseInt(document.getElementById('xone').value);
					var start2 = parseInt(document.getElementById('zone').value);
					var color = "rgba(0,100,200, 0.5)";
					break;
				case "three":
					var start1 = parseInt(document.getElementById('xone').value) + parseInt(document.getElementById('xtwo').value);
					var start2 = parseInt(document.getElementById('zone').value) + parseInt(document.getElementById('ztwo').value);
					var color = "rgba(50,100,0, 0.5)";
					break;
				case "four":
					var start1 = parseInt(document.getElementById('xone').value) + parseInt(document.getElementById('xtwo').value) + parseInt(document.getElementById('xthree').value);
					var start2 = parseInt(document.getElementById('zone').value) + parseInt(document.getElementById('ztwo').value) + parseInt(document.getElementById('zthree').value);
					var color = "rgba(255,255,0, 0.5)";
					break;
				default:
					alert("Something went wrong...");
			}
			break;
		default:
			var start1 = 0;
			var start2 = 0;
			switch(str) {
			case "one":
				var color = "rgba(200,50,0, 0.5)";
				break;
			case "two":
				var color = "rgba(0,100,200, 0.5)";
				break;
			case "three":
				var color = "rgba(50,100,0, 0.5)";
				break;
			case "four":
				var color = "rgba(255,255,0, 0.5)";
				break;
			default:
				alert("Something went wrong...");
			}
			break;
	}

	ctxfront.fillStyle = color;
    ctxfront.fillRect (start1*scale,410-y,x,y);  
    
    ctxside.fillStyle = color;
    ctxside.fillRect (start2*scale*0.5,200-(y/2),z/2,y/2);  
    
    ctxtop.fillStyle = color;
    ctxtop.fillRect (start1*scale*0.5,200-(z/2),x/2,z/2);
}