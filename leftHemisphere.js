

//digital clock for no reason at all smh lol....
class Clock {
constructor(hour,min,pod){
let time = new Date();
this.time= time;
this.hour = time.getHours() % 12;
}


get min(){
let time = new Date();
if(JSON.stringify(time.getMinutes()).length<2){

return "0"+time.getMinutes();
}else{
	return time.getMinutes();
}

}

get pod(){
	let time = new Date();
		if(time.getHours()<=23 && time.getHours() >= 12){
			return `pm<i id="moon" class="material-icons">brightness_3</i>`
		}else{
			return `am<i id="sun" class="material-icons">brightness_7</i>`
		}
}

}
let g = new Clock

//digital clock for no reason at all smh lol....




//send em off.....
export {Clock};