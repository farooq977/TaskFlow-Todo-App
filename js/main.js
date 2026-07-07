

function ChangeMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   var mode = document.getElementById("mode");
   mode.classList.toggle("changeMode");
   var title = document.getElementById("todo-title");
   title.classList.toggle("changeMode")
   var asd1 = document.getElementById("back-to");
   asd1.classList.toggle("changeMode")

}


function Trash(t, no){
	var i = t.parentNode.parentNode.rowIndex;
	document.getElementById("table-head").deleteRow(i);
	localStorage.removeItem(no)
}

// title edit 
// function TitleEdit(x){
// 	var y = x.parentNode.parentNode.rowIndex;
// 	var get_val = document.getElementById("table-head").rows[y].cells.item(0);
// 	alert(get_val.innerHTML);
// }

function Submit(){
	// get data from form
	count = localStorage.length
	var title = document.getElementById("title").value;
	var project = document.getElementById("project").value;
	var date = document.getElementById("date").value;
	// action var just put a button in todo list
	var action = `<a href="#" class="trash" onclick="Trash(this, ${count+1})"><span class="fa fa-check id="trash"></span></a>`
	var rating = document.getElementById("rating").value;

	// for star rating
	if (rating == 1){
		rating = '<span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
	}else if (rating == 2){
		rating = '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
	}else if (rating == 3){
		rating = '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>'
	}else if (rating == 4){
		rating = '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>'
	}else if (rating == 5){
		rating = '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>'
	}
	// put data in todo list
	if (title == ""){
		document.getElementById("title").style.borderColor = "red";
		document.getElementById("Error").innerHTML = "Fill Title Field!";
	}else if(project == ""){
		document.getElementById("project").style.borderColor = "red";
		document.getElementById("Error").innerHTML = "Select Project Type!";
	}else if (date == ""){
		document.getElementById("date").style.borderColor = "red";
		document.getElementById("Error").innerHTML = "Select Date!";
	}
	else{
		data_obj = [title, project, date, rating, action]
		if (typeof(Storage) !== "undefined") {
			// Store
			var jsObj = localStorage.setItem(count+1, JSON.stringify(data_obj));
			location.reload();
		}else {
		  	alert('Sorry, your browser does not support Web Storage...')
		}
	}
}

function Clear(){
	var title = document.getElementById("title").value = "";
	var project = document.getElementById("project").value = "Select Type";
	var date = document.getElementById("date").value = "";
	var rating = document.getElementById("rating").value = 1;
}

for(let a = 0; a < localStorage.length; a++){
	var key = localStorage.key(a)
	try {
		var da = JSON.parse(localStorage.getItem(key));
		var table = document.getElementById("table-head");
		var row = table.insertRow(1);
		row.setAttribute('id', 'proList');
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);

		cell1.innerHTML = da[0];
		cell2.innerHTML = da[1];
		cell3.innerHTML = da[2];
		cell4.innerHTML = da[3];
		cell5.innerHTML = da[4];
	}catch(err) {
		console.log("Error")
	}

}


$( function(){
	var dateToday = new Date();
    $( "#date" ).datepicker({
    	minDate: dateToday,
    });
    
});