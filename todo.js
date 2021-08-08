
// SET DATE

setDate();

function setDate() {
	const date = new Date();
	const day = date.getDate();
	const month = date.toLocaleString('default', { month: 'long' });
	const fullDate = day + " " + month;

	//$('#date-top').text = fullDate;
	document.getElementById('date-top').innerText = fullDate;
}


// INPUT TASKS

$(document).ready(function() {
	$('#newTask').keypress(function(e) {
		if(e.keyCode==13){
			var input = $('#newTask').val();
			createTask(input);
		}
	})
})

var id = 1;

function createTask(input) {
	var labl = document.createElement("label");
	labl.classList.add('container');
	labl.innerHTML = input + 
				"<input type='checkbox'>" +
				"<span class='checkmark'></span>";

	var del = document.createElement("a");
	del.inerHTML = "<a id='del'></a>";

	labl.id = id;
	id += 1;
	$('#Tasks').append(labl);
	$('#newTask').val('');
}
