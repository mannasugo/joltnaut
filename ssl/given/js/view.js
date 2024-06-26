`use strict`;

class View {

	constructor() {

		this.appendString = ``;
	}

	ModelDOM(Model) {

		if (typeof Model !== `object`) return;

		Model.forEach(Obj => {

			let a = Obj[0], z, last;

			z = a; 

				if (a === `html`) a = `!doctype html><html`;

				this.appendString += `<` + a;
				
				for (let meta in Obj[1]) {

					let value = ``;

					if (meta === `style`) {

						for (let style in Obj[1][meta]) {

							value += `${style}:${Obj[1][meta][style]};`
						}
					}

					else value = Obj[1][meta];

					this.appendString += ` ${meta}='${value}'`;
				}

				this.appendString += `>`;
				
				if (Obj[2]) {

					if (typeof Obj[2] === `object`) this.ModelDOM(Obj[2]);

					else if (typeof Obj[2] === `string`) this.appendString += Obj[2];
				}

				let Queer = [`img`, `input`, `meta`];

				if (!Queer.indexOf(z) > -1) this.appendString += `</` + z + `>`;
		});

		return Tools.plains(this.appendString);
	}

	DOM(Arg) { document.querySelector(Arg[0]).innerHTML = this.ModelDOM(Arg[1]);}

	pop () {this.appendString = ``};
}

