String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
    ;
  });
};

function LifeCounter() {
	this.death = new Date('September 10, 2066 16:00:00 EST');
	this.time_left = "{0} days, {1} hours, {2} minutes, and {3} seconds";	
}

LifeCounter.prototype.update = function() {
	// Calculate time I have left to die.
	// It'll be September 10, 2066
	var now = new Date();
	var difference = this.death - now;
	
	var milliseconds = Math.floor(difference % 1000);   
	difference = difference/1000;            
	
	var seconds = Math.floor(difference % 60);
	difference = difference/60;
	
	var minutes = Math.floor(difference % 60);
	difference = difference/60;
	
	var hours = Math.floor(difference % 24);
	difference = difference/24;
	
	var days = Math.floor(difference);
	
	return document.getElementById("lifecounter").innerHTML = this.time_left.format(days, hours, minutes, seconds);
};

document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		if(document.getElementById("lifecounter") != undefined){
			window.life_counter = new LifeCounter();
			setInterval("life_counter.update();", 1000);
		}else{
			console.log("No element with id 'lifecounter' exists.");
		}
	}
};