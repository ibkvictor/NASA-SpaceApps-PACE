// For full API documentation, including code examples, visit https://wix.to/94BuAAs

import { getWeather } from 'backend/countryservice';
import { getCurrencyRate } from 'backend/countryservice';
var holder = 2;
const housing = {
	"UAE": 95092.09618,
	"Durban": 15350.83,
	"South Africa": 15350.83,
	"Dubai": 95092.09618,
	"Cape Town": 15350.83,
	"Johannesburg": 15350.83,
	"Sharjah": 95092.09618,
	"Abu Dhabi": 95092.09618,
	"Ajman": 95092.09618,
	"Fujairah": 95092.09618,
	"Ras al Khaimah": 95092.09618,
	"Umm": 95092.09618,
	"Quwain": 95092.09618,
	"Soweto": 15350.83,
	"Pretoria": 15350.83
};

$w.onReady(function () {
	//TODO: write your page related code here...

});

export function button5_click(event, $w) {
	//Add your code for this event here: 
	getWeather($w("#city").value)
		.then(info => {
			$w('#result').expand()
			$w('#result').show()
			$w('#result').text = "Temperature: " + String(parseFloat(info['main']['temp_max']) - 273) + "\xB0" + "C" + "\n" +
				"Wind Speed: " + info['wind']['speed'] + "m/s"
			if (parseFloat(info['main']['temp_max']) >= 293.0) {
				$w('#result').text = $w('#result').text + "\n\n" + "RECOMMENDATION :" + "\n" + "You are all set. SWITCH to solar power today to save lives."
			} else if (parseFloat(info['wind']['speed']) >= 9.9) {
				$w('#result').text = $w('#result').text + "\n\n" + "RECOMMENDATION :" + "\n" + "You are all set. SWITCH to wind power today to save lives."
			} else {
				$w('#result').text = $w('#result').text + "\n\n" + "RECOMMENDATION :" + "\n" + "SWITCH to Biomass or Hydrogen fuel today to save lives."
			}
		})
}

