import {Clock} from './leftHemisphere.js';

//clock in the tip banner / top right

const displayClock = document.querySelector(".clock_text")

	async function $howClock(){
			try{

				let clock = new Clock;
				displayClock.innerHTML =`${clock.hour}:${clock.min}<sub>${clock.pod}</sub>`
				displayClock.title=`${clock.time}`
			}

			catch(err){
				displayClock.style.display="none";
				throw new Error(err)
			}

			setTimeout(()=>{
				$howClock()
			},30000)
	}$howClock()


