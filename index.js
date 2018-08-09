// Variables
var zoom = 100;

// Image Classes
var intro_filter = document.getElementsByClassName('intro_filter')[0];
var u_filter = document.getElementsByClassName('u_filter')[0];
var g_filter = document.getElementsByClassName('g_filter')[0];
var r_filter = document.getElementsByClassName('r_filter')[0];
var i_filter = document.getElementsByClassName('i_filter')[0];
var z_filter = document.getElementsByClassName('z_filter')[0];
var y_filter = document.getElementsByClassName('y_filter')[0];


// Slider Values 
var u_value = document.getElementById('u_value');
var g_value = document.getElementById('g_value');
var r_value = document.getElementById('r_value');
var i_value = document.getElementById('i_value');
var z_value = document.getElementById('z_value');
var y_value = document.getElementById('y_value');

// Checkbox variables

var u_checkbox = document.getElementById('u_checkbox');
var g_checkbox = document.getElementById('g_checkbox');
var r_checkbox = document.getElementById('r_checkbox');
var i_checkbox = document.getElementById('i_checkbox');
var z_checkbox = document.getElementById('z_checkbox');
var y_checkbox = document.getElementById('y_checkbox');

function check() {
	// U
	if (u_checkbox.checked == true) {
		u_filter.setAttribute('style', 'display:block');
		intro_filter.setAttribute('style', 'display:none');
	}
	else {
		u_filter.setAttribute('style', 'display:none');
		intro_filter.setAttribute('style', 'display:block');
	}
	// G
		if (g_checkbox.checked == true) {
			g_filter.setAttribute('style', 'display:block');
			intro_filter.setAttribute('style', 'display:none');

	}
	else {
		g_filter.setAttribute('style', 'display:none');
	}
	// R
		if (r_checkbox.checked == true) {
		r_filter.setAttribute('style', 'display:block');
		intro_filter.setAttribute('style', 'display:none');

	}
	else {
		r_filter.setAttribute('style', 'display:none');
	}
	// I
		if (i_checkbox.checked == true) {
		i_filter.setAttribute('style', 'display:block');
		intro_filter.setAttribute('style', 'display:none');

	}
	else {
		i_filter.setAttribute('style', 'display:none');
	}
	// Z
		if (z_checkbox.checked == true) {
		z_filter.setAttribute('style', 'display:block');
		intro_filter.setAttribute('style', 'display:none');

	}
	else {
		z_filter.setAttribute('style', 'display:none');
	}
	// Y
		if (y_checkbox.checked == true) {
		y_filter.setAttribute('style', 'display:block');
		intro_filter.setAttribute('style', 'display:none');
	}
	else {
		y_filter.setAttribute('style', 'display:none');
	}
}

function zoom_in() {
	u_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	g_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	r_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	i_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	z_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	y_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	zoom+=2;
}

function zoom_out() {
	zoom-=2;
	u_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	g_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	r_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	i_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	z_filter.setAttribute('style', 'background-size: ' + zoom + '%');
	y_filter.setAttribute('style', 'background-size: ' + zoom + '%');
}

// TODO turns off layer on check
function check_toggle() {
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    image.style.display = "none";
  } else {
    image.style.display = "block";
  }
}


function reset() {
	zoom = 100;
	var button = document.getElementById('button'); 
	button.addEventListener('click', function() {
		u_filter.setAttribute("style", "-webkit-filter: brightness(100%);-webkit-filter: saturate(2.5); ");
		g_filter.setAttribute("style", "-webkit-filter: brightness(100%);-webkit-filter: saturate(2.5); ");
		r_filter.setAttribute("style", "-webkit-filter: brightness(100%);-webkit-filter: saturate(2.5); ");
		i_filter.setAttribute("style", "-webkit-filter: brightness(100%);-webkit-filter: saturate(2.5); ");
		z_filter.setAttribute("style", "-webkit-filter: brightness(100%);-webkit-filter: saturate(2.5); ");
		y_filter.setAttribute("style", "-webkit-filter: brightness(100%);-webkit-filter: saturate(2.5); ");
	});
	zoom_in()
}

	
// Update image values on slider change 
u_value.addEventListener('change', function() {
	u_filter.setAttribute('style', '-webkit-filter:saturate(' + this.value + ');-webkit-filter:brightness(' + this.value + ')');
});

g_value.addEventListener('change', function() {
	g_filter.setAttribute('style', '-webkit-filter:saturate(' + this.value + ');-webkit-filter:brightness(' + this.value + ')');
});

r_value.addEventListener('change', function() {
	r_filter.setAttribute('style', '-webkit-filter:saturate(' + this.value + ');-webkit-filter:brightness(' + this.value + ')');
});

i_value.addEventListener('change', function() {
	i_filter.setAttribute('style', '-webkit-filter:saturate(' + this.value + ');-webkit-filter:brightness(' + this.value + ')');
});

z_value.addEventListener('change', function() {
	z_filter.setAttribute('style', '-webkit-filter:saturate(' + this.value + ');-webkit-filter:brightness(' + this.value + ')');
});

y_value.addEventListener('change', function() {
	y_filter.setAttribute('style', '-webkit-filter:saturate(' + this.value + ');-webkit-filter:brightness(' + this.value + ')');
});