export function button12_click(event, $w) {

	$w('#pictureGroup').expand();
	$w('#services').expand()
	$w('#services').show()
	var user = [{
			Country: "Ireland",
			Rank: 1,
			Company_name: "Community Power Electricity",
			Verdict: "The Company purchases hydro and wind  renewable energy generators across Ireland and sells them.",
			Link: "https://communitypower.ie/",
			image_link: "https://static.wixstatic.com/media/267ac1_a420df418aeb4419b95170831fda664b~mv2.jpeg"
		},
		{
			Country: "Ireland",
			Rank: 2,
			Company_name: "Energia Ireland",
			Verdict: "This Company is 3rd biggest supplier and promotes energy waste reduction systems.",
			Link: "https://www.energia.ie/home",
			image_link: "https://static.wixstatic.com/media/267ac1_d0ad51cb9c5b4da4bd102d0ecd8216c9~mv2.jpeg"
		},
		{
			Country: "Ireland",
			Rank: 3,
			Company_name: "Pinergy",
			Verdict: "The Company 100% green electricity and free low-consumption LED bulbs.",
			Link: "https://pinergy.ie/",
			image_link: "https://static.wixstatic.com/media/267ac1_e51e5d2a749d418695cd5770a65f048a~mv2.jpeg"
		},
		{
			Country: "Ireland",
			Rank: 4,
			Company_name: "Electric Ireland",
			Verdict: "51.3% of dependance of Gas and 37.7% is the ratio of their Renewable Energy.",
			Link: "https://www.electricireland.ie/",
			image_link: "https://static.wixstatic.com/media/267ac1_667e96ad359a4386999cdb96db7498f3~mv2.jpeg"
		},
		{
			Country: "Ireland",
			Rank: 5,
			Company_name: "Be Energy",
			Verdict: "23.9% is renewable sourced energy and 17.9% of Coal based energy.",
			Link: "https://beenergy.ie/",
			image_link: "https://static.wixstatic.com/media/267ac1_653732e0331d427bb39ca1f7e9a06631~mv2.jpeg"
		},
		{
			Country: "Japan",
			Rank: 1,
			Company_name: "Green People’s Power",
			Verdict: "Aims to supply  bimoassrenewable energy based on 100% citizen participation.",
			Link: "https://www.greenpeople.co.jp/",
			image_link: "https://static.wixstatic.com/media/267ac1_9aebe841b74a45b493061aeb5d278409~mv2.jpeg"
		},
		{
			Country: "Japan",
			Rank: 2,
			Company_name: "Shizen Denki by SoftBank",
			Verdict: "The Company does not charge a basic fee and 80% ratio of renewable energy (2019)",
			Link: "https://www.softbank.jp/energy/special/shizen-denki/",
			image_link: "https://static.wixstatic.com/media/267ac1_fb7a06e626cc409580fb1c8d86e17eed~mv2.jpeg"
		},
		{
			Country: "Japan",
			Rank: 3,
			Company_name: "Greena Denki :",
			Verdict: "Claims to be the first Japanese company that supplies 100% renewable energy.",
			Link: "https://ne-greena.jp/",
			image_link: "https://static.wixstatic.com/media/267ac1_54a54752137d4c349e02495e1c59e7ca~mv2.jpeg"
		},
		{
			Country: "Japan",
			Rank: 4,
			Company_name: "Kansai Electric Power Company",
			Verdict: " 2nd Largest supplier in Japan their renewable energy share doesn’t exceed 4% (2019)",
			Link: "https://www.kepco.co.jp/",
			image_link: "https://static.wixstatic.com/media/267ac1_be57aec905744343b27f7a161b1450b9~mv2.jpeg"
		},
		{
			Country: "Japan",
			Rank: 5,
			Company_name: "Tokyo Electric Power Company",
			Verdict: "The largest supplier in Japan but has only 58 units of renewable sources.",
			Link: "https://www.tepco.co.jp/",
			image_link: "https://static.wixstatic.com/media/267ac1_db461238b3d34077a2932d875041f98f~mv2.jpeg"
		},
		{
			Country: "USA",
			Rank: 1,
			Company_name: "Commonwealth Fusion",
			Verdict: "CFS has assembled a world-class team working to design and build fusion.",
			Link: " https://cfs.energy/",
			image_link: "https://static.wixstatic.com/media/267ac1_db461238b3d34077a2932d875041f98f~mv2.jpeg"
		},
		{
			Country: "USA",
			Rank: 2,
			Company_name: "Atlas Energy Systems",
			Verdict: "Developing solid-state energy converters for waste heat power production and concentrated solar.",
			Link: "https://atlasenergysys.com/",
			image_link: "https://static.wixstatic.com/media/267ac1_aa8a5c1ad483449a81660557cee095f6~mv2.jpeg"
		},
		{
			Country: "USA",
			Rank: 3,
			Company_name: " GE Power",
			Verdict: "Uses both renewable resources such as water, wind, solar and biogas; alongside coal, oil, natural gas.",
			Link: "https://www.ge.com/power",
			image_link: "https://static.wixstatic.com/media/267ac1_da6032ba31954bbbbaf7946a6c7a778f~mv2.jpeg"
		},
		{
			Country: "USA",
			Rank: 4,
			Company_name: "CPL Retail Energy",
			Verdict: "Does not have a 100% green energy plan, but has fixed and variable plans for 100% natural gas.",
			Link: "https://www.cplretailenergy.com/",
			image_link: "https://static.wixstatic.com/media/267ac1_2de8583c068440cf95f2041d6fc68167~mv2.jpeg"
		},
		{
			Country: "USA",
			Rank: 5,
			Company_name: "Infinite Energy",
			Verdict: "Offers energy managment and supply but with limited green solutions.",
			Link: "https://www.infiniteenergy.com/",
			image_link: "https://static.wixstatic.com/media/267ac1_293da6c90c554cd3aaabda02d7945ef5~mv2.jpeg"
		},
		{
			Country: "South Africa",
			Rank: 1,
			Company_name: "Eskom",
			Verdict: "Largest supplier in SA but launched US$11 Billion Green-Energy Initiative.",
			Link: "http://www.eskom.co.za/",
			image_link: "https://static.wixstatic.com/media/267ac1_293da6c90c554cd3aaabda02d7945ef5~mv2.jpeg"
		},
		{
			Country: "South Africa",
			Rank: 2,
			Company_name: "AGE Technologies",
			Verdict: "Leading Electrical Engineering company with a number of solutions for our clients' green energy needs.",
			Link: "https://www.age.co.za",
			image_link: "https://static.wixstatic.com/media/267ac1_e32a9a6ba78542bf8961e1944eefe6ee~mv2.jpeg"
		},
		{
			Country: "South Africa",
			Rank: 3,
			Company_name: "Sasol",
			Verdict: "Chemicals and energy company tlaunching a program to procure some 600 MW of renewable power.",
			Link: "https://www.sasol.com/",
			image_link: "https://static.wixstatic.com/media/267ac1_562c205fd09343f2a215e8fdea7503ce~mv2.jpeg"
		},
		{
			Country: "South Africa",
			Rank: 4,
			Company_name: "Exxaro",
			Verdict: "Provides Coal based energy but hopes dropping 22% of coal ressources over time.",
			Link: "https://www.exxaro.com/",
			image_link: "https://static.wixstatic.com/media/267ac1_562c205fd09343f2a215e8fdea7503ce~mv2.jpeg"
		},
		{
			Country: "South Africa",
			Rank: 5,
			Company_name: "AngloGold Ashanti",
			Verdict: "Ressources based on mining based energy coming with high costs and constraints.",
			Link: "https://www.anglogoldashantisouthafrica.co.za/",
			image_link: "https://static.wixstatic.com/media/267ac1_10decde7b8db493298efed46ec636a2b~mv2.jpeg"
		},
		{
			Country: "UAE",
			Rank: 1,
			Company_name: "Masdar: Shams 1",
			Verdict: "Targets  7 percent power-generation capacity via renewable energy by depicting heat instead of solar energy.",
			Link: "https://masdar.ae/en/masdar-clean-energy/projects/shams-1",
			image_link: "https://static.wixstatic.com/media/267ac1_bbdd99a6eac848c8a2f469a3cc08a6ad~mv2.jpeg"
		},
		{
			Country: "UAE",
			Rank: 2,
			Company_name: "Noor",
			Verdict: "Aimes to increase the existing solar capacity from 110 MW to 1,287 MW and grow solar capacity of the UAE.",
			Link: "http://www.ewec.ae/en/noor-abu-dhabi.html",
			image_link: "https://static.wixstatic.com/media/267ac1_7735dbb601854825a5098f3485d109be~mv2.jpeg"
		}
	];

	// if $w('#country').valuev === String(crew.Country)
	var servicers = [];
	var i = 0;
	while (i < 22) {
		if ($w('#country').value === String(user[i].Country)) {
			servicers.push(user[i]);
		}
		i += 1;
	}
	for (let j = 0; j < servicers.length; j++) {
		$w('#services').text = $w('#services').text + String("\n\n" +
			"Rank of the Company in the country: " + servicers[j].Rank + "\n\n" +
			"Company name: " + servicers[j].Company_name + "\n\n" +
			"The company aims provides: " + servicers[j].Verdict + "\n\n" +
			"Reach the company via this link: " + servicers[j].Link + "\n\n")
		// else {
		// 	$w('#services').text = "Oops, sorry dont have data on your country \n Check back soon.\n With love, dev Team @ PACE" 
		// }
	}
	if (servicers.length === 1) {
		$w('#image8').src = String(servicers[0].image_link);
		$w('#image9').src = "";
		$w('#image10').src = "";
		$w('#image11').src = "";
		$w('#image12').src = "";
		$w('#image13').src = "";
	} else if (servicers.length === 2) {
		$w('#image8').src = String(servicers[0].image_link);
		$w('#image9').src = String(servicers[1].image_link);
		$w('#image10').src = "";
		$w('#image11').src = "";
		$w('#image12').src = "";
		$w('#image13').src = "";
	} else if (servicers.length === 3) {
		$w('#image8').src = String(servicers[0].image_link);
		$w('#image9').src = String(servicers[1].image_link);
		$w('#image10').src = String(servicers[2].image_link);
		$w('#image11').src = "";
		$w('#image12').src = "";
		$w('#image13').src = "";

	} else if (servicers.length === 4) {
		$w('#image8').src = String(servicers[0].image_link);
		$w('#image9').src = String(servicers[1].image_link);
		$w('#image10').src = String(servicers[2].image_link);
		$w('#image11').src = String(servicers[3].image_link);
		$w('#image12').src = "";
		$w('#image13').src = "";
	} else {
		$w('#image8').src = String(servicers[0].image_link);
		$w('#image9').src = String(servicers[1].image_link);
		$w('#image10').src = String(servicers[2].image_link);
		$w('#image11').src = String(servicers[3].image_link);
		$w('#image12').src = String(servicers[4].image_link);
		$w('#image13').src = "";
	}
}

