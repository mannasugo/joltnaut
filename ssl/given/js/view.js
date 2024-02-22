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
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `0 - ${(Arg.hold*141.96).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `KES`]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#ca0000`, border: `${1}px solid #ca0000`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `w2w`}, `SEND USDT`]]]]]]]]]		
	},

	app: function (Arg) {

		let P2 = [[]];

		Arg.pairs = Arg.pairs.sort((A, B) => {return B.secs - A.secs});

		Arg.pairs.slice(0, 5).forEach(Pair => {

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
									[
										[`span`, {class: `v202203171249`, style: {height:`${14}px`, width:`${14}px`}}],
										[`span`, {style: {
											[`margin-left`]: `${2}px`, color: `#000`, [`font-family`]: `geometria`, 
											[`font-size`]: `${12}px`, [`font-weight`]: 600}}, `${Pair.mugs}`]]]]],
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
										[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`, [`font-weight`]: 300}}, `CUMULATIVE PNL (USDT)`],
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
												color: `#6d0cce`, [`font-family`]: ``, [`font-size`]: `${10}px`, [`font-weight`]: 600, 
												[`margin-left`]: `${2}px`, }}, `${Pair.ts[0]}`]]],
								[`div`, {class: `_gZz`},
									[[`div`, {style: {[`text-align`]: `right`}}, 
										[
											[`span`, {style: {color: `#ca0000`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `SELL (BTC)`],
											[`span`, {style: {
												color: `#000`, [`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`font-weight`]: 600, 
												[`margin-left`]: `${2}px`, }}, `@${Pair.io[1]} FDUSD`],
											[`span`, {style: {
												color: `#6d0cce`, [`font-family`]: ``, [`font-size`]: `${10}px`, [`font-weight`]: 600, 
												[`margin-left`]: `${2}px`, }}, `${Pair.ts[1]}`]]]]]]]]]);
		});

		return [
			`section`, {}, 
				[[`div`, {class: `_gxM`, style: {margin: `${20}px ${24}px`}}, 
						[
							[`div`, {class: `_-Xg _gxM _geQ`}, 
								[
									//[`a`, {class: `-_tX v202304191915`, style: {[`min-width`]: `${32}px`, height: `${32}px`}, href: `/`}, ``], 
									[`span`, {id: `vault`, style: {
										[`font-family`]: `consola`,
										[`font-size`]: `${21}px`,
										[`font-weight`]: 600,
                                        margin: `${0} ${12}px`}}, `joltnaut`]]]]],
				[`main`, {id: `app`, class: `_tY0`, style: {height: `${100}%`, padding: `0 ${24}px`, [`margin-top`]: `${5}px`}}, 
					[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `0 auto`, [`justify-content`]: `center`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {}, (Clients.mug)? `MY WALLET'S PERFORMANCE`: `QUANT PROFIT METRICS`], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `-_tX v202312061631`, href: (Clients.mug)? `/my/wallet/pnl`: `/signin`, style: {height:`${18}px`, width:`${18}px`}}]]]]],
							[`section`, {class: `_gxM _geQ`, style: {[`line-height`]: 1.5, margin: `${12}px 0 0`}},
								[
									[`span`, {class: `v202205042043`}],
									[`div`, {class: `_eYG`}, 
										[
											[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, (Clients.mug)? `TODAY'S GAIN`: `CUMULATIVE GAIN`],
											[`div`, {class: `_gxM _geQ`}, 
												[
													[`span`, {style: {[`font-family`]: `geometria`, [`font-weight`]: 600}}, (Clients.mug)? `${Arg.pnl[1].toFixed(2)} USDT`: ``],
													[`span`, {style: {color: `#00ca29`, 
														[`font-family`]: `geometria`, [`font-weight`]: 600}}, `+(${Arg.pnl[0].toFixed(2)}%)`]]]]],
									[`div`, {class: `_gZz`},
										[[`div`, {class: `_gM_a _agM _guZ`, style: {
											width: `${100}%`, 
											[`block-size`]: `${40}px`, background: `#000`, border: `${1}px solid #000`}}, 
											[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: (Clients.mug)? `/my/wallet`: `/signin`, id: ``, style: {
												[`white-space`]: `nowrap`
												}}, (Clients.mug)? `My Wallet`: `Sign in`]]]]]]],			,
							[`div`, {style: {
								background: `#000`, [`border-radius`]: `${24}px`, color: `#e3e3e3`, [`font-size`]: `${10}px`, [`margin-top`]: `${32}px`, 
								padding: `${12}px`}}, 
								[
									[`div`, {class: `_geQ _gxM`, style: {padding: `${16}px ${8}px`}}, 
										[
											[`span`, {class: `v202312231641`, style: {height:`${27}px`, width:`${27}px`}}], 
											[`div`, {class: `_gZz`}, 
												[
													[`div`, {style: {[`line-height`]: 1.5, [`text-align`]: `right`}}, 
														[
															[`span`, {style: {color: `fff`, [`font-weight`]: 300}}, `TODAY'S GROWTH (ROI)`],
															[`span`, {style: {
																color: `#00ca29`, 
																[`font-family`]: `geometria`, [`font-size`]: `${14}px`, [`font-weight`]: 600}}, `+${Arg.pnl[2].toFixed(2)}%`]]]]]]],
									[`div`, {class: `_geQ _gxM`, style: {[`border-top`]: `${1}px solid #fff6`, padding: `${16}px ${8}px`}}, 
										[
											[`span`, {class: `v202312231716`, style: {height:`${24}px`, width:`${24}px`}}], 
											[`div`, {class: `_gZz`}, 
												[
													[`div`, {style: {[`line-height`]: 1.5, [`text-align`]: `right`}}, 
														[
															[`span`, {style: {[`font-weight`]: 300}}, `TRANSACTIONS`],
															[`span`, {style: { 
																color: `#fff`,
																[`font-family`]: `geometria`, 
																[`font-size`]: `${14}px`, [`font-weight`]: 600}}, `${(Arg.till).toLocaleString()}`]]]]]]]]],			
							[`div`, {style: {
								background: `rgb(${0}, ${168}, ${86})`, color: `#fff`,
								[`border-radius`]: `${24}px`,[`line-height`]: 1.35, margin: `${32}px 0`, padding: `${42}px ${28}px`}}, 
								[
									[`div`, {class: `_gxM _geQ`}, 
										[
											[`span`, {class: `v202206131256`, style: {height:`${42}px`, width:`${42}px`}}],
											[`div`, {class: `_gZz`},
												[[`div`, {class: `_gM_a _agM _guZ`, style: {
													[`block-size`]: `${40}px`, background: `#fff`, border: `${1}px solid #fff`}}, 
													[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: (Clients.mug)? `/mode/deposit`: `/enrol`, style: {
														color: `#000`,
														[`white-space`]: `nowrap`
														}}, (Clients.mug)? `Deposit Now`: `Create Wallet`]]]]]]],
									[`p`, {style: {
										[`font-size`]: `${12}px`,[`font-weight`]: 600, [`margin-top`]: `${21}px`}}, 
										`Blend the power of algorithimic profit trading into dynamic stablecoin wallets and earn hourly interests 
										on your debit balance, that's paid out daily.`]]],			,
							[`div`, {style: {
								background: `#000`, [`border-radius`]: `${24}px`, color: `#a6a6a6`, [`font-weight`]: 600,
								 [`margin-bottom`]: `${32}px`, 
								padding: `${18}px ${20}px`}}, 
								[
									[`div`, {class: `_geQ _gxM`, style: {padding: `${12}px ${8}px`}}, 
										[
											[`span`, {style: {color: `#fff`,  [`font-size`]: `${10}px`}}, `BUILT FOR`]]],
									[`div`, {class: `_geQ _gxM`, style: {padding: `${16}px ${8}px`}}, 
										[
											[`span`, {class: `v202312301653`, style: {height:`${28}px`, [`min-width`]:`${28}px`}}], 
											[`div`, {class: `_eYG`, style: {[`margin-left`]: `${12}px`}}, 
												[
													[`div`, {style: {[`line-height`]: 1.75}}, 
														[
															[`span`, {style: {color: `#fff`}}, `Daily Profit`],
															[`span`, {style: {[`margin-top`]: `${8}px`}}, `Earn hourly interest on your wallet balance, with 
															at least 0.75% daily growth from market action.`]]]]]]],
									[`div`, {class: `_geQ _gxM`, style: {padding: `${16}px ${8}px`}}, 
										[
											[`span`, {class: `v202312301635`, style: {height:`${26}px`, [`min-width`]:`${26}px`}}], 
											[`div`, {class: `_eYG`, style: {[`margin-left`]: `${12}px`}}, 
												[
													[`div`, {style: {[`line-height`]: 1.75}}, 
														[
															[`span`, {style: {color: `#fff`}}, `Fiat & Crypto`],
															[`span`, {style: {[`margin-top`]: `${8}px`}}, `Deposits & Withdrawals made easier 
															through stablecoin wallets and fiat at zero fees.`]]]]]]]]],
							[`div`, {class: `_gxM _geQ`}, 
								[
									[`h2`, {style: {color: `#000`, [`font-weight`]: 600}}, `Recent Auto-invest Bot trades`], 
									[`div`, {class: `_gZz`}, 
										[
											[`a`, {class: `-_tX v202312061631`, href: (Clients.mug)? `/my/wallet`: `/signin`, style: {
												height:`${18}px`, width:`${18}px`}}]]]]],
							[`section`, {style: {margin: `${4}px 0 0`}}, P2[0]]]]]]]]		
	},

	app2: function () {

		return [
			`main`, {style: {background: `rgb(5, 5, 5)`, [`font-family`]: `moz`, height: `${100}%`}}, 
				[
					[`div`, {style: {margin: `${20}px ${24}px`}}, 
						[
							[`div`, {class: `_gxM _geQ`}, [
								[`span`, {id: `vault`, style: {
									//background: `#fff`,
									color: `#fff`,//`rgb(${61}, ${255}, ${44})`,
									[`font-family`]: `cour`,
									[`font-size`]: `${17}px`,
									[`font-weight`]: 900,
                            		padding: `${1}px ${4}px`}}, `//naut`],
								[`span`, {style: {
									border: `${1}px solid #1185fe`,
									[`border-radius`]: `${9999}px`,
									color: `#1185fe`,
									[`font-family`]: `moz`,
									[`font-size`]: `${9}px`,
									[`font-weight`]: 900,
									[`margin-left`]: `${8}px`,
                            		padding: `${0}px ${8}px`}}, `BETA`]]]]],
					[`section`, { class: `tY0 _geQ`, style: {background: `inherit`, height: `${100}%`, padding: `0 ${24}px`, margin: `0 auto`, [`justify-content`]: `center`, [`margin-top`]: `${5}px`}}, 
						[[`div`, {class: `geQ`, style: {[`max-width`]: `${540}px`, width: `${100}%`, margin: `0 auto`, [`justify-content`]: `center`}}, 
							[
								[`div`, {class: `_geQ _gxM`}, 
									[
										[`svg`, {style: {
											[`margin-right`]:`${8}px`,[`min-height`]: `${21}px`, [`max-width`]: `${80}px`,[`min-width`]: `${80}px`}, viewBox: `0 0 150 150`}, 
											[
												[`circle`, {cy: 120, cx: 6, r: 4.5, stroke: `#1185fe`, [`stroke-width`]: 1.75, fill: `none`}],
												[`circle`, {cy: 95, cx: 35, r: 4.5, stroke: `#1185fe`, [`stroke-width`]: 1.75, fill: `none`}],
												[`circle`, {cy: 111, cx: 70, r: 4.5, stroke: `#1185fe`, [`stroke-width`]: 1.75, fill: `none`}],
												[`circle`, {cy: 70, cx: 115, r: 4.5, stroke: `#1185fe`, [`stroke-width`]: 1.75, fill: `none`}],
												[`path`, {d: `M10.5 116 31 98 M39 96 65 109 M75 108 110 74`, stroke: `#fff`,  [`stroke-width`]: 2}],
												[`path`, {d: `M15 140 35 130 65 145 95 127`, stroke: `#1185fe`,  [`stroke-width`]: 3}]]],
										[`div`, {class: `_eYG`, style: {[`line-height`]: 1.75}}, 
											[
												[`span`, {style: {
													color: `#fff`,[`font-family`]: `naut`, [`font-size`]: `${21}px`, 
													[`font-weight`]: 900}}, `A Stablecoin Profit Fund`],
												[`span`, {style: {
													color: `#fff`, [`font-size`]: `${14}px`, [`margin-top`]: `${14}px`}}, `Use Joltnaut's profit
													trading algorithms to store and grow your digital assets from the available investment pools.`]]]]],
								[`div`, {style: {margin: `${54}px 0`}},
									[[`div`, {class: `_gM_a _agM _guZ`, style: {
										[`block-size`]: `${50}px`, background: `#1185fe`, border: `${1}px solid #1185fe`, margin: `auto`, width: `${80}%`}}, 
										[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `/enrol`, style: {
											color: `#000`,[`font-family`]: `moz`, [`font-size`]: `${14}px`,
											[`white-space`]: `nowrap`}}, `Try Joltnaut Beta`]]]]]]]]]]]		


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
							[`span`, {id: `rateSwap`}, `1 usdt = 149.94 kes`], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO PAY`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `0 - ${(Arg[0].vault*149.94).toLocaleString()}`, type: `text`}]]], 
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
									[[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `2.50 - ${(Arg.apex).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `USDT`]]]]], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WILL RECEIVE`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `${(2.5*149.94).toFixed(2)} - ${(Arg.apex*149.94).toLocaleString()}`, type: `text`}]]], 
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

	mugslot: function () {

		let Slot = {
			action: [`signin`, `signin`],
			slots: [[`email`, `email`, `email`], [`password`, `lock`, `password`]]
		}, TC = [[], []];

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

		return [
				`section`, {}, 
					[ 
						[`main`, {id: `mugin`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${25}px`}}, 
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
							[`span`, {id: `rateSwap`}, `1 usdt = 149.84 kes`], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO SELL`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `0.00`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `USDT`]]]]], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WILL RECEIVE`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `0 - ${(Arg[0].vault*141.96).toLocaleString()}`, type: `text`}]]], 
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
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `${(2.5*141.96).toFixed(2)} - ${(Arg.apex*141.96).toLocaleString()}`, type: `text`}]]], 
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

	axis: function (Axis) {

				let AXIS = [Tools.typen(Clients.axis), ``, [], [], ``];

				let Y = [Axis[0][2], Axis[0][3]];

				let X = [AXIS[0][AXIS[0].length - 1][0], AXIS[0][0][0]];

				let x = AXIS[0][AXIS[0].length - 1][0] - AXIS[0][0][0],

				y = Y[1] - Y[0];

				AXIS[0].forEach(Vault => {

						AXIS[1] += `${(((Vault[0] - AXIS[0][0][0])/x)*Axis[1])} ${(y === 0)? 50: ((Vault[1] - Y[1])/y)*(-185)} `;
				});

				X.forEach(Span => {

						let Day = new Date(Span);

						if (x >= 3600000*24) AXIS[4] = `${Day.getMonth() + 1}/${Day.getDate()}`

						else if (x <= 3600000*24) AXIS[4] = `${(Day.getHours() > 9)? Day.getHours(): `0` + Day.getHours()}:${(Day.getMinutes() > 9)? Day.getMinutes(): `0` + Day.getMinutes()}`

						AXIS[2].push([`text`, {x: (((Span - AXIS[0][0][0])/x)*(Axis[1] - 12.25)), y: 200, fill: `#a6a6a6`, style: {
								//[`font-family`]: `geometria`,
								[`font-size`]: `${10}px`}}, AXIS[4]]);
				});

				let Value = Tools.typen(Clients.axis).sort((A, B) => {return B[1] - A[1]});

				let Feats = [Value[Value.length - 1], Value[0]];

				Feats.forEach(Feat => {

				let XY = [(((Feat[0] - AXIS[0][0][0])/x)*Axis[1]), ((Feat[1] - Y[1])/y)*(-185)];

								(XY[1] < 5)? XY[1] = 7.5: XY[1];

								(XY[1] > 195)? XY[1] = 191: XY[1];

								(XY[0] < 5)? XY[0] = 6: XY[0] = XY[0] + 2.5;

								(XY[0] > Axis[1] - 75)? XY[0] = Axis[1] - 70: XY[0] = XY[0] + 2.5;

								AXIS[3].push(
										[`text`, {x: XY[0], y: XY[1], fill: `#000`, style: {
												[`font-family`]: `geometria`,
												[`font-size`]: `${9}px`}}, `${(Feat[1]).toFixed(1)}`]);
						});

				let Span = [[], [`1H`, `1D`, `1W`, `All`]];

				Span[1].forEach((a) => {

						Span[0].push([`span`, {id: `span`, style: {opacity: (a === Axis[2])? 1: .3, padding: `${0} ${7.5}px`}}, a]);
				});

				return [
						`div`, {}, 
								[
										[`div`, {class: `_gxM`}, 
												[
														[`span`, {class: `_tXx`, style: {
																[`font-family`]: `geometria`,
																[`font-size`]: `${12}px`}}, `${(Axis[0][1]).toFixed(2)} USD`], 
														[`div`, {class: `_eYG`}, 
																[[`span`, {class: `tXx`, style: {
																		color: (((Axis[0][1] - Axis[0][0])/Axis[0][1])*100 >= 0) ? `#1bd401`: `#d40101`,
																		[`font-family`]: `geometria`,
																		[`font-size`]: `${10}px`}}, `${(((Axis[0][1] - Axis[0][0])/Axis[0][1])*100 >= 0) ? `+`: ``}${(((Axis[0][1] - Axis[0][0])/Axis[0][1])*100).toFixed(2)}%`]]], 
														[`div`, {id: `reals`, class: `_gZz`, role: `daily-btc`, style: {[`font-size`]: `${10}px`}}, 
																Span[0]]]],
										[`svg`, {height: `${200}px`, style: {[`margin-top`]: `${30}px`}}, 
												[
														[`g`, {}, AXIS[2]],
														[`g`, {}, AXIS[3]],
														[`path`, {stroke: `#5841d8`, [`stroke-width`]: 1, fill: `none`, d: `M${AXIS[1]}`}]]]]];
	},

	buyline: function () {

		let Pit = [[], [], [], ``, []];

		let Axis = Tools.typen(Clients.quo).btc[1][5];

		let Span = [document.querySelector(`#buyline`).clientWidth, 200];

		let Y = [Axis[2], Axis[3]];

		let y = Y[1] - Y[0];

		let AXIS = [Tools.typen(Clients.axis)];

		let X = [AXIS[0][AXIS[0].length - 1][0], AXIS[0][0][0]];

			let x = AXIS[0][AXIS[0].length - 1][0] - AXIS[0][0][0];

			AXIS[0].forEach(Vault => {

				Pit[3] += `${(((Vault[0] - AXIS[0][0][0])/x)*Span[0]) + 0} ${(y === 0)? 50: ((Vault[1] - Y[1])/y)*(-185)} `;
			});

			let Value = Tools.typen(Clients.axis).sort((A, B) => {return B[1] - A[1]});

			let Feats = [Value[Value.length - 1], Value[0]];

			Feats.forEach(Feat => {

				let XY = [(((Feat[0] - AXIS[0][0][0])/x)*Span[0]), ((Feat[1] - Y[1])/y)*(-185)];

				(XY[1] < 5)? XY[1] = 7.5: XY[1];

				(XY[1] > 195)? XY[1] = 191: XY[1];

				(XY[0] < 5)? XY[0] = 6: XY[0] = XY[0] + 2.5;

				(XY[0] > Span[0] - 75)? XY[0] = Span[0] - 70: XY[0] = XY[0] + 2.5;

				Pit[4].push(
					[`text`, {x: XY[0], y: XY[1], fill: `#fff`, style: {
						[`font-family`]: `consola`,
						[`font-size`]: `${9}px`}}, `${(Feat[1]).toFixed(0)}`]);
			});		

				Pit[2] = 
				[`svg`, {height: `${200}px`, style: {[`margin-top`]: `${30}px`}}, 
					[
						[`path`, {
							opacity: .75,
							stroke: `#1bd401`, 
							[`stroke-width`]: 1, 
							fill: `none`, d: `M15 ${((37515 - Y[1])/y)*(-175) + 5.5} ${Span[0]} ${((37515 - Y[1])/y)*(-175) + 7.5}`}], 
						[`path`, {
							opacity: 1,
							stroke: `#5841d8`, 
							[`stroke-width`]: 1, 
							fill: `none`, d: `M${Pit[3]}`}], 
						[`g`, {}, Pit[4]]]];

			return [`div`, {}, 
				[
					[`div`, {class: `_gxM`}, 
						[
							[`span`, {style: {[`font-size`]: `${12}px`}}, `Bitcoin This Hour`]]],
					[`div`, {class: `_gxM`}, 
						[
							[`span`, {style: {
								[`font-family`]: `consola`,
								[`font-size`]: `${12}px`,
								[`font-weight`]: 600}}, `${(parseFloat(Tools.typen(Clients.quo).btc[0])).toFixed(1)} USD`],
							Pit[1]]],
					Pit[2]]];
	},

	coinline: function () {

		let Pit = [[], [], [], ``, []];

		let Hold = [ 
				((Tools.typen(Clients.vault)*.25)/37515)*Tools.typen(Clients.quo).btc[0]];

		let Axis = Tools.typen(Clients.quo).btc[1][5];

		let pit = ((Tools.typen(Clients.vault)*.25)/37515);

		let Span = [document.querySelector(`#coinline`).clientWidth, 200];

		let Y = [Axis[2], Axis[3]];

		let y = Y[1] - Y[0];

			//if ((new Date().valueOf() - Pit[0][0].secs) > 3600000) {

				let AXIS = [Tools.typen(Clients.axis)];

			let X = [AXIS[0][AXIS[0].length - 1][0], AXIS[0][0][0]];

			let x = AXIS[0][AXIS[0].length - 1][0] - AXIS[0][0][0];

			AXIS[0].forEach(Vault => {

				Pit[3] += `${(((Vault[0] - AXIS[0][0][0])/x)*Span[0]) + 0} ${(y === 0)? 50: ((Vault[1] - Y[1])/y)*(-185)} `;
			});

			let Value = Tools.typen(Clients.axis).sort((A, B) => {return B[1] - A[1]});

			let Feats = [Value[Value.length - 1], Value[0]];

			Feats.forEach(Feat => {

				let XY = [(((Feat[0] - AXIS[0][0][0])/x)*Span[0]), ((Feat[1] - Y[1])/y)*(-185)];

				(XY[1] < 5)? XY[1] = 7.5: XY[1];

				(XY[1] > 195)? XY[1] = 191: XY[1];

				(XY[0] < 5)? XY[0] = 6: XY[0] = XY[0] + 2.5;

				(XY[0] > Span[0] - 75)? XY[0] = Span[0] - 70: XY[0] = XY[0] + 2.5;

				Pit[4].push(
					[`text`, {x: XY[0], y: XY[1], fill: `#000`, style: {
						[`font-family`]: `geometria`,
						[`font-size`]: `${9}px`}}, `${(Feat[1]*pit).toFixed(3)} USD`]);
			});

				Pit[1] = [`div`, {class: `_eYG`}, 
					[[`span`, {style: {
						color: (((Axis[1] - 37515)/Axis[1])*100 >= 0) ? `#1bd401`: `#d40101`,
						[`font-family`]: `geometria`, 
						[`font-size`]: `${11}px`}}, 
						`${(((Axis[1] - 37515)/Axis[1])*100 >= 0) ? `+`: ``}${((pit*Axis[1]) - (pit*37515)).toFixed(2)} (${(((Axis[1] - 37515)/Axis[1])*100).toFixed(2)}%)`]]];

				Pit[2] = 
				[`svg`, {height: `${200}px`, style: {[`margin-top`]: `${30}px`}}, 
					[
						[`path`, {
							opacity: .75,
							stroke: `#1bd401`, 
							[`stroke-width`]: 1, 
							fill: `none`, d: `M15 ${((37515 - Y[1])/y)*(-175) + 5.5} ${Span[0]} ${((37515 - Y[1])/y)*(-175) + 7.5}`}], 
						[`text`, {x: 0, y: ((37515 - Y[1])/y)*(-175) + 7.5, fill: `#a6a6a6`, style: {
							[`font-family`]: `geometria`,
							[`font-size`]: `${8}px`}}, `${(37515*pit).toFixed(3)}`], 
						[`path`, {
							opacity: 1,
							stroke: `#5841d8`, 
							[`stroke-width`]: 1, 
							fill: `none`, d: `M${Pit[3]}`}], 
						[`g`, {}, Pit[4]]]];
			//}

			return [`div`, {}, 
				[
					[`div`, {class: `_gxM`}, 
						[
							[`span`, {style: {[`font-size`]: `${12}px`}}, `Bitcoin Portfolio`],
							[`div`, {class: `_gZz`}, [
								[`span`, {style: {
									[`text-decoration`]: `underline`,
									color: `#feef11`, [`font-size`]: `${12}px`}}, `Principal`], 
								[`span`, {style: {
									margin: `${0} ${0} ${0} ${8}px`,
									[`font-family`]: `geometria`,
									[`font-size`]: `${12}px`}}, `${(Tools.typen(Clients.vault)*.25).toFixed(3)} USD`]]]]],
					[`div`, {class: `_gxM`}, 
						[
							[`span`, {style: {
								[`font-family`]: `geometria`,
								[`font-size`]: `${12}px`,
								[`font-weight`]: 600}}, `${(parseFloat(Hold[0])).toFixed(2)} USD`],
							Pit[1]]],
					Pit[2]]];
	},

	foot: function () {
				
				return [`section`, {id: `foot`, style: {/*padding: `${24}px`, background: `#fff`, color: `#262626`*/}}, 
						[[`div`, {style: {
								width: `${100}%`,
								[`max-width`]: `${1000}px`, margin: `${0} auto`}}, 
								[
										[`div`, {class: `_wrap_202203262208`}, 
												[
														[`div`, {class: `foot`}, 
																[
																		[`span`, {class: `foot-title`}, `Features`],
																		[`div`, {}, 
																				[
																						[`a`, {href: ``}, `Margin Trading`], 
																						[`a`, {href: ``}, `Quant Trading`], 
																						[`a`, {href: ``}, `Proof of Reserves`]]]]], 
														[`div`, {class: `foot`}, 
																[
																		[`span`, {class: `foot-title`}, `Prices`],
																		[`div`, {}, 
																				[
																						[`a`, {href: ``}, `Prices Analysis`], 
																						[`a`, {href: ``}, `Crypto Prices`]]]]], 
														[`div`, {class: `foot`}, 
																[
																		[`span`, {class: `foot-title`}, `About`],
																		[`div`, {}, 
																				[ 
																						[`a`, {href: ``}, `Team`],
																						[`a`, {href: ``}, `Why Joltquid`], 
																						[`a`, {href: ``}, `Careers`], 
																						[`a`, {href: ``}, `Contact`], 
																						[`a`, {href: ``}, `Press`]]]]]]], 
										[`div`, {class: `_geQ`, style: {
												padding: `${24}px ${0}`, [`font-size`]: `${11}px`}}, `©2022 Joltquid Capital, LLC. All Rights Reserved`]]]]]
	},

	loadWallet: [
		`div`, {class: `_gxM`}, 
			[
				//[`a`, {class: `v202206131256`, style: {margin: `${0} ${10}px`}, href: `#`}],
				[`a`, {id: `mugin`, class: `v202206131254`, style: {margin: `${0} ${10}px`}, href: `javascript:;`}]]],

	splash: [
			`main`, {class: `_xC2 _aA2`, style: {height: `${100}%`}}, 
				[[`div`, {class: `_geQ`, style: {[`justify-content`]: `center`}}, 
					[[`span`, {class: `v202304191915`, style: {width:`${56}px`, height: `${56}px`}}]]]]],

	pitaxis: function () {

		let Pit = [[], [], [], ``, []];

		let Moves = Tools.typen(Clients.pitmoves).sort((A, B) => {return B.secs - A.secs});

		Moves.forEach(Move => {

			if (Move.side === `buy` && Move.open === false) Pit[0].push(Move);
		});

		let Axis = Tools.typen(Clients.quo).btc[1][5];

		let pit = Tools.typen(Clients.wallet)[2][1];

		let Span = [document.querySelector(`#pitaxis`).clientWidth, 200];

		let Y = [Axis[2], Axis[3]];

		let y = Y[1] - Y[0];

		if ((new Date().valueOf() - Pit[0][0].secs) > 3600000) {

				let AXIS = [Tools.typen(Clients.axis)];

			let X = [AXIS[0][AXIS[0].length - 1][0], AXIS[0][0][0]];

			let x = AXIS[0][AXIS[0].length - 1][0] - AXIS[0][0][0];

			AXIS[0].forEach(Vault => {

				Pit[3] += `${(((Vault[0] - AXIS[0][0][0])/x)*Span[0]) + 0} ${(y === 0)? 50: ((Vault[1] - Y[1])/y)*(-185)} `;
			});

			let Value = Tools.typen(Clients.axis).sort((A, B) => {return B[1] - A[1]});

			let Feats = [Value[Value.length - 1], Value[0]];

			Feats.forEach(Feat => {

				let XY = [(((Feat[0] - AXIS[0][0][0])/x)*Span[0]), ((Feat[1] - Y[1])/y)*(-185)];

				(XY[1] < 5)? XY[1] = 7.5: XY[1];

				(XY[1] > 195)? XY[1] = 191: XY[1];

				(XY[0] < 5)? XY[0] = 6: XY[0] = XY[0] + 2.5;

				(XY[0] > Span[0] - 75)? XY[0] = Span[0] - 70: XY[0] = XY[0] + 2.5;

				Pit[4].push(
					[`text`, {x: XY[0], y: XY[1], fill: `#000`, style: {
						[`font-family`]: `geometria`,
						[`font-size`]: `${9}px`}}, `${(Feat[1]*pit).toFixed(3)} USD`]);
			});

				Pit[1] = [`div`, {class: `_eYG`}, 
					[[`span`, {style: {
						color: (((Axis[1] - Pit[0][0].coin[1])/Axis[1])*100 >= 0) ? `#1bd401`: `#d40101`,
						[`font-family`]: `geometria`, 
						[`font-size`]: `${11}px`}}, 
						`${(((Axis[1] - Pit[0][0].coin[1])/Axis[1])*100 >= 0) ? `+`: ``}${((pit*Axis[1]) - (pit*Pit[0][0].coin[1])).toFixed(2)} (${(((Axis[1] - Pit[0][0].coin[1])/Axis[1])*100).toFixed(2)}%)`]]];
				
				Pit[2] = 
				[`svg`, {height: `${200}px`, style: {[`margin-top`]: `${30}px`}}, 
					[
						[`path`, {
							opacity: .75,
							stroke: `#1bd401`, 
							[`stroke-width`]: 1, 
							fill: `none`, d: `M15 ${((Pit[0][0].coin[1] - Y[1])/y)*(-175) + 5.5} ${Span[0]} ${((Pit[0][0].coin[1] - Y[1])/y)*(-175) + 7.5}`}], 
						[`text`, {x: 0, y: ((Pit[0][0].coin[1] - Y[1])/y)*(-175) + 7.5, fill: `#a6a6a6`, style: {
							[`font-family`]: `geometria`,
							[`font-size`]: `${8}px`}}, `${(Pit[0][0].coin[1]*pit).toFixed(3)}`], 
						[`path`, {
							opacity: 1,
							stroke: `#5841d8`, 
							[`stroke-width`]: 1, 
							fill: `none`, d: `M${Pit[3]}`}], 
						[`g`, {}, Pit[4]]]];
			}

			return [`div`, {}, 
				[
					[`div`, {class: `_gxM`}, 
						[
							[`span`, {style: {[`font-size`]: `${12}px`}}, `Portfolio Balance`],
							[`div`, {class: `_gZz`}, [[`span`, {style: {
								[`text-decoration`]: `underline`,
								color: `#feef11`, [`font-size`]: `${12}px`}}, `BTC`]]]]],
					[`div`, {class: `_gxM`}, 
						[
							[`span`, {style: {
								[`font-family`]: `geometria`,
								[`font-size`]: `${12}px`,
								[`font-weight`]: 600}}, `${(parseFloat(Axis[1])*pit).toFixed(2)} USD`],
							Pit[1]]],
					Pit[2]]];
	},

	utilFooter: function () {

		if (!Clients.mug) return [];

		return [`section`, {style: {width: `${100}%`, position: `fixed`, left: 0, bottom: 0, background: `#fff`}}, 
			[[`div`, {class: `_gxM`, style: {width: `${100}%`, padding: `${10}px ${24}px`, [`border-top`]: `${1}px solid #e6e6e6`}}, 
				[
					[`span`, {class: `v202205081343`}],
					[`div`, {class: `_eYG _tXx`, style: {
						[`font-family`]: `consola`,
						[`font-size`]: `${10}px`}}, `${(Clients.mug)}`]]]]]
	},

	utilWallet: [
		`div`, {class: `_gxM`, style: {[`align-items`]: `center`}}, 
			[
				//[`a`, {id: ``, class: `v202203261943`, style: {width: `${21}px`, height: `${21}px`, margin: `${0} ${10}px`}, href: `#`}]
				[`a`, {class: `v202206131256`, style: {width: `${28}px`, height: `${28}px`, margin: `${0} ${10}px`}, href: `/wallets`}]/*,
				[`a`, {id: ``, class: `v202207161737`, style: {width: `${21}px`, height: `${21}px`,margin: `${0} ${10}px`}, href: `javascript:;`}]*/]]
}

View = new View;