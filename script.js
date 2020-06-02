
    /*eslint-env browser*/
/* eslint no-console: "error" */

var collss = document.getElementById('size_a');
var rowwss = document.getElementById('size_b');
var price= document.getElementById('price');
var width=document.getElementById('width');
var height=document.getElementById('height');
var rezPrice=0;
var rez;
var results = document.getElementById('results');
var priceResult = document.getElementById('priceResult');
var field = document.getElementById('field');

var gen_row;
var gen_cols = "";


$('#restart').hide(100);

function calc_click(){
    $('#restart').show(100);

    document.getElementById("restart").disabled=false;
   
    document.getElementById("newField").disabled=true;
price = parseFloat(price.value);    
	

collss = parseFloat(collss.value);
rowwss = parseFloat(rowwss.value);
width = parseFloat(width.value);    
height = parseFloat(height.value);
console.log(width,height);

     if(collss>10){
        collss=10;
    }
    if(rowwss>10){
        rowwss=10;
    }

var field_mas = [];


for (var i = 0; i < rowwss; i++) {
	field_mas[i] = [];
    for (var j = 0; j < collss; j++) {
		field_mas[i][j] = 0;
	}
}


draw_table();

function draw_table() {
	var ryad = [];
	ryad.length = 0;
	var num_ryad = 0;

	field.innerHTML = "";
	for (var i = 0; i < rowwss; i++) {
		gen_row = document.createElement('tr');
		gen_row.className = "getn-tr";
		gen_cols = "";

		ryad[num_ryad] = 0;

		for (var j = 0; j < collss; j++) {
			gen_cols += "<td style='width: " + width +"cm; height: "+height+"cm' id = '" + i + "' class = '" + j;            
			if (field_mas[i][j]) {} else {
				gen_cols += " empty";
			}
			gen_cols += "'>" + "</td>";

			if (field_mas[i][j] == 1) {
				ryad[num_ryad]++;
			} else {
				if (field_mas[i][j - 1] == 1) {
					num_ryad++;
					ryad[num_ryad] = 0;
				}
			}
		} /*j end*/
		if (ryad[num_ryad] != 0) {
			num_ryad++;
		}
		gen_row.innerHTML = gen_cols;
		field.appendChild(gen_row);
	}

	if (ryad[ryad.length - 1] == 0) {
		ryad.length--;
	}

	rez = 'Маємо ' + ryad.length + ' рядів: <br>';
	for (var k = 0; k < ryad.length; k++) {
		rez += 1 + k + '. ' + ryad[k] + '<br>';
	}

}
field.addEventListener('click', function (e) {
	var target = e.target;
	if (target.tagName === 'TD') {
		if (field_mas[target.id[0]][target.classList[0]] == 1) {
			field_mas[target.id[0]][target.classList[0]] = 0;
            rezPrice-=price; 
            priceResult.innerHTML="Вартість: "+ rezPrice+" грн";
            
		} else {
			field_mas[target.id[0]][target.classList[0]] = 1;
            console.log(rezPrice);         
            rezPrice+=price;
            
            priceResult.innerHTML="Вартість: "+ rezPrice+" грн";   
		}
		draw_table();
	}

}, false);

}
function restart(){
    
}