export function button13_click(event, $w) {
	//Add your code $w('#services').text ="";
	$w('#services').text = "";
	$w('#result').text = "";

}

export function applianceChange(event) {
	//Add your code for this event here
	var element = event.target;
	var counter = element.id.charAt(element.id.length - 1);
	$w('#wattage' + counter).value = $w("#" + element.id).value;
}

export function sum(event) {
	//Add your code for this event here:

	console.log($w('#wattage1').value);
	// $w('#input5').value = (parseFloat($w('#wattage1').value)+parseFloat($w('#wattage2').value)+parseFloat($w('#wattage3').value)+parseFloat($w('#wattage4').value)+parseFloat($w('#wattage5').value)+parseFloat($w('#wattage6').value)+parseFloat($w('#wattage7').value)+parseFloat($w('#wattage8').value)+parseFloat($w('#wattage9').value)+parseFloat($w('#wattage10').value)+parseFloat($w('#wattage11').value)+parseFloat($w('#wattage12').value)+parseFloat($w('#wattage13').value)+parseFloat($w('#wattage14').value));
	for (var i = 1; i < 15; i++) {
		$w('#input5').value = String((parseFloat($w('#input5').value) + (parseFloat($w('#wattage' + i).value * parseFloat($w('#hours' + i).value))) / 1000));
	}
	$w('#solarPredict').value = String((parseFloat($w('#input5').value) / parseFloat($w('#dropdown1').value)));
	$w('#group6').expand();
	$w('#solarPredict').show();
	var currencyCode = $w('#currency').value;
	console.log(currencyCode);

	getCurrencyRate(currencyCode)
		.then(receiver => {
			var exchangeRate = (1.0 / parseFloat(receiver));

			console.log(exchangeRate);
			var usdPrice = parseFloat($w('#energyPrice').value) * exchangeRate;
			var options = $w('#dropdown1').options;
			var valueholder;
			for (var j = 0; j < options.length; j++) {
				if ($w('#dropdown1').value === options[j].value) {
					valueholder = String(options[j].label);
				}
			}
			$w('#finalResult').value = String((housing[valueholder]) / ((usdPrice) * parseFloat($w('#input5').value)));
			$w('#finalResult').value = $w('#finalResult').value + "days";
		})

}

export function addItems(event) {
	$w('#myAppliance' + holder).expand();
	$w('#myAppliance' + holder).show();
	holder++;

	// var destination = $('#adiv').eq(0);
	//  var source = $w('#dropdown1').id;
	//  var source1 = document.getElementById(source);

	//  for (i = 0; i < source.attributes.length; i++)
	//  {
	//      var a = source.attributes[i];
	//      destination.attr(a.name, a.value);
	//  }
	// $w('#dropdown1').style
}

export function qualityChange(event) {
	var element = event.target;
	var counter = element.id.charAt(element.id.length - 1);
	$w('#wattage' + counter).value = parseInt($w('#wattage' + counter).value, 10) * parseInt($w("#" + element.id).value, 10);
}
