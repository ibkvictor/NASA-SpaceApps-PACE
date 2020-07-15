// Filename: backend/countryservice.jsw (web modules need to have a .jsw extension)
import {fetch} from 'wix-fetch'
import {getJSON} from 'wix-fetch'

export function getWeather(city) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=069dfa80f78d01cfb74858a0bf7d07c1';
	return fetch(url, {method:'get'})
		.then(resoponse => resoponse.json());
}
export function getCurrencyRate(code) {
    const url = "https://v6.exchangerate-api.com/v6/b0fd723fc8675a16064943a9/latest/USD";
	return getJSON(url)
		.then(response => response["conversion_rates"][code]);
}




//Use the following code in one of your site's front-end files
//to call the multiply function from backend/countryservice.jsw.

/* 
import {multiply} from 'backend/countryservice';

$w.onReady(function () {
	
	multiply(4,5).then(product => {
	    console.log(product);
	      // Logs: 20
	})
	.catch(error => {
		console.log(error);
	});
});
*/