let Models = {

	allow: function (Arg) {

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultSlot`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {}, `SEND AMOUNT`], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `-_tX v202311051955`, href: `/my/peers`, style: {height:`${13}px`, width:`${13}px`}}]]]]],
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `SEND TO`]			,
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${4}px`}}, 
								[
									[`svg`, {style: {[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
										[[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
										[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
											[`text-transform`]: `uppercase`, 
											[`letter-spacing`]: `normal`,
											[`font-size`]: `${11}px`}}, Arg.mail[0]]]], 
									[`div`, {class: `_eYG`, style: {[`line-height`]: 1.6}}, 
										[
											[`span`, {}, Arg.mail],
											[`span`, {style: 
												{
													color: `#a3a3a3`,
													[`font-size`]: `${9}px`, 
													[`font-weight`]: 600}}, `${Arg.id}`]]]]], 
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
								[[`span`, {style: {color: `#a3a3a3`}}, `My Wallet Balance`], 
								[`span`, {style: {[`font-family`]: `geometria`,[`font-weight`]: 600, [`margin-left`]: `${8}px`}}, `${Arg.hold} USDT`]]],
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO SEND`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `0.00`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `USDT`]]]]], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `RECEPIENT WILL RECEIVE`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `0 - ${(Arg.hold*134.47).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `KES`]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#ca0000`, border: `${1}px solid #ca0000`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `w2w`}, `SEND USDT`]]]]]]]]]		
	},

	app: function (Web) {

		let Param = [
			[], 
			[[`pair`, 22.5], [`transactions`, 20, true], [`roi`, 25, true], [`runtime(days)`, 12.5, true], [`buyin(usd)`, 12.5, true], [``, 7.5, true]],
			[], 
			[[`asset`, 22.5], [`price`, 20, true], [`24h diff`, 15, true], /*[`24h diff`, 15, true],*/ [`volume`, 22.5, true], [``, 20, true]],
			[], 
			[[`currency`, 22.5], [`last trade`, 20, true], [`24h%`, 15, true], [`24h diff`, 15, true], [`liquidity`, 20, true], [``, 7.5, true]]];

		Param[1].forEach(Feat => {

			Param[0].push([`div`, {style: {width: `${Feat[1]}%`}}, 
				[[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, overflow: `hidden`, [`padding-left`]: (Feat[2])? `${12}px`: `0`, [`text-align`]: (Feat[2])? `right`: `left`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, Feat[0]]]]);

		});

		Param[3].forEach(Feat => {

			Param[2].push([`div`, {style: {width: `${Feat[1]}%`}}, 
				[[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, overflow: `hidden`, [`padding-left`]: (Feat[2])? `${12}px`: `0`, [`text-align`]: (Feat[2])? `right`: `left`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, Feat[0]]]]);

		});

		Param[5].forEach(Feat => {

			Param[4].push([`div`, {style: {width: `${Feat[1]}%`}}, 
				[[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, overflow: `hidden`, [`padding-left`]: (Feat[2])? `${12}px`: `0`, [`text-align`]: (Feat[2])? `right`: `left`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, Feat[0]]]]);

		});

		let Coin = [
			[],
			[
				[`btc`, `bitcoin`],
				[`eth`, `ethereum`],
				[`bnb`, `binance coin`],
				[`sol`, `solana`],
				[`usdc`, `USD coin`],
				[`ltc`, `litecoin`],
				[`usdt`, `tether`],
				[`xmr`, `monero`],
				[`xrp`, `ripple`],
				[`doge`, `dogecoin`]]];

		Coin[1].forEach(Asset => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			if (Web.USD24[Asset[0]] && Web.USD24[Asset[0]].length > 0) {

				let USD24 = Web.USD24[Asset[0]], USD = Web.xUSD[Asset[0]];

				(USD24[0][1] > USD)? H24[1] = `red`: H24[1] = `green`;

				(USD24[0][1] > USD)? H24[3] = `red`: H24[3] = `green`;

				H24[0] = `${(((USD - USD24[0][1])/USD)*100).toFixed(2)}%`

				H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;
			}

			Coin[0].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {width: `${22.5}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/tokens/${Asset[0]}.svg`, style: {[`max-width`]: `${18}px`}}], 
							[`div`, {style: {color: `#000`, width: `${100}%`}}, 
								[
									[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 300, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Asset[1]}`], 
									/*[`span`, {style: {color: `#515151`, [`font-size`]: `${12}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Flag[2]}`]*/]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.xUSD[Asset[0]])? `${(Web.xUSD[Asset[0]])}`: `-`], 
							/*[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `${Flag[1]}`]*/]], 
					[`div`, {style: {width: `${15}%`}}, 
						[[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]]]], 
					//[`div`, {style: {width: `${15}%`}}, 
						//[[`span`, {style: {color: H24[1], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[2]]]], 
					[`div`, {style: {width: `${22.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 300, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${(Web.volume[Asset[0]]).toFixed(6)}`], 
							/*[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]*/]], 
					[`div`, {style: {[`align-items`]: `end`, width: `${20}%`}}, 
						[[`a`, {href: `/fiat/${Asset[0].toUpperCase()}`, style: {background: `#0fd064`, boder: `1px solid green`, color: `#fff`, [`font-size`]: `${12}px`, [`font-weight`]: 300, padding: `${2}px ${8}px`}}, `BUY`]
						//[`a`, {href: `/trade/${Asset[0].toUpperCase()}_USD`, class: `v202205042043`, style: {height: `${20}px`, [`max-width`]: `${20}px`}}]
						]]]]);
		});

		let Flag = [
			[],
			[
				[`au`, `AUD`, `australian dollar`],
				[`ca`, `CAD`, `canadian dollar`],
				[`eu`, `EUR`, `euro`],
				[`jp`, `JPY`, `japanese yen`],
				[`ke`, `KES`, `kenyan shilling`],
				[`no`, `NOK`, `norwegian krone`],
				[`nz`, `NZD`, `new zealand dollar`],
				[`za`, `ZAR`, `south african rand`],
				[`se`, `SEK`, `swedish krone`],
				[`ch`, `CHF`, `swiss franc`],
				[`uk`, `GBP`, `sterling pound`],
				//[`us`, `USD`, `us dollar`]
			]];

		Flag[1].forEach(Asset => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			if (Web.USD24[Asset[1].toLowerCase()]) {

				let USD24 = Web.USD24[Asset[1].toLowerCase()], USD = Web.xUSD[Asset[1].toLowerCase()];

				(USD24[0][1] > USD)? H24[1] = `red`: H24[1] = `green`;

				(USD24[0][1] > USD)? H24[3] = `red`: H24[3] = `green`;

				H24[0] = `${(((USD - USD24[0][1])/USD)*100).toFixed(2)}%`;

				H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;
			}

			Flag[0].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {width: `${22.5}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/flags/${Asset[0]}.svg`, style: {[`max-width`]: `${18}px`}}], 
							[`div`, {style: {color: `#000`, width: `${100}%`}}, 
								[[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 300, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Asset[2]}`], 
									/*[`span`, {style: {color: `#515151`, [`font-size`]: `${12}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Flag[2]}`]*/]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.xUSD[(Asset[1]).toLowerCase()])? `${(Web.xUSD[(Asset[1]).toLowerCase()]).toFixed(4)}`: `-`], 
							/*[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `${Flag[1]}`]*/]], 
					[`div`, {style: {width: `${15}%`}}, 
						[[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]]]], 
					[`div`, {style: {width: `${15}%`}}, 
						[[`span`, {style: {color: H24[1], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[2]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${Web.volume[Asset[1].toLowerCase()].toFixed(3)}`], 
							/*[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]*/]], 
					[`div`, {style: {[`align-items`]: `end`, width: `${7.5}%`}}, 
						[[`a`, {href: `javascript:;`, class: `v202205042043`, style: {height: `${20}px`, [`max-width`]: `${20}px`}}]]]]]);
		});

		if (Web.spot) {

			for (let coin in Web.spot) {Web.debit += Web.spot[coin]*Web.xUSD[coin];}
		}

		return [
			`main`, {id: `careers`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[
					[`div`, {style: {background: `#fff`, [`border-bottom`]: `${1}px solid #d9d9d9`, magin: `auto`, [`mx-width`]: `${1280}px`, padding: `${12}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `v202312301635`, style: {height: `${32}px`, width: `${32}px`}}], 
								[`div`, {class: `_eYG`}, 
									[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${15}px`, [`font-weight`]: 600, [`letter-spacing`]: 0}}, `${parseFloat(Web.debit).toFixed(2)} USD`]]],
								[`div`, {class: `_gZz`, style: {flex: 0, [`font-size`]: `${12}px`}}, 
									[
										(Clients.mug)? []: [`a`, {href: `/signin`, style: {background: `#0000ff30`, color: `blue`, [`font-weight`]: 300, [`margin-left`]: `${8}px`, padding: `${4}px ${8}px`, [`white-space`]: `nowrap`}}, `signin`],
										[`a`, {href: `/spot`, style: {background: `blue`, color: `#fff`, [`margin-left`]: `${8}px`, padding: `${4}px ${8}px`}}, `Spot`],
										[`a`, {href: `/earn`, style: {background: `blue`, color: `#fff`, margin: `0 ${8}px`, padding: `${4}px ${8}px`}}, `Earn`],
										[`a`, {class: `_gxM _geQ`, href: `/u/wallet/`, style: {background: `blue`, color: `#fff`, display: `flex`, [`font-weight`]: 600, heght: `${40}px`, [`ltter-spacing`]: `${.75}px`, padding: `${4}px ${12}px`, [`white-space`]: `nowrap`}}, 
											[
												//[`span`, {class: `v202204282015`, style: {height: `${20}px`, [`margin-right`]: `${8}px`, width: `${20}px`}}], 
												[`span`, {style: {[`marin-bottom`]: `${2}px`}}, `Deposit`]]]]]]]]],
					[`div`, {style: {[`max-width`]: `${1280}px`, width: `${100}%`, margin: `${36}px auto ${0}`, [`justify-content`]: `center`}}, 
						[
							[`div`, {style: {padding: `${32}px ${24}px ${12}px`}}, 
								[
									[`h1`, {style: {color: `#000`, [`font-size`]: `${16}px`, [`font-weight`]: 600, [`letter-spacing`]: `${-.5}px`, margin: `${12}px ${0} ${0}`, }}, `Markets Overview`],
									[`div`, {style: {[`margin-top`]: `${12}px`}}, 
										[[`div`, {class: `_gxM`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`}}, 
											[
												[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`, padding: `${12}px 0`}}, `Crypto`]]]]],
									[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, Param[2]],
									[`div`, {}, Coin[0]],
									[`div`, {style: {[`margin-top`]: `${12}px`}}, 
										[[`div`, {class: `_gxM`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`}}, 
											[
												[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`, padding: `${12}px 0`}}, `Forex`]]]]],
									[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, Param[4]],
									[`div`, {}, Flag[0]],
									[`div`, {style: {[`margin-top`]: `${12}px`}}, 
										[[`div`, {class: `_gxM`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`}}, 
											[
												[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`, padding: `${12}px 0`}}, `Liquidity Pools`]]]]], 
									[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, Param[0]], 
									[`div`, {}, 
										[[`div`, {class: `_geQ _gxM`, style: {padding: `${12}px 0`}}, 
											[
												[`div`, {class: `_geQ _gxM`, style: {[`max-width`]: `${22.5}%`}}, 
													[
														[`img`, {src: `/ssl/given/svg/tokens/btc.svg`, style: {[`max-width`]: `${18}px`, transform: `translateX(${0}px)`}}],
														[`img`, {src: `/ssl/given/svg/tokens/usdt.svg`, style: {[`max-width`]: `${18}px`, transform: `translateX(${-7.6667}px)`}}], 
														[`span`, {style: {[`font-size`]: `${12}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`}}, `BTC/USDT`]]], 
												[`div`, {style: {width: `${20}%`}}, 
													[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`,[`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${Web.till}`]]], 
												[`div`, {class: `_geQ _gxM`, style: {[`justify-content`]: `end`, width: `${25}%`}},  
													[
														[`span`, {class: `v20240221434`, style: {height: `${15}px`, [`margin-right`]: `${8}px`, width: `${15}px`}}],
														[`span`, {style: {color: `rgb(${255}, ${215}, ${2})`, [`font-family`]: `geometria`, [`font-size`]: `${11}px`,[`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `+${(Web.pnl[0]).toFixed(2)}%`]]], 
												[`div`, {style: {width: `${12.5}%`}}, 
													[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${(Web.runs).toFixed(1)}`]]], 
												[`div`, {style: {width: `${12.5}%`}}, 
													[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`,[`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${2.5}`]]], 
												[`div`, {style: {[`align-items`]: `end`, width: `${7.5}%`}}, 
													[[`a`, {href: `/pools/BTC_USDT`, class: `v202203261943`, style: {height: `${18}px`, [`max-width`]: `${18}px`}}]]]]]]]]]]], 
					this.us()]]
	},

	asset: function (Web) {

		return [
			`main`, {style: {
				background: `rgb(5, 5, 5)`, color: `rgb(${161}, ${161}, ${161})`, [`font-family`]: `cula`, height: `${100}%`}}, 
				[
					[`div`, {style: {margin: `${20}px ${24}px`}}, 
						[]],
					[`section`, { class: `tY0 _geQ`, style: {background: `inherit`, padding: `0 ${24}px`,  [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `0 auto`, [`justify-content`]: `center`}}, 
							[ 
								[`div`, {}, 
									[[`div`, {style: {
										background: `rgb(${25}, ${25}, ${25})`, [`border-radius`]: `${.375}rem`, opacity: 1,
										pdding: `${24}px ${24}px`}}, 
										[
											[`div`, {}, 
												[
													[`div`, {class: `_gxM _geQ`, style: {padding: `${16}px ${16}px`}}, 
														[
															[`img`, {src: `/ssl/given/svg/tokens/usdt.svg`, style: {
																[`max-width`]: `${32}px`,}}],
															[`div`, {class: `_eYG`, style: {[`margin-left`]: `${16}px`}}, 
																[
																	[`span`, {style: {
																		color: `rgb(${230}, ${230}, ${230})`, [`font-weight`]: 400, 
																		[`font-size`]: `${14}px`, [`line-height`]: `${20}px`}}, `USDT Address`],
																	[`span`, {style: {
																		color: `rgb(${161}, ${161}, ${161})`, [`font-weight`]: 400, 
																		[`font-size`]: `${12}px`, [`line-height`]: `${16}px`}}, `${Web.id.slice(0, 9)}...${Web.id.slice(28)}`]]], 
															[`div`, {class: `_gZz`}, 
																[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																	[
																		[`div`, {class: `_gxM _gZz _geQ`}, 
																			[
																				[`span`, {class: `v202312301635`, style: {
																					height: `${20}px`, [`margin-right`]: `${8}px`, width: `${20}px`}}],
																				[`span`, {style: {color: `rgb(${230}, ${230}, ${230})`,
																					[`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																					[`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, [`white-space`]: `nowrap`}}, 
																					`${parseFloat(Web.hold).toFixed(2)} USDT`]]]]]]]]], 
													[`div`, {class: `_gxM _geQ`, style: {padding: `${16}px ${16}px`}}, 
														[
															[`a`, {class: `_gxM _geQ`, href: `/mode/deposit/stk`, style: {
																	background: `#7abbff`, [`border-radius`]: `${100}px`, color: `rgb(${6}, ${6}, ${6})`,
																	display: `flex`, [`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																	[`font-weight`]: 600, height: `${40}px`, [`justify-content`]: `center`, [`letter-spacing`]: `${.75}px`, 
																	[`margin-right`]: `${12}px`, padding: `${0}px ${16}px`, [`white-space`]: `nowrap`}}, 
																[
																	[`span`, {class: `v202203191304`, style: {height: `${20}px`, [`margin-right`]: `${8}px`, width: `${20}px`}}], 
																	[`span`, {style: {}}, `BUY`]]], 
															[`a`, {class: `_gxM _geQ`, href: `javascript:;`, style: {
																	background: `#7abbff`, [`border-radius`]: `${100}px`, color: `rgb(${6}, ${6}, ${6})`,
																	display: `flex`, [`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																	[`font-weight`]: 600, height: `${40}px`, [`justify-content`]: `center`, [`letter-spacing`]: `${.75}px`, 
																	[`margin-right`]: `${12}px`, padding: `${0}px ${16}px`, [`white-space`]: `nowrap`}}, 
																[
																	[`span`, {class: `v202203261943`, style: {height: `${18}px`, [`margin-right`]: `${8}px`, width: `${18}px`}}], 
																	[`span`, {style: {}}, `DEPOSIT`]]], 
															[`a`, {class: `_gxM _geQ`, href: `/my/assets/USDT/to`, style: {
																	background: `#7abbff`, [`border-radius`]: `${100}px`, color: `rgb(${6}, ${6}, ${6})`,
																	display: `flex`, [`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																	[`font-weight`]: 600, height: `${40}px`, [`justify-content`]: `center`, [`letter-spacing`]: `${.75}px`, padding: `${0}px ${16}px`, [`white-space`]: `nowrap`}}, 
																[
																	[`span`, {class: `v202203262148`, style: {height: `${18}px`, [`margin-right`]: `${8}px`, width: `${18}px`}}], 
																	[`span`, {style: {}}, `WITHDRAW`]]]]]]]]]]]]]]]]];
	},

	autoFX: function (Web) {

		let Param = [
			[], 
			[[`asset`, 20], [`amount`, 20, true], [`price`, 22.5, true], [`change`, 17.5, true], [`value`, 20, true]/*, [``, 7.5, true]*/]];

		Param[1].forEach(Feat => {

			Param[0].push([`div`, {style: {width: `${Feat[1]}%`}}, 
				[[`span`, {style: {color: `#b3b3b3`, [`font-size`]: `${10}px`, [`font-weight`]: 600, overflow: `hidden`, [`text-align`]: (Feat[2])? `right`: `left`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, Feat[0]]]])

		});

		if (Web.spot) {

			Web[`now`] = 0

			for (let coin in Web.spot) {

				Web.now += Web.spot[coin]*Web.USD[coin]
			}
		}

		let Fiat = [
			[],
			[
				[`au`, `AUD`, `australian dollar`],
				[`ca`, `CAD`, `canadian dollar`],
				[`eu`, `EUR`, `euro`],
				[`jp`, `JPY`, `japanese yen`],
				[`ke`, `KES`, `kenyan shilling`],
				[`no`, `NOK`, `norwegian krone`],
				[`nz`, `NZD`, `new zealand dollar`],
				[`za`, `ZAR`, `south african rand`],
				[`se`, `SEK`, `swedish krone`],
				[`ch`, `CHF`, `swiss franc`],
				[`uk`, `GBP`, `sterling pound`],
				[`us`, `USD`, `us dollar`]], []];

		Fiat[1].forEach(Flag => {

			if (Web.spot[Flag[1].toLowerCase()]) Fiat[2].push(Flag)
		});

		Fiat[2].forEach(Flag => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			if (Web.USD24[Flag[1].toLowerCase()]) {

				let USD24 = Web.USD24[Flag[1].toLowerCase()], USD = Web.USD[Flag[1].toLowerCase()];

				(USD24[0][1] > USD)? H24[1] = `red`: H24[1] = `green`;

				(USD24[0][1] > USD)? H24[3] = `red`: H24[3] = `green`;

				H24[0] = `${(((USD - USD24[0][1])/USD)*100).toFixed(2)}%`

				H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;
			}

			Fiat[0].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {width: `${20}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/flags/${Flag[0]}.svg`, style: {[`max-width`]: `${18}px`}}], 
							[`div`, {style: {color: `#000`, width: `${100}%`}}, 
								[
									[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `${Flag[1]}`], 
									[`span`, {style: {color: `#515151`, [`font-size`]: `${12}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Flag[2]}`]]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.spot && Web.spot[Flag[1].toLowerCase()])? `${(Web.spot[Flag[1].toLowerCase()]).toFixed(2)}`: `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `${Flag[1]}`]]], 
					[`div`, {style: {width: `${22.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.USD[(Flag[1]).toLowerCase()])? `${(Web.USD[(Flag[1]).toLowerCase()]).toFixed(4)}`: `-`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `24H`]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}},  (Web.spot && Web.spot[Flag[1].toLowerCase()])? `${(Web.spot[Flag[1].toLowerCase()]*Web.USD[Flag[1].toLowerCase()]).toFixed(2)}`: `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]]]]);
		});

		let Coin = [
			[],
			[
				[`btc`, `BTC`, `bitcoin`],
				[`usdt`, `USDT`, `Tether`]], []];

		Coin[1].forEach(Flag => {

			if (Web.spot[Flag[1].toLowerCase()]) Coin[2].push(Flag)
		});

		Coin[2].forEach(Flag => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			if (Web.USD24[Flag[0]] && Web.USD24[Flag[0]].length > 0) {

				let USD24 = Web.USD24[Flag[0]], USD = Web.USD[Flag[0]];

				(USD24[0][1] > USD)? H24[1] = `red`: H24[1] = `green`;

				(USD24[0][1] > USD)? H24[3] = `red`: H24[3] = `green`;

				H24[0] = `${(((USD - USD24[0][1])/USD)*100).toFixed(2)}%`

				H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;
			}

			Coin[0].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {width: `${20}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/tokens/${Flag[0]}.svg`, style: {[`max-width`]: `${18}px`}}], 
							[`div`, {style: {color: `#000`, width: `${100}%`}}, 
								[
									[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `${Flag[1]}`], 
									[`span`, {style: {color: `#515151`, [`font-size`]: `${12}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Flag[2]}`]]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.spot && Web.spot[Flag[1].toLowerCase()])? `${(Web.spot[Flag[1].toLowerCase()]).toFixed(6)}`: `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `${Flag[1]}`]]], 
					[`div`, {style: {width: `${22.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.USD[(Flag[1]).toLowerCase()])? `${(Web.USD[(Flag[1]).toLowerCase()]).toLocaleString()}`: `-`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `24H`]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}},  (Web.spot && Web.spot[Flag[1].toLowerCase()])? `${(Web.spot[Flag[1].toLowerCase()]*Web.USD[Flag[1].toLowerCase()]).toFixed(2)}`: `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]]]]);
		});

		let Stock = [
			[],
			[
				[`amd`, `AMD`, `advanced microdevices inc`],
				[`googl`, `GOOGL`, `alphabet inc`],
				[`amzn`, `AMZN`, `amazon`],
				[`aapl`, `AAPL`, `apple inc`],
				[`bmbl`, `BMBL`, `bumble inc`],
				[`gme`, `GME`, `gamestop corp`],
				[`intc`, `INTC`, `intel corp`],
				[`meta`, `META`, `meta platforms`],
				[`msft`, `MSFT`, `microsoft corp`],
				[`nflx`, `NFLX`, `netflix inc`],
				[`nvda`, `NVDA`, `nvidia corp`],
				[`para`, `PARA`, `paramount global`],
				[`pypl`, `PYPL`, `paypal holdings inc`],
				[`hood`, `HOOD`, `robinhood markets inc`],
				[`spot`, `SPOT`, `spotify technology SA`],
				[`tsla`, `TSLA`, `tesla inc`],
				[`upwk`, `UPWK`, `upwork inc`],
				[`wbd`, `WBD`, `warner bros discovery inc`]], []];

		Stock[1].forEach(Flag => {

			if (Web.spot[Flag[1].toLowerCase()]) Stock[2].push(Flag)
		});

		Stock[2].forEach(Flag => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			if (Web.USD24[Flag[1].toLowerCase()]) {

				let USD24 = Web.USD24[Flag[1].toLowerCase()], USD = Web.USD[Flag[1].toLowerCase()];

				if (USD24.length === 0) USD24[0] = [0, 0];

				(USD24[0][1] > USD)? H24[1] = `red`: H24[1] = `green`;

				(USD24[0][1] > USD)? H24[3] = `red`: H24[3] = `green`;

				H24[0] = `${(((USD - USD24[0][1])/USD)*100).toFixed(2)}%`

				H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;
			}

			Stock[0].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {width: `${20}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/stock/${Flag[0]}.svg`, style: {[`max-width`]: `${18}px`}}], 
							[`div`, {style: {color: `#000`, width: `${100}%`}}, 
								[
									[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `${Flag[1]}`], 
									[`span`, {style: {color: `#515151`, [`font-size`]: `${12}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Flag[2]}`]]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.spot && Web.spot[Flag[1].toLowerCase()])? `${(Web.spot[Flag[1].toLowerCase()]).toFixed(6)}`: `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `${Flag[1]}`]]], 
					[`div`, {style: {width: `${22.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.USD[(Flag[1]).toLowerCase()])? `${(Web.USD[(Flag[1]).toLowerCase()]).toLocaleString()}`: `-`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `24H`]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}},  (Web.spot && Web.spot[Flag[1].toLowerCase()])? `${(Web.spot[Flag[1].toLowerCase()]*Web.USD[Flag[1].toLowerCase()]).toFixed(2)}`: `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]]]]);
		});

		return [
			`main`, {id: `wallet`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[
					[`div`, {style: {background: `#fff`, [`border-bottom`]: `${1}px solid #d9d9d9`, magin: `auto`, [`mx-width`]: `${1280}px`, padding: `${12}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `v202312301635`, style: {height: `${32}px`, width: `${32}px`}}], 
								[`div`, {class: `_eYG`}, 
									[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${15}px`, [`font-weight`]: 300, [`letter-spacing`]: 0}}, `${parseFloat(Web.now).toFixed(2)} USD`]]], 
								[`div`, {class: `_gZz`, style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
									[
										[`a`, {href: `/autotrade/liquidate`, style: {background: `blue`, color: `#fff`, margin: `0 0 0 ${8}px`, padding: `${4}px ${8}px`}}, `Liquidate`],
										[`a`, {href: `/autotrade/wallet`, style: {background: `blue`, color: `#fff`, margin: `0 0 0 ${8}px`, padding: `${4}px ${8}px`}}, `Deposit`]]]]]]],
					[`div`, {style: {[`max-width`]: `${1280}px`, width: `${100}%`, margin: `${64}px auto`, [`justify-content`]: `center`}}, 
						[ 
							[`div`, {style: {padding: `${0}px ${24}px ${12}px`}}, 
								[
									[`h1`, {style: {color: `#000`, [`font-size`]: `${16}px`, [`font-weight`]: 600, [`letter-spacing`]: `${-.5}px`, margin: `${12}px ${0} ${0}`, }}, `Portfolio Overview`],
									[`div`, {style: {[`margin-top`]: `${12}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Currencies Allocation`]]]]],
									[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, Param[0]],
									[`div`, {}, Fiat[0]],
									[`div`, {style: {display: (Coin[0].length > 0)? `flex`: `none`, [`margin-top`]: `${12}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Digital Assets Allocation`]]]]],			
									[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, (Coin[0].length > 0)? Param[0]: []], 
									[`div`, {}, (Coin[0].length > 0)? Coin[0]: []], 
									[`div`, {style: {display: (Stock[0].length > 0)? `flex`: `none`}}, 
										[
											[`div`, {style: {[`margin-top`]: `${12}px`}}, 
												[[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
													[
														[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Equities Allocation`]]]]],
											[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, Param[0]],
											[`div`, {}, Stock[0]]]]]]]], this.us()]];
	},

	c2s: function () {

		let Vaults = [Tools.typen(Clients.inVaults), []];

		Vaults[0].forEach(Vault => {

			let VaultSlots = [];

			Vault.vaultSlots.forEach(Slot => {

				if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

					VaultSlots.push([`div`, {style: {padding: `${12}px 0`}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`]]]]]);
				}
			});

			Vaults[1].push([`div`, {}, 
				[[`div`, {class: `_gxM _geQ`}, 
					[[`svg`, {style: {[`margin-right`]:`${8}px`,[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
						[[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
						[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
							[`text-transform`]: `uppercase`, 
							[`letter-spacing`]: `normal`,
							[`font-size`]: `${11}px`}}, Vault.mail[0]]]], 
					[`span`, {}, Vault.mail]]], 
				[`div`, {class: `_gxM _geQ`}, 
					[[`span`, {style: {color: `#a3a3a3`}}, `Available`], 
					[`span`, {style: {[`font-family`]: `geometria`,[`font-weight`]: 600,[`margin-left`]: `${8}px`}}, `${(Vault.vault*154.94).toLocaleString()} KES`]]],
				[`section`, {id: `vaultSlots`}, VaultSlots],
				[`div`, {class: `_gM_a _agM _guZ`, style: {
					[`margin-top`]: `${16}px`, 
					width: `${100}%`, [`block-size`]: `${40}px`, background: `#ca0000`, border: `${1}px solid #ca0000`}}, 
					[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `outVaultSlot`, md: Vault.md}, `Withdraw USDT`]]]]]);
		});

		return [`main`, {id: `holds`, class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: `_-Xg _gxM _geQ`}, 
								[[`a`, {class: `-_tX v202304191915`, style: {[`min-width`]: `${30}px`, height: `${30}px`}, href: `/`}, ``]]],
							[`div`, {class: `_gZz`, style: {[`align-items`]: `center`}}, 
								[[`div`, {class: `_gxM`}, 
									[[`a`, {class: `v202301071417`, style: {margin: `${0} ${10}px`}, href: `/p2p/recent`}]]]]]]]]], 
				[`main`, {id: `p2p`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${65}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`a`, {class: `-_tX v202203261943`, href: `/p2p/`}], 
									[`a`, {class: `-_tX v202203262148`, href: `/p2p/c2s`, style: {[`margin-left`]: `${24}px`}}], 
									[`div`, {class: `_gZz`}, [[`a`, {class: `-_tX v202311102200`, href: `javascript:;`}]]]]],
							[`span`, {id: `rateSwap`}, `1 usdt = 154.94 kes`],
							[`section`, {id: `vaults`}, Vaults[1]]]]]]]];
	},

	careers: function () {

		let Opening = [
			[
				`legal`, [`counsel`], [[`counsel`, `senior counsel, regulatory`, `europe`]]],
			[
				`marketing`, 
				[`product marketing`], 
				[
					[`product marketing`, `senior product marketing manager`, `australia`], 
					[`product marketing`, `senior product marketing manager`, `germany`], 
					[`product marketing`, `senior product marketing manager`, `kenya`], 
					[`product marketing`, `senior product marketing manager`, `new zealand`], 
					[`product marketing`, `senior product marketing manager`, `norway`], 
					[`product marketing`, `senior product marketing manager`, `sweden`], 
					[`product marketing`, `senior product marketing manager`, `united kingdom`], 
					[`product marketing`, `senior product marketing manager`, `united states`]]]];

		let open = 0;

		let Openings = [[]];

		Opening.forEach(Pool => {

			open += Pool[2].length;

			Pool[1].forEach(tag => {

				let Sub = [];

				Pool[2].forEach(Open => {

					if (Open[0] === tag) {

						Sub.push([`a`, {href: `javascript:;`}, 
							[[`div`, {style: {padding: `${24}px ${12}px`, [`text-transform`]: `capitalize`}}, 
								[
									[`h3`, {style: {color: `#2590ff`, [`font-size`]: `${14}px`, [`font-weight`]: 600, [`ltter-spacing`]: `${.5}px`}}, `${Open[1]}`], 
									[`p`, {style: {color: `#545b6d`, [`font-size`]: `${12}px`, [`font-weight`]: 300}}, `${tag} • ${Open[2]} • full time`]]]]])
					}
				});

				Openings[0].push([`h2`, {style: {margin: `${36}px ${12}px ${16}px`, [`text-transform`]: `capitalize`}}, 
					[
						[`span`, {style: {color: `#7d8699`, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `${Pool[0]}`], 
						[`span`, {style: {display: `block`, color: `#000`, [`font-size`]: `${16}px`, [`font-weight`]: 600, [`ltter-spacing`]: `${.5}px`}}, `${tag}`]]]);

				Openings[0].push([`div`, {}, Sub]);
			});
		});

		return [
			`main`, {id: `careers`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[
					[`div`, {style: {background: `#fff`, [`border-bottom`]: `${1}px solid #d9d9d9`, padding: `${12}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `-_tX v202304191915`}], 
								[`h2`, {style: {
                                        [`border-left`]: `${1}px solid #91919159`,
                                        [`font-weight`]: 600, 
                                        margin: `${0} ${14}px`,
                                        padding: `${0} ${14}px`,
                                        [`font-size`]: `${14}px`,
                                        color: `#2590ff`,
                                        overflow: `hidden`,
                                        [`white-space`]: `nowrap`}}, `Careers & Job Openings`]]]]],
					[`div`, {style: {[`max-width`]: `${720}px`, width: `${100}%`, margin: `${36}px auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {style: {margin: `${56}px ${24}px 0`}}, 
								[
									[`p`, {style: {color: `#464646`, [`font-size`]: `${14}px`, [`line-height`]: `${1.75}em`}}, `Joltnaut opportunities are exclusively available on this page.Apply for roles directly on our official careers page. Beware of unauthorized third-party platforms – protect your data, apply securely with us.`], 
									[`h1`, {style: {color: `#000`, [`font-size`]: `${19}px`, [`font-weight`]: 600, [`letter-spacing`]: `${-.5}px`, margin: `${48}px ${0} ${0}`, }}, `Open Positions (${open})`]]], 
							[`div`, {style: {padding: `0 ${12}px`}}, [[`div`, {style: {margin: `${16}px 0`}}, Openings[0]]]]]]]]
	},

	cellSlots: function () {

		return [
			`section`, {}, 
				[ 
					[`main`, {id: `cellSlots`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${65}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[[`h2`, {}, `set my payment method`], [`div`, {class: `_gZz`}, [[`a`, {class: `-_tX v202311051955`, href: `/account`, style: {height:`${13}px`, width:`${13}px`}}]]]]],
								[`span`, {id: `tip`}, `*The payment method will be shown to the buyer during the transaction to accept fiat transfers. 
									Please ensure that the info is correct, real, and matches account ownership.`],
								[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
									[[`span`, {id: `OptColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`]]],
								[`div`, {class: `_aXZ`, style: {[`margin-top`]: `${24}px`}}, [[`input`, {id: `cellMug`, placeholder: `Registered Account Name`, type: `text`}]]],
								[`div`, {class: `_aXZ`, style: {[`margin-top`]: `${12}px`}}, [[`input`, {id: `cellNumerals`, placeholder: `M-PESA Mobile Number eg. 254...`, type: `text`}]]],
								[`div`, {class: `_gM_a _agM _guZ`, style: {[`margin-top`]: `${16}px`, width: `${100}%`, [`block-size`]: `${40}px`, background: `#1185fe`}}, 
									[[`a`, {id: `pollCellSlots`, class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`}, `save`]]]]]]]]]
	},

	clientSlot: function () {

		let Slot = {
			action: [`signin`, `signin`],
			slots: [[`email`, `email`, `email`], [`password`, `lock`, `password`]]
		}, TC = [[], []];

		let Slots = [];

		Slot.slots.forEach(Slot => {

			let Tip = [[], [], []];

			if (Slot[0] === `password`) {

				Tip[1] = [`div`, {class: `_gxM _geQ`, style: {margin: `${12}px 0 -${8}px`}}, 
					[[`div`, {class: `_gZz`}, 
						[[`a`, {href: `javascript:;`, style: {
							[`text-decoration`]: `underline`, color: `#666`, [`font-size`]: `${10}px`, 
							[`margin-left`]: `${12}px`}}, `FORGOT PASSWORD?`]]]]]
			}

			Slots.push([`div`, {class: `_sZ2`}, 
				[
					[`label`, {style: {[`font-weight`]: 600, margin: `0 ${0}px ${12}px`, color: `#5c5e62`, [`line-height`]: 1.414, [`text-transform`]: `capitalize`}}, 
						[[`span`, {}, Slot[0]]]], 
					[`div`, {class: `_aXZ`}, [[`input`, {id: Slot[1], type: Slot[2]}]]], Tip[0], Tip[1]]]);

		});

		return [`section`, {}, 
			[ 
				[`main`, {id: `clientSlot`, class: `_tY0`, style: {[`font-family`]: `litera`, [`font-size`]: `${12}px`, height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `_geQ`, style: {[`max-width`]: `${362}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _aXZ`, style: {[`margin-bottom`]: `-${10}px`}}, 
								[[`a`, {class: `-_tX v202304191915`, href: `/`, style: {height: `${36}px`, width: `${36}px`}}]]],
									[`h2`, {}, `Autotrade Signin`], 
									[`div`, {class: `_aXZ`, style: {margin: `${16}px 0 ${40}px`}}, 
										[
											[`div`, {}, Slots],
											[`div`, {class: `_gM_a _agM _guZ`, style: {width: `${100}%`, [`block-size`]: `${40}px`, background: `#1185fe`}}, 
												[[`a`, {id: `pollSlot`, class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, style: {[`text-transform`]: `capitalize`}}, `Sign in`]]],
											TC[0], TC[1]]]]]]]]]
	},

	clientTX: function (Arg) {

		let TX = [[], []];

		Arg[0].sort((A, B) => {return B.ts - A.ts}).forEach(Tx => {

			TX[2] = [];

			if (Tx.complete === false || Tx.complete === true) {

				TX[2] = 
					[`div`, {class: `_gZz`}, 
						[[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600, }}, (Tx.complete === true)? `Success`: `Processing`]]];
			}

			let Params = [
				{
					[`created time`]: Tools.logs(Tx.ts),
					[`fiat amount`]: `${(Tx.float*Tx.local).toFixed(2)} KES`,
					price: `${(Tx.local).toFixed(2)} KES`,
					[`coin amount`]: `${Tx.float} USDT`}, []];

			for (param in Params[0]) {

				Params[1].push(
					[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${0}px`}}, 
						[
							[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`text-transform`]: `uppercase`}}, param],
							[`div`, {class: `_gZz`}, [[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${10}px`}}, `${Params[0][param]}`]]]]]);
			}

			TX[0].push(
				[`div`, {style: {[`border-bottom`]: `${1}px solid #e3e3e3`, margin: `${1}px ${0} ${0}`, padding: `${12}px ${0}`}}, 
					[
						[`div`, {class: `_gxM _geQ`, style: {[`font-weight`]: 600, [`margin-bottom`]: `${6}px`}}, 
							[
								[`span`, {style: {color: (Tx.type === `outVault`)? `#ca0000`: `#00ca29`}}, `${(Tx.type === `outVault`)? `Sell`: `Buy`} `],
								[`span`, {style: {[`margin-left`]: `${6}px`}}, ` USDT`], 
								TX[2]]], 
						[`div`, {}, Params[1]]]]);
		});

		Arg[1].sort((A, B) => {return B.ts - A.ts}).forEach(Tx => {

			let Params = [
				{
					date: Tools.logs(Tx.ts),
					fee: Tx.gas.toFixed(2),
					[`coin amount`]: `${Tx.float.toFixed(2)} USDT`}, []];

			for (param in Params[0]) {

				Params[1].push(
					[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${0}px`}}, 
						[
							[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`text-transform`]: `uppercase`}}, param],
							[`div`, {class: `_gZz`}, [[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${10}px`}}, `${Params[0][param]}`]]]]]);
			}

			TX[1].push(
				[`div`, {style: {[`border-bottom`]: `${1}px solid #e3e3e3`, margin: `${1}px ${0} ${0}`, padding: `${12}px ${0}`}}, 
					[
						[`div`, {class: `_gxM`, style: {[`font-weight`]: 600, [`margin-bottom`]: `${6}px`}}, 
							[
								[`span`, {style: {color: (Tx.type === `out`)? `#ca0000`: `#00ca29`}}, `${(Tx.type === `out`)? `Send`: `Receive`} `],
								[`span`, {style: {[`margin-left`]: `${6}px`}}, ` USDT`]]], 
						[`div`, {}, Params[1]]]])
		});

		return [`main`, {id: `holds`, class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: `_-Xg _gxM _geQ`}, 
								[
									[`a`, {class: `-_tX v202304191915`, style: {[`min-width`]: `${32}px`, height: `${32}px`}, href: `/`}, ``], 
									[`span`, {id: `vault`, style: {
										[`font-family`]: `naut`,
										[`font-size`]: `${21}px`,
										[`font-weight`]: 600,
                                        margin: `${0} ${12}px`}}, `joltnaut`]]],
							[`div`, {class: `_gZz`, style: {[`align-items`]: `center`}}, 
								[[`div`, {class: `_gxM`}, 
									[[`a`, {class: `v202205042043`, style: {margin: `${0} ${10}px`}, href: `/my/wallet/pnl`}]]]]]]]]], 
					[`main`, {id: `clientTX`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `_geQ`, style: {[`max-width`]: `${600}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`div`, {class: `_aXZ`, style: {margin: `${16}px 0 ${40}px`}}, 
									[
										[`div`, {id: `plane`, style: {[`line-height`]: 1.75, margin: `${24}px 0 0`}}],
										/*[`section`, {class: `_gxM _geQ`, style: {[`line-height`]: 1.5, margin: `${12}px 0 0`}},
											[
												[`span`, {class: `v202205081410`}],
												[`div`, {class: `_eYG`}, 
													[
														[`span`, {}, `P2P Value`],
														[`span`, {style: {[`font-family`]: `geometria`, [`font-weight`]: 600}}, `${Clients.vault} USDT`]]],
												[`div`, {class: `_gZz`},
													[[`div`, {class: `_gM_a _agM _guZ`, style: {
														width: `${100}%`, 
														[`block-size`]: `${40}px`, background: `#000`, border: `${1}px solid #000`}}, 
														[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: ``, style: {
															[`white-space`]: `nowrap`
														}}, (parseFloat(Clients.vault) > 0)? `Manage P2P`: `P2P Merchant`]]]]]]],*/,
										[`div`, {class: `_gxM`, style: {[`font-size`]: `${12}px`, [`margin-top`]: `${24}px`}}, 
											[
												[`div`, {class: `_geQ`}, 
													[
														[`a`, {class: `v202401121218`, style: {}, href: `/mode/deposit`}],
														[`span`, {style: {color: `#666`, [`margin-top`]: `${0}px`}}, `Deposit`]]],
												[`div`, {class: `_geQ`}, 
													[
														[`a`, {class: `v202410121221`, style: {}, href: `/mode/withdraw`}],
														[`span`, {style: {color: `#666`, [`margin-top`]: `${0}px`}}, `Withdraw`]]],
												[`div`, {class: `_geQ`}, 
													[
														[`a`, {class: `v202401121208`, style: {}, href: `javascript:;`}],
														[`span`, {style: {color: `#666`, [`margin-top`]: `${0}px`}}, `Pay`]]],
												[`div`, {class: `_geQ`}, 
													[
														[`a`, {class: `v202401121214`, style: {}, href: `/my/peers`}],
														[`span`, {style: {color: `#666`, [`margin-top`]: `${0}px`}}, `Send`]]]]],
										[`section`, {id: `vautltx`, style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {
													color: `#a3a3a3`, 
													[`font-size`]: `${10}px`}}, (TX[0].length > 0)? `RECENT DEPOSITS & WITHDRAWALS`: ``],
												[`div`,  {}, TX[0]]]],
										[`section`, {id: `vautltx`, style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {
													color: `#a3a3a3`, 
													[`font-size`]: `${10}px`}}, (TX[1].length > 0)? `RECENT WALLET TRANSCATIONS`: ``],
												[`div`,  {}, TX[1]]]]]]]]]]]];
	},

	createVow: function () {

		return [
			`main`, {id: ``, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[[`div`, {style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `${36}px auto ${0}`, [`justify-content`]: `center`}}, 
						[
							[`div`, {style: {[`boder-bottom`]: `${1}px solid #d9d9d9`, padding: `${48}px ${24}px ${12}px`}}, 
								[
									[`h2`, {style: {color: `#000`, [`font-size`]: `${14}px`, [`font-weight`]: 600, margin: `${12}px ${0} ${0}`, }}, `Enter ${Clients.selectCoin.toUpperCase()} Value`],
									[`div`, {style: {[`margin-top`]: `${24}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${24}px`, height: `${40}px`, padding: `${12}px ${16}px`}}, 
											[
												[`img`, {src: `/ssl/given/svg/tokens/${Clients.selectCoin}.svg`, style: {[`max-width`]: `${18}px`,}}],
												[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
													[[`span`, {style: {color: `#000`, [`font-weight`]: 600, [`font-size`]: `${18}px`}}, `${Clients.selectCoin}`]]], 
														[`div`, {class: `_gZz`}, 
															[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																[ 
																	[`div`, {class: `_gxM _gZz _geQ`}, 
																		[[`input`, {id: `vowSlot`, placeholder: `0.0`, style: {background: `transparent`, [`border-style`]: `none`, color: `#000`, [`font-family`]: `walsh`, [`font-size`]: `${24}px`, [`font-weight`]: 400, [`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, [`text-align`]: `right`, width: `${100}%`}}]]]]]]]]]]],
									[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
										[ 
											[`div`, {class: `_eYG`}, []],
												[`div`, {class: `_gZz`, style: {flex: 0}}, 
									[[`a`, {class: `_gxM _geQ`, href: `javascript:;`, id: `createVow`, style: {background: `blue`, color: `#fff`, display: `flex`, [`font-size`]: `${12}px`, [`font-weight`]: 600, padding: `${4}px ${12}px`, [`white-space`]: `nowrap`}}, 
										[
											[`span`, {class: `v202204282015`, style: {height: `${20}px`, [`margin-right`]: `${8}px`, width: `${20}px`}}], 
											[`span`, {}, `${Clients.selectCoin.toUpperCase()} Deposit Details`]]]]]]]]]]]]];
	},

	earn: function (Web) {

		let paramify = (PARA) => {

			PARA[0].forEach(Feat => {

				PARA[1].push([`div`, {style: {width: `${Feat[1]}%`}}, 
					[[`span`, {style: {color: `#b3b3b3`, [`font-size`]: `${10}px`, [`font-weight`]: 300, overflow: `hidden`, [`text-align`]: (Feat[2])? `right`: `left`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, Feat[0]]]])

			});

			return PARA[1];
		};

		let Equities = [
		[[`asset`, 20], [`open cost`, 20, true], [`open volume`, 22.5, true], [`price`, 20, true], [`p&l`, 17.5, true]],
		[], []];

		let Fiat = [
		[[`pair`, 20], [`open cost`, 20, true], [`open volume`, 22.5, true], [`price`, 20, true], [`p&l`, 17.5, true]],
		[], []];

		let Coin = [
		[[`pair`, 20], [`open cost`, 20, true], [`open volume`, 22.5, true], [`price`, 20, true], [`p&l`, 17.5, true]],
		[], []];

		Web.states.forEach(Position => {

			Constants.equities.forEach(Flag => {

				if (Position.pair[0] === Flag[0]) {Position.full = Flag[2]; Equities[1].push(Position);}
			});
		});

		Web.states.forEach(Position => {

			Constants.coins.forEach(Flag => {

				if (Position.pair[0] === Flag[0]) Coin[1].push(Position);
			});
		});

		Web.states.forEach(Position => {

			Constants.fiat.forEach(Flag => {

				if (Position.pair[0] === Flag[1].toLowerCase()) {Position.flag = Flag[0]; Fiat[1].push(Position);}
			});
		});

		Equities[1].forEach(Flag => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			(Flag.open[0] > Flag.cost)? H24[1] = `red`: H24[1] = `green`;

			(Flag.open[0] > Flag.cost)? H24[3] = `red`: H24[3] = `green`;

			H24[0] = `${(((Flag.cost - Flag.open[0])/Flag.cost)*100).toFixed(2)}%`

			//H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;

			Equities[2].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: { width: `${20}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/stock/${Flag.pair[0]}.svg`, style: {[`margin-right`]: `${8}px`, [`width`]: `${22}px`, transform: `translateX(${0}px)`}}],
							//[`img`, {src: `/ssl/given/svg/flags/us.svg`, style: {[`width`]: `${22}px`, transform: `translateX(${-7.6667}px)`}}],
							[`div`, {style: {color: `#000`, width: `${70}%`}},
								[
									[`span`, {style: {[`font-size`]: `${12}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, `${Flag.pair[0]}`], 
									[`span`, {style: {color: `#696969`, [`font-size`]: `${12}px`, [`line-height`]: `${14}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `${Flag.full}`]]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${(Flag.open[0]).toLocaleString()}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`, [`text-transform`]: `uppercase`}}, `${Flag.pair[1]}`]]], 
					[`div`, {style: {width: `${22.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `-`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`, [`text-align`]: `right`, [`text-transform`]: `uppercase`}}, `${Flag.pair[0]} shares`]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${(Flag.cost).toLocaleString()}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}},  ``], 
							[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]]]]]]);
		});

		Coin[1].forEach(Flag => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			(Flag.open[0] > Flag.cost)? H24[1] = `red`: H24[1] = `green`;

			(Flag.open[0] > Flag.cost)? H24[3] = `red`: H24[3] = `green`;

			H24[0] = `${(((Flag.cost - Flag.open[0])/Flag.cost)*100).toFixed(2)}%`

			//H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;

			Coin[2].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: { width: `${20}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/tokens/${Flag.pair[0]}.svg`, style: {[`width`]: `${22}px`, transform: `translateX(${0}px)`}}],
							[`img`, {src: `/ssl/given/svg/flags/us.svg`, style: {[`width`]: `${22}px`, transform: `translateX(${-7.6667}px)`}}],
							[`div`, {class: ``, style: {color: `#000`, width: `${70}%`}},
								[
									[`span`, {style: {[`font-size`]: `${12}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, `${Flag.pair[0]}-${Flag.pair[1]}`], 
									[`span`, {style: {color: `#696969`, [`font-size`]: `${12}px`, [`line-height`]: `${14}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `Spot`]]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${(Flag.open[0]).toLocaleString()}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`, [`text-transform`]: `uppercase`}}, `${Flag.pair[1]}`]]], 
					[`div`, {style: {width: `${22.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `-`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`, [`text-transform`]: `uppercase`}}, `${Flag.pair[0]}`]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${(Flag.cost).toLocaleString()}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}},  ``], 
							[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]]]]]]);
		});

		Fiat[1].forEach(Flag => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			(Flag.open[0] > Flag.cost)? H24[1] = `red`: H24[1] = `green`;

			(Flag.open[0] > Flag.cost)? H24[3] = `red`: H24[3] = `green`;

			H24[0] = `${(((Flag.cost - Flag.open[0])/Flag.cost)*100).toFixed(2)}%`

			//H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;

			Fiat[2].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {width: `${20}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/flags/${Flag.flag}.svg`, style: {[`max-width`]: `${22}px`, transform: `translateX(${0}px)`}}],
							[`img`, {src: `/ssl/given/svg/flags/us.svg`, style: {[`max-width`]: `${22}px`, transform: `translateX(${-7.6667}px)`}}], 
							[`div`, {style: {color: `#000`, width: `${65}%`}},
								[
									[`span`, {style: {[`font-size`]: `${12}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, `${Flag.pair[0]}-${Flag.pair[1]}`], 
									[`span`, {style: {color: `#696969`, [`font-size`]: `${12}px`, [`line-height`]: `${14}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `Spot`]]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${(Flag.open[0]).toFixed(6)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`, [`text-transform`]: `uppercase`}}, `${Flag.pair[1]}`]]], 
					[`div`, {style: {width: `${22.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `-`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`, [`text-transform`]: `uppercase`}}, `${Flag.pair[0]}`]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${(Flag.cost).toFixed(6)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}},  ``], 
							[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]]]]]]);
		});

		return [
			`main`, {id: `terminal`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[
					[`div`, {style: {background: `#fff`, [`border-bottom`]: `${1}px solid #d9d9d9`, magin: `auto`, [`mx-width`]: `${1280}px`, padding: `${12}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `v202312301635`, style: {height: `${32}px`, width: `${32}px`}}], 
								[`div`, {class: `_eYG`}, []], 
								[`div`, {class: `_gZz`, style: {[`font-size`]: `${12}px`, [`font-weight`]: 300}}, 
									[[`a`, {href: `/earn/wallet`, style: {background: `blue`, color: `#fff`, margin: `0 0 0 ${8}px`, padding: `${4}px ${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `MANAGE LIQUIDITY`]]]]]]],
					[`div`, {style: {[`max-width`]: `${1280}px`, width: `${100}%`, margin: `${64}px auto`, [`justify-content`]: `center`}}, 
						[ 
							[`div`, {style: {[`boder-bottom`]: `${1}px solid #d9d9d9`, padding: `${0}px ${24}px ${12}px`}}, 
								[
									[`h1`, {style: {color: `#000`, [`font-size`]: `${16}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, margin: `${12}px ${0} ${0}`, [`text-transform`]: `uppercase`}}, `positions overview`],
									[`div`, {style: {display: (Equities[0])? `flex`: `none`,[`margin-top`]: `${12}px`}}, 
										[
											[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
												[
													[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Equities Allocation Positions`]]],
											[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, paramify([Equities[0], []])],
											[`div`, {}, Equities[2]]]],
									[`div`, {style: {display: (Fiat[1])? `flex`: `none`,[`margin-top`]: `${12}px`}}, 
										[
											[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
												[
													[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Currencies Allocation Positions`]]],
											[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, paramify([Fiat[0], []])],
											[`div`, {}, Fiat[2]]]],
									[`div`, {style: {display: (Coin[1])? `flex`: `none`,[`margin-top`]: `${12}px`}}, 
										[
											[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
												[
													[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Crypto Allocation Positions`]]],
											[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, paramify([Coin[0], []])],
											[`div`, {}, Coin[2]]]]]]]], 
					[`div`, {style: {background: `#fff`, [`border-top`]: `${1}px solid #d9d9d9`, bottom: 0, magin: `auto`, [`mx-width`]: `${1280}px`, padding: `${6}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, `joltnaut ®`],
								[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `2024`], 
								[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#535353`, [`font-family`]: `geometria`, [`font-size`]: `${10}px`, [`font-weight`]: 300}}, `v0.24.3`]]]]]]]]];
	},

	fiat: function (Web) {

		let Pay = [
		[[`airtel`, `red`, `Airtel Money`], 
		[`mpesa`, `green`, `M-PESA Kenya (Safaricom)`], 
		[`scb`, `blue`, `Standard Chartered Bank`]], []];

		Pay[0].forEach(Mode => {

			Pay[1].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${10}px 0`}}, 
				[
					[`svg`, {style: {[`min-height`]: `${24}px`, width: `${24}px`}, viewBox: `0 0 21 21`}, 
						[
							[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: Mode[1]}],
							[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {[`text-transform`]: `uppercase`, [`letter-spacing`]: `normal`, [`font-size`]: `${11}px`}}, Mode[2][0]]]], 
					[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 300, margin: `0 0 0 ${8}px`}}, Mode[2]], 
					[`div`, {class: `_gZz`, style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
						[[`a`, {for: Mode[0], id: `fiat`, href: `javascript:;`, style: {background: `#0000ff30`, color: `blue`, [`font-size`]: `${12}px`, [`font-weight`]: 300, padding: `${4}px ${8}px`, [`white-space`]: `nowrap`}}, `Buy at Zero Fee`]]]]]);
		});

		return [
			`main`, {id: `fiats`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[
					[`div`, {style: {background: `#fff`, [`border-bottom`]: `${1}px solid #d9d9d9`, display: `none`, [`mx-width`]: `${1280}px`, padding: `${12}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `v202312301635`, style: {height: `${32}px`, width: `${32}px`}}], 
								[`div`, {class: `_eYG`}, []], 
								[`div`, {class: `_gZz`, style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
									[
										[`a`, {href: `/u/wallet`, style: {background: `#0000ff30`, color: `blue`, [`font-size`]: `${12}px`, [`font-weight`]: 600, padding: `${4}px ${8}px`, [`white-space`]: `nowrap`}}, `Deposit Crypto`]]]]]]],
					[`div`, {style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `${64}px auto`, [`justify-content`]: `center`}}, 
						[ 
							[`div`, {style: {padding: `${0}px ${24}px ${12}px`}}, 
								[
									[`h1`, {style: {color: `#000`, [`font-size`]: `${16}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, margin: `${12}px ${0} ${0}`, [`text-transform`]: `capitalize`}}, `buy ${Web.symbol[2]}`],
									[`div`, {style: {[`margin-top`]: `${24}px`}}, 
										[
											[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
												[
													[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Pay with`]]],
											[`div`, {style: {[`margin-top`]: `${12}px`}}, Pay[1]]]]]]]]]];
	},

	fiatSlot: function (Arg) {

		return [
			`main`, {id: ``, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[[`div`, {style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `${36}px auto ${0}`, [`justify-content`]: `center`}}, 
						[
							[`div`, {style: {padding: `${48}px ${24}px ${12}px`}}, 
								[
									[`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, margin: `${12}px 0`}}, 
										[[`div`, {class: `_geQ _gxM`, style: {}}, 
											[
												[`img`, {src: `/ssl/given/svg/tokens/${Arg[1].toLowerCase()}.svg`, style: {[`width`]: `${22}px`, transform: `translateX(${0}px)`}}],
												[`img`, {src: `/ssl/given/svg/flags/us.svg`, style: {[`width`]: `${22}px`, transform: `translateX(${-7.6667}px)`}}],
												[`div`, {class: ``, style: {color: `#000`}},
													[
														[`span`, {style: {[`font-size`]: `${12}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, `${Arg[1]}-USD`], 
														[`span`, {style: {color: `#696969`, [`font-size`]: `${12}px`, [`line-height`]: `${14}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `Spot`]]],
												[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#000`, [`font-family`]: `geometria`, [`font-weight`]: 600, [`font-size`]: `${12}px`}}, `${Arg[2]} USD`]]]]]]], 
									[`div`, {class: `_geQ _gxM`}, 
										[
											[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `${12}px ${0} ${0}`, }}, `Buy with`],
											[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 300, margin: `${12}px ${0} ${0} ${16}px`, [`text-decoration`]: `underline`}}, `M-PESA SAFARICOM`]]],
									[`div`, {style: {[`margin-top`]: `${18}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${100}px`, height: `${36}px`, padding: `${12}px ${16}px`}}, 
											[
												[`img`, {src: `/ssl/given/svg/flags/ke.svg`, style: {[`max-width`]: `${18}px`}}],
												[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
													[[`span`, {style: {color: `#515151`, [`font-family`]: `geometria`, [`font-weight`]: 300, [`font-size`]: `${13}px`}}, `+254`]]], 
														[`div`, {class: `_gZz`}, 
															[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																[ 
																	[`div`, {class: `_gxM _gZz _geQ`}, 
																		[[`input`, {id: `callSlot`, placeholder: `712345678`, style: {background: `transparent`, [`border-style`]: `none`, color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${13}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, [`text-align`]: `right`, width: `${100}%`}}]]]]]]]]]]],
									[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `${24}px ${0} ${0}`, }}, `Amount to Spend`],
									[`div`, {style: {[`margin-top`]: `${18}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${100}px`, height: `${36}px`, padding: `${12}px ${16}px`}}, 
											[
												[`div`, {style: {[`line-height`]: `${32}px`, width: `${75}%`}}, 
													[ 
														[`div`, {class: `_gxM _gZz _geQ`}, 
															[[`input`, {id: `floatSlot`, placeholder: `0.00`, style: {background: `transparent`, [`border-style`]: `none`, color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${13}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, width: `${100}%`}}]]]]], 
														[`div`, {class: `_gZz`}, 
															[
												[`img`, {src: `/ssl/given/svg/flags/ke.svg`, style: {[`max-width`]: `${18}px`,}}],
												[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
													[[`span`, {style: {color: `#000`, [`font-weight`]: 600, [`font-size`]: `${12}px`}}, `KES`]]]]]]]]],
									[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
										[ 
											[`div`, {}, 
												[
													[`span`, {style: {color: `#515151`, [`font-weight`]: 600, [`font-size`]: `${10}px`}}, `APPROX. AMOUNT`],
													[`span`, {id: `swap`, style: {color: `#000`, [`font-family`]: `geometria`, [`font-weight`]: 600, [`font-size`]: `${12}px`}}, `0.00USD/0${Arg[1]}`]]],
											[`div`, {class: `_eYG`}, []],
												[`div`, {class: `_gZz`, style: {flex: 0}}, 
													[[`a`, {class: `_gxM _geQ`, href: `javascript:;`, id: `fiatSlot`, style: {background: `blue`, color: `#fff`, display: `flex`, [`font-size`]: `${12}px`, [`font-weight`]: 600, padding: `${4}px ${12}px`, [`white-space`]: `nowrap`}}, 
														[[`span`, {}, `BUY ${Arg[1]}`]]]]]]]]]]]]];
	},

	holdXY: (Arg) => {

		let Pit = [[], [], [], [], [], []];

		let Span = [document.querySelector(`#plane`).clientWidth - 27, 165];

		let HoldXY = [];

		Arg.forEach(XY => {

			if (XY.ts > (new Date().valueOf() - 3600000*24*7)) HoldXY.push(XY);
		});

		//if (HoldXY[0].ts > (new Date().valueOf() - 3600000*24*29)) HoldXY.push({hold: 0, ts: new Date().valueOf() - 3600000*24*29})

		let YSPAN = [HoldXY.sort((A, B) => {return B.hold - A.hold})[0], HoldXY.sort((A, B) => {return A.hold - B.hold})[0]];

		let XSPAN = [HoldXY[HoldXY.length - 1].ts, HoldXY[0].ts];

		HoldXY.sort((A, B) => {return B.ts - A.ts}).forEach(XY => {

			Pit[3] += `${(Span[0] + 27) - (((HoldXY[0].ts - XY.ts)*Span[0])/(HoldXY[0].ts - HoldXY[HoldXY.length - 1].ts))} 
			${(((YSPAN[0].hold - XY.hold)*Span[1])/(YSPAN[0].hold - YSPAN[1].hold)) + 10} `;
		});

		let X = [
			YSPAN[0].hold, 
			YSPAN[0].hold - ((YSPAN[0].hold - YSPAN[1].hold)*.33), 
			YSPAN[0].hold - ((YSPAN[0].hold - YSPAN[1].hold)*.66), YSPAN[1].hold];

		X.forEach(x => {

			Pit[4].push(
				[`text`, {x: 0, y: (((X[0] - x)*Span[1])/(X[0] - X[X.length - 1])) + 10, fill: `#666`, style: {
					[`font-family`]: `geometria`,
					[`font-size`]: `${10}px`}}, `${x.toFixed(2)}`]);
					
			Pit[5].push([`path`, {
				//opacity: .75,
				stroke: `#e3e3e3`, 
				[`stroke-width`]: 1, 
				fill: `none`, d: `M27 ${(((X[0] - x)*Span[1])/(X[0] - X[X.length - 1])) + 10} 
				${Span[0] + 27} ${(((X[0] - x)*Span[1])/(X[0] - X[X.length - 1])) + 10}`}]);
		});

		XSPAN.reverse().forEach(x => {

			Pit[1].push(
				[`text`, {x: (((XSPAN[0] - x)*(Span[0] - 27))/(XSPAN[0] - XSPAN[1])) + 27, y: Span[1] + 27, fill: `#666`, style: {
					[`font-family`]: `geometria`,
					[`font-size`]: `${10}px`}}, `${new Date(x).getDate(x)}/${new Date(x).getMonth() + 1}`]);
		});

		Pit[2] = 
			[`svg`, {height: `${200}px`, style: {[`margin-top`]: `${30}px`}}, 
				[ 
					[`g`, {}, Pit[1]],
					[`g`, {}, Pit[5]],
					[`path`, {
						opacity: 1,
						stroke: `#5841d8`, 
						[`stroke-width`]: 2, 
						fill: `none`, d: `M${Pit[3]}`}], 
					[`g`, {}, Pit[4]]]];

		return [`div`, {}, 
			[
				[`div`, {class: `_gxM`}, 
					[
						[`span`, {style: {color: `#666`, [`font-size`]: `${12}px`}}, `USDT Balance`],
						[`div`, {class: `_gZz`, style: {[`font-weight`]: 600}}, 
							[
								/*[`a`, {href: `javascript:;`, style: {
									[`text-decoration`]: `underline`, color: `#666`, [`font-size`]: `${10}px`}}, `LAST 7 DAYS`],*/
								[`a`, {href: `javascript:;`, style: {
									[`text-decoration`]: `underline`, color: `#666`, [`font-size`]: `${10}px`, 
									[`margin-left`]: `${12}px`}}, `LAST 7 DAYS`]]]]],
				[`div`, {class: `_gxM`}, 
					[
						[`span`, {style: {[`font-family`]: `geometria`, [`font-weight`]: 600}}, `${Clients.debit} USDT`]]],
				Pit[2]]];
	},

	idVaultSlot: function () {

		let VaultSlots = [];

		Tools.typen(Clients.vaultSlots).forEach(Slot => {

			if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

				VaultSlots.push([`div`, {}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`], [`div`, {class: `_gZz`}, [[`a`, {class: `-_tX v202303311456`, id: `delSlot`, href: `javascript:;`}]]]]], 
						[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${6}px`}}, [[`span`, {id: `slotMug`}, `${Slot.mug.toUpperCase()}`], [`div`, {class: `_gZz`}, [[`span`, {id: `slotCell`}, Slot.id]]]]]]])
			}
		});

		return [
			`section`, {}, 
				[
					[`div`, {class: `_-tY`}, 
						[[`div`, {class: `_aXz`}, 
							[
								[`div`, {class: `_-Xg _gxM _geQ`}, 
									[
										[`a`, {class: `-_tX v202304191915`, style: {[`min-width`]: `${28}px`, height: `${28}px`}, href: `/`}]]]]]]], 
					[`main`, {id: `idVaultSlot`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${65}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`h2`, {}, `Payment Methods`],
								(Tools.typen(Clients.vaultSlots).length > 0)? [`h4`, {}, `My Payment Methods`]: [],
								(Tools.typen(Clients.vaultSlots).length > 0)? [`section`, {id: `vaultSlots`}, VaultSlots]: [], 
								[`h4`, {}, `Add Supported Payment Methods`],
								[`section`, {id: `vaultOpt`}, 
									[
										[`div`, {class: `_gxM _geQ`}, [[`span`, {id: `OptColor`, style: {background: `#e80101`}}], [`span`, {}, `Airtel Money (Kenya)`], [`div`, {class: `_gZz`}, [[`a`, {class: `-_tX v202203191304`, href: `javascript:;`}]]]]],
										[`div`, {class: `_gxM _geQ`}, [[`span`, {id: `OptColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`], [`div`, {class: `_gZz`}, [[`a`, {class: `-_tX v202203191304`, id: `cellSlots`, href: `javascript:;`}]]]]],
										[`div`, {class: `_gxM _geQ`}, [[`span`, {id: `OptColor`, style: {background: `#04629b`}}], [`span`, {}, `Paypal`], [`div`, {class: `_gZz`}, [[`a`, {class: `-_tX v202203191304`, href: `javascript:;`}]]]]]]]]]]]]]
	},

	incoming: function (Web) {

		let B4 = [[]];

		Web.incoming.sort((A, B) => {return B.ts - A.ts}).forEach(TX => {

			B4[0].push([`div`, {style: {[`border-bottom`]: `${1}px solid #d9d9d9`, padding: `${12}px 0`}}, 
				[
					[`span`, {}, TX.symbol],
					[`span`, {}, TX.b64],
					[`span`, {}, `${TX.float}`],
					[`span`, {}, `${Tools.logs(TX.ts) + ` - ` + Tools.logs(TX.ts_z)}`], 
					[`div`, {class: `_gxM _geQ`}, 
						[
							[`input`, {id: `float_${TX.md}`}],
							[`div`, {class: `_gZz`}, 
								[[`a`, {href: `javascript:;`, id: `pollB4`, md: TX.md, style: {background: `blue`, color: `#fff`, padding: `${4}px ${12}px`}}, `Approve`]]]]]]])
		});

		return [
			`main`, {id: ``, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[[`div`, {style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `${36}px auto ${0}`, [`justify-content`]: `center`, padding: `0 ${24}px`}}, 
					B4[0]]]]
	},

	inlet: function () {

		return [
			`section`, {}, 
				[
					[`div`, {class: `_-tY`}, 
						[[`div`, {class: `_aXz`}, 
							[
								[`div`, {class: `_-Xg _gxM _geQ`}, 
									[
										[`a`, {class: `-_tX v202304191915`, style: {[`min-width`]: `${28}px`, height: `${28}px`}, href: ``}]]]]]]], 
					[`main`, {id: `inletWallet`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${65}px`}}, 
						[[`div`, {class: `_geQ`, style: {[`max-width`]: `${400}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`h2`, {}, `Add USDT Reserve Source Wallet`], 
								[`div`, {class: `_aXZ`, style: {margin: `${16}px 0 ${40}px`}}, 
									[
										[`span`, {style: {[`margin-top`]: `${12}px`, [`text-align`]: `center`, color: `#666`, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `No Tether USD (TRC20) source wallet found.`],
										[`span`, {style: {[`margin-top`]: `${12}px`, [`text-align`]: `center`, color: `#a2a2a2`, [`font-size`]: `${12}px`}}, `You need to add a source wallet address in order to operate a reserve wallet.`],
										[`div`, {}, [[`div`, {class: `_sZ2`}, [[`div`, {class: `_aXZ`}, [[`input`, {id: `TRC20`, type: `text`}]]]]]]],
										[`div`, {class: `_gM_a _agM _guZ`, style: {width: `${100}%`, [`block-size`]: `${40}px`, background: `#1185fe`}}, 
											[[`a`, {id: `pollWallet`, class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`}, `Add Tether USD (TRC20) Address`]]]]]]]]]]]
	},

	inletTX: function () {

		return [`main`, {id: `holds`, class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: `_-Xg _gxM _geQ`}, 
								[
									[`a`, {class: `-_tX v202304191915`, style: {[`min-width`]: `${30}px`, height: `${30}px`}, href: `/`}, ``], 
									[`span`, {id: `vault`, class: `_aA6 _tXx`, style: {
                                        [`border-left`]: `${1}px solid #91919159`, 
                                        margin: `${0} ${7}px`,
                                        padding: `${0} ${14}px`,
                                        [`font-size`]: `${14}px`,
                                        color: `#000`, //`#00e53f`,
                                        overflow: `hidden`,
                                        [`white-space`]: `nowrap`}}, `joltnaut`]]],
							[`div`, {class: `_gZz`, style: {[`align-items`]: `center`}}, 
								[[`div`, {class: `_gxM`}, 
									[
										[`a`, {class: `v202301071417`, style: {margin: `${0} ${10}px`}, href: `/reserve/deposit`}],
										[`a`, {class: `v202203261943`, style: {margin: `${0} ${10}px`}, href: `/reserve/deposit`}]]]]]]]]], 
				[`section`, {style: {width: `${100}%`, [`max-width`]: `${1000}px`, margin: `${60}px auto`}}, 
					[]]]];
	},

	inVaultSlot: function (Arg) {

		let VaultSlots = [];

		Arg[0].vaultSlots.forEach(Slot => {

			if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

				VaultSlots.push([`div`, {style: {[`font-weight`]: 300,padding: `${12}px 0`}}, 
					[[`div`, {class: `_gxM _geQ`}, 
						[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`]]]]]);
			}
		});

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultSlot`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${65}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[[`h2`, {}, `edit order info`], [`div`, {class: `_gZz`}, [[`a`, {class: `-_tX v202311051955`, href: `/p2p`, style: {height:`${13}px`, width:`${13}px`}}]]]]],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
								[[`svg`, {style: {[`margin-right`]:`${8}px`,[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
									[[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
									[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
										[`text-transform`]: `uppercase`, 
										[`letter-spacing`]: `normal`,
										[`font-size`]: `${11}px`}}, Arg[0].mail[0]]]], 
								[`span`, {}, Arg[0].mail]]], 
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`span`, {style: {color: `#a3a3a3`}}, `Available`], 
								[`span`, {style: {[`font-family`]: `geometria`,[`font-weight`]: 600,[`margin-left`]: `${8}px`}}, `${Arg[0].vault} USDT`]]],
							[`section`, {id: `vaultSlots`}, VaultSlots],
							[`span`, {id: `rateSwap`}, `1 usdt = 130.07 kes`], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO PAY`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `0 - ${(Arg[0].vault*130.07).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `KES`]]]]], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WILL RECEIVE`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `0.00`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `USDT`]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#11fe6e`, border: `${1}px solid #11fe6e`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `inVaultVow`, md: Arg[0].md}, `Deposit USDT`]]]]]]]]]
	},

	inVaultS2c: function (Arg) {

		let Slot = [
			`Waiting for buyer's payment`, 
			``, 
			`Order info`, 
			`Confirm that payment is from the account name in the payment details below`,
			``,
			``,
			``, []];

		if (new Date().valueOf() < (Arg.ts + 60*72*60000) && Arg.via[1] === true && Arg.via[0] === false) { 

			Slot[0] = `Verify Payment`;

			Slot[1] = `Confirm that you have received payment from the buyer`

			Slot[2] = `1. Confirm Order info`

			Slot[3] = `2. Confirm that payment is from the account name in the payment details below`;

			Slot[4] = ``;

			Slot[5] = `3. Confirm payment is received`;

			Slot[6] = `After confirming the payment, be sure to click the "Payment received" button`

			Slot[7] = [`div`, {class: `_gM_a _agM _guZ`, style: {
				[`margin-top`]: `${16}px`, 
				width: `${100}%`, [`block-size`]: `${40}px`, background: `#11fe6e`, border: `${1}px solid #11fe6e`}}, 
				[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `putS2c`}, `Payment Received`]]];
		}

		if (Arg.via[1] === true && Arg.via[0] === true) { 

			Slot[0] = `Order Completed`;

			Slot[1] = `Successfully sold ${Arg.float} USDT`

			Slot[2] = `Order info`

			Slot[3] = `Payment Method`;

			Slot[4] = ``;

			Slot[5] = ``;

			Slot[6] = ``

			Slot[7] = [];
		}

		if (new Date().valueOf() > (Arg.ts + 60*72*60000) && Arg.via[1] === false) {

			Slot[0] = `Order Cancelled`;
		}

		let VaultSlots = [];

		Arg.vaultSlots.forEach(Slot => {

			let SubSlot = [];

			if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

				SubSlot = [`div`, {style: {[`line-height`]: `${18}px`}},
					[
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `ACCOUNT NAME`]]],
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#666`, [`font-size`]: `${11}px`}}, `${(Slot.mug).toUpperCase()}`]]],
						[`div`, {class: `_gZz`, style: {[`margin-top`]: `${12}px`}}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `PHONE NUMBER`]]],
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#666`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`}}, `${Slot.id}`]]]]];

				VaultSlots.push([`div`, {style: {padding: `${12}px 0`}}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {style: {[`font-weight`]: 300}}, `M-PESA Safaricom (Kenya)`]]],
						SubSlot]]);
			}
		});

		return [
			`section`, {}, 
				[ 
					[`main`, {id: `inVaultVow`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[[`div`, {class: `_gZz`}, 
										[[`a`, {class: `-_tX v202311051955`, href: `/p2p`, style: {height:`${14}px`, width:`${14}px`}}]]]]],
								[`div`, {class: `_gxM`, style: {[`margin-top`]: `${18}px`}}, 
									[[`div`, {class: `_gZz _geQ`}, 
										[
											[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, `ORDER NUMBER`],
											[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`margin-left`]: `${8}px`}}, `${Arg.ts}`]]]]],
								[`div`, {class: `_gxM`, style: {[`margin-top`]: `${6}px`}}, 
									[[`div`, {class: `_gZz _geQ`}, 
										[
											[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, `TIME CREATED`],
											[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`margin-left`]: `${8}px`}}, Tools.logs(Arg.ts)]]]]],
								[`div`, {style: {[`margin-top`]: `${18}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[0]],
										[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, Slot[1].toUpperCase()]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[2]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `AMOUNT`],
												[`span`, {style: {
													color: `#ca0000`, 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat((Arg.local*Arg.float).toFixed(2)).toLocaleString()} KES`]]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `PRICE`],
												[`span`, {style: { 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat(Arg.local.toFixed(2)).toLocaleString()} KES`]]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `TOTAL QUANTITY`],
												[`span`, {style: { 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat(Arg.float.toFixed(2)).toLocaleString()} USDT`]]]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[3]],
										[`span`, {style: {color:`#a3a3a3`}}, Slot[4]],
										[`section`, {id: `vaultSlots`}, VaultSlots]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[5]],
										[`span`, {style: {color:`#a3a3a3`}}, Slot[6]], Slot[7]]]]]]]]]
	},

	inVaultSTK: function (Arg) {

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultSlot`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {}, `BUY USDT WITH M-PESA`], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `v202311051955`, href: `/`, style: {height:`${13}px`, width:`${13}px`}}]]]]],
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `BILLING ACCOUNT`]			,
							[`section`, {style: {[`margin-top`]: `${4}px`}}, 
								[
									[`div`, {class: `_gxM _geQ`}, 
										[
											[`span`, {style: {background: `#049b04`, height: `${14}px`, [`margin-right`]: `${8}px`, width: `${4}px`}}], 
											[`span`, {style: {[`font-weight`]: 600}}, `M-PESA Safaricom (Kenya)`]]], 
									[`div`, {class: `_gxM _geQ`, style: {[`margin-left`]: `${12}px`}}, 
										[
											[`span`, {style: {[`font-size`]: `${11}px`}}, `${Arg.mug.toUpperCase()}`], 
											[`div`, {class: `_gZz`}, [[`span`, {style: {[`font-family`]: `geometria`}}, Arg.id]]]]]]], 
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}],
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO BUY`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `.75 - ${(Arg.apex).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `USDT`]]]]], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WILL RECEIVE`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `${(.75*130.07).toFixed(2)} - ${(Arg.apex*130.07).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `KES`]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#000`, border: `${1}px solid #000`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `stk`}, `BUY USDT`]]]]]]]]]		
	},

	inVaultTRON20: function (Arg) {

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultSlot`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {}, `DEPOSIT CRYPTO (TETHER USD)`], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `v202311051955`, href: `/my/wallet`, style: {height:`${13}px`, width:`${13}px`}}]]]]], 
							[`div`, {style: {margin: `${16}px 0 ${40}px`}}, 
								[
									[`div`, {style: {
										[`margin-top`]: `${12}px`, 
										padding: `${10}px ${8}px`, border: `${1}px solid #e3e3e3`, [`border-radius`]: `${16}px`}}, 
										[
											[`span`, {}, `Network`], 
											[`span`, {style: {[`font-weight`]: 600}}, `TRON (TRC20)`]]],
									[`span`, {style: {
										background: `#fbd6b545`, border: `${1}px solid #ff871c45`, [`border-radius`]: `${16}px`, color: `#000`, 
										[`line-height`]: 1.5, [`margin-top`]: `${12}px`, [`font-weight`]: 600, 
										padding: `${12}px ${8}px`}}, `Only deposit USDT from the Tron network. Deposits of other assets or from 
										other networks will be lost`],
									[`span`, {style: {[`font-size`]: `${11}px`, [`margin-top`]: `${24}px`}}, `SEND TO`],
									[`div`, {class: `_geQ _gxM`, style: {
										[`line-height`]: 1.7, [`margin-top`]: `${8}px`, padding: `${12}px ${8}px`, border: `${1}px solid #e3e3e3`, [`border-radius`]: `${16}px`}}, 
										[
											[`div`, {}, [
												[`span`, {style: {[`font-size`]: `${11}px`, [`font-weight`]: 300}}, `USDT ADDRESS`], 
												[`span`, {style: {
													color: `#666`, 
													[`font-size`]: `${12}px`, [`font-weight`]: 600}}, `${Arg.id.slice(0, 9)}...${Arg.id.slice(28)}`]]],
											[`div`, {class: `_gZz`},
												[[`div`, {class: `_gM_a _agM _guZ`, style: {
													[`block-size`]: `${40}px`, background: `#000`, border: `${1}px solid #000`}}, 
													[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `idCopy`, md: Arg.id, style: {
														color: `#fff`, [`font-weight`]: 300, [`white-space`]: `nowrap`}}, `COPY`]]]]]]],
									[`span`, {style: {
										background: `#fbd6b545`, border: `${1}px solid #ff871c45`, [`border-radius`]: `${16}px`, [`line-height`]: 1.5, 
										[`margin-top`]: `${12}px`, [`font-weight`]: 600, padding: `${12}px ${8}px`}}, `20 confirmations 
										(typically 1 minute) required before funds are debited to your account.`]]]]]]]]]		
	},

	inVaultVetVow: function (Vow) {

		let Slot = [
			`Please confirm that you have successfully transferred the money to the seller through the following payment method before confirming 
			payment.`,
			`I have made payment from my real-name verified payment account consistent with my registered name on joltnaut.`],

		VaultSlots = [];

		Vow.vaultSlots.forEach(Slot => {

			if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

				VaultSlots.push([
					`div`, {style: {[`font-weight`]: 600, padding: `${12}px 0`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`]]],
							[`div`, {style: {[`font-weight`]: 300}}, 
								[
									[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${14}px`}}, 
										[
											[`span`, {style: {color: `#666`}}, `Account Name`], 
											[`div`, {class: `_gZz`}, [[`span`, {}, (Slot.mug).toUpperCase()]]]]],
									[`div`, {class: `_gxM _geQ`}, 
										[
											[`span`, {style: {color: `#666`}}, `Phone Number`], 
											[`div`, {class: `_gZz`}, [[`span`, {}, Slot.id]]]]]]]]]);
			}
		});

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultVetVow`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${65}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {style: {[`font-weight`]: 600}}, `Payment Confirmation`], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `-_tX v202311051955`, href: `/p2p/${Vow.md}`, style: {height:`${13}px`, width:`${13}px`}}]]]]],
							[`div`, {style: {[`margin-top`]: `${24}px`}}, [[`span`, {}, Slot[0]]]],
							[`section`, {id: `vaultSlots`}, VaultSlots],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${18}px`}}, 
								[
									[`svg`, {style: {height: `${18}px`, [`max-width`]: `${18}px`}, vewBox: `0 0 18 18`}, 
										[
											[`circle`, {cy: 9, cx: 9, r: 7, stroke: `#11fe6e`, [`stroke-width`]: 1.25, fill: `none`}],
											[`path`, {d: `M6 8 8 12 16 6`, fill: `none`, stroke: `#11fe6e`}]]], 
									[`div`, {class: `_eYG`}, 
										[[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`line-height`]: 1.3}}, Slot[1].toUpperCase()]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#11fe6e`, border: `${1}px solid #11fe6e`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `putClientVow`}, `Confirm Payment`]]]]]]]]]
	},

	inVaultVia: function () {

		let Via = [
			[
				[`M-PESA (STK-PUSH)`, `#049b04`, `INSTANT DEPOSIT`, `FREE CHARGE`, `stk`], 
				[`Tether USD Wallet Address (USDT)`, `#1d9b75`, `20 - 35 MINUTES`, `NETWORK FEES APPLY`, `tron20`]], []];

		Via[0].forEach(Slot => {

			Via[1].push(
				[`div`, {style: {margin: `${12}px 0`}}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {style: {background: Slot[1], height: `${14}px`, [`margin-right`]: `${8}px`, width: `${4}px`}}], 
								[`span`, {style: {[`font-weight`]: 600}}, Slot[0]],
								[`div`, {class: `_gZz`}, 
									[[`a`, {class: `v202312061631`, style: {width: `${24}px`, height: `${24}px`}, href: `/mode/deposit/${Slot[4]}`}]]]]],
						[`section`, {style: {[`margin-left`]: `${12}px`}}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`span`, {class: `v202301071417`, style: {width: `${14}px`, height: `${14}px`}}],
										[`div`, {class: `_eYG`}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, Slot[2]]]]]],
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`span`, {class: `v202205081426`, style: {width: `${16}px`, height: `${16}px`}}],
										[`div`, {class: `_eYG`}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, Slot[3]]]]]]]]]]);
		});

		return [`main`, {class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: ``}, 
								[[`a`, {class: `v202311261657`, style: {width: `${14}px`, height: `${14}px`}, href: `/`}, ``]]], 
							[`div`, {class: `_eYG`}, 
								[[`span`, {}, ``]]]]]]], 
				[`main`, {id: `p2p`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {id: `vaultVia`}, 
								[
									[`h1`, {style: 
										{
											[`font-size`]: `${9}px`, 
											[`font-weight`]: 300, [`margin-top`]: `${22}px`}},  `CHOOSE A DEPOSIT METHOD`],
									[`section`, {}, Via[1]]]]]]]]]];
	},

	inVaultVow: function (Arg) {

		let Slot = [
			`ORDER CREATED`, 
			``, 
			``,
			``,
			``,
			``,
			``, []];

		if (new Date().valueOf() > (Arg.ts + 60*72*60000)) {

			Slot[0] = `ORDER CANCELLED`;

			Slot[2] = `Order info`
		}

		if (new Date().valueOf() < (Arg.ts + 60*72*60000) && Arg.via[1] === false) {

			Slot[2] = `1. Confirm Order info`;

			Slot[3] = `2. Make Payment`;

			Slot[4] = `Transfer the funds to the seller's account provided below`;

			Slot[5] = `3. Notify Seller`;

			Slot[6] = `After transferring the funds, click on the "Transferred, Notify Seller" button`

			Slot[7] = [`div`, {class: `_gM_a _agM _guZ`, style: {
				[`margin-top`]: `${16}px`, 
				width: `${100}%`, [`block-size`]: `${40}px`, background: `#11fe6e`, border: `${1}px solid #11fe6e`}}, 
				[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `vetVow`, md: Arg.md}, `TRANSFERRED, NOTIFY SELLER`]]];
		}

		if (new Date().valueOf() < (Arg.ts + 60*72*60000) && Arg.via[1] === true && Arg.via[0] === false) { 

			Slot[0] = `Pending Release`;

			Slot[1] = `Wait for the seller to confirm payment and release the coin`

			Slot[2] = `Order info`

			Slot[3] = `Payment Method`;

			Slot[4] = ``;

			Slot[5] = ``;

			Slot[6] = ``

			Slot[7] = [];
		} 

		if (Arg.via[1] === true && Arg.via[0] === true) { 

			Slot[0] = `Order Completed`;

			Slot[1] = `Successfully purchased ${Arg.float} USDT`

			Slot[2] = `Order info`

			Slot[3] = `Payment Method`;

			Slot[4] = ``;

			Slot[5] = ``;

			Slot[6] = ``

			Slot[7] = [];
		}

		let VaultSlots = [];

		Arg.vaultSlots.forEach(Slot => {

			let SubSlot = [];

			if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

				SubSlot = [`div`, {style: {[`line-height`]: `${18}px`}},
					[
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `ACCOUNT NAME`]]],
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#666`, [`font-size`]: `${11}px`}}, `${(Slot.mug).toUpperCase()}`]]],
						[`div`, {class: `_gZz`, style: {[`margin-top`]: `${12}px`}}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `PHONE NUMBER`]]],
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#666`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`}}, `${Slot.id}`]]]]];

				VaultSlots.push([`div`, {style: {padding: `${12}px 0`}}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {style: {[`font-weight`]: 300}}, `M-PESA Safaricom (Kenya)`]]],
						SubSlot]]);
			}
		});

		return [
			`section`, {}, 
				[ 
					[`main`, {id: `inVaultVow`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[[`div`, {class: `_gZz`}, 
										[[`a`, {class: `-_tX v202311051955`, href: `/p2p`, style: {height:`${14}px`, width:`${14}px`}}]]]]],
								[`div`, {class: `_gxM`, style: {[`margin-top`]: `${18}px`}}, 
									[[`div`, {class: `_gZz _geQ`}, 
										[
											[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, `ORDER NUMBER`],
											[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`margin-left`]: `${8}px`}}, `${Arg.ts}`]]]]],
								[`div`, {class: `_gxM`, style: {[`margin-top`]: `${6}px`}}, 
									[[`div`, {class: `_gZz _geQ`}, 
										[
											[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, `TIME CREATED`],
											[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`margin-left`]: `${8}px`}}, Tools.logs(Arg.ts)]]]]],
								[`div`, {style: {[`margin-top`]: `${18}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[0]],
										[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, Slot[1].toUpperCase()]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[2]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `AMOUNT`],
												[`span`, {style: {
													color: `#00ca4f`, 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat((Arg.local*Arg.float).toFixed(2)).toLocaleString()} KES`]]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `PRICE`],
												[`span`, {style: { 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat(Arg.local.toFixed(2)).toLocaleString()} KES`]]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `RECEIVE QUANTITY`],
												[`span`, {style: { 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat(Arg.float.toFixed(2)).toLocaleString()} USDT`]]]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[3]],
										[`span`, {style: {color:`#a3a3a3`}}, Slot[4]],
										[`section`, {id: `vaultSlots`}, VaultSlots]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[5]],
										[`span`, {style: {color:`#a3a3a3`}}, Slot[6]], Slot[7]]]]]]]]]
	},

	jms: function (Arg) {

		let TX = [[], []];

		Arg.mugs.sort((A, B) => {return B.secs - A.secs}).forEach(Mug => {

			TX[0].push(
				[`section`, {style: {[`margin-top`]: `${4}px`}}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[
								[`svg`, {style: {[`margin-right`]:`${8}px`,[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
									[
										[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
										[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
											[`text-transform`]: `uppercase`, 
											[`letter-spacing`]: `normal`,
											[`font-size`]: `${11}px`}}, Mug.mail[0]]]], 
								[`div`, {style: {[`line-height`]: 1.2}}, 
									[
										[`span`, {}, Mug.names[0] + ` ` + Mug.names[1]], 
										[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, (Mug.mail).toUpperCase()]]]]]]]);
		});

		Arg.pays.sort((A, B) => {return B.ts - A.ts}).forEach(Pay => {

			TX[1].push(
				[`section`, {}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[
								[`svg`, {style: {[`margin-right`]:`${8}px`,[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
									[
										[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
										[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
											[`text-transform`]: `uppercase`, 
											[`letter-spacing`]: `normal`,
											[`font-size`]: `${11}px`}}, Pay.mail[0]]]], 
								[`span`, {}, Pay.mail]]],
						[`section`, {style: {margin: `${4}px ${0} ${8}px ${24}px`}}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`span`, {style: {background: `#049b04`, height: `${14}px`, [`margin-right`]: `${8}px`, width: `${4}px`}}], 
										[`span`, {style: {[`font-weight`]: 600}}, `M-PESA Safaricom (Kenya)`]]], 
								[`div`, {class: `_gxM _geQ`, style: {[`margin-left`]: `${12}px`}}, 
									[
										[`span`, {style: {[`font-size`]: `${11}px`}}, `${Pay.name.toUpperCase()}`], 
										[`div`, {class: `_gZz`}, [[`span`, {style: {[`font-family`]: `geometria`}}, Pay.id]]]]]]],
						[`div`, {class: `_gxM _geQ`}, 
							[
								[`div`, {class: `_gZz`}, 
									[
										[`span`, {style: {[`font-family`]: `geometria`, [`font-weight`]: 600}}, `${Pay.local}`],
										[`a`, {class: `v202203262148`, href: `javascript:;`, id: `pollPay`, md: Pay.md, style: {
											width: `${12}px`, height: `${12}px`}}]]]]]]]);
		});

		return [
			`main`, {id: `jms`, class: `_tY0`, style: {padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
				[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
					[
						[`div`, {id: ``}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`span`, {class: `v202203171249`, style: {width: `${36}px`, height: `${36}px`}}],
										[`h1`, {style: {
											[`font-size`]: `${9}px`, 
											[`font-weight`]: 300, [`margin-left`]: `${6}px`}},  ``]]],
								[`section`, {style: {[`margin-top`]: `${12}px`}}, TX[0]]]],
						[`div`, {id: ``, style: {[`margin-top`]: `${12}px`}}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`span`, {class: `v202205081426`, style: {width: `${36}px`, height: `${36}px`}}],
										[`h1`, {style: {
											[`font-size`]: `${9}px`, 
											[`font-weight`]: 300, [`margin-left`]: `${6}px`}},  ``]]]
								/**/,
								[`section`, {style: {[`margin-top`]: `${12}px`}}, TX[1]]]]]]]]
	},

	liquidate: function (Web) {

		return [
			`main`, {id: ``, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[[`div`, {style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `${36}px auto ${0}`, [`justify-content`]: `center`}}, 
						[
							[`div`, {style: {padding: `${48}px ${24}px ${12}px`}}, 
								[
									[`div`, {class: `_geQ _gxM`}, 
										[
											[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 300, [`text-decoration`]: `underline`}}, `LIQUIDITY`],
											[`div`, {class: `_gZz`}, 
												[
													[`span`, {class: `v202312301635`, style: {height: `${24}px`, width: `${24}px`}}],
													[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`margin-left`]: `${8}px`}}, `${parseFloat(Web.spot[`usd`]*Web.USD[`usd`]).toFixed(2)} USD`]]]]],
									[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${18}px`}}, 
										[
											[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `${12}px ${0} ${0}`, }}, `Withdraw to`],
											[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 300, margin: `${12}px ${0} ${0} ${16}px`, [`text-decoration`]: `underline`}}, `M-PESA SAFARICOM`]]],
									[`div`, {style: {[`margin-top`]: `${18}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${100}px`, height: `${36}px`, padding: `${12}px ${16}px`}}, 
											[
												[`img`, {src: `/ssl/given/svg/flags/ke.svg`, style: {[`max-width`]: `${18}px`}}],
												[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
													[[`span`, {style: {color: `#515151`, [`font-family`]: `geometria`, [`font-weight`]: 300, [`font-size`]: `${13}px`}}, ``]]], 
														[`div`, {class: `_gZz`}, 
															[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																[ 
																	[`div`, {class: `_gxM _gZz _geQ`}, 
																		[[`span`, {style: {color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${13}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, [`text-align`]: `right`}}, `+${Web.call}`]]]]]]]]]]],
									[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `${24}px ${0} ${0}`, }}, `Withdraw Amount`],
									[`div`, {style: {[`margin-top`]: `${18}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${100}px`, height: `${36}px`, padding: `${12}px ${16}px`}}, 
											[
												[`div`, {style: {[`line-height`]: `${32}px`, width: `${75}%`}}, 
													[ 
														[`div`, {class: `_gxM _gZz _geQ`}, 
															[[`input`, {id: `floatSlot`, placeholder: `0.00`, style: {background: `transparent`, [`border-style`]: `none`, color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${13}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, width: `${100}%`}}]]]]], 
														[`div`, {class: `_gZz`}, 
															[
												[`img`, {src: `/ssl/given/svg/flags/ke.svg`, style: {[`max-width`]: `${18}px`,}}],
												[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
													[[`span`, {style: {color: `#000`, [`font-weight`]: 600, [`font-size`]: `${12}px`}}, `KES`]]]]]]]]],
									[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
										[ 
											[`div`, {}, 
												[
													[`span`, {style: {color: `#515151`, [`font-weight`]: 600, [`font-size`]: `${10}px`}}, `WITHDRAWAL AMOUNT`],
													[`span`, {id: `swap`, style: {color: `#000`, [`font-family`]: `geometria`, [`font-weight`]: 600, [`font-size`]: `${13}px`}}, `0.00 USD`]]],
											[`div`, {class: `_eYG`}, []],
												[`div`, {class: `_gZz`, style: {flex: 0}}, 
													[[`a`, {class: `_gxM _geQ`, href: `javascript:;`, id: `liquidate`, style: {background: `blue`, color: `#fff`, display: `flex`, [`font-size`]: `${12}px`, [`font-weight`]: 600, padding: `${4}px ${12}px`, [`white-space`]: `nowrap`}}, 
														[
															[`span`, {class: `v202203262148`, style: {height: `${14}px`, [`margin-right`]: `${8}px`, width: `${14}px`}}], 
															[`span`, {}, `Withdraw`]]]]]]]]]]]]];
	},

	mugslot: function () {

		let Slot = {
			action: [`signin`, `signin`],
			slots: [[`email`, `email`, `email`], [`password`, `lock`, `password`]]
		}, TC = [[], []], PROMO = [[]];

		TC[0] = [`span`, {style: {
			color: `#a1a1a1`, 
			[`font-size`]: `${12}px`, [`font-weight`]: 600, [`line-height`]: 1.5, margin: `${24}px 0 0`, [`text-align`]: `center`}}, 
			[
				[`span`, {}, `Don't have an account yet? `], 
				[`a`, {href: `/enrol`}, ` Create an account`]]];

		if (Tools.typen(Clients.instance)[0] === `mugup`) {

			Slot = {
				action: [`signup`, `signup`],
				slots: [
					[`email`, `email`, `email`], 
					[`first name`, `middle`, `text`], 
					[`surname`, `family`, `text`], 
					[`password`, `lock`, `password`]
				]
			}

			PROMO[0] = [`div`, {class: `_sZ2`}, 
				[
					[`div`, {class: `_gxM`}, [[`div`, {class: `gZz`}, [[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`margin-bottom`]: `${6}px`, [`text-decoration`]: `underline`}}, `Optional (5 USD Reward Voucher)`]]]]],
					[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${100}px`, height: `${36}px`, padding: `${12}px ${16}px`}}, 
						[
							[`span`, {style: {color: `blue`, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `PROMO CODE`],
							[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
								[[`span`, {style: {color: `#515151`, [`font-family`]: `geometria`, [`font-weight`]: 300, [`font-size`]: `${13}px`}}, ``]]], 
							[`div`, {class: `_gZz`}, 
								[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
									[ 
										[`div`, {class: `_gxM _gZz _geQ`}, 
											[[`input`, {id: `refSlot`, placeholder: `ENTER HERE`, style: {background: `transparent`, [`block-size`]: `unset`, [`border-style`]: `none`, color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${13}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, [`text-align`]: `right`, width: `${100}%`}}]]]]]]]]]]]

			TC[0] = [
			`span`, {
				style: {
					color: `#a1a1a1`, 
					[`font-size`]: `${12}px`, [`font-weight`]: 600, [`line-height`]: 1.5, margin: `${12}px 0 0`, [`text-align`]: `center`}}, 
				[
					[`span`, {}, `By creating an account, you consent that you have read and agree to our `], 
					[`a`, {href: `javascript:;`}, ` Terms of Service & Privacy Policy.`]]];

			TC[1] = [];		
		}

		let Slots = [];

		Slot.slots.forEach(Slot => {

			let Tip = [[], [], []];

			if (Slot[0] === `surname`) {

				Tip[0] = [`span`, {style: 
					{
						color: `#a1a1a1`, 
						[`font-size`]: `${12}px`, [`font-weight`]: 600, [`line-height`]: 1.5, margin: `${12}px 0 0`, [`text-align`]: `center`}}, 
				`* First name & last name must match government issued ID. A mismatch when verifying your account identity (KYC Process), 
				could temporarily disable deposits and withdrawals on your account.`]
			}

			if (Slot[0] === `password` && Tools.typen(Clients.instance)[0] === `mugin`) {

				Tip[1] = [`div`, {class: `_gxM _geQ`, style: {margin: `${12}px 0 -${8}px`}}, 
					[[`div`, {class: `_gZz`}, 
						[[`a`, {href: `javascript:;`, style: {
							[`text-decoration`]: `underline`, color: `#666`, [`font-size`]: `${10}px`, 
							[`margin-left`]: `${12}px`}}, `FORGOT PASSWORD?`]]]]]
			}

			Slots.push([
					`div`, {class: `_sZ2`}, [
						[`label`, {style: {
							[`font-weight`]: 600,
							margin: `0 ${0}px ${12}px`, color: `#5c5e62`, [`line-height`]: 1.414, [`text-transform`]: `capitalize`}}, 
							[[`span`, {}, Slot[0]]]], 
						[`div`, {class: `_aXZ`}, 
							[[`input`, {id: Slot[1], type: Slot[2]}]]], Tip[0], Tip[1]]]);

		});

		Slots.push(PROMO[0])

		return [
				`section`, {}, 
					[ 
						[`main`, {id: `mugin`, class: `_tY0`, style: {[`font-family`]: `litera`, [`font-size`]: `${12}px`, height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
							[[`div`, {class: `_geQ`, style: {
								[`max-width`]: `${362}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
								[
									[`div`, {class: `_gxM _aXZ`, style: {[`margin-bottom`]: `-${10}px`}}, 
										[[`a`, {class: `-_tX v202304191915`, href: `/`, style: {height: `${36}px`, width: `${36}px`}}]]],
									[`h2`, {}, (Tools.typen(Clients.instance)[0] === `mugin`)? `signin`: `signup`], 
									[`div`, {class: `_aXZ`, style: {margin: `${16}px 0 ${40}px`}}, 
										[
											[`div`, {}, Slots],
											[`div`, {class: `_gM_a _agM _guZ`, style: {
												width: `${100}%`, [`block-size`]: `${40}px`, background: `#1185fe`}}, 
												[[`a`, {id: Slot.action[1], class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, style: { 
													[`text-transform`]: `capitalize`}}, Slot.action[0]]]],
											TC[0], TC[1]]]]]]]]]
	},

	outVault: function(Web) {

		let Swap = [];

		Web.swap.forEach(Meta => {

			Swap.push([`div`, {class: `_gxM _geQ`, id: `vaultSell`, style: {cursor: `pointer`, [`margin-bottom`]: `${4}px`, padding: `${8}px ${0}px`}}, 
				[
					[`img`, {src: `/ssl/given/svg/flags/${Meta[2]}.svg`, style: {[`max-width`]: `${28}px`,}}],
					[`div`, {class: `_eYG`, style: {[`margin-left`]: `${12}px`}}, 
						[
							[`span`, {style: {
								color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, [`font-weight`]: 600, [`font-size`]: `${16}px`, 
								[`letter-spacing`]: `${.75}px`, [`line-height`]: `${22.4}px`, [`text-transform`]: `uppercase`}}, `${Meta[1]}`],
							[`span`, {style: {
								color: `rgb(${161}, ${161}, ${161})`, [`font-weight`]: 400, [`font-size`]: `${12}px`, [`line-height`]: `${18.2}px`, 
								[`text-transform`]: `capitalize`}}, `${Meta[0]}`]]], 
							[`div`, {class: `_gZz`}, 
								[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
									[
										[`div`, {class: `_gxM _gZz _geQ`}, 
											[[`span`, {style: {
												color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
												[`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, 
												`${Meta[3]} ${Meta[1]} / USDT`]]]]]]]]]);
		});

		return [
			`main`, {style: {
				background: `rgb(5, 5, 5)`, color: `rgb(${161}, ${161}, ${161})`, [`font-family`]: `cula`, height: `${100}%`}}, 
				[
					[`div`, {style: {margin: `${20}px ${24}px`}}, 
						[]],
					[`section`, { class: `tY0 _geQ`, style: {background: `inherit`, padding: `0 ${24}px`,  [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `0 auto`, [`justify-content`]: `center`}}, 
							[ 
								[`div`, {}, 
									[[`div`, {style: {
										background: `rgb(${25}, ${25}, ${25})`, [`border-radius`]: `${.375}rem`, opacity: 1,
										padding: `${24}px ${16}px`}}, 
										[[`div`, {},
											[
												[`div`, {style: {[`margin-bottom`]: `${20}px`}}, 
													[
														[`div`, {class: `_gxM _geQ`}, 
															[[`span`, {style: {
																color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, [`font-size`]: `${19}px`, 
																[`font-weight`]: 600, [`line-height`]: `${32}px`, [`letter-spacing`]: `${.75}px`}}, 
																`SELECT A CURRENCY`]]]]], 
												[`div`, {}, 
													[
														[`div`, {class: `_gxM _geQ`, style: {
															[`border-bottom`]: `1px solid rgba(${255}, ${255}, ${255}, ${.25})`, cursor: `pointer`, 
															[`margin-bottom`]: `${4}px`, [`padding-bottom`]: `${12}px`, [`padding-top`]: `${8}px`}}, 
																[
																	[`img`, {src: `/ssl/given/svg/tokens/usdt.svg`, style: {
																		[`max-width`]: `${28}px`,}}],
																	[`div`, {class: `_eYG`, style: {[`margin-left`]: `${12}px`}}, 
																		[
																			[`span`, {style: {
																				color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, 
																				[`font-weight`]: 600, [`font-size`]: `${16}px`, 
																				[`letter-spacing`]: `${.75}px`, [`line-height`]: `${22.4}px`}}, `USDT`],
																			[`span`, {style: {
																				color: `rgb(${161}, ${161}, ${161})`, [`font-weight`]: 400, 
																				[`font-size`]: `${12}px`, [`line-height`]: `${18.2}px`}}, 
																				`TRC20 Tokens`]]], 
																	[`div`, {class: `_gZz`}, 
																		[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																			[
																				[`div`, {class: `_gxM _gZz _geQ`}, 
																					[
																						[`span`, {class: `v202312301635`, style: {
																							height: `${20}px`, [`margin-right`]: `${8}px`, 
																							width: `${20}px`}}],
																						[`span`, {style: {color: `rgb(${230}, ${230}, ${230})`,
																							[`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																							[`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, 
																							[`white-space`]: `nowrap`}}, 
																							`${parseFloat(Web.hold).toFixed(2)} USDT`]]]]]]]]]]],
												[`div`, {}, Swap]]]]]]]]]]]]];
	},

	outVaultC2s: function (Arg) {

		let Slot = [
			`Order Created`, 
			``, 
			``,
			``,
			``,
			``,
			``, []];

		if (new Date().valueOf() > (Arg.ts + 60*72*60000)) {

			Slot[0] = `ORDER CANCELLED`;

			Slot[2] = `Order info`
		}

		if (new Date().valueOf() < (Arg.ts + 60*72*60000) && Arg.via[1] === false) {

			Slot[2] = `1. Confirm Order info`;

			Slot[3] = `2. Make Payment`;

			Slot[4] = `Transfer the funds to the seller's account provided below`;

			Slot[5] = `3. Notify Seller`;

			Slot[6] = `After transferring the funds, click on the "Transferred, Notify Seller" button`

			Slot[7] = [`div`, {class: `_gM_a _agM _guZ`, style: {
				[`margin-top`]: `${16}px`, 
				width: `${100}%`, [`block-size`]: `${40}px`, background: `#11fe6e`, border: `${1}px solid #11fe6e`}}, 
				[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `vetC2s`, md: Arg.md}, `TRANSFERRED, NOTIFY SELLER`]]];
		}

		if (new Date().valueOf() < (Arg.ts + 60*72*60000) && Arg.via[1] === true && Arg.via[0] === false) { 

			Slot[0] = `Pending Release`;

			Slot[1] = `Wait for the seller to confirm payment and release the coin`

			Slot[2] = `Order info`

			Slot[3] = `Payment Method`;

			Slot[4] = ``;

			Slot[5] = ``;

			Slot[6] = ``

			Slot[7] = [];
		} 

		if (Arg.via[1] === true && Arg.via[0] === true) { 

			Slot[0] = `Order Completed`;

			Slot[1] = `Successfully purchased ${Arg.float} USDT`

			Slot[2] = `Order info`

			Slot[3] = `Payment Method`;

			Slot[4] = ``;

			Slot[5] = ``;

			Slot[6] = ``

			Slot[7] = [];
		}

		let VaultSlots = [];

		Arg.vaultSlots.forEach(Slot => {

			let SubSlot = [];

			if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

				SubSlot = [`div`, {style: {[`line-height`]: `${18}px`}},
					[
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `ACCOUNT NAME`]]],
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#666`, [`font-size`]: `${11}px`}}, `${(Slot.mug).toUpperCase()}`]]],
						[`div`, {class: `_gZz`, style: {[`margin-top`]: `${12}px`}}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `PHONE NUMBER`]]],
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#666`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`}}, `${Slot.id}`]]]]];

				VaultSlots.push([`div`, {style: {padding: `${12}px 0`}}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {style: {[`font-weight`]: 300}}, `M-PESA Safaricom (Kenya)`]]],
						SubSlot]]);
			}
		});

		return [
			`section`, {}, 
				[ 
					[`main`, {id: `inVaultVow`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[[`div`, {class: `_gZz`}, 
										[[`a`, {class: `-_tX v202311051955`, href: `/p2p`, style: {height:`${14}px`, width:`${14}px`}}]]]]],
								[`div`, {class: `_gxM`, style: {[`margin-top`]: `${18}px`}}, 
									[[`div`, {class: `_gZz _geQ`}, 
										[
											[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, `ORDER NUMBER`],
											[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`margin-left`]: `${8}px`}}, `${Arg.ts}`]]]]],
								[`div`, {class: `_gxM`, style: {[`margin-top`]: `${6}px`}}, 
									[[`div`, {class: `_gZz _geQ`}, 
										[
											[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, `TIME CREATED`],
											[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`margin-left`]: `${8}px`}}, Tools.logs(Arg.ts)]]]]],
								[`div`, {style: {[`margin-top`]: `${18}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[0]],
										[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, Slot[1].toUpperCase()]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[2]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `AMOUNT`],
												[`span`, {style: {
													color: `#00ca4f`, 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat((Arg.local*Arg.float).toFixed(2)).toLocaleString()} KES`]]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `PRICE`],
												[`span`, {style: { 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat(Arg.local.toFixed(2)).toLocaleString()} KES`]]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `RECEIVE QUANTITY`],
												[`span`, {style: { 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat(Arg.float.toFixed(2)).toLocaleString()} USDT`]]]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[3]],
										[`span`, {style: {color:`#a3a3a3`}}, Slot[4]],
										[`section`, {id: `vaultSlots`}, VaultSlots]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[5]],
										[`span`, {style: {color:`#a3a3a3`}}, Slot[6]], Slot[7]]]]]]]]]
	},

	outVaultSlot: function (Arg) {

		let VaultSlots = [];

		Arg[0].vaultSlots.forEach(Slot => {

			if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

				VaultSlots.push([`div`, {style: {[`font-weight`]: 300,padding: `${12}px 0`}}, 
					[[`div`, {class: `_gxM _geQ`}, 
						[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`]]]]]);
			}
		});

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultSlot`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${65}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[[`h2`, {}, `edit order info`], [`div`, {class: `_gZz`}, [[`a`, {class: `-_tX v202311051955`, href: `/p2p/c2s`, style: {height:`${13}px`, width:`${13}px`}}]]]]],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
								[[`svg`, {style: {[`margin-right`]:`${8}px`,[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
									[[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
									[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
										[`text-transform`]: `uppercase`, 
										[`letter-spacing`]: `normal`,
										[`font-size`]: `${11}px`}}, Arg[0].mail[0]]]], 
								[`span`, {}, Arg[0].mail]]], 
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`span`, {style: {color: `#a3a3a3`}}, `Available`], 
								[`span`, {style: {[`font-family`]: `geometria`,[`font-weight`]: 600, [`margin-left`]: `${8}px`}}, `${Arg[0].vault} USDT`]]],
							[`section`, {id: `vaultSlots`}, VaultSlots],
							[`span`, {id: `rateSwap`}, `1 usdt = 128.98 kes`], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO SELL`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `0.00`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `USDT`]]]]], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WILL RECEIVE`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `0 - ${(Arg[0].vault*128.98).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `KES`]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#ca0000`, border: `${1}px solid #ca0000`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `outVaultVow`, md: Arg[0].md}, `Withdraw USDT`]]]]]]]]]
	},

	outVaultSTK: function (Arg) {

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultSlot`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {}, `SELL USDT WITH M-PESA`], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `v202311051955`, href: `/`, style: {height:`${13}px`, width:`${13}px`}}]]]]],
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `WITHDRAWAL ACCOUNT`]			,
							[`section`, {style: {[`margin-top`]: `${4}px`}}, 
								[
									[`div`, {class: `_gxM _geQ`}, 
										[
											[`span`, {style: {background: `#049b04`, height: `${14}px`, [`margin-right`]: `${8}px`, width: `${4}px`}}], 
											[`span`, {style: {[`font-weight`]: 600}}, `M-PESA Safaricom (Kenya)`]]], 
									[`div`, {class: `_gxM _geQ`, style: {[`margin-left`]: `${12}px`}}, 
										[
											[`span`, {style: {[`font-size`]: `${11}px`}}, `${Arg.mug.toUpperCase()}`], 
											[`div`, {class: `_gZz`}, [[`span`, {style: {[`font-family`]: `geometria`}}, Arg.id]]]]]]], 
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
								[[`span`, {style: {color: `#a3a3a3`}}, `My Wallet Balance`], 
								[`span`, {style: {[`font-family`]: `geometria`,[`font-weight`]: 600, [`margin-left`]: `${8}px`}}, `${(Arg.hold).toFixed(2)} USDT`]]],
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO SELL`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `2.50 - ${(Arg.apex).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `USDT`]]]]], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WILL RECEIVE`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `${(2.5*134.47).toFixed(2)} - ${(Arg.apex*134.47).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `KES`]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#000`, border: `${1}px solid #000`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `vaultOut`}, `SELL USDT`]]]]]]]]]		
	},

	outVaultVetVow: function (Vow) {

		let Slot = [
			`Please confirm that you have successfully transferred the money to the seller through the following payment method before confirming 
			payment.`,
			`I have made payment from my real-name verified payment account consistent with my registered name on joltnaut.`],

		VaultSlots = [];

		Vow.vaultSlots.forEach(Slot => {

			if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

				VaultSlots.push([
					`div`, {style: {[`font-weight`]: 600, padding: `${12}px 0`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`]]],
							[`div`, {style: {[`font-weight`]: 300}}, 
								[
									[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${14}px`}}, 
										[
											[`span`, {style: {color: `#666`}}, `Account Name`], 
											[`div`, {class: `_gZz`}, [[`span`, {}, (Slot.mug).toUpperCase()]]]]],
									[`div`, {class: `_gxM _geQ`}, 
										[
											[`span`, {style: {color: `#666`}}, `Phone Number`], 
											[`div`, {class: `_gZz`}, [[`span`, {}, Slot.id]]]]]]]]]);
			}
		});

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultVetVow`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${65}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {style: {[`font-weight`]: 600}}, `Payment Confirmation`], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `-_tX v202311051955`, href: `/s2c/${Vow.md}`, style: {height:`${13}px`, width:`${13}px`}}]]]]],
							[`div`, {style: {[`margin-top`]: `${24}px`}}, [[`span`, {}, Slot[0]]]],
							[`section`, {id: `vaultSlots`}, VaultSlots],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${18}px`}}, 
								[
									[`svg`, {style: {height: `${18}px`, [`max-width`]: `${18}px`}, vewBox: `0 0 18 18`}, 
										[
											[`circle`, {cy: 9, cx: 9, r: 7, stroke: `#11fe6e`, [`stroke-width`]: 1.25, fill: `none`}],
											[`path`, {d: `M6 8 8 12 16 6`, fill: `none`, stroke: `#11fe6e`}]]], 
									[`div`, {class: `_eYG`}, 
										[[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`line-height`]: 1.3}}, Slot[1].toUpperCase()]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#11fe6e`, border: `${1}px solid #11fe6e`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `putVaultVow`}, `Confirm Payment`]]]]]]]]]
	},

	outVaultVia: function () {

		let Via = [
			[
				[`M-PESA Safaricom (Kenya)`, `#049b04`, `45 MINS - 60MINS (WITHIN 0900GMT - 1600GMT)`, `FREE CHARGE`, `10,000 KES DAILY LIMIT`, `stk`], 
				[`Tether USD Wallet Address (USDT)`, `#1d9b75`, `20 - 35 MINUTES (WITHIN 0900GMT - 1600GMT)`, `NETWORK FEES APPLY`, `UNLIMITED`, `tron20`]], []];

		Via[0].forEach(Slot => {

			Via[1].push(
				[`div`, {style: {margin: `${12}px 0`}}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {style: {background: Slot[1], height: `${14}px`, [`margin-right`]: `${8}px`, width: `${4}px`}}], 
								[`span`, {style: {[`font-weight`]: 600}}, Slot[0]],
								[`div`, {class: `_gZz`}, 
									[[`a`, {class: `v202312061631`, style: {width: `${24}px`, height: `${24}px`}, href: `/mode/withdraw/${Slot[5]}`}]]]]],
						[`section`, {style: {[`margin-left`]: `${12}px`}}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`span`, {class: `v202301071417`, style: {width: `${14}px`, height: `${14}px`}}],
										[`div`, {class: `_eYG`}, [[`span`, {style: {color: `#666`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, Slot[2]]]]]],
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`span`, {class: `v202205081426`, style: {width: `${16}px`, height: `${16}px`}}],
										[`div`, {class: `_eYG`}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, Slot[3]]]]]],
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`span`, {class: `v202310281744`, style: {width: `${14}px`, height: `${14}px`}}],
										[`div`, {class: `_eYG`}, [[`span`, {style: {color: `#666`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, Slot[4]]]]]]]]]]);
		});

		return [`main`, {class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: ``}, 
								[[`a`, {class: `v202311261657`, style: {width: `${14}px`, height: `${14}px`}, href: `/`}, ``]]], 
							[`div`, {class: `_eYG`}, 
								[[`span`, {}, ``]]]]]]], 
				[`main`, {id: `p2p`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {id: `vaultVia`}, 
								[
									[`h1`, {style: 
										{
											[`font-size`]: `${9}px`, 
											[`font-weight`]: 300, [`margin-top`]: `${22}px`}},  `CHOOSE A WITHDRAWAL METHOD`],
									[`section`, {}, Via[1]]]]]]]]]];
	},

	outVaultVow: function (Arg) {

		let Slot = [
			`Waiting for buyer's payment`, 
			``, 
			`Order info`, 
			`Confirm that payment is from the account name in the payment details below`,
			``,
			``,
			``, []];

		if (new Date().valueOf() < (Arg.ts + 60*72*60000) && Arg.via[1] === true && Arg.via[0] === false) { 

			Slot[0] = `Verify Payment`;

			Slot[1] = `Confirm that you have received payment from the buyer`

			Slot[2] = `1. Confirm Order info`

			Slot[3] = `2. Confirm that payment is from the account name in the payment details below`;

			Slot[4] = ``;

			Slot[5] = `3. Confirm payment is received`;

			Slot[6] = `After confirming the payment, be sure to click the "Payment received" button`

			Slot[7] = [`div`, {class: `_gM_a _agM _guZ`, style: {
				[`margin-top`]: `${16}px`, 
				width: `${100}%`, [`block-size`]: `${40}px`, background: `#11fe6e`, border: `${1}px solid #11fe6e`}}, 
				[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `vetVow`}, `Payment Received`]]];
		}

		if (Arg.via[1] === true && Arg.via[0] === true) { 

			Slot[0] = `Order Completed`;

			Slot[1] = `Successfully sold ${Arg.float} USDT`

			Slot[2] = `Order info`

			Slot[3] = `Payment Method`;

			Slot[4] = ``;

			Slot[5] = ``;

			Slot[6] = ``

			Slot[7] = [];
		}

		if (new Date().valueOf() > (Arg.ts + 60*72*60000) && Arg.via[1] === false) {

			Slot[0] = `Order Cancelled`;
		}

		let VaultSlots = [];

		Arg.vaultSlots.forEach(Slot => {

			let SubSlot = [];

			if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

				SubSlot = [`div`, {style: {[`line-height`]: `${18}px`}},
					[
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `ACCOUNT NAME`]]],
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#666`, [`font-size`]: `${11}px`}}, `${(Slot.mug).toUpperCase()}`]]],
						[`div`, {class: `_gZz`, style: {[`margin-top`]: `${12}px`}}, [[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `PHONE NUMBER`]]],
						[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#666`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`}}, `${Slot.id}`]]]]];

				VaultSlots.push([`div`, {style: {padding: `${12}px 0`}}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {style: {[`font-weight`]: 300}}, `M-PESA Safaricom (Kenya)`]]],
						SubSlot]]);
			}
		});

		return [
			`section`, {}, 
				[ 
					[`main`, {id: `inVaultVow`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`div`, {class: `_gxM _geQ`}, 
									[[`div`, {class: `_gZz`}, 
										[[`a`, {class: `-_tX v202311051955`, href: `/p2p`, style: {height:`${14}px`, width:`${14}px`}}]]]]],
								[`div`, {class: `_gxM`, style: {[`margin-top`]: `${18}px`}}, 
									[[`div`, {class: `_gZz _geQ`}, 
										[
											[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, `ORDER NUMBER`],
											[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`margin-left`]: `${8}px`}}, `${Arg.ts}`]]]]],
								[`div`, {class: `_gxM`, style: {[`margin-top`]: `${6}px`}}, 
									[[`div`, {class: `_gZz _geQ`}, 
										[
											[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, `TIME CREATED`],
											[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`margin-left`]: `${8}px`}}, Tools.logs(Arg.ts)]]]]],
								[`div`, {style: {[`margin-top`]: `${18}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[0]],
										[`span`, {style: {color:`#a3a3a3`, [`font-size`]: `${10}px`}}, Slot[1].toUpperCase()]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[2]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `AMOUNT`],
												[`span`, {style: {
													color: `#ca0000`, 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat((Arg.local*Arg.float).toFixed(2)).toLocaleString()} KES`]]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `PRICE`],
												[`span`, {style: { 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat(Arg.local.toFixed(2)).toLocaleString()} KES`]]],
										[`div`, {style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `TOTAL QUANTITY`],
												[`span`, {style: { 
													[`font-family`]: `geometria`, 
													[`font-weight`]: 600}}, `${parseFloat(Arg.float.toFixed(2)).toLocaleString()} USDT`]]]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[3]],
										[`span`, {style: {color:`#a3a3a3`}}, Slot[4]],
										[`section`, {id: `vaultSlots`}, VaultSlots]]],
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[
										[`span`, {style: {[`font-weight`]: 600}}, Slot[5]],
										[`span`, {style: {color:`#a3a3a3`}}, Slot[6]], Slot[7]]]]]]]]]
	},

	p2p: function () {

		let Vaults = [(Clients.p2p === `outVault`)? []: Tools.typen(Clients.inVaults), []];

		Vaults[0].forEach(Vault => {

			let VaultSlots = [];

			Vault.vaultSlots.forEach(Slot => {

				if (Slot.type === `mobile pay` && Slot.carrier === `safaricom`) {

					VaultSlots.push([`div`, {style: {padding: `${12}px 0`}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`]]]]]);
				}
			});

			Vaults[1].push([`div`, {}, 
				[[`div`, {class: `_gxM _geQ`}, 
					[[`svg`, {style: {[`margin-right`]:`${8}px`,[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
						[[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
						[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
							[`text-transform`]: `uppercase`, 
							[`letter-spacing`]: `normal`,
							[`font-size`]: `${11}px`}}, Vault.mail[0]]]], 
					[`span`, {}, Vault.mail]]], 
				[`div`, {class: `_gxM _geQ`}, 
					[[`span`, {style: {color: `#a3a3a3`}}, `Available`], 
					[`span`, {style: {[`font-family`]: `geometria`,[`font-weight`]: 600,[`margin-left`]: `${8}px`}}, `${Vault.vault} USDT`]]],
				[`section`, {id: `vaultSlots`}, VaultSlots],
				[`div`, {class: `_gM_a _agM _guZ`, style: {
					[`margin-top`]: `${16}px`, 
					width: `${100}%`, [`block-size`]: `${40}px`, background: `#11fe6e`, border: `${1}px solid #11fe6e`}}, 
					[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `inVaultSlot`, md: Vault.md}, `deposit usdt`]]]]]);
		});

		return [`main`, {id: `holds`, class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: `_-Xg _gxM _geQ`}, 
								[[`a`, {class: `-_tX v202304191915`, style: {[`min-width`]: `${30}px`, height: `${30}px`}, href: `/`}, ``]]],
							[`div`, {class: `_gZz`, style: {[`align-items`]: `center`}}, 
								[[`div`, {class: `_gxM`}, 
									[[`a`, {class: `v202301071417`, style: {margin: `${0} ${10}px`}, href: `/p2p/recent`}]]]]]]]]], 
				[`main`, {id: `p2p`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${65}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`a`, {class: `-_tX v202203261943`, href: ``}], 
									[`a`, {class: `-_tX v202203262148`, href: `/p2p/c2s`, style: {[`margin-left`]: `${24}px`}}], 
									[`div`, {class: `_gZz`}, [[`a`, {class: `-_tX v202311102200`, href: `javascript:;`}]]]]],
							[`span`, {id: `rateSwap`}, `1 usdt = 164.64 kes`],
							[`section`, {id: `vaults`}, Vaults[1]]]]]]]];
	},

	peers: function (Arg) {

		let Allows = [[]];

		Arg.forEach(MD => {

			Allows[0].push(
				[`div`, {class: `_gxM _geQ`, style: {padding: `${12}px 0`}}, 
					[
						[`svg`, {style: {[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
							[
								[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
								[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
										[`text-transform`]: `uppercase`, 
										[`letter-spacing`]: `normal`,
										[`font-size`]: `${11}px`}}, (MD.peers[0] === Clients.mug)? MD.mail[1][0]: MD.mail[0][0]]]], 
						[`div`, {class: `_eYG`, style: {[`line-height`]: 1.6}}, 
							[
								[`span`, {}, (MD.peers[0] === Clients.mug)? MD.mail[1]: MD.mail[0]],
								[`span`, {style: 
									{
										color: `#a3a3a3`,
										[`font-size`]: `${9}px`, 
										[`font-weight`]: 600}}, ``]]],
						[`div`, {class: `_gZz`},
							[[`a`, {class: `v202203261943`, href: `javascript:;`, id: `allow`, md: MD.md, style: 
								{height: `${18}px`, width: `${18}px`}}]]]]]);
		});

		return [`main`, {class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: ``}, 
								[[`a`, {class: `v202311261657`, style: {width: `${14}px`, height: `${14}px`}, href: `/`}, ``]]], 
							[`div`, {class: `_eYG`}, 
								[[`span`, {}, `WALLET ADDRESSES`]]],
							[`div`, {class: `_gZz`, style: {[`align-items`]: `center`}}, 
								[[`div`, {class: `_gxM`}, 
									[
										[`a`, {class: `v202301071417`, href: `/my/peers/requests`, style: {margin: `${0}`}}]]]]]]]]], 
				[`main`, {id: `p2p`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {id: `contactSlot`}, 
								[
									[`span`, {style: {[`font-size`]: `${9}px`, [`font-weight`]: 600, [`margin-top`]: `${22}px`}}, `SEND WALLET REQUEST`],
									[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
										[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
											[[`input`, {class: `_aXZ`, id: `idSlot`, placeholder: `Paste wallet id`, type: `text`}]]], 
										[`div`, {class: `_gZz`, style: {flex: 0}}, 
											[[`a`, {class: `v202203191304`, href: `javascript:;`, id: `putContact`, style: {margin: `${0} 0 0 ${10}px`}}]]]]]]],
							[`div`, {id: `allows`}, 
								[
									[`h1`, {style: 
										{
											[`font-size`]: `${9}px`, 
											[`font-weight`]: 600, [`margin-top`]: `${22}px`}}, (Arg.length > 0)? `WALLET CONTACTS`: ``],
									[`section`, {style: {[`margin-top`]: `${12}px`}}, Allows[0]]]]]]]]]];
	},

	plot: (Arg) => {

		let HL = [];

		Arg.kline.forEach(K => {

			if (K[2].length > 0) {HL.push(K[2][0]); HL.push(K[2][1])}
		});

		HL.sort((A, B) => {return B - A});
    
  		let Y = parseFloat(document.querySelector(`body`).clientHeight - 70);

		let Plot = [[], []];

		for (let i = 0; i < 24; i++) {
					
			Plot[0].push([`line`, {x1: i*170.5 + 4, y1: 1, x2: i*170.5 + 4, y2: 1001, stroke: `#353535`, [`stroke-width`]: .95}])//([`path`, {stroke: `#353535`, [`stroke-width`]: `${1}`, fill: `none`, d: `M${i*170} 0 ${i*170} 1000`}]);
		}

		Arg.kline.sort((A, B) => {return A[0] - B[0]}).forEach((K, i) => {

			if (K[2].length > 0) {

				Plot[1].push([`line`, {x1: i*7.125 + .05, y1: .15*Y + ((HL[0] - K[2][0])*.5*Y)/(HL[0] - HL[HL.length - 1]), x2: i*7.125 + .05, y2: .15*Y + ((HL[0] - K[2][1])*.5*Y)/(HL[0] - HL[HL.length - 1]), stroke: (K[1][0] > K[1][1])? `red`: `lime`, [`stroke-width`]: .95}]);

                let OC = Tools.typen(Tools.coats(K[1]));

                OC.sort((A, B) => {return B - A});
				
				Plot[1].push([`rect`, {id: `${new Date(K[0])}`, x: (i*7.125) - 2, y: .15*Y + ((HL[0] - OC[0])*.5*Y)/(HL[0] - HL[HL.length - 1]), width: 3.5, height: ((OC[0] - OC[1])*.5*Y)/(HL[0] - HL[HL.length - 1]), stroke: (K[1][0] > K[1][1])? `red`: `lime`, [`stroke-width`]: .95}]);
			}
		});

		return [
			`main`, {id: `spot`, class: `_tY0`, style: {background: `#000`, color: `#fff`, [`font-family`]: `litera`, height: `${100}%`}}, 
				[
					[`div`, {style: {background: `#07073c`, [`border-bottom`]: `${1}px solid #353535`, height: `${40}px`, padding: `${0}px ${12}px`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `v202312301635`, style: {height: `${26}px`, width: `${26}px`}}], 
								[`div`, {class: `_eYG`, style: {[`border-left`]: `${1}px solid #353535`, height: `${100}%`,}}, 
									[[`span`, {style: {[`font-family`]: ``, [`font-size`]: `${12}px`, [`font-weight`]: 300}}, ``]]], 
								[`div`, {class: `_gZz`, style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
									[[`a`, {class: `v202204261406`, href: (!Clients.mug)? `/signin`: `javascript:;`, style: {height: `${18}px`, width: `${18}px`}}]]]]]]],
					[`section`, {style: {transform: `translateX(${-640}px)`, width: `${100}%`}}, 
						[[`svg`, {height: `${1000}px`, width: `${24*172}px`}, 
							[ 
								[`g`, {}, Plot[0]],
								[`g`, {}, Plot[1]]]]]], 
					[`div`, {style: {background: `#000`, [`border-top`]: `${1}px solid #6a6a6a`, bottom: 0, height: `${30}px`, padding: `${6}px ${24}px`, position: `absolute`, width: `${100}%`, [`z-index`]: 11}}, 
						[]]]];	
	},

	pnl: function (Arg) {

		let P2 = [[]];

		Arg.pairs = Arg.pairs.sort((A, B) => {return B.secs - A.secs});

		Arg.pairs.slice(0, 25).forEach(Pair => {

			P2[0].push([
				`div`, {style: {border: `${1}px solid #e3e3e3`, [`border-radius`]: `${24}px`, [`line-height`]: 1.3, margin: `${10}px 0`, padding: `${15}px`}}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[
								[`div`, {}, 
									[
										[`span`, {style: { 
											[`font-family`]: ``, 
											[`font-size`]: `${12}px`, [`font-weight`]: 600}}, `${Pair.pair.toUpperCase()}`],
										[`span`, {style: {
											color: `#a3a3a3`,
											[`font-size`]: `${10}px`, [`font-weight`]: 600}}, `SPOT GRID`]]],
								[`div`, {class: `_gZz`},
									[[`div`, {style: {[`text-align`]: `right`}}, 
										[
											[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `INVESTMENT AMOUNT (USDT)`],
											[`span`, {style: {
												color: `#000`, [`font-family`]: ``, [`font-size`]: `${10}px`, [`font-weight`]: 300, 
												[`margin-left`]: `${2}px`, }}, `${(Pair.amount).toFixed(3)}`]]]]]]],
						[`div`, {style: {margin: `${14}px 0 0`}},
							[
								[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`font-weight`]: 300}}, `ROI`],
								[`span`, {style: {
									color: `#00ca29`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, 
									[`margin-left`]: `${2}px`, }}, `${Pair.pnl[0].toFixed(2)}%`]]],
						[`div`, {class: `_geQ _gxM`, style: {margin: `${14}px 0 0`}},
							[
								[`div`, {}, 
									[
										[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`font-weight`]: 300}}, `PROFIT (USD)`],
										[`span`, {style: {
											color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, 
											[`margin-left`]: `${2}px`, }}, `${Pair.pnl[1].toFixed(4)}`]]],
								[`div`, {class: `_gZz`},
									[[`div`, {style: {[`text-align`]: `right`}}, 
										[
											[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `BOT RUNTIME`],
											[`span`, {style: {
												color: `#000`, [`font-family`]: ``, [`font-size`]: `${10}px`, [`font-weight`]: 300, 
												[`margin-left`]: `${2}px`, }}, `${Pair.runs}`]]]]]]], 
						[`div`, {class: `_geQ _gxM`, style: {[`line-height`]: 1.7,margin: `${14}px 0 0`}},
							[
								[`div`, {}, 
									[
										[`span`, {style: {color: `#00ca29`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `BUY (BTC)`],
										[`span`, {style: {
											color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, 
											[`margin-left`]: `${2}px`, }}, `@${Pair.io[0]} FDUSD`],
											[`span`, {style: {
												color: `#666`, [`font-family`]: `geometria`, [`font-size`]: `${10}px`, [`font-weight`]: 300, 
												[`margin-left`]: `${2}px`, }}, `${Tools.logs(Pair.ts[0])}`]]],
								[`div`, {class: `_gZz`},
									[[`div`, {style: {[`text-align`]: `right`}}, 
										[
											[`span`, {style: {color: `#ca0000`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `SELL (BTC)`],
											[`span`, {style: {
												color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, 
												[`margin-left`]: `${2}px`, }}, `@${Pair.io[1]} FDUSD`],
											[`span`, {style: {
												color: `#666`, [`font-family`]: `geometria`, [`font-size`]: `${10}px`, [`font-weight`]: 300, 
												[`margin-left`]: `${2}px`, }}, `${Tools.logs(Pair.ts[1])}`]]]]]]],
						[`div`, {class: `_geQ _gxM`, style: {margin: `${14}px 0 0`}},
							[
								[`div`, {class: `_gZz`},
									[[`div`, {style: {[`text-align`]: `right`}}, 
										[
											[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `BALANCE (USDT)`],
											[`span`, {style: {
												color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, 
												[`margin-left`]: `${2}px`, }}, `${Pair.pnl[2].toFixed(3)}`]]]]]]]]]);
		});

		return [`main`, {class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: ``}, 
								[[`a`, {class: `v202311261657`, style: {width: `${14}px`, height: `${14}px`}, href: `/my/wallet`}, ``]]], 
							[`div`, {class: `_eYG`}, 
								[[`span`, {}, `EARNINGS`]]]]]]], 
				[`main`, {id: `p2p`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {id: `contactVet`}, 
								[
									[`h1`, {style: {
										color: `#666`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`margin-top`]: `${22}px`}}, `TOTAL EARNED`],
									[`div`, {class: `_gxM`}, 
										[
											[`span`, {style: {
												color: `#00ca29`, [`font-family`]: `geometria`, [`font-size`]: `${14}px`, 
												[`font-weight`]: 600}}, `+${(Arg.pnl).toFixed(3)}`],
											[`span`, {style: {
												color: `#000`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`margin-left`]: `${4}px`}}, ` USDT`]]],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
								[
									[`h2`, {style: {color: `#000`, [`font-weight`]: 600}}, `My Earnings Ledger`], 
									/*[`div`, {class: `_gZz`}, 
										[
											[`a`, {class: `-_tX v202312061631`, href: (Clients.mug)? `/my/wallet`: `/signin`, style: {
												height:`${18}px`, width:`${18}px`}}]]]*/]],
							[`section`, {style: {margin: `${4}px 0 0`}}, P2[0]]]]]]]]]];
	},

	pool: function (Web) {

		return [
			`main`, {style: {
				background: `rgb(5, 5, 5)`, color: `rgb(${161}, ${161}, ${161})`, [`font-family`]: `cula`, height: `${100}%`}}, 
				[
					[`div`, {style: {margin: `${20}px ${24}px`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, [
								[`span`, {id: `vault`, style: {
									color: `#fff`,
									[`font-family`]: `cour`,
									[`font-size`]: `${17}px`,
									[`font-weight`]: 900,
                            		/*padding: `${1}px ${4}px`*/}}, `|naut`],
								[`span`, {style: {
									border: `${1}px solid #1185fe`,
									[`border-radius`]: `${100}px`,
									color: `#1185fe`,
									[`font-size`]: `${10}px`,
									[`font-weight`]: 300,
									[`margin-left`]: `${8}px`,
                            		padding: `${0}px ${6}px`}}, `BETA`], 
                            	[`div`, {class: `_gZz`}, 
                            		[[`div`, {style: {
										[`align-items`]: `center`, background: `rgb(${25}, ${25}, ${25})`, [`border-radius`]: `${.375}rem`, 
										display: (Clients.mug)? `none`: `flex`, [`justify-content`]: `center`, [`min-height`]: `${56}px`, opacity: 1,
										width: `${215}px`}}, 
										[[`a`, {href: `/signin`, style: {color: `#7abbff`, [`white-space`]: `nowrap`}}, `Open Wallet`]]]]]]]]],
					[`section`, { class: `tY0 _geQ`, style: {background: `inherit`, padding: `0 ${24}px`,  [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `0 auto`, [`justify-content`]: `center`}}, 
							[ 
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`img`, {src: `/ssl/given/svg/tokens/btc.svg`, style: {
											[`max-width`]: `${24}px`, transform: `translateX(${0}px)`}}],
										[`img`, {src: `/ssl/given/svg/tokens/usdt.svg`, style: {
											[`max-width`]: `${26}px`, transform: `translateX(${-11.33337}px)`}}],
										[`div`, {class: `_eYG`, style: {[`margin-left`]: `${6}px`}}, 
											[[`span`, {style: {
												color: `#fff`, [`font-family`]: `walsh`, [`font-weight`]: 400, 
												[`font-size`]: `${28}px`}}, `BTC / USDT`]]],
										[`span`, {style: {[`font-size`]: `${10}px`, [`font-weight`]: 400, [`margin-right`]: `${12}px`}}, `ROI(${(Web.runs).toFixed(0)}DAYS)`],
										[`div`, {class: `_gZz`, style: {flex: 0}}, 
											[
												[`div`, {class: `_gxM _geQ`, style: {
													background: `rgb(${255}, ${215}, ${2}, ${.17})`, [`border-radius`]: `${.25}rem`, opacity: 1,
																padding: `${4}px`}}, 
																[
																	[`span`, {class: `v20240221434`, style: {height: `${15}px`, [`margin-right`]: `${8}px`, width: `${15}px`}}],
																	[`span`, {style: {
																		color: `rgb(${255}, ${215}, ${2})`, [`font-family`]: `walsh`, 
																		[`font-size`]: `${14}px`}}, `+${(Web.pnl[0]).toFixed(2)}%`]]]]]]], 
								[`div`, {style: {[`margin-top`]: `${40}px`}}, 
									[[`div`, {style: {
										background: `rgb(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${8}px`, opacity: 1,
										padding: `${12}px ${16}px`}}, 
										[
											[`div`, {class: `_gxM _geQ`}, 
												[
													[`span`, {class: `v202312301635`, style: {height: `${32}px`, width: `${32}px`}}], 
													[`div`, {class: `_eYG`}, 
														[[`span`, {style: {
															color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, 
															[`font-size`]: `${24}px`, [`font-weight`]: 400}}, `$${parseFloat(Web.debit).toFixed(2)}`]]],
													[`div`, {class: `_gZz`, style: {flex: 0}}, 
														[[`a`, {class: `_gxM _geQ`, href: `/pools/BTC_USDT/supply`, style: {
																background: `#7abbff`, [`border-radius`]: `${100}px`, color: `rgb(${6}, ${6}, ${6})`,
																display: `flex`, [`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																[`font-weight`]: 600, height: `${40}px`, [`letter-spacing`]: `${.75}px`, padding: `${0}px ${16}px`, [`white-space`]: `nowrap`}}, 
															[
																[`span`, {class: `v202203191304`, style: {height: `${20}px`, [`margin-right`]: `${8}px`, width: `${20}px`}}], 
																[`span`, {style: {}}, `ADD LIQUIDITY`]]]]]]]]]]],
								[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${16}px`, width: `${100}%`}}, 
									[
										[`div`, {class: `_geQ`, style: {
											[`align-items`]: `flex-start`, background: `rgb(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${.25}rem`, 
											padding: `${12}px ${16}px`, width: `${100}%`}}, 
											[
												[`span`, {style: {[`font-size`]: `${10}px`, [`font-weight`]: 500, [`margin-bottom`]: `${4}px`, 
													[`white-space`]: `nowrap`}}, `ROI / TODAY`], 
												[`span`, {style: {
													color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, 
													[`font-size`]: `${14}px`, [`font-weight`]: 400}}, `+(${Web.pnl[2].toFixed(2)}%)`]]],
										[`div`, {class: `_geQ`, style: {
											[`align-items`]: `flex-start`, background: `rgb(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${.25}rem`, 
											[`margin-left`]: `${16}px`, padding: `${12}px ${16}px`, width: `${100}%`}}, 
											[
												[`span`, {style: {[`font-size`]: `${10}px`, [`font-weight`]: 500, [`margin-bottom`]: `${4}px`, 
													[`white-space`]: `nowrap`}}, `PNL / TODAY`], 
												[`span`, {style: {
													color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, 
													[`font-size`]: `${14}px`, [`font-weight`]: 400}}, (Clients.mug)? `$${Web.pnl[1].toFixed(2)}`: `$0.00`]]],
										[`div`, {class: `_geQ`, style: {
											[`align-items`]: `flex-start`, background: `rgb(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${.25}rem`, 
											[`margin-left`]: `${16}px`, padding: `${12}px ${16}px`, width: `${100}%`}}, 
											[
												[`span`, {style: {[`font-size`]: `${10}px`, [`font-weight`]: 500, [`margin-bottom`]: `${4}px`, 
													[`white-space`]: `nowrap`}}, `CUMULATIVE PNL`], 
												[`span`, {style: {
													color: `rgb(${255}, ${215}, ${2})`, [`font-family`]: `walsh`, 
													[`font-size`]: `${14}px`, [`font-weight`]: 400}}, `$${Web.cumulative.toFixed(2)}`]]]]]]]]]]];
	},

	pools: function (Web) {

		return [
			`main`, {style: {
				background: `rgb(5, 5, 5)`, color: `rgb(${161}, ${161}, ${161})`, [`font-family`]: `cula`, height: `${100}%`}}, 
				[
					[`div`, {style: {margin: `${20}px ${24}px`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, [
								[`span`, {id: `vault`, style: {
									color: `#fff`,
									[`font-family`]: `cour`,
									[`font-size`]: `${17}px`,
									[`font-weight`]: 900,
                            		/*padding: `${1}px ${4}px`*/}}, `|naut`],
								[`span`, {style: {
									border: `${1}px solid #1185fe`,
									[`border-radius`]: `${9999}px`,
									color: `#1185fe`,
									[`font-size`]: `${8}px`,
									[`font-weight`]: 300,
									[`margin-left`]: `${8}px`,
                            		padding: `${0}px ${6}px`}}, `BETA`]]]]],
					[`section`, { class: `tY0 _geQ`, style: {background: `inherit`, padding: `0 ${24}px`,  [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `0 auto`, [`justify-content`]: `center`}}, 
							[
								[`div`, {style: {[`line-height`]: 1.75}}, 
									[
										[`span`, {style: {
											color: `#fff`, [`font-size`]: `${22}px`, 
											[`font-weight`]: 300}}, `Liquidity Pools`],
										[`span`, {style: {
											color: `rgb(${161}, ${161}, ${161})`, [`margin-top`]: `${4}px`}}, 
											`Provide liquidity, earn trading profits on daily basis.`]]], 
								[`div`, {style: {[`margin-top`]: `${32}px`}}, 
									[[`div`, {class: `_gxM`, style: {[`border-bottom`]: `1px solid rgb(${255}, ${255}, ${255}, ${.15})`}}, 
										[[`span`, {style: {
											[`border-bottom`]: `2px solid #7abbff`, color: `#7abbff`,[`font-size`]: `${14}px`, [`font-weight`]: 400, 
											padding: `${12}px 0`}}, `Promoted Pools`]]]]], 
								[`div`, {style: {[`margin-top`]: `${36}px`}}, 
									[[`div`, {style: {
										background: `rgb(${255}, ${255}, ${255}, ${.05})`, [`border-radius`]: `${.25}rem`, opacity: 1,
										padding: `${20}px ${16}px`}}, 
										[
											[`div`, {class: `_gxM _geQ`}, 
												[
													[`img`, {src: `/ssl/given/svg/tokens/btc.svg`, style: {
														[`max-width`]: `${18}px`, transform: `translateX(${0}px)`}}],
													[`img`, {src: `/ssl/given/svg/tokens/usdt.svg`, style: {
														[`max-width`]: `${18}px`, transform: `translateX(${-7.6667}px)`}}],
													[`div`, {class: `_eYG`, style: {[`margin-left`]: `${2}px`}}, 
														[[`span`, {style: {
															 color: `#fff`, [`font-family`]: `walsh`, [`font-weight`]: 300, 
															 [`font-size`]: `${20}px`}}, `BTC / USDT`]]],
													[`div`, {class: `_gZz`, style: {flex: 0}}, 
														[
															[`div`, {class: `_gxM _geQ`, style: {
																background: `rgb(${255}, ${215}, ${2}, ${.17})`, [`border-radius`]: `${.25}rem`, opacity: 1,
																padding: `${4}px`}}, 
																[
																	[`span`, {class: `v20240221434`, style: {height: `${15}px`, [`margin-right`]: `${8}px`, width: `${15}px`}}],
																	[`span`, {style: {
																		color: `rgb(${255}, ${215}, ${2})`, [`font-family`]: `walsh`, 
																		[`font-size`]: `${14}px`}}, `+${(Web.pnl[0]).toFixed(2)}%`]]]]]]], 
											[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${20}px`}}, 
												[
													[`div`, {class: `_eYG _gxM`, style: {margin: 0}}, 
														[
															[`div`, {}, 
																[
																	[`span`, {style: {[`font-size`]: `${12}px`}}, `Days`],
																	[`span`, {style: {
																		color: `#fff`, [`font-family`]: `walsh`, 
																		[`margin-top`]: `${4}px`}}, `${(Web.runs).toFixed(1)}`]]],
															[`div`, {style: {[`margin-left`]: `${24}px`}}, 
																[
																	[`span`, {style: {[`font-size`]: `${12}px`}}, `Transactions`],
																	[`span`, {style: {
																		color: `#fff`, [`font-family`]: `walsh`, 
																		[`margin-top`]: `${4}px`}}, `${Web.till}`]]]]],
													[`div`, {class: `_gZz`, style: {flex: 0}}, 
														[[`a`, {href: `/pools/BTC_USDT`, style: {
																background: `rgb(${255}, ${255}, ${255}, ${.15})`, [`border-radius`]: `${100}px`, 
																color: `rgb(${161}, ${161}, ${161})`, [`font-size`]: `${14}px`, [`font-weight`]: 300, 
																padding: `${15}px ${30}px`, [`white-space`]: `nowrap`}}, `Explore & Invest`]]]]]]]]]]]]]]];
	},

	portal: function (Arg) {

		let Param = [
			[], 
			[[`account`, 25], [`balance`, 7.5, true], [`inflow`, 7.5, true], [`outflow`, 7.5, true], [``, 37.5], [`net gain`, 15, true]]];

		Param[1].forEach(Feat => {

			Param[0].push([`div`, {class: `geQ`, style: {width: `${Feat[1]}%`}}, 
				[[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600, [`text-align`]: (Feat[2])? `right`: `left`}}, Feat[0]]]])

		});

		let Row = [[], []];

		Arg.feats.forEach(Account => {

			let Meta = [(Account.account).toLowerCase(), `${parseFloat(Account.hold).toFixed(2)}`, 0, `${parseFloat(Account.outflow).toFixed(2)}`, ``, `${parseFloat(Account.cumulate).toFixed(2)}`];

			Param[1].forEach((Feat, int)=> {

				Row[1].push([`div`, {style: {width: `${Feat[1]}%`}}, 
					[[`span`, {style: {
						[`font-family`]: (Feat[2])? `arcane`: `inherit`, [`font-size`]: `${12}px`, [`font-weight`]: 300, [`text-align`]: (Feat[2])? `right`: `left`, 
						[`text-transform`]: ``}}, Meta[int]]]]);
			});

			Row[0].push([`div`, {class: `_geQ _gxM`, style: {padding: `${6}px ${0}`}}, Row[1]])

			Row[1] = [];
		});

		return [
			`main`, {id: `portal`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[[`div`, {class: `geQ`, style: {[`max-width`]: `${1280}px`, [`min-width`]: `${1040}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
					[
						[`div`, {id: ``}, 
							[
								[`div`, {style: {background: `#fff`, [`border-bottom`]: `${1}px solid #d9d9d9`, [`max-width`]: `${1280}px`, [`min-width`]: `${1040}px`, padding: `${12}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
									[[`div`, {class: `_gxM _geQ`}, Param[0]]]],
								[`section`, {style: {[`margin-top`]: `${36}px`, padding: `${12}px`}}, Row[0]]]]]]]]
	},

	project: function (Web) {

		return [
			`main`, {style: {
				background: `rgb(5, 5, 5)`, color: `rgb(${161}, ${161}, ${161})`, [`font-family`]: `cula`, height: `${100}%`}}, 
				[
					[`div`, {style: {margin: `${20}px ${24}px`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, [
								[`span`, {id: `vault`, style: {
									color: `#fff`,
									[`font-family`]: `cour`,
									[`font-size`]: `${17}px`,
									[`font-weight`]: 900,
                            		/*padding: `${1}px ${4}px`*/}}, `|naut`],
								[`span`, {style: {
									border: `${1}px solid #1185fe`,
									[`border-radius`]: `${100}px`,
									color: `#1185fe`,
									[`font-size`]: `${10}px`,
									[`font-weight`]: 300,
									[`margin-left`]: `${8}px`,
                            		padding: `${0}px ${6}px`}}, `BETA`], 
                            	[`div`, {class: `_gZz`}, 
                            		[[`div`, {style: {
										[`align-items`]: `center`, background: `rgb(${25}, ${25}, ${25})`, [`border-radius`]: `${.375}rem`, 
										display: (Clients.mug)? `none`: `flex`, [`justify-content`]: `center`, [`min-height`]: `${56}px`, opacity: 1,
										width: `${215}px`}}, 
										[[`a`, {href: `/signin`, style: {color: `#7abbff`, [`white-space`]: `nowrap`}}, `Open Wallet`]]]]]]]]],
					[`section`, { class: `tY0 _geQ`, style: {background: `inherit`, padding: `0 ${24}px`,  [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `0 auto`, [`justify-content`]: `center`}}, 
							[ 
								[`div`, {class: `_gxM _geQ`}, 
									[
										[`img`, {src: `/ssl/given/svg/tokens/btc.svg`, style: {
											[`max-width`]: `${24}px`, transform: `translateX(${0}px)`}}],
										[`img`, {src: `/ssl/given/svg/tokens/usdt.svg`, style: {
											[`max-width`]: `${26}px`, transform: `translateX(${-11.33337}px)`}}],
										[`div`, {class: `_eYG`, style: {[`margin-left`]: `${6}px`}}, 
											[[`span`, {style: {
												color: `#fff`, [`font-family`]: `walsh`, [`font-weight`]: 400, 
												[`font-size`]: `${28}px`}}, `BTC / USDT`]]],
										[`span`, {style: {[`font-size`]: `${10}px`, [`font-weight`]: 400, [`margin-right`]: `${12}px`}}, `ROI`],
										[`div`, {class: `_gZz`, style: {flex: 0}}, 
											[
												[`div`, {class: `_gxM _geQ`, style: {
													background: `rgb(${255}, ${215}, ${2}, ${.17})`, [`border-radius`]: `${.25}rem`, opacity: 1,
																padding: `${4}px`}}, 
																[
																	[`span`, {class: `v20240221434`, style: {height: `${15}px`, [`margin-right`]: `${8}px`, width: `${15}px`}}],
																	[`span`, {style: {
																		color: `rgb(${255}, ${215}, ${2})`, [`font-family`]: `walsh`, 
																		[`font-size`]: `${14}px`}}, `+${(Web.pnl[0]).toFixed(2)}%`]]]]]]], 
								[`div`, {style: {[`margin-top`]: `${32}px`}}, 
									[[`div`, {style: {
										background: `rgba(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${8}px`, opacity: 1,
										padding: `${24}px ${24}px`}}, 
										[
											[`div`, {class: `_gxM _geQ`}, 
												[
													[`span`, {style: {
														color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: ``, [`font-weight`]: 400}}, 
														`Profit projection`]]], 
											[`div`, {style: {[`margin-top`]: `${24}px`}}, 
												[[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${255}, ${255}, ${255}, ${.25})`,
													[`border-radius`]: `${8}px`, height: `${80}px`, padding: `${12}px ${16}px`}}, 
													[
														[`img`, {src: `/ssl/given/svg/tokens/usdt.svg`, style: {
															[`max-width`]: `${24}px`,}}],
														[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
															[[`span`, {style: {
																color: `#fff`, [`font-family`]: `walsh`, [`font-weight`]: 400, 
																[`font-size`]: `${24}px`}}, `USDT`]]], 
														[`div`, {class: `_gZz`}, 
															[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																[
																	[`div`, {class: `_gxM _gZz _geQ`}, 
																		[
																			[`span`, {class: `v202312301635`, style: {
																				height: `${20}px`, [`margin-right`]: `${8}px`, width: `${20}px`}}],
																			[`span`, {style: {
																				[`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																				[`font-weight`]: 400, [`letter-spacing`]: `${.75}px`}}, 
																				`${parseFloat(Web.debit).toFixed(2)}`]]], 
																	[`div`, {class: `_gxM _gZz _geQ`}, 
																		[[`input`, {id: `projectSlot`, placeholder: `0.0`, style: {
																			background: `transparent`, [`border-style`]: `none`, 
																			color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, 
																			[`font-size`]: `${24}px`, [`font-weight`]: 400, 
																			[`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, 
																			[`text-align`]: `right`, width: `${100}%`}}]]]]]]]]]]], 
											[`div`, {id: `estSlot`, style: {display: `none`, [`margin-top`]: `${32}px`}}, 
												[[`div`, {style: {
													background: `rgba(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${.25}rem`, color: `rgb(${230}, ${230}, ${230})`, padding: `${20}px ${24}px`}}, 
													[
														[`div`, {class: `_gxM _geQ`}, 
															[
																[`span`, {style: {flex: 3, [`font-size`]: `${14.3333}px`, [`font-weight`]: 600}}, `Est. 30 Days Min. Profit`],
																[`div`, {class: `_gZz`, style: {flex: 0}}, 
																	[
																		[`div`, {class: `_gxM _geQ`, style: {
																			background: `rgb(${255}, ${215}, ${2}, ${.17})`, [`border-radius`]: `${.25}rem`, opacity: 1,
																			padding: `${4}px ${8}px`}}, 
																			[
																				[`span`, {class: `v20240221434`, style: {height: `${15}px`, [`margin-right`]: `${8}px`, width: `${15}px`}}],
																				[`span`, {id: `pnlSlot`, style: {
																					color: `rgb(${255}, ${215}, ${2})`, [`font-family`]: `walsh`, 
																					[`font-size`]: `${14}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, [`white-space`]: `nowrap`}}, `+${(Web.pnl[0]).toFixed(2)} USDT`]]]]]]], 
														[`span`, {style: {[`font-size`]: `${13.6667}px`, [`font-weight`]: 500, [`line-height`]: `${20}px`, [`margin-top`]: `${8}px`}}, 
															`With promoted liquidity pools, you will earn commission from trades proportional to your pool share, 
															as well as special liquidity mining rewards.`]]]]], 
											[`div`, {style: {[`margin-top`]: `${24}px`}}, 
												[[`button`, {id: `initWallet`, style: {
													background: `#7abbff`, border: `none`, [`border-radius`]: `${100}px`, color: `rgb(${6}, ${6}, ${6})`, 
													cursor: `pointer`, [`font-family`]: `walsh`,[`font-size`]: `${16}px`, [`font-weight`]: 700, height: `${56}px`,
													[`letter-spacing`]: `${.75}px`, padding: `0 ${24}px`}}, `CONNECT WALLET`]]]]]]]]]]]]];
	},

	referrals: function (Web) {

		let Refs = [[]];

		Web.refs.forEach(Ref => {

			Refs[0].push([`div`, {class: `_gxM _geQ`, style: {margin: `${6}px 0`}}, 
				[
					[`span`, {id: ``, style: {background: `#0000ffe5`, color: `#fff`, [`font-family`]: `geometria`, [`font-size`]: `${13}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`line-height`]: `${18}px`, padding: `${2}px ${8}px`}}, Ref.promo],
					[`div`, {class: `_gZz`}, 
						[[`span`, {style: {color: `#acacac`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, [`letter-spacing`]: 0}}, Tools.logs(Ref.ts)]]]]]);
		});

		return [
			`main`, {id: ``, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[[`div`, {style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `${36}px auto ${0}`, [`justify-content`]: `center`}}, 
						[
							[`div`, {style: {padding: `${48}px ${24}px ${12}px`}}, 
								[
									[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Unclaimed referrals`], 
												[`div`, {class: `_gZz`}, [[`a`, {id: `referral`, href: `javascript:;`, style: {background: `#0000ff30`, color: `blue`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${8}px`, padding: `${4}px ${8}px`, [`white-space`]: `nowrap`}}, `generate referral`]]]]],
									[`div`, {style: {[`margin-top`]: `${18}px`}}, Refs[0]]]]]]]];
	},

	spot: function (Web) {

		let paramify = (PARA) => {

			PARA[0].forEach(Feat => {

				PARA[1].push([`div`, {style: {width: `${Feat[1]}%`}}, 
					[[`span`, {style: {color: `#8e8e8e`, [`font-size`]: `${10}px`, [`font-weight`]: 300, overflow: `hidden`, [`text-align`]: (Feat[2])? `right`: `left`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, Feat[0]]]]);
			});

			return PARA[1];
		};

		let Pairs = [
		[[`pair`, 30], [`price`, 22.5, true], [`24h %`, 15, true], [`24h vol.`, 15, true],, [``, 17.5, true]],
		[], []];

		for (let spot in Web.spot) {

			let Spot = Web.spot[spot];

			Pairs[2].push([`div`, {id: spot, class: `_geQ _gxM`, style: {padding: `${6}px ${24}px`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {[`width`]: `${30}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/${Constants.SVG[Spot[0][0]]}.svg`, style: {height: `${20}px`, [`max-width`]: `${20}px`, transform: `translateX(${0}px)`}}],
							[`img`, {src: `/ssl/given/svg/${Constants.SVG[Spot[0][1]]}.svg`, style: {height: `${20}px`,[`max-width`]: `${20}px`, transform: `translateX(${-6.6667}px)`}}], 
							[`div`, {class: `_gxM`, style: {[`align-items`]: `baseline`}}, 
								[ 
									[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 300, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`}}, `${Spot[0][0]}`], 
									[`span`, {style: {color: `#8e8e8e`, [`font-size`]: `${10}px`, [`font-weight`]: 300, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`}}, `/${Spot[0][1]}`]]]]], 
					[`div`, {style: {width: `${22.5}%`}}, 
						[[`span`, {id: `COST`, style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`,[`font-weight`]: 300, [`letter-spacing`]: `${0}px`, [`text-align`]: `right`}}, `-`]]], 
					[`div`, {style: {width: `${15}%`}}, 
						[[`span`, {id: `MOD`, style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 300, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `-`]]], 
					[`div`, {style: {width: `${15}%`}}, 
						[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`,[`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `-`]]], 
					[`div`, {style: {[`align-items`]: `end`, width: `${17.5}%`}}, 
						[[`a`, {for: ``, id: ``, href: `/spot/${Spot[0][0].toUpperCase()}-${Spot[0][1].toUpperCase()}`, style: {background: `blue`, color: `#fff`, [`font-size`]: `${12}px`, [`font-weight`]: 300, padding: `${4}px ${8}px`, [`white-space`]: `nowrap`}}, `trade`]]]]])
		}

		return [
			`main`, {id: `spot`, class: `_tY0`, style: {background: `#000`, color: `#fff`, [`font-family`]: `litera`, height: `${100}%`}}, 
				[
					[`div`, {style: {background: `#07073c`, [`border-bottom`]: `${1}px solid #0000ff30`, [`mx-width`]: `${1280}px`, padding: `${12}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `v202312301635`, style: {height: `${32}px`, width: `${32}px`}}], 
								[`div`, {class: `_eYG`}, 
									[[`span`, {style: {[`font-family`]: ``, [`font-size`]: `${12}px`, [`font-weight`]: 300}}, `Spot`]]],  
								[`div`, {class: `_eYG`}, []], 
								[`div`, {class: `_gZz`, style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
									[[`a`, {class: `v202204261406`, href: (!Clients.mug)? `/signin`: `javascript:;`, style: {height: `${24}px`, width: `${24}px`}}]]]]]]],
					[`div`, {style: {[`max-width`]: `${1280}px`, width: `${100}%`, margin: `${64}px auto`, [`justify-content`]: `center`}}, 
						[ 
							//[`section`, {style: {height:`${64}px`}}],
							[`div`, {style: {padding: `${0}px ${0}px ${12}px`}}, 
								[
									[`div`, {style: {[`margin-top`]: `${12}px`}}, 
										[
											[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
												[
													[`span`, {style: {color: ``, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px`}}, `Spot Prices`]]],
											[`div`, {class: `_geQ _gxM`, style: {[`margin`]: `${12}px ${24}px 0`}}, paramify([Pairs[0], []])],
											[`div`, {}, Pairs[2]]]]]]]], 
					[`div`, {style: {background: `#000`, [`border-top`]: `${1}px solid #0000ff30`, bottom: 0, magin: `auto`, [`mx-width`]: `${1280}px`, padding: `${6}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 300}}, `joltnaut ®`],
								[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `2024`], 
								[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#535353`, [`font-family`]: `geometria`, [`font-size`]: `${10}px`, [`font-weight`]: 300}}, `v0.24.3`]]]]]]]]];
	},

	swapOffline: function (Arg) {

		return [
			`main`, {style: {
				background: `rgb(5, 5, 5)`, color: `rgb(${161}, ${161}, ${161})`, [`font-family`]: `cula`, height: `${100}%`}}, 
				[
					[`div`, {style: {margin: `${20}px ${24}px`}}, 
						[]],
					[`section`, { class: `tY0 _geQ`, style: {background: `inherit`, padding: `0 ${24}px`,  [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `0 auto`, [`justify-content`]: `center`}}, 
							[ 
								[`div`, {}, 
									[[`div`, {style: {
										background: `rgba(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${8}px`, opacity: 1,
										padding: `${24}px ${24}px`}}, 
										[[`div`, {},
											[
												[`div`, {style: {[`margin-bottom`]: `${24}px`}}, 
													[
														[`div`, {class: `_gxM _geQ`}, 
															[[`span`, {style: {
																color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, [`font-size`]: `${19}px`, 
																[`font-weight`]: 600, [`line-height`]: `${32}px`, [`letter-spacing`]: `${.75}px`}}, 
																`TRADING IN SESSION`]]]]], 
												[`div`, {}, 
													[
														[`div`, {class: `_geQ _gxM`, style: {
															background: `rgba(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${8}px`, 
															padding: `${16}px ${12}px`}}, 
															[
																[`span`, {style: {color: `rgb(${161}, ${161}, ${161})`, [`font-weight`]: 400, 
																	[`font-size`]: `${13}px`, [`line-height`]: `${19.6}px`, [`margin-bottom`]: `${0}px`, 
																	[`text-transform`]: `capitalize`}}, `Daily Withdrawal Period`],
																[`div`, {class: `_gZz`}, 
																	[[`span`, {style: {
																		color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																		[`font-weight`]: 600, [`line-height`]: `${32}px`, [`letter-spacing`]: `${.75}px`}}, 
																		`0900GMT - 1600GMT`]]]]],
														[`div`, {class: `_geQ _gxM`, style: {
															background: `rgba(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${8}px`, [`margin-top`]: `${8}px`, 
															padding: `${16}px ${12}px`}}, 
															[
																[`span`, {style: {color: `rgb(${161}, ${161}, ${161})`, [`font-weight`]: 400, 
																	[`font-size`]: `${13}px`, [`line-height`]: `${19.6}px`, [`margin-bottom`]: `${0}px`, 
																	[`text-transform`]: `capitalize`}}, `Daily Withdrawal Limit`],
																[`div`, {class: `_gZz`}, 
																	[[`span`, {style: {
																		color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																		[`font-weight`]: 600, [`line-height`]: `${32}px`, [`letter-spacing`]: `${.75}px`}}, 
																		`9,000 KES`]]]]]]]]]]]]]]]]]]];
	},

	terminal: function(Web) {

		let Param = [
			[], 
			[[`client`, 20], [`referral`, 20, true], [`inflow`, 22.5, true], [`outflow`, 17.5, true], [`balance`, 20, true]]];

		Param[1].forEach(Feat => {

			Param[0].push([`div`, {style: {width: `${Feat[1]}%`}}, 
				[[`span`, {style: {color: `#b3b3b3`, [`font-size`]: `${10}px`, [`font-weight`]: 300, overflow: `hidden`, [`text-align`]: (Feat[2])? `right`: `left`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, Feat[0]]]])

		});

		let Client = [[]];

		Web.clients.forEach(Mug => {

			Client[0].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {width: `${20}%`}}, 
						[
							[`svg`, {style: {[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
								[
									[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
									[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {[`text-transform`]: `uppercase`, [`letter-spacing`]: `normal`, [`font-size`]: `${11}px`}}, Mug.mail[0]]]], 
							[`div`, {style: {color: `#000`, [`max-width`]: `${100}%`}}, 
								[[`span`, {style: {color: `#515151`, [`font-size`]: `${12}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`txt-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Mug.mail}`]]]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
					[`span`, {style: {color: `blue`, [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`, [`text-decoration`]: `underline`}}, Mug.ref]]], 
					[`div`, {style: {width: `${22.5}%`}}, 
						[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `-`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[[`span`, {style: {color: `H24[3]`, [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, ``]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}},  `${(Mug.debit).toFixed(2)}`]]]]]);});

		return [
			`main`, {id: `terminal`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[
					[`div`, {style: {background: `#fff`, [`border-bottom`]: `${1}px solid #d9d9d9`, magin: `auto`, [`mx-width`]: `${1280}px`, padding: `${12}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `v202312301635`, style: {height: `${32}px`, width: `${32}px`}}], 
								[`div`, {class: `_eYG`}, []], 
								[`div`, {class: `_gZz`, style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
									[
										/**[`a`, {href: `/autotrade/liquidate`, style: {background: `blue`, color: `#fff`, margin: `0 0 0 ${8}px`, padding: `${4}px ${8}px`}}, `Liquidate`],
										[`a`, {href: `/autotrade/wallet`, style: {background: `blue`, color: `#fff`, margin: `0 0 0 ${8}px`, padding: `${4}px ${8}px`}}, `Deposit`]**/]]]]]],
					[`div`, {style: {[`max-width`]: `${1280}px`, width: `${100}%`, margin: `${64}px auto`, [`justify-content`]: `center`}}, 
						[ 
							[`div`, {style: {[`boder-bottom`]: `${1}px solid #d9d9d9`, padding: `${0}px ${24}px ${12}px`}}, 
								[
									[`h1`, {style: {color: `#000`, [`font-size`]: `${16}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, margin: `${12}px ${0} ${0}`, [`text-transform`]: `uppercase`}}, `Portfolio Management`],
									[`div`, {style: {[`margin-top`]: `${12}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `My Clients`], 
												[`div`, {class: `_gZz`}, [[`a`, {href: `/360/referrals`, style: {background: `#0000ff30`, color: `blue`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${8}px`, padding: `${4}px ${8}px`, [`white-space`]: `nowrap`}}, `generate referrals`]]]]]]],
									[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, Param[0]],
									[`div`, {}, Client[0]]]]]], 
					[`div`, {style: {background: `#fff`, [`border-top`]: `${1}px solid #d9d9d9`, bottom: 0, magin: `auto`, [`mx-width`]: `${1280}px`, padding: `${6}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, `joltnaut ®`],
								[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `2024`], 
								[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#535353`, [`font-family`]: `geometria`, [`font-size`]: `${10}px`, [`font-weight`]: 300}}, `v0.24.3`]]]]]]]]];
	},

	terminalSlot: function () {

		let Slot = {
			action: [`signin`, `signin`],
			slots: [[`work email`, `email`, `email`], [`passcode`, `lock`, `password`]]
		}, TC = [[], []];

		let Slots = [];

		Slot.slots.forEach(Slot => {

			let Tip = [[], [], []];

			if (Slot[0] === `passcode`) {

				Tip[1] = [`div`, {class: `_gxM _geQ`, style: {margin: `${12}px 0 -${8}px`}}, 
					[[`div`, {class: `_gZz`}, 
						[[`a`, {href: `javascript:;`, style: {
							[`text-decoration`]: `underline`, color: `#666`, [`font-size`]: `${10}px`, 
							[`margin-left`]: `${12}px`}}, `FORGOT PASSWORD?`]]]]]
			}

			Slots.push([`div`, {class: `_sZ2`}, 
				[
					[`label`, {style: {[`font-weight`]: 600, margin: `0 ${0}px ${12}px`, color: `#5c5e62`, [`line-height`]: 1.414, [`text-transform`]: `capitalize`}}, 
						[[`span`, {}, Slot[0]]]], 
					[`div`, {class: `_aXZ`}, [[`input`, {id: Slot[1], type: Slot[2]}]]], Tip[0], Tip[1]]]);

		});

		return [`section`, {}, 
			[ 
				[`main`, {id: `clientSlot`, class: `_tY0`, style: {[`font-family`]: `litera`, [`font-size`]: `${12}px`, height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `_geQ`, style: {[`max-width`]: `${362}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _aXZ`, style: {[`margin-bottom`]: `-${10}px`}}, 
								[[`a`, {class: `-_tX v202304191915`, href: `/`, style: {height: `${36}px`, width: `${36}px`}}]]],
									[`h2`, {}, `Joltnaut 360 Signin`], 
									[`div`, {class: `_aXZ`, style: {margin: `${16}px 0 ${40}px`}}, 
										[
											[`div`, {}, Slots],
											[`div`, {class: `_gM_a _agM _guZ`, style: {width: `${100}%`, [`block-size`]: `${40}px`, background: `#1185fe`}}, 
												[[`a`, {id: `terminalSlot`, class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, style: {[`text-transform`]: `capitalize`}}, `Sign in`]]],
											TC[0], TC[1]]]]]]]]]
	}, 

	trader: function (Web) {

		let Flag = [[`BTC`, `ETH`, `LTC`, `USDT`, `XMR`, `XRP`], {USD: `us`}];

		for (let coin in Web.spot) Web.debit += Web.spot[coin]*Web.xUSD[coin]
		
		return [
			`main`, {id: `trader`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[
					[`div`, {style: {background: `#fff`, [`border-bottom`]: `${1}px solid #d9d9d9`, magin: `auto`, [`mx-width`]: `${1280}px`, padding: `${12}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `v202312301635`, style: {height: `${32}px`, width: `${32}px`}}], 
								[`div`, {class: `_eYG`}, 
									[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${15}px`, [`font-weight`]: 300, [`letter-spacing`]: 0}}, `${parseFloat(Web.debit).toFixed(2)} USD`]]], 
								[`div`, {class: `_gZz`, style: {display: `none`, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
									[
										[`a`, {href: `javascript:;`, style: {background: `blue`, color: `#fff`, margin: `0 0 0 ${8}px`, padding: `${4}px ${8}px`}}, `Transfer`],
										[`a`, {href: `javascript:;`, style: {background: `blue`, color: `#fff`, margin: `0 0 0 ${8}px`, padding: `${4}px ${8}px`}}, `Swap`]]]]]]],
					[`div`, {style: {[`max-width`]: `${1280}px`, width: `${100}%`, margin: `${64}px auto`, [`justify-content`]: `center`}}, 
						[ 
							[`div`, {style: {[`margin-top`]: `${12}px`, padding: `${0}px ${24}px ${12}px`}}, 
								[
									[`div`, {class: `_gxM _geQ`}, 
										[
											[`img`, {src: `/ssl/given/svg/${(Flag[0].indexOf(Web.pair[0]) > -1)? `tokens`: `flags`}/${(Flag[0].indexOf(Web.pair[0]) > -1)? Web.pair[0].toLowerCase(): (Flag[1][Web.pair[0]])}.svg`, style: {[`max-width`]: `${24}px`, transform: `translateX(${0}px)`}}],
											[`img`, {src: `/ssl/given/svg/${(Flag[0].indexOf(Web.pair[1]) > -1)? `tokens`: `flags`}/${(Flag[0].indexOf(Web.pair[1]) > -1)? Web.pair[0].toLowerCase(): Flag[1][Web.pair[1]]}.svg`, style: {[`max-width`]: `${24}px`, transform: `translateX(${-7.6667}px)`}}], 
											[`div`, {},
												[
													[`span`, {style: {[`font-size`]: `${12}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`}}, `${Web.pair[0]}-${Web.pair[1]}`], 
													[`span`, {style: {color: `#696969`, [`font-size`]: `${12}px`, [`line-height`]: `${14}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`}}, `Spot Market`]]],
											[`div`, {style: {[`margin-left`]: `${48}px`}},
												[
													[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, [`letter-spacing`]: 0}}, `${(Web.value).toLocaleString()} ${Web.pair[1]}`], 
													[`span`, {style: {color: `#696969`, [`font-size`]: `${12}px`, [`line-height`]: `${14}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`}}, `Market Price`]]]]]]], 
							[`div`, {style: {[`margin-top`]: `${24}px`, padding: `${0}px ${24}px ${12}px`}}, 
								[
									[`div`, {class: `_geQ _gxM`}, 
										[
											[`div`, {style: {padding: `0 ${12}px 0 0`, width: `${50}%`}}, 
												[
													[`div`, {class: `_gxM _geQ`},
														[
															[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600, overflow: `hidden`, [`text-overflow`]: `ellipsis`}}, `BUY`], 
															[`div`, {class: `_gZz`}, 
																[
																	[`span`, {class: `v202312301635`, style: {height: `${24}px`, width: `${24}px`}}],
																	[`span`, {style: {color: `#696969`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`line-height`]: `${14}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`}}, `${(Web.spot[Web.pair[1].toLowerCase()])? Web.spot[Web.pair[1].toLowerCase()].toFixed(2): `${(0).toFixed(2)}`} ${Web.pair[1]}`]]]]],
													[`div`, {class: `_gxM _geQ`, style: {padding: `${12}px 0`}},
														[
															[`span`, {style: {[`font-size`]: `${12}px`}}, `Price`], 
															[`div`, {class: `_gZz`}, 
																[[`span`, {style: {color: `green`, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Market`]]]]],
													[`div`, {style: {[`margin`]: `${6}px 0`}}, 
														[
															[`span`, {style: {[`font-size`]: `${12}px`, [`margin-bottom`]: `${6}px`}}, `Amount`],
															[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${24}px`, height: `${24}px`, padding: `${6}px ${16}px`}}, 
																[
																	[`img`, {src: `/ssl/given/svg/tokens/${Web.pair[0].toLowerCase()}.svg`, style: {[`max-width`]: `${18}px`,}}],
																	[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
																		[[`span`, {style: {color: `#515151`, [`font-weight`]: 600, [`font-size`]: `${12}px`}}, `${Web.pair[0]}`]]], 
																	[`div`, {class: `_gZz`}, 
																		[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																			[ 
																				[`div`, {class: `_gxM _gZz _geQ`}, 
																					[[`input`, {id: `askSlot`, placeholder: `0.00`, style: {background: `transparent`, [`border-style`]: `none`, color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, [`text-align`]: `right`, width: `${100}%`}}]]]]]]]]]]],
													[`a`, {href: `javascript:;`, id: `pollBook`, for: `askSlot`, symbol: Web.pair[1].toLowerCase(), style: {background: `#0fd064`, color: `#fff`, [`font-weight`]: 600, [`font-size`]: `${12}px`, margin: `${16}px 0 0 0`, padding: `${8}px ${8}px`, [`text-align`]: `center`}}, `BUY ${Web.pair[0]}`]]],
											[`div`, {style: {padding: `0 0 0 ${12}px`, width: `${50}%`}}, 
												[
													[`div`, {class: `_gxM _geQ`},
														[
															[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, `SELL`], 
															[`div`, {class: `_gZz`}, 
																[
																	[`span`, {class: `v202312301635`, style: {height: `${24}px`, width: `${24}px`}}],
																	[`span`, {style: {color: `#696969`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`line-height`]: `${14}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`}}, `${(Web.spot[Web.pair[0].toLowerCase()])? Web.spot[Web.pair[0].toLowerCase()]: `${(0).toFixed(2)}`} ${Web.pair[0]}`]]]]],
													[`div`, {class: `_gxM _geQ`, style: {padding: `${12}px 0`}},
														[
															[`span`, {style: {[`font-size`]: `${12}px`}}, `Price`], 
															[`div`, {class: `_gZz`}, 
																[[`span`, {style: {color: `red`, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Market`]]]]],
													[`div`, {style: {[`margin`]: `${6}px 0`}}, 
														[
															[`span`, {style: {[`font-size`]: `${12}px`, [`margin-bottom`]: `${6}px`}}, `Amount`],
															[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${24}px`, height: `${24}px`, padding: `${6}px ${16}px`}}, 
																[
																	[`img`, {src: `/ssl/given/svg/tokens/${Web.pair[0].toLowerCase()}.svg`, style: {[`max-width`]: `${18}px`}}],
																	[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
																		[[`span`, {style: {color: `#515151`, [`font-weight`]: 600, [`font-size`]: `${12}px`}}, `${Web.pair[0]}`]]], 
																	[`div`, {class: `_gZz`}, 
																		[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																			[ 
																				[`div`, {class: `_gxM _gZz _geQ`}, 
																					[[`input`, {id: `bidSlot`, placeholder: `0.00`, style: {background: `transparent`, [`border-style`]: `none`, color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, [`text-align`]: `right`, width: `${100}%`}}]]]]]]]]]]],
													[`a`, {href: `javascript:;`, id: `pollBook`, for: `bidSlot`, symbol: Web.pair[0].toLowerCase(), style: {background: `#d00f33`, color: `#fff`, [`font-weight`]: 600, [`font-size`]: `${12}px`, margin: `${16}px 0 0 0`, padding: `${8}px ${8}px`, [`text-align`]: `center`}}, `SELL ${Web.pair[0]}`]]]]]]]]], this.us()]]
	},

	txCoin: function (Web) {

		let Net = {btc: `BTC`, usdt: `TRX (TRC20)`}

		return [
			`main`, {id: `txCoin`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[[`div`, {style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `${36}px auto ${0}`, [`justify-content`]: `center`}}, 
						[
							[`div`, {style: {padding: `${48}px ${24}px ${12}px`}}, 
								[
									[`div`, {class: `_gxM _geQ`},
										[
											[`h2`, {style: {color: `blue`, [`font-size`]: `${14}px`, [`font-weight`]: 600, margin: `${0}px ${0} ${0}`}}, `Deposit to wallet within`], 
											[`div`, {class: `_gZz`}, 
												[
													[`span`, {class: `v202301071417`}], 
													[`span`, {id: `lapse`, style: {color: `#000`, [`font-family`]: `arcane`, [`font-size`]: `${12}px`, [`margin-left`]: `${8}px`}}, ``]]]]],
									[`div`, {style: {[`margin-top`]: `${24}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${24}px`, height: `${40}px`, padding: `${12}px ${16}px`}}, 
											[
												[`img`, {src: `/ssl/given/svg/tokens/${Web.symbol}.svg`, style: {[`max-width`]: `${18}px`,}}],
												[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
													[[`span`, {style: {color: `#000`, [`font-weight`]: 600, [`font-size`]: `${18}px`}}, `${Web.symbol}`]]], 
														[`div`, {class: `_gZz`}, 
															[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																[ 
																	[`div`, {class: `_gxM _gZz _geQ`}, 
																		[[`span`, {style: {color: `#000`, [`font-family`]: `arcane`, [`font-size`]: `${20}px`, [`font-weight`]: 400, [`text-align`]: `right`}}, `${Web.float}`]]]]]]]]]]],
									[`div`, {style: {[`margin`]: `${24}px 0 ${48}px`}}, 
										[
											[`h2`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `${0}px ${0} ${0}`}}, `Wallet Address`],
											[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${24}px`, height: `${40}px`, margin: `${24}px ${0} ${0}`, padding: `${12}px ${16}px`}}, 
												[
													[`span`, {style: {color: `#515151`, [`font-size`]: `${14}px`, [`font-weight`]: 600, [`line-height`]: `${32}px`}}, `${Web.b64}`]]]]], 
									[`div`, {style: {[`border-top`]: `${1}px solid #d9d9d9`, padding: `${12}px 0`}}, 
										[[`div`, {class: `_gxM _geQ`}, 
											[
												[`span`, {style: {color: `#6c6b6b`, [`font-size`]: `${12}px`, [`font-weight`]: 600,}}, `Network`], 
												[`div`, {class: `_gZz`}, 
													[[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600,}}, `${Net[Web.symbol]}`]]]]]]]]]]]]];
	},

	us: function () {

		return [`footer`, {style: {[`border-top`]: `${1}px solid #d9d9d9`, margin: `${24}px auto`, [`max-width`]: `${1280}px`, padding: `${48}px ${24}px 0`, width: `${100}%`}}, 
			[
				[`div`, {class: `_gxM _geQ`}, 
					[
						[`div`, {class: `_geQ`}, 
										[
											[`div`, {style: {width: `${100}%`}}, 
												[
													[`h4`, {style: {color: `#000`, [`font-size`]: `${14}px`, [`font-weight`]: 600, [`margin-bottom`]: `${12}px`}}, `Products`],
													[`a`, {style: {color: `#535353`, [`font-size`]: `${12}px`, [`font-weight`]: 300, [`margin-bottom`]: `${12}px`}, href: `/u/wallet`}, `Wallet`],
													[`a`, {style: {color: `#535353`, [`font-size`]: `${12}px`, [`font-weight`]: 300, [`margin-bottom`]: `${12}px`}, href: `/earn`}, `Earn`]]]]],
									[`div`, {class: `_geQ`}, 
										[
											[`div`, {style: {width: `${100}%`}}, 
												[
													[`h4`, {style: {color: `#000`, [`font-size`]: `${14}px`, [`font-weight`]: 600, [`margin-bottom`]: `${12}px`}}, `Us`],
													[`a`, {class: `_geQ _gxM`, style: {color: `#535353`, display: `flex`, [`font-size`]: `${12}px`, [`font-weight`]: 300, [`margin-bottom`]: `${12}px`}, href: `/careers`}, 
														[
															[`span`, {}, `Careers`],
															[`span`, {style: {background: `blue`, color: `#fff`, [`font-size`]: `${10}px`, [`line-height`]: `${13}px`, margin: `0 ${8}px`, padding: `${2}px ${8}px`}}, `HIRING`],
													[`a`, {style: {color: `#535353`, [`font-size`]: `${12}px`, [`font-weight`]: 300, [`margin-bottom`]: `${12}px`}, href: `javascript:;`}, `Press`]]]]]]]]],
							[`div`, {style: {[`border-top`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, color: `#535353`, [`font-size`]: `${10}px`, [`line-height`]: `${16}px`, margin: `${24}px 0`, padding: `${12}px 0`, [`text-transform`]: `uppercase`}}, 
								[
									[`p`, {style: {padding: `0 0 ${8}px`}}, `*jolnaut offers its products and services in partnership with licensed transmitters in their respective jurisdictions.`],
									[`p`, {style: {padding: `0 0 ${8}px`}}, `*all trademarks and brand names belong to their respective owners, use of these trademarks and brand names do not represent endorsement by or association with joltnaut.`],
									[`p`, {style: {padding: `0 0 ${8}px`}}, `*important information about procedures for opening a new account: to help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify and record information that identifies each person who opens an account, what this means for you: when you open an account we will ask for your name, address, date of birth and other information that will help us identify you.`]]],
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, `joltnaut ®`],
									[`span`, {style: {[`font-family`]: `arcane`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `2024`], 
									[`div`, {class: `_gZz`}, [[`span`, {style: {color: `#535353`, [`font-family`]: `arcane`, [`font-size`]: `${10}px`, [`font-weight`]: 300}}, `v0.24.3`]]]]]]]
	},

	vaultOutSplash: function () {

		return [
			`section`, {}, 
				[[`main`, {id: `vaultOutSplash`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`h2`, {style: {[`font-weight`]: 600, [`text-align`]: `center`}}, `MARGIN TRADE IN SESSION`],
							[`p`, {style: {[`font-weight`]: 300, [`margin-top`]: `${12}px`, [`text-align`]: `center`}}, `To improve productivity and profit 
							margins for our clients joltnaut has introduced margin trades with longer runtimes, to avoid asset growth slippage while in session. 
							The new withdrawal feature will now be available every time a margin call is executed.`]]]]]]]
	},

	vaultOutTRON20: function (Arg) {

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultSlot`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {}, `WITHDRAW CRYPTO (TETHER USD)`], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `v202311051955`, href: `/my/wallet`, style: {height:`${13}px`, width:`${13}px`}}]]]]], 
							[`div`, {style: {margin: `${16}px 0 ${40}px`}}, 
								[
									[`div`, {style: {
										[`line-height`]: 1.5, [`margin-top`]: `${12}px`, 
										padding: `${10}px ${8}px`, border: `${1}px solid #e3e3e3`, [`border-radius`]: `${16}px`}}, 
										[
											[`span`, {style: {[`font-weight`]: 600}}, `Tether USD`], 
											[`span`, {style: {[`font-family`]: `geometria`, [`font-weight`]: 300}}, `${Arg.hold.toFixed(3)} USDT`]]],
									[`div`, {style: {
										[`margin-top`]: `${18}px`, 
										padding: `${10}px ${8}px`, border: `${1}px solid #e3e3e3`, [`border-radius`]: `${16}px`}}, 
										[
											[`span`, {}, `Network`], 
											[`span`, {style: {[`font-weight`]: 600}}, `TRON (TRC20)`]]],
									[`span`, {style: {
										background: `#fbd6b545`, border: `${1}px solid #ff871c45`, [`border-radius`]: `${16}px`, color: `#000`, 
										[`line-height`]: 1.5, [`margin-top`]: `${12}px`, [`font-weight`]: 600, 
										padding: `${12}px ${8}px`}}, `Only withdraw USDT to Tron addresses. Withdrawals to addresses generated 
										from other networks could result in loss of funds.`],
									[`span`, {style: {[`font-size`]: `${12}px`, [`margin-top`]: `${24}px`}}, `Withdraw to`],
									[`div`, {class: `_aXZ`, style: {margin: `${4}px 0 0`, overflow: `revert`}}, 
										[
											[`input`, {class: `_aXZ`, id: `idSlot`, placeholder: `USDT Address`, type: `text`, style: {
												color: `#666`, [`font-family`]: `litera`}}]]],
									[`span`, {style: {[`font-size`]: `${12}px`, [`margin-top`]: `${24}px`}}, `Withdrawal Amount`],
									[`div`, {class: `_aXZ`, style: {margin: `${4}px 0 0`, overflow: `revert`}}, 
										[
											[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `Minimum - 2.50 USDT`, type: `text`, style: {
												color: `#666`, [`font-family`]: `geometria`}}]]],
									[`div`, {class: `_gM_a _agM _guZ`, style: {
										[`margin-top`]: `${22}px`, 
										width: `${100}%`, [`block-size`]: `${40}px`, background: `#000`, border: `${1}px solid #000`}}, 
										[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `vaultOut`}, `Withdraw USDT`]]]]]]]]]]]		
	},

	vaultSlot: function () {

		return [
			`section`, {}, 
				[
					[`div`, {class: `_-tY`}, 
						[[`div`, {class: `_aXz`}, 
							[
								[`div`, {class: `_-Xg _gxM _geQ`}, 
									[
										[`a`, {class: `-_tX v202304191915`, style: {[`min-width`]: `${28}px`, height: `${28}px`}, href: ``}]]]]]]], 
					[`main`, {id: `inletWallet`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${65}px`}}, 
						[[`div`, {class: `_geQ`, style: {[`max-width`]: `${400}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`h2`, {}, `deposit usdt to reserve source wallet`], 
								[`div`, {class: `_aXZ`, style: {margin: `${16}px 0 ${40}px`}}, 
									[
										[`div`, {style: {[`margin-top`]: `${12}px`, padding: `${2}px ${8}px`, border: `${1}px solid #e3e3e3`, [`border-radius`]: `${6}px`, [`font-size`]: `${12}px`}}, 
											[[`span`, {style: {color: `#a2a2a2`}}, `Network`], [`span`, {style: {color: `#666`, [`font-weight`]: 600}}, `TRON`]]],
										[`span`, {style: {background: `#fbd6b545`, border: `${1}px solid #ff871c45`, [`border-radius`]: `${6}px`, [`margin-top`]: `${12}px`, color: `#84450c45`, [`font-size`]: `${12}px`, [`font-weight`]: 600, padding: `${2}px ${8}px`}}, `Only deposit USDT from the Tron network. Deposits of other assets or from other networks will be lost`],
										[`span`, {style: {color: `#666`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`margin-top`]: `${24}px`}}, `FROM`],
										[`div`, {style: {[`margin-top`]: `${8}px`, padding: `${2}px ${8}px`, border: `${1}px solid #e3e3e3`, [`border-radius`]: `${6}px`, [`font-size`]: `${12}px`}}, 
											[[`span`, {style: {color: `#a2a2a2`}}, `My Wallet`], [`span`, {style: {color: `#666`, [`font-family`]: `geometria`, [`font-size`]: `${14}px`, [`font-weight`]: 600}}, `${Clients.inlet}`]]],
										[`span`, {style: {color: `#666`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`margin-top`]: `${24}px`}}, `TO`],
										[`div`, {style: {[`margin-top`]: `${8}px`, padding: `${2}px ${8}px`, border: `${1}px solid #e3e3e3`, [`border-radius`]: `${6}px`, [`font-size`]: `${12}px`}}, 
											[[`span`, {style: {color: `#a2a2a2`}}, `Deposit Wallet`], [`span`, {style: {color: `#666`, [`font-family`]: `geometria`, [`font-size`]: `${14}px`, [`font-weight`]: 600}}, `TH9BuLCBLmCTfvtgBWB14Y4TxCjPdYx4WK`]]],
										[`span`, {style: {background: `#fbd6b545`, border: `${1}px solid #ff871c45`, [`border-radius`]: `${6}px`, [`margin-top`]: `${12}px`, color: `#84450c45`, [`font-size`]: `${12}px`, [`font-weight`]: 600, padding: `${2}px ${8}px`}}, `20 confirmations (typically 1 minute) required before funds are available for trading.`]]]]]]]]]
	},

	vaultSwap: function (Arg) {

		return [
			`main`, {style: {
				background: `rgb(5, 5, 5)`, color: `rgb(${161}, ${161}, ${161})`, [`font-family`]: `cula`, height: `${100}%`}}, 
				[
					[`div`, {style: {margin: `${20}px ${24}px`}}, 
						[]],
					[`section`, { class: `tY0 _geQ`, style: {background: `inherit`, padding: `0 ${24}px`,  [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `0 auto`, [`justify-content`]: `center`}}, 
							[ 
								[`div`, {}, 
									[[`div`, {style: {
										background: `rgba(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${8}px`, opacity: 1,
										padding: `${24}px ${24}px`}}, 
										[[`div`, {},
											[
												[`div`, {style: {[`margin-bottom`]: `${24}px`}}, 
													[
														[`div`, {class: `_gxM _geQ`}, 
															[[`span`, {style: {
																color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, [`font-size`]: `${19}px`, 
																[`font-weight`]: 600, [`line-height`]: `${32}px`, [`letter-spacing`]: `${.75}px`}}, 
																`CONVERSION`]]]]], 
												[`div`, {}, 
													[
														[`div`, {style: {
															background: `rgba(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${8}px`, 
															padding: `${16}px ${12}px`}}, 
															[
																[`span`, {style: {color: `rgb(${161}, ${161}, ${161})`, [`font-weight`]: 400, 
																	[`font-size`]: `${13}px`, [`line-height`]: `${19.6}px`, [`margin-bottom`]: `${8}px`, 
																	[`text-transform`]: `capitalize`}}, `you receive`],
															[`div`, {class: `_gxM _geQ`}, 
																[
																	[`img`, {src: `/ssl/given/svg/flags/${Arg[0][2]}.svg`, style: {
																		[`max-width`]: `${24}px`}}],
																	[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
																		[[`span`, {style: {color: `#fff`, [`font-family`]: `walsh`, 
																		[`font-weight`]: 400, [`font-size`]: `${24}px`, 
																		[`text-transform`]: `uppercase`}}, `${Arg[0][1]}`]]], 
																	[`div`, {class: `_gZz`}, 
																		[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																			[
																				[`div`, {class: `_gxM _gZz _geQ`}, 
																					[
																						[`span`, {class: `v202312301635`, style: {
																							height: `${20}px`, [`margin-right`]: `${8}px`, 
																							width: `${20}px`}}],
																						[`span`, {style: {
																							[`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																							[`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, 
																							[`text-transform`]: `uppercase`}}, 
																							`${parseFloat(Arg[1]*Arg[0][3]).toFixed(2)} ${Arg[0][1]}`]]], 
																				[`div`, {class: `_gxM _gZz _geQ`}, 
																					[[`input`, {id: `localSlot`, placeholder: `0.0`, style: {
																						background: `transparent`, [`border-style`]: `none`, 
																						color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, 
																						[`font-size`]: `${24}px`, [`font-weight`]: 400, 
																						[`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, 
																						[`text-align`]: `right`, width: `${100}%`}}]]]]]]]]]]],
														[`div`, {style: {
															background: `rgba(${255}, ${255}, ${255}, ${.08})`, [`border-radius`]: `${8}px`, 
															padding: `${16}px ${12}px`, [`margin-top`]: `${8}px`}}, 
															[
																[`span`, {style: {color: `rgb(${161}, ${161}, ${161})`, [`font-weight`]: 400, 
																	[`font-size`]: `${13}px`, [`line-height`]: `${19.6}px`, [`margin-bottom`]: `${8}px`, 
																	[`text-transform`]: `capitalize`}}, `you sell`],
															[`div`, {class: `_gxM _geQ`}, 
																[
																	[`img`, {src: `/ssl/given/svg/tokens/usdt.svg`, style: {
																		[`max-width`]: `${24}px`}}],
																	[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
																		[[`span`, {style: {color: `#fff`, [`font-family`]: `walsh`, 
																		[`font-weight`]: 400, [`font-size`]: `${24}px`, 
																		[`text-transform`]: `uppercase`}}, `usdt`]]], 
																	[`div`, {class: `_gZz`}, 
																		[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																			[
																				[`div`, {class: `_gxM _gZz _geQ`}, 
																					[
																						[`span`, {class: `v202312301635`, style: {
																							height: `${20}px`, [`margin-right`]: `${8}px`, 
																							width: `${20}px`}}],
																						[`span`, {style: {
																							[`font-family`]: `walsh`, [`font-size`]: `${14}px`, 
																							[`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, 
																							[`text-transform`]: `uppercase`}}, 
																							`${parseFloat(Arg[1]).toFixed(2)} USDT`]]], 
																				[`div`, {class: `_gxM _gZz _geQ`}, 
																					[[`input`, {id: `coinSlot`, placeholder: `0.0`, style: {
																						background: `transparent`, [`border-style`]: `none`, 
																						color: `rgb(${230}, ${230}, ${230})`, [`font-family`]: `walsh`, 
																						[`font-size`]: `${24}px`, [`font-weight`]: 400, 
																						[`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, 
																						[`text-align`]: `right`, width: `${100}%`}}]]]]]]]]]]]]], 
											[`div`, {style: {[`margin-top`]: `${24}px`}}, 
												[[`button`, {flag: `${Arg[0][1]}`, id: `swap`, style: {
													background: `#7abbff`, border: `none`, [`border-radius`]: `${100}px`, color: `rgb(${6}, ${6}, ${6})`, 
													cursor: `pointer`, [`font-family`]: `walsh`,[`font-size`]: `${16}px`, [`font-weight`]: 700, height: `${56}px`,
													[`letter-spacing`]: `${.75}px`, padding: `0 ${24}px`}}, `WITHDRAW`]]]]]]]]]]]]]]];
	},

	vetPeers: function (Arg) {

		let Vet = [[], []];

		Arg.forEach(MD => {

			Vet[1] = [];

			if (MD.peers[1] === Clients.mug) {

				Vet[1] = [`a`, {class: `v202203191304`, href: `javascript:;`, id: `letContact`, md: MD.md}]
			}

			Vet[0].push(
				[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${12}px`}}, 
					[
						[`svg`, {style: {[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
							[
								[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
								[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
										[`text-transform`]: `uppercase`, 
										[`letter-spacing`]: `normal`,
										[`font-size`]: `${11}px`}}, (MD.peers[0] === Clients.mug)? MD.mail[1][0]: MD.mail[0][0]]]], 
						[`div`, {class: `_eYG`, style: {[`line-height`]: 1.6}}, 
							[
								[`span`, {}, (MD.peers[0] === Clients.mug)? MD.mail[1]: MD.mail[0]],
								[`span`, {style: 
									{
										color: `#a3a3a3`,
										[`font-size`]: `${9}px`, 
										[`font-weight`]: 600}}, (MD.peers[0] === Clients.mug)? `YOU SENT A REQUEST`: `SENT YOU A REQUEST`]]],
						[`div`, {class: `_gZz`},
							[Vet[1]]]]]);
		});

		return [`main`, {class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: ``}, 
								[[`a`, {class: `v202311261657`, style: {width: `${14}px`, height: `${14}px`}, href: `/my/peers`}, ``]]], 
							[`div`, {class: `_eYG`}, 
								[[`span`, {}, `WALLET REQUESTS`]]]]]]], 
				[`main`, {id: `p2p`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {id: `contactVet`}, 
								[
									[`h1`, {style: {[`font-size`]: `${9}px`, [`font-weight`]: 600, [`margin-top`]: `${22}px`}}, `REQUESTS`],
									[`section`, {}, Vet[0]]]]]]]]]];
	},

	vetSwap: function (Vow) {

		let Slot = [
			`Please confirm that the withdrawal amount and withdrawal account details below are correct before confirming 
			payment.`,
			`I have initiated payment from my real-name verified payment account consistent with my registered name on joltnaut.`],

		VaultSlots = [];

		Vow.vaultSlots.forEach(Slot => {

				VaultSlots.push([
					`div`, {style: {[`font-weight`]: 400, padding: `${12}px 0`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[[`span`, {id: `slotColor`, style: {background: `#049b04`}}], [`span`, {}, `M-PESA Safaricom (Kenya)`]]],
							[`div`, {style: {[`font-size`]: `${14}px`, [`font-weight`]: 400, [`line-height`]: `${23}px`,}}, 
								[
									[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${14}px`}}, 
										[
											[`span`, {style: {color: `#666`,[`font-size`]: `${12}px`, [`font-weight`]: 300}}, `ACCOUNT NAME`], 
											[`div`, {class: `_gZz`}, [[`span`, {style: {[`font-family`]: `walsh`}}, (Slot.mug).toUpperCase()]]]]],
									[`div`, {class: `_gxM _geQ`}, 
										[
											[`span`, {style: {color: `#666`,[`font-size`]: `${12}px`, [`font-weight`]: 300}}, `PHONE NUMBER`], 
											[`div`, {class: `_gZz`}, [[`span`, {style: {[`font-family`]: `walsh`}}, Slot.id]]]]],
									[`div`, {class: `_gxM _geQ`}, 
										[
											[`span`, {style: {color: `#666`,[`font-size`]: `${12}px`, [`font-weight`]: 300}}, `AMOUNT DEBITED`], 
											[`div`, {class: `_gZz`}, [[`span`, {style: {[`font-family`]: `walsh`}}, `${(Vow.amount).toFixed(2)} KES`]]]]],
									[`div`, {class: `_gxM _geQ`}, 
										[
											[`span`, {style: {color: `#666`,[`font-size`]: `${12}px`, [`font-weight`]: 300}}, `WAIT TIME`], 
											[`div`, {class: `_gZz`}, [[`span`, {style: {[`font-family`]: `walsh`}}, `25 MINS - 50 MINS`]]]]]]]]]);
			
		});

		return [
			`section`, {}, 
				[[`main`, {id: `inVaultVetVow`, class: ``, style: {height: `${100}%`, [`line-height`]: `${19}px`, padding: `${24}px`, [`margin-top`]: `${45}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {style: {[`font-size`]: `${20}px`, [`font-weight`]: 400}}, `Payment Confirmation`], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `-_tX v202311051955`, href: `/my/assets/USDT/to`, style: {height:`${13}px`, width:`${13}px`}}]]]]],
							[`div`, {style: {[`margin-top`]: `${24}px`}}, [[`span`, {}, Slot[0]]]],
							[`section`, {id: `vaultSlots`}, VaultSlots],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${18}px`}}, 
								[
									[`svg`, {style: {height: `${18}px`, [`max-width`]: `${18}px`}, vewBox: `0 0 18 18`}, 
										[
											[`circle`, {cy: 9, cx: 9, r: 7, stroke: `#11fe6e`, [`stroke-width`]: 1.25, fill: `none`}],
											[`path`, {d: `M6 8 8 12 16 6`, fill: `none`, stroke: `#11fe6e`}]]], 
									[`div`, {class: `_eYG`}, 
										[[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${12}px`, [`line-height`]: 1.7}}, Slot[1].toUpperCase()]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#11fe6e`, border: `${1}px solid #11fe6e`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `vetSwap`}, `CONTINUE`]]]]]]]]]
	},

	wallet: function (Web) {

		let Param = [
			[], 
			[[`currency`, 20], [`amount`, 17.5, true], [`price`, 17.5, true], [`change`, 17.5, true], [`value`, 20, true], [``, 7.5, true]/*, [``, 7.5, true]*/]];

		Param[1].forEach(Feat => {

			Param[0].push([`div`, {style: {width: `${Feat[1]}%`}}, 
				[[`span`, {style: {color: `#b3b3b3`, [`font-size`]: `${10}px`, [`font-weight`]: 600, overflow: `hidden`, [`text-align`]: (Feat[2])? `right`: `left`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `uppercase`, [`white-space`]: `nowrap`}}, Feat[0]]]])

		});

		let Coin = [
			[],
			[
				[`btc`, `BTC`, `bitcoin`],
				[`usdt`, `USDT`, `Tether`]]];

		Coin[1].forEach(Flag => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			if (Web.USD24[Flag[0]] && Web.USD24[Flag[0]].length > 0) {

				let USD24 = Web.USD24[Flag[0]], USD = Web.xUSD[Flag[0]];

				(USD24[0][1] > USD)? H24[1] = `red`: H24[1] = `green`;

				(USD24[0][1] > USD)? H24[3] = `red`: H24[3] = `green`;

				H24[0] = `${(((USD - USD24[0][1])/USD)*100).toFixed(2)}%`

				H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;
			}

			Coin[0].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {width: `${20}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/tokens/${Flag[0]}.svg`, style: {[`max-width`]: `${18}px`}}], 
							[`div`, {style: {color: `#000`, width: `${100}%`}}, 
								[
									[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `${Flag[1]}`], 
									[`span`, {style: {color: `#515151`, [`font-size`]: `${12}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Flag[2]}`]]]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.spot)? `${Web.spot[Flag[0]]}`: `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `${Flag[1]}`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.xUSD[Flag[0]])? `${(Web.xUSD[Flag[0]]).toLocaleString()}`: `-`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `24H`]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.spot)? `${(Web.spot[Flag[0]]*Web.xUSD[Flag[0]]).toFixed(2)}`: `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {[`align-items`]: `end`, width: `${7.5}%`}}, 
						[[`a`, {class: `v202203261943`, for: `${Flag[0]}`, href: `javascript:;`, id: `token`, style: {height: `${18}px`, [`max-width`]: `${18}px`}}]]]]]);
		});

		let Fiat = [
			[],
			[
				[`au`, `AUD`, `australian dollar`],
				[`ca`, `CAD`, `canadian dollar`],
				[`eu`, `EUR`, `euro`],
				[`jp`, `JPY`, `japanese yen`],
				[`ke`, `KES`, `kenyan shilling`],
				[`no`, `NOK`, `norwegian krone`],
				[`nz`, `NZD`, `new zealand dollar`],
				[`za`, `ZAR`, `south african rand`],
				[`se`, `SEK`, `swedish krone`],
				[`ch`, `CHF`, `swiss franc`],
				[`uk`, `GBP`, `sterling pound`],
				[`us`, `USD`, `us dollar`]]];

		Fiat[1].forEach(Flag => {

			let H24 = [`-`, `#000`, `-`, `#000`];

			if (Web.USD24[Flag[1].toLowerCase()] && Web.USD24[Flag[1].toLowerCase()].length > 0) {

				let USD24 = Web.USD24[Flag[1].toLowerCase()], USD = Web.xUSD[Flag[1].toLowerCase()];

				(USD24[0][1] > USD)? H24[1] = `red`: H24[1] = `green`;

				(USD24[0][1] > USD)? H24[3] = `red`: H24[3] = `green`;

				H24[0] = `${(((USD - USD24[0][1])/USD)*100).toFixed(2)}%`

				H24[2] = `${(USD - USD24[0][1]).toLocaleString()}`;
			}

			Fiat[0].push([`div`, {class: `_geQ _gxM`, style: {[`line-height`]: `${19}px`, padding: `${12}px 0`}}, 
				[
					[`div`, {class: `_geQ _gxM`, style: {width: `${20}%`}}, 
						[
							[`img`, {src: `/ssl/given/svg/flags/${Flag[0]}.svg`, style: {[`max-width`]: `${18}px`}}], 
							[`div`, {style: {color: `#000`, width: `${100}%`}}, 
								[
									[`span`, {style: {[`font-size`]: `${12}px`, [`font-weight`]: 600, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`white-space`]: `nowrap`}}, `${Flag[1]}`], 
									[`span`, {style: {color: `#515151`, [`font-size`]: `${12}px`, [`margin-left`]: `${8}px`, overflow: `hidden`, [`text-overflow`]: `ellipsis`, [`text-transform`]: `capitalize`, [`white-space`]: `nowrap`}}, `${Flag[2]}`]]]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `${Flag[1]}`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}}, (Web.xUSD[(Flag[1]).toLowerCase()])? `${(Web.xUSD[(Flag[1]).toLowerCase()]).toFixed(4)}`: `-`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {width: `${17.5}%`}}, 
						[
							[`span`, {style: {color: H24[3], [`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`letter-spacing`]: 0, [`text-align`]: `right`}}, H24[0]], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `24H`]]], 
					[`div`, {style: {width: `${20}%`}}, 
						[
							[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${11}px`, [`font-weight`]: 600, [`letter-spacing`]: 0, [`text-align`]: `right`}},  (Web.spot && Web.spot[Flag[1].toLowerCase()])? `${(Web.spot[Flag[1].toLowerCase()]*Web.xUSD[Flag[1].toLowerCase()]).toFixed(2)}`: `${(0).toFixed(2)}`], 
							[`span`, {style: {color: `#535353`, [`font-size`]: `${10}px`, [`font-weight`]: 300, [`text-align`]: `right`}}, `USD`]]], 
					[`div`, {style: {[`align-items`]: `end`, width: `${7.5}%`}}, 
						[[`a`, {href: `/pools/BTC_USDT`, class: `v202203261943`, style: {height: `${18}px`, [`max-width`]: `${18}px`}}]]]]]);
		});

		if (Web.spot) {

			for (let coin in Web.spot) Web.debit += Web.spot[coin]*Web.xUSD[coin]
		}

		return [
			`main`, {id: `wallet`, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[
					[`div`, {style: {background: `#fff`, [`border-bottom`]: `${1}px solid #d9d9d9`, magin: `auto`, [`mx-width`]: `${1280}px`, padding: `${12}px ${24}px`, position: `fixed`, width: `${100}%`, [`z-index`]: 11}}, 
						[[`div`, {class: `_gxM _geQ`}, 
							[
								[`span`, {class: `v202312301635`, style: {height: `${32}px`, width: `${32}px`}}], 
								[`div`, {class: `_eYG`}, 
									[[`span`, {style: {[`font-family`]: `geometria`, [`font-size`]: `${15}px`, [`font-weight`]: 600, [`letter-spacing`]: 0}}, `${parseFloat(Web.debit).toFixed(2)} USD`]]], 
								[`div`, {class: `_gZz`, style: {[`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
									[
										[`a`, {href: `javascript:;`, style: {background: `blue`, color: `#fff`, margin: `0 0 0 ${8}px`, padding: `${4}px ${8}px`}}, `Transfer`],
										[`a`, {href: `javascript:;`, style: {background: `blue`, color: `#fff`, margin: `0 0 0 ${8}px`, padding: `${4}px ${8}px`}}, `Swap`]]]]]]],
					[`div`, {style: {[`max-width`]: `${1280}px`, width: `${100}%`, margin: `${64}px auto`, [`justify-content`]: `center`}}, 
						[ 
							[`div`, {style: {[`boder-bottom`]: `${1}px solid #d9d9d9`, padding: `${0}px ${24}px ${12}px`}}, 
								[
									[`h1`, {style: {color: `#000`, [`font-size`]: `${16}px`, [`font-weight`]: 600, [`letter-spacing`]: `${-.5}px`, margin: `${12}px ${0} ${0}`, }}, `Cash & Crypto`],
									[`div`, {style: {[`margin-top`]: `${12}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Crypto`]]]]],
									[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, Param[0]],
									[`div`, {}, Coin[0]],
									[`div`, {style: {[`margin-top`]: `${12}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {[`border-bottom`]: `1px solid rgb(${130}, ${130}, ${130}, ${.15})`, [`font-size`]: `${14}px`, [`padding-bottom`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `0 ${24}px 0 0`}}, `Fiat`]]]]],			
									[`div`, {class: `_geQ _gxM`, style: {[`margin-top`]: `${12}px`}}, Param[0]], 
									[`div`, {}, Fiat[0]]]]]], this.us()]]
	},

	walletSlot: function () {

		return [
			`main`, {id: ``, class: `_tY0`, style: {[`font-family`]: `litera`}}, 
				[[`div`, {style: {[`max-width`]: `${480}px`, width: `${100}%`, margin: `${36}px auto ${0}`, [`justify-content`]: `center`}}, 
						[
							[`div`, {style: {[`boder-bottom`]: `${1}px solid #d9d9d9`, padding: `${48}px ${24}px ${12}px`}}, 
								[
									[`div`, {class: `_geQ _gxM`}, 
										[
											[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `${12}px ${0} ${0}`, }}, `Deposit From`],
											[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 300, margin: `${12}px ${0} ${0} ${16}px`, [`text-decoration`]: `underline`}}, `M-PESA SAFARICOM`]]],
									[`div`, {style: {[`margin-top`]: `${18}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${100}px`, height: `${36}px`, padding: `${12}px ${16}px`}}, 
											[
												[`img`, {src: `/ssl/given/svg/flags/ke.svg`, style: {[`max-width`]: `${18}px`}}],
												[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
													[[`span`, {style: {color: `#515151`, [`font-family`]: `geometria`, [`font-weight`]: 300, [`font-size`]: `${13}px`}}, `+254`]]], 
														[`div`, {class: `_gZz`}, 
															[[`div`, {style: {[`line-height`]: `${32}px`, width: `${100}%`}}, 
																[ 
																	[`div`, {class: `_gxM _gZz _geQ`}, 
																		[[`input`, {id: `callSlot`, placeholder: `712345678`, style: {background: `transparent`, [`border-style`]: `none`, color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${13}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, [`text-align`]: `right`, width: `${100}%`}}]]]]]]]]]]],
									[`span`, {style: {color: `#000`, [`font-size`]: `${12}px`, [`font-weight`]: 600, margin: `${24}px ${0} ${0}`, }}, `Deposit Amount`],
									[`div`, {style: {[`margin-top`]: `${18}px`}}, 
										[[`div`, {class: `_gxM _geQ`, style: {border: `1px solid rgba(${193}, ${193}, ${193}, ${.25})`, [`border-radius`]: `${100}px`, height: `${36}px`, padding: `${12}px ${16}px`}}, 
											[
												[`div`, {style: {[`line-height`]: `${32}px`, width: `${75}%`}}, 
													[ 
														[`div`, {class: `_gxM _gZz _geQ`}, 
															[[`input`, {id: `floatSlot`, placeholder: `0.00`, style: {background: `transparent`, [`border-style`]: `none`, color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${13}px`, [`font-weight`]: 600, [`letter-spacing`]: `${.75}px`, outline: `none`, padding: 0, width: `${100}%`}}]]]]], 
														[`div`, {class: `_gZz`}, 
															[
												[`img`, {src: `/ssl/given/svg/flags/ke.svg`, style: {[`max-width`]: `${18}px`,}}],
												[`div`, {class: `_gxM`, style: {[`margin-left`]: `${8}px`}}, 
													[[`span`, {style: {color: `#000`, [`font-weight`]: 600, [`font-size`]: `${12}px`}}, `KES`]]]]]]]]],
									[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
										[ 
											[`div`, {}, 
												[
													[`span`, {style: {color: `#515151`, [`font-weight`]: 600, [`font-size`]: `${10}px`}}, `SEND AMOUNT`],
													[`span`, {id: `swap`, style: {color: `#000`, [`font-family`]: `geometria`, [`font-weight`]: 600, [`font-size`]: `${13}px`}}, `0.00 USD`]]],
											[`div`, {class: `_eYG`}, []],
												[`div`, {class: `_gZz`, style: {flex: 0}}, 
													[[`a`, {class: `_gxM _geQ`, href: `javascript:;`, id: `walletSlot`, style: {background: `blue`, color: `#fff`, display: `flex`, [`font-size`]: `${12}px`, [`font-weight`]: 600, padding: `${4}px ${12}px`, [`white-space`]: `nowrap`}}, 
														[
															//[`span`, {class: `v202204282015`, style: {height: `${20}px`, [`margin-right`]: `${8}px`, width: `${20}px`}}], 
															[`span`, {}, `Deposit`]]]]]]]]]]]]];
	},

	splash: [
			`main`, {class: `_xC2 _aA2`, style: {height: `${100}%`}}, 
				[[`div`, {class: `_geQ`, style: {[`justify-content`]: `center`}}, 
					[[`span`, {class: `v202304191915`, style: {width:`${56}px`, height: `${56}px`}}]]]]]
}

View = new View;