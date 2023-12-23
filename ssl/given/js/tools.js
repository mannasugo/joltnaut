`use strict`;

const hold = new Date(`1996-01-20`).valueOf();

class Tools {

	constructor () {

		this.call = new XMLHttpRequest;

		this.synonyms = [[`\f`, ``], [`\n`, ``], [`\t`, ``], [`\r`, ``], [`'`, `u0027`], [`"`, `u0022`], [`/`, `u002f`], [`&`, `u0026`]];
	}

	pull (Arg) {

		this.call.open(`POST`, Arg[0], true);

		this.call.setRequestHeader(`Content-Type`, `application/json`);

		this.call.send(JSON.stringify(Arg[1]));

		return this.call;
	}

	jpeg (Arg) {

		this.call.open(`POST`, Arg[0], true);

		this.call.setRequestHeader(`Content-Type`, `image/jpeg`);

		this.call.setRequestHeader(`md`, Arg[1]);

		this.call.send(Arg[2]);

		return this.call;
	}

	allocFile = (img, file) => {

		let alloc = new FileReader();

		alloc.onload = (e) => img.src = e.target.result;

		alloc.readAsDataURL(file);
	}

	allocateMug  (Files, Puts) {

		if (!Files || !Files.length) return;

		for (let i = 0; i < Files.length; i++) {

			let File = Files[i];

			if (!File.type.match(`image.*`) || File.size > 3048576) return;

			let Plane;

			if (!document.querySelector(`#plane`)) {

				Plane = new Image();

				Plane.setAttribute(`id`, `plane`);
			}

			else Plane = document.querySelector(`#plane`);

			this.allocFile(Plane, File);

			Plane.onload = () => {

				if (Plane.naturalWidth < 500) return;

				if (Plane.naturalWidth !== Plane.naturalHeight) return;

				let fileSort;

				if (Plane.src.charAt(11) === `j`) fileSort = `data:image/jpeg;base64,`;

				else if (Plane.src.charAt(11) === `p`) fileSort = `data:image/png;base64,`;

				if (!fileSort) return;
			
				let b64 = Plane.src.replace(fileSort,``), Duals = atob(b64), Alloc = [];

				for (let i = 0; i < Duals.length; i++) {

					Alloc.push(Duals.charCodeAt(i));
				}

				let AllocFile = new Blob([new Uint8Array(Alloc)], {type: `image/jpeg`});

				document.querySelector(`#file-plane`).src = Plane.src;

		        document.querySelector(`#file-plane`).style.width = `200px`

		        document.querySelector(`#file-plane`).style.height = `200px`

		        document.querySelector(`#file-plane`).style.marginTop = `24px`

		        Puts(AllocFile);
			};
				
		}
	}

  	slim (String) {

		if (!String || String.length < 1 || String.match(/^(\s+)$/)) return;

		return String;
  	}

	pans (Raw)  {

		this.synonyms.forEach(Regex => {

			Raw = Raw.replace(new RegExp(Regex[0], `g`), Regex[1]);
		});

		return Raw;
	}

	plains (Raw)  {

		this.synonyms.slice(4).forEach(Regex => {

			Raw = Raw.replace(new RegExp(Regex[1], `g`), Regex[0]);
		});

		return Raw;
	}

	coats (types) { return JSON.stringify(types); }

	typen (coat) { return JSON.parse(coat); }

	logs (Day) {

		Day = new Date(Day)

		return `${Day.getFullYear()}-${Day.getMonth() + 1}-${(Day.getDate() > 9)? Day.getDate(): `0` + Day.getDate()} ${(Day.getHours() > 9)? Day.getHours(): `0` + Day.getHours()}:${(Day.getMinutes() > 9)? Day.getMinutes(): `0` + Day.getMinutes()}:${(Day.getSeconds() > 9)? Day.getSeconds(): `0` + Day.getSeconds()}`;
	}

	notate (float) {

		if (parseFloat(float) === 0) float = (float).toFixed(2);

		//if (parseFloat(float) > 0) 

		else float = (float).toFixed(2);

		return float;
	}

	bot () {

		setInterval(() => {

				let Pair = {
					gas: 7.5/100,
					pair: [`btc/fdusd`, [43552.19, 43638.75]],
					ts_a: new Date(`2023-12-23 12:37:07`).valueOf(), 
					ts_z: new Date(`2023-12-23 12:55:42`).valueOf()
				};

				let Web = this.pull([
					`/json/web`, {
						param: Pair,
						pull: `bot`
					}]);

				Web.onload = () => {}
		}, 5000);
	}

}

Tools = new Tools();

let Clients = sessionStorage;