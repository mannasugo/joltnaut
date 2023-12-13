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
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `0 - ${(Arg.hold*154.94).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `KES`]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#ca0000`, border: `${1}px solid #ca0000`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `w2w`}, `SEND USDT`]]]]]]]]]		
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
								[`div`, {class: `_aXZ`, style: {[`margin-top`]: `${12}px`}}, [[`input`, {id: `cellNumerals`, placeholder: `M-PESA Mobile Number`, type: `text`}]]],
								[`div`, {class: `_gM_a _agM _guZ`, style: {[`margin-top`]: `${16}px`, width: `${100}%`, [`block-size`]: `${40}px`, background: `#1185fe`}}, 
									[[`a`, {id: `pollCellSlots`, class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`}, `save`]]]]]]]]]
	},

	clientTX: function (Arg) {

		let TX = [[], []];

		Arg[0].sort((A, B) => {return B.ts - A.ts}).forEach(Tx => {

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
						[`div`, {class: `_gxM`, style: {[`font-weight`]: 600, [`margin-bottom`]: `${6}px`}}, 
							[
								[`span`, {style: {color: (Tx.type === `outVault`)? `#ca0000`: `#00ca29`}}, `${(Tx.type === `outVault`)? `Sell`: `Buy`} `],
								[`span`, {style: {[`margin-left`]: `${6}px`}}, ` USDT`]]], 
						[`div`, {}, Params[1]]]])
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
									[`a`, {class: `-_tX v202304191915`, style: {[`min-width`]: `${30}px`, height: `${30}px`}, href: `/`}, ``], 
									[`span`, {id: `vault`, class: `_aA6 _tXx`, style: {
                                        [`border-left`]: `${1}px solid #91919159`, 
                                        margin: `${0} ${7}px`,
                                        padding: `${0} ${14}px`,
                                        color: `#000`, //`#00e53f`,
                                        overflow: `hidden`,
                                        [`white-space`]: `nowrap`}}, `joltnaut`]]],
							[`div`, {class: `_gZz`, style: {[`align-items`]: `center`}}, 
								[[`div`, {class: `_gxM`}, 
									[/*[`a`, {class: `v202205081410`, style: {margin: `${0} ${10}px`}, href: `/reserve`}]*/]]]]]]]], 
					[`main`, {id: `clientTX`, class: `_tY0`, style: {height: `${100}%`, padding: `${12}px`, [`margin-top`]: `${25}px`}}, 
						[[`div`, {class: `_geQ`, style: {[`max-width`]: `${600}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
							[
								[`div`, {class: `_aXZ`, style: {margin: `${16}px 0 ${40}px`}}, 
									[
										[`div`, {style: {[`margin-top`]: `${12}px`, padding: `${12}px ${12}px`, border: `${1}px solid #e3e3e3`, [`border-radius`]: `${18}px`, [`font-size`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `WALLET ID`], 
												[`span`, {style: {color: `#666`, [`font-family`]: `geometria`, [`font-weight`]: 600}}, `${Clients.ts}`],
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `WALLET BALANCE`], 
												[`span`, {style: {color: `#666`, [`font-family`]: `geometria`, [`font-weight`]: 600}}, `${Clients.debit} USDT`],
												[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${0}px`}}, 
													[
														[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, `TODAY'S PNL (QUANT PROFIT)`],
														[`div`, {class: `_gZz`}, 
															[
																[`span`, {style: 
																	{
																		color: `#00ca29`,
																		[`font-family`]: `geometria`, 
																		[`font-size`]: `${10}px`}}, `+${Tools.typen(Clients.pnl)[1]}(${Tools.typen(Clients.pnl)[0]}%)`]]]]]]],
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
														}}, (parseFloat(Clients.vault) > 0)? `Manage P2P`: `P2P Merchant`]]]]]]],*/
										[`span`, {style: {[`font-weight`]: 600, [`margin-top`]: `${32}px`}}, `QUICK ACTIONS`],
										[`div`, {class: `_gxM`, style: {[`font-size`]: `${10}px`, [`margin-top`]: `${24}px`}}, 
											[
												[`div`, {class: `_geQ`}, 
													[
														[`a`, {class: `v202203261943`, style: {}, href: `/mode/deposit`}],
														[`span`, {style: {color: `#666`, [`margin-top`]: `${0}px`}}, `DEPOSIT`]]],
												[`div`, {class: `_geQ`}, 
													[
														[`a`, {class: `v202203262148`, style: {}, href: `/mode/withdraw`}],
														[`span`, {style: {color: `#666`, [`margin-top`]: `${0}px`}}, `WITHDRAW`]]],
												[`div`, {class: `_geQ`}, 
													[
														[`a`, {class: `v202310282005`, style: {}, href: `javascript:;`}],
														[`span`, {style: {color: `#666`, [`margin-top`]: `${0}px`}}, `PAY`]]],
												[`div`, {class: `_geQ`}, 
													[
														[`a`, {class: `v202310281744`, style: {}, href: `/my/peers`}],
														[`span`, {style: {color: `#666`, [`margin-top`]: `${0}px`}}, `SEND`]]]]],
										[`section`, {id: `vautltx`, style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, (TX[0].length > 0)? `RECENT DEPOSITS & WITHDRAWALS`: ``],
												[`div`,  {}, TX[0]]]],
										[`section`, {id: `vautltx`, style: {[`margin-top`]: `${12}px`}}, 
											[
												[`span`, {style: {color: `#a3a3a3`, [`font-size`]: `${10}px`}}, (TX[1].length > 0)? `RECENT WALLET TRANSCATIONS`: ``],
												[`div`,  {}, TX[1]]]]]]]]]]]];
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
							[`span`, {id: `rateSwap`}, `1 usdt = 156.64 kes`], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO PAY`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `0 - ${(Arg[0].vault*156.64).toLocaleString()}`, type: `text`}]]], 
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
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${24}px`}}, 
								/*[[`span`, {style: {color: `#a3a3a3`}}, `My Wallet Balance`], 
								[`span`, {style: {[`font-family`]: `geometria`,[`font-weight`]: 600, [`margin-left`]: `${8}px`}}, `${Arg.hold} USDT`]]*/],
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO BUY`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `2.50 - ${(Arg.apex).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `USDT`]]]]], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WILL RECEIVE`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `${(2.5*156.64).toFixed(2)} - ${(Arg.apex*156.64).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `KES`]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#000`, border: `${1}px solid #000`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `stk`}, `BUY USDT`]]]]]]]]]		
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
				[`Tron Network (TRC20)`, `#1d9b75`, `20 - 35 MINUTES`, `NETWORK FEES APPLY`, `tron`]], []];

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

	mugslot: function () {

		let Slot = {
			action: [`signin`, `signin`],
			slots: [[`email address`, `email`, `email`], [`password`, `lock`, `password`]]
		}, TC = [[]];

		if (Tools.typen(Clients.instance)[0] === `mugup`) {

			Slot = {
				action: [`signup`, `signup`],
				slots: [
					[`email address`, `email`, `email`], 
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
		}

		let Slots = [];

		Slot.slots.forEach(Slot => {

			let Tip = [[]];

			if (Slot[0] === `surname`) {

				Tip[0] = [`span`, {style: 
					{
						color: `#a1a1a1`, 
						[`font-size`]: `${12}px`, [`font-weight`]: 600, [`line-height`]: 1.5, margin: `${12}px 0 0`, [`text-align`]: `center`}}, 
				`* First name & last name must match government issued ID. A mismatch when verifying your account identity (KYC Process), 
				could temporarily disable deposits and withdrawals on your account.`]
			}

			Slots.push([
					`div`, {class: `_sZ2`}, [
						[`label`, {style: {margin: `0 ${20}px ${8}px`, color: `#5c5e62`, [`line-height`]: 1.414, [`text-transform`]: `capitalize`}}, 
							[[`span`, {}, Slot[0]]]], 
						[`div`, {class: `_aXZ`}, 
							[[`input`, {id: Slot[1], type: Slot[2]}]]], Tip[0]]]);

		});

		return [
				`section`, {}, 
					[
						[`div`, {class: `_-tY`}, 
							[[`div`, {class: `_aXz`}, 
								[
									[`div`, {class: `_-Xg _gxM _geQ`}, 
										[
											[`a`, {class: `-_tX v202304191915`, href: ``}], 
											[`div`, {class: `_gZz`}, 
												[[`a`, {id: (Tools.typen(Clients.instance)[0] === `mugin`)? `mugup`: `mugin`, class: `_tXx`, href: `javascript:;`}, (Tools.typen(Clients.instance)[0] === `mugin`)? `signup`: `signin`]]]]]]]]], 
						[`main`, {id: `mugin`, class: `_tY0`, style: {height: `${100}%`, padding: `${24}px`, [`margin-top`]: `${65}px`}}, 
							[[`div`, {class: `_geQ`, style: {[`max-width`]: `${362}px`, width: `${100}%`, margin: `auto`, [`justify-content`]: `center`}}, 
								[
									[`h2`, {}, (Tools.typen(Clients.instance)[0] === `mugin`)? `signin`: `signup`], 
									[`div`, {class: `_aXZ`, style: {margin: `${16}px 0 ${40}px`}}, 
										[
											[`div`, {}, Slots],
											[`div`, {class: `_gM_a _agM _guZ`, style: {width: `${100}%`, [`block-size`]: `${40}px`, background: `#1185fe`}}, 
												[[`a`, {id: Slot.action[1], class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`}, Slot.action[0]]]],
											TC[0]]]]]]]]]
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
							[`span`, {id: `rateSwap`}, `1 usdt = 154.94 kes`], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WANT TO SELL`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `coinSlot`, placeholder: `0.00`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `USDT`]]]]], 
							[`span`, {style: {color: `#666`,[`font-size`]: `${9}px`,[`margin-top`]: `${12}px`}}, `I WILL RECEIVE`],
							[`div`, {class: `_gxM _geQ`, style: {[`margin-top`]: `${8}px`}}, 
								[[`div`, {class: `_eYG _aXZ`, style: {margin: 0, overflow: `revert`}}, 
									[[`input`, {class: `_aXZ`, id: `localSlot`, placeholder: `0 - ${(Arg[0].vault*154.94).toLocaleString()}`, type: `text`}]]], 
								[`div`, {class: `_gZz`, style: {flex: 0}}, [[`span`, {style: {color: `#000`, [`font-weight`]: `600`, [`margin-left`]: `${12}px`}}, `KES`]]]]],
							[`div`, {class: `_gM_a _agM _guZ`, style: {
								[`margin-top`]: `${16}px`, 
								width: `${100}%`, [`block-size`]: `${40}px`, background: `#ca0000`, border: `${1}px solid #ca0000`}}, 
								[[`a`, {class: `_TX_a _atX _dMG _aWz`, href: `javascript:;`, id: `outVaultVow`, md: Arg[0].md}, `Withdraw USDT`]]]]]]]]]
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
							[`span`, {id: `rateSwap`}, `1 usdt = 156.64 kes`],
							[`section`, {id: `vaults`}, Vaults[1]]]]]]]];
	},

	peers: function (Arg) {

		let Allows = [[]];

		Arg.forEach(MD => {

			Allows[0].push(
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
									[`section`, {}, Allows[0]]]]]]]]]];
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

	asset: function () {

		let Axis = Tools.typen(Clients.quo).btc;

		let vault = (((Tools.typen(Clients.vault)*.25)/37515)*Axis[0] + Tools.typen(Clients.vault)*.75).toFixed(2);

		return [`main`, {class: `_tY0`, style: {height: `${100}px`}}, 
			[
				[`div`, {class: `_-tY`}, 
						[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
							[
								[`div`, {class: `_-Xg _gxM _geQ`}, 
									[
										[`a`, {class: `-_tX v202201180941`, style: {[`min-width`]: `${32}px`, height: `${32}px`}, href: `/`}, ``], 
										[`span`, {id: `vault`, class: `_aA6 _tXx`, style: {
											[`border-left`]: `${1}px solid #d5d5d5`,
												margin: `${0} ${7}px`,
												padding: `${0} ${14}px`,
												[`font-size`]: `${12}px`,
												color: `#47008c`,
												//overflow: `hidden`,
												[`font-family`]: `geometria`,
												//[`text-overflow`]: `ellipsis`,
												[`white-space`]: `nowrap`}}, `${vault} USD`], 
										[`span`, {id: `coins`, class: `_tXx`, style: {
												color: `#feef11`, 
												margin: `${1.5}px ${0} ${0}px ${-8}px`, 
												[`font-size`]: `${12}px`}}, (Clients.wallet && Tools.typen(Clients.wallet)[2][1] > 0)? `+BTC`: ``]]],
								[`div`, {class: `_gZz`}, 
									[this.wallets]]]]]], 
					[`section`, {id: `wallet`, style: {padding: `${0} ${24}px`, [`max-width`]: `${1000}px`, width: `${100}%`, margin: `${90}px auto`}}, 
						[
							[`div`, {class: `_wrap_202203262208`}, 
								[
									[`div`, {id: `coinline`, style: {width: `${100}%`}}],
									/*[`div`, {id: `coinmoves`}]*/]],
							[`div`, {id: `assets`}, []], 
							[`div`, {id: `moves`, style: {margin: `${30}px ${0}`}}, []]]]]]; //positions
		},

	assets: function () {

				let Axis = Tools.typen(Clients.axis).sort((A, B) => {return B[0] - A[0]});

				let Vault = [[], [], [Axis[0][1], Axis[Axis.length - 1][1]]];

				Vault[0] = Tools.typen(Clients.wallet)[2];

				if (Vault[0][0] > 0 || Vault[0][1] > 0) {

						Vault[0] = [
								[`USD`, Vault[0][0].toFixed(2), 1, 0], 
								[`BTC`, Vault[0][1].toFixed(7), Tools.typen(Clients.quo).btc[0]], Vault[2][0] - Vault[2][1]];

						Vault[0].forEach(Asset => {

								if (Asset[1] > 0) {

										Vault[1].push(
												[`div`, {class: `asset _wrap_202203262208`, style: {
														padding: `${12}px ${0}`, [`border-bottom`]: `${1}px solid #e8e8e8`}}, 
														[
																[`div`, {style: {width: `${20}%`}}, [[`a`, {href: `javascript:;`, style: {
																		[`font-family`]: `litera`,
																		[`font-size`]: `${12}px`}}, Asset[0]]]],
																[`div`, {style: {width: `${35}%`}}, [[`span`, {}, `${Asset[1]}`]]],
																[`div`, {style: {width: `${25}%`}}, [[`span`, {style: {
																		color: (Asset[3] >= 0) ? `#1bd401`: `#d40101`}}, `${Asset[2]}`]]],
																[`div`, {style: {width: `${20}%`}}, [[`span`, {style: {
																		color: (Asset[3] >= 0) ? `#1bd401`: `#d40101`}}, `${(Asset[2]*Asset[1]).toFixed(2)}`]]]]]);
								}
						});

						return [`div`, {style: {margin: `${30}px ${0} ${0}`}}, 
								[
										[`div`, {class: `_gxM _tXx`, style: {[`font-size`]: `${12}px`}}, `Assets`],
										[`div`, {id: `pittile`, class: `_wrap_202203262208`, style: {
												padding: `${24}px ${0} ${6}px`, [`border-bottom`]: `${1}px solid #e8e8e8`}}, 
												[
														[`div`, {style: {width: `${20}%`}}, [[`span`, {}, `asset`]]],
														[`div`, {style: {width: `${35}%`}}, [[`span`, {}, `amount`]]],
														[`div`, {style: {width: `${25}%`}}, [[`span`, {}, `price`]]],
														[`div`, {style: {width: `${20}%`}}, [[`span`, {}, `value`]]]]], 
								[`div`, {}, Vault[1]]]];
				}

				else return [];
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

	bitpit: function () {

			let Pit = [Tools.typen(Clients.axis), []];

			let Quo = Tools.typen(Clients.quo).btc;

			Pit[0].sort((A, B) => {return B[0] - A[0]});

			Pit[0].slice(1, 10).forEach((Value, i) => {

				Pit[1].push([`div`, {class: `_gxM`}, 
					[
						[`span`, {style: {
							[`font-family`]: `consola`,
							[`font-size`]: `${11}px`,
							color: ((Value[1] - Pit[0][i + 2][1]) >= 0) ? `#1bd401`: `#d40101`}}, `${Value[1]}`],
						[`div`, {class: `_gZz`, style: {
							opacity: .3,
							[`font-size`]: `${11}px`, 
							[`font-family`]: `consola`}}, `${Tools.logs(Value[0])}`]]]);

				Pit[2] = Value[1]
			});

			return Pit[1]
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

	devow: function () {

		if (Tools.typen(Clients.devow).length === 0) return [];

		let Devow = [[], []];

		Devow[0] = Tools.typen(Clients.devow).sort((A, B) => {return B.secs - A.secs});

		let a = Tools.typen(Clients.mug)[0];

		Devow[0].forEach(MD => {

			Devow[1].push([
				`div`, {class: `_wrap_202203262208`, style: {padding: `${12}px ${0}`}}, 
					[
						[`div`, {class: `_gxM`, style: {width: `${40}%`, [`align-items`]: `center`}}, 
							[
								[`div`, {class: ``, style: {[`font-family`]: `geometria`}},
                                	[[`span`, {style: {
                                    	opacity: .4, 
                                    	[`font-size`]: `${11}px`, [`font-weight`]: 600}}, Tools.logs(MD.secs).substr(0, 15)]]]]], 
						[`div`, {class: `_gxM _gZz`, style: {width: `${30}%`, [`align-items`]: `center`}}, 
                            [
                                [`div`, {},
                                    [[`div`, {style: {
                                    	[`font-family`]: `geometria`,
                                    	[`font-size`]: `${11}px`, 
                                    	[`font-weight`]: 600, color: (MD.till[a][1] < 0)? `#e50000`: `#00e53f`}}, `${Tools.notate(MD.till[a][1])}`]]], 
                                [`span`, {class: (MD.till[a][1] >= 0)? `v202205081410`: `v202205081426`, style: {[`margin-left`]: `${12}px`}}, ``]]], 
                        [`div`, {class: `_gxM _gZz`, style: {width: `${30}%`, [`align-items`]: `center`}}, 
                        	[
                                [`div`, {},
                                    [[`div`, {style: {
                                    	[`font-family`]: `geometria`,
                                    	[`font-size`]: `${11}px`, 
                                    	[`font-weight`]: 600}}, `${Tools.notate(MD.hold[1])}`]]], 
                                [`span`, {class: `v202205081343`, style: {[`margin-left`]: `${12}px`}}, ``]]]]]);
		});

		return [`div`, {}, 
			[
				[`div`, {style: {margin: `${24}px ${0}`}}, 
					[
						[`span`, {style: {
                            [`margin-top`]: `${24}px`, 
                            opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Withdrawals & Deposits`],
						[`span`, {style: {
                            [`margin-top`]: `${2}px`, 
                            opacity: 1, [`font-size`]: `${9}px`}}, ``]]], [`div`, {}, Devow[1]]]]
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

	hold: function () {

		if (Tools.typen(Clients.hold).length === 0) return [];

		let Hold = [[], []];

		Hold[0] = Tools.typen(Clients.hold).sort((A, B) => {return B.secs - A.secs});

		Hold[0].forEach(MD => {

			Hold[1].push([
				`div`, {class: `_wrap_202203262208`, style: {padding: `${12}px ${0}`}}, 
					[
						[`div`, {class: `_gxM`, style: {width: `${40}%`, [`align-items`]: `center`}}, 
							[
								[`div`, {class: ``, style: {[`font-family`]: `geometria`}},
                                	[[`span`, {style: {
                                    	opacity: .4, 
                                    	[`font-size`]: `${11}px`, [`font-weight`]: 600}}, Tools.logs(MD.secs).substr(0, 15)]]]]], 
						[`div`, {class: `_gxM _gZz`, style: {width: `${30}%`, [`align-items`]: `center`}}, 
                            [
                                [`div`, {},
                                    [[`div`, {style: {
                                    	[`font-family`]: `geometria`,
                                    	[`font-size`]: `${11}px`, 
                                    	[`font-weight`]: 600, color: (MD.till[hold] < 0)? `#e50000`: `#00e53f`}}, `${Tools.notate(MD.till[hold])}`]]], 
                                [`span`, {class: (MD.till[hold] >= 0)? `v202205081410`: `v202205081426`, style: {[`margin-left`]: `${12}px`}}, ``]]], 
                        [`div`, {class: `_gxM _gZz`, style: {width: `${30}%`, [`align-items`]: `center`}}, 
                        	[
                                [`div`, {},
                                    [[`div`, {style: {
                                    	[`font-family`]: `geometria`,
                                    	[`font-size`]: `${11}px`, 
                                    	[`font-weight`]: 600}}, `${Tools.notate(MD.hold[0])}`]]], 
                                [`span`, {class: `v202205081343`, style: {[`margin-left`]: `${12}px`}}, ``]]]]]);
		});

		return [`div`, {}, 
			[
				[`div`, {style: {margin: `${0} ${0} ${24}px`}}, 
					[
						[`span`, {style: {
                            [`margin-top`]: `${24}px`, 
                            opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Reserve toll`],
						[`span`, {style: {
                            [`margin-top`]: `${2}px`, 
                            opacity: 1, [`font-size`]: `${9}px`}}, ``]]], [`div`, {}, Hold[1]]]]
	},

	holdMug: [
			`section`, {id: `mugs`, class: `_geQ _axZ`, style: {
			width: `${100}%`,
			[`max-width`]: `${600}px`,
			[`font-size`]: `${13}px`}}, 
				[[`div`, {class: `_aXZ`}, 
					[
						[`div`, {class: `_gZ`}, 
							[[`div`, {class: `_gxM`, style: {
								padding: `${16}px ${24}px`}}, 
								[[`span`, {class: `_tXx`}, `provide avatar`]]]]], 
						[`section`, {class: `_gZ`}, 
							[[`div`, {}, 
								[[`div`, {class: `_sZ2`}, 
									[ //with `mutiple-child` format
										[`div`, {class: `_sZ2`, style: {[`align-items`]: `center`, [`justify-content`]: `center`, height: `${200}px`}}, 
											[[`img`, {id: `file-plane`, src: `/ssl/given/svg/mug2.svg`, style: {height: `${72}px`, width: `${72}px`}}]]], 
										[`div`, {class: `_gxM _geQ`, style: {margin: `${0}px ${20}px ${8}px`, [`line-height`]: 1.414}}, 
											[
												[`label`, {class: `v202202122052 image`, for: `file`}], 
												[`form`, {enctype: `multipart/form-data`}, 
													[[`input`, {id: `file`, type: `file`, accepts: `image/*`}]]], 
												[`div`, {class: `_eYG`}, 
													[[`span`, {class: `_a2X`}, `upload/replace image`]]]]], 
										[`div`, {class: `_geQ`}, 
											[[`p`, {style: {
												margin: `${24}px ${16}px`, 
												padding: `${5}px ${16}px`, 
												[`border-radius`]: `${50}px`,
												color: `#fff`,
												background: `#1e1e1e`,
												[`text-align`]: `center`,
												[`font-size`]: `${13}px`}}, `your image must be at least 500 x 500 pixels and set against a plain white background`]]]]]]]]]]]]], 

	holdem: function () {

        let Vault = [Tools.typen(Clients.wallet)[2][0], 0];

        let BTC = Tools.typen(Clients.quo).btc;

        let Coin = [[Tools.typen(Clients.wallet)[2][1], BTC[0], BTC[1][4]]];

        let Holden = [[[[`bitcoin`, `BTC`], Coin[0][0], Coin[0][1], ((Coin[0][2][1] - Coin[0][2][0])/Coin[0][1])*100]/*, [[`tether`, `USDT`], .2392, .9998, 0.0]*/], []];

        Holden[0].forEach(Hold => {

            Vault[1]++;

            Vault[0] += (Hold[1]*Hold[2]);

        });

        return [`div`, {}, 
            [
                [`div`, {style: {[`font-family`]: `geometria`, [`font-weight`]: 600}}, `${(Vault[0]).toFixed(2)} USD`],
                [`div`, {style: {opacity: .5, [`font-family`]: `geometria`, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `${Vault[1]} asset(s)`]]];
    },

    holden: function () {

		let BTC = Tools.typen(Clients.quo).btc;

		let Coin = [[Tools.typen(Clients.wallet)[2][1], BTC[0], BTC[1][4]]];

		let Holden = [[[[`bitcoin`, `BTC`], Coin[0][0], Coin[0][1], ((Coin[0][2][1] - Coin[0][2][0])/Coin[0][1])*100]/*, [[`tether`, `USDT`], .2392, .9998, 0.0]*/], []];

		Holden[0].forEach(Hold => {

			Holden[1].push(
				[`div`, {class: `_wrap_202203262208`, style: {padding: 0, [`font-size`]: `${12}px`}}, 
					[
						[`div`, {class: `spot-title-box`}, 
							[[`div`, {class: `_gxM _geQ`}, 
								[
									[`div`, {}, 
										[
											[`div`, {}, Hold[0][0]], 
											[`div`, {style: {opacity: .4, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `Spot`]]], 
									[`div`, {class: `_gZz`}, 
										[[`a`, {class: `v202203261943`, style: {
                                            width: `${21}px`, height: `${21}px`, margin: `${0} ${10}px`}, href: `#`}]]]]]]],
						[`div`, {class: `spot-wallet-box`}, 
							[[`div`, {class: `_gxM _geQ`}, 
								[
									[`div`, {style: {[`text-align`]: `right`}}, 
										[
											[`div`, {style: {[`font-family`]: `geometria`, [`font-weight`]: 600}}, `${(Hold[1]).toFixed(6)}`], 
											[`div`, {style: {opacity: .4, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, Hold[0][1]]]], 
									[`div`, {class: `flex-z`, style: {[`text-align`]: `right`}}, 
										[
											[`div`, {style: {
												[`font-family`]: `geometria`, [`font-weight`]: 600}}, `${(Hold[1]*Hold[2]).toFixed(4)}`], 
												[`div`, {style: {opacity: .4, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `USD`]]]]]]],
						[`div`, {class: `spot-margin-box`}, 
							[[`div`, {class: `_gxM _geQ`}, 
								[
									[`span`, {class: `v202205042043`, style: {width: `${21}px`, height: `${21}px`, margin: `${0} ${10}px`}}],
									[`div`, {class: `_eYG`, style: {[`text-align`]: `right`}}, 
										[
											[`div`, {style: {
                                                [`font-family`]: `geometria`, 
                                                [`font-weight`]: 600,
                                                color: (Hold[3] >= 0)? `#00e53f`: `#e50000`}}, `${(Hold[3]).toFixed(2)}%`]]], 
											[`div`, {class: `flex-z`, style: {[`text-align`]: `right`}}, 
												[
													[`div`, {style: {
                                                        [`font-family`]: `geometria`, [`font-weight`]: 600}}, `${Hold[2]}`], 
														[`div`, {style: {
                                                            opacity: .4, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, `USD`]]]]]]]]]);
		});

		return [`div`, {}, Holden[1]];
	},

	holds: function () {

		return [`main`, {id: `holds`, class: `_tY0`, style: {background: `#fff`, color: `#262626`}}, 
			[
				[`div`, {class: `_-tY`,style: {background: `#262626`}}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: `_-Xg _gxM _geQ`}, 
								[
									[`a`, {class: `-_tX v202201180941`, style: {[`min-width`]: `${32}px`, height: `${32}px`}, href: `/`}, ``], 
									[`span`, {id: `vault`, class: `_aA6 _tXx`, style: {
                                        [`border-left`]: `${1}px solid #91919159`, 
                                        margin: `${0} ${7}px`,
                                        padding: `${0} ${14}px`,
                                        [`font-size`]: `${14}px`,
                                        color: `#fff`,
                                        overflow: `hidden`,
                                        [`white-space`]: `nowrap`}}, `joltquid`]]],
							[`div`, {class: `_gZz`}, 
								[
									/*(Clients.mug)? this.wallets: [`div`, {}],
									this.mug[(Clients.mug) ? 1: 0]*/]]]]]], 
				[`section`, {style: {
                    width: `${100}%`,
					[`max-width`]: `${1000}px`, margin: `${60}px auto`, padding: `${0} ${24}px`}}, 
					[
						[`div`, {style: {[`margin-bottom`]: `${24}px`}},  
                            [
                                [`span`, {style: {
                                    [`margin-top`]: `${24}px`, opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Total Balance`], 
                                [`div`, {id: `holdem`}, [this.holdem()]]]],
						[`div`, {style: {[`margin-bottom`]: `${24}px`}}, 
							[
								[`span`, {style: {margin: `${24}px ${0}`, opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Tokens`], 
								[`div`, {id: `holden`}, [this.holden()]]]],
						[`div`, {style: {[`margin-bottom`]: `${24}px`}}, [[`span`, {style: {
                            [`margin-top`]: `${24}px`, opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Hyper-ledger`],
                            this.trailhold()]]]],
				this.foot()]];
	},

    inlets: function () {

        let Wallets = [];

        Tools.typen(Clients.inlet).reverse().forEach(inlet => {

            Wallets.push([`div`, {class: `_gxM _geQ`, style: {padding: `${12}px ${0}`}}, 
                [
                    [`span`, {class: `v202206271427`}], 
                    [`div`, {class: `_eYG`}, 
                        [[`div`, {style: {width: `${100}%`}}, 
                            [[`span`, {class: `wallet-text _tXx`}, `${inlet}`]]]]]]]);
        });

        return [`div`, {style: {[`margin-top`]: `${24}px`}}, 
            [
                [`div`, {style: {[`margin-bottom`]: `${24}px`}}, 
                    [
                        [`span`, {style: {
                            [`margin-top`]: `${24}px`, 
                            opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Funding Wallets`],
                        [`span`, {style: {
                            [`margin-top`]: `${2}px`, 
                            opacity: 1, [`font-size`]: `${11}px`}}, `USDT TRC20 Addresses`]]], 
                [`div`, {}, Wallets]]];
    },

	loadWallet: [
		`div`, {class: `_gxM`}, 
			[
				//[`a`, {class: `v202206131256`, style: {margin: `${0} ${10}px`}, href: `#`}],
				[`a`, {id: `mugin`, class: `v202206131254`, style: {margin: `${0} ${10}px`}, href: `javascript:;`}]]],

	main: function () {

		return [`main`, {id: `holds`, class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
						[
							[`div`, {class: `_-Xg _gxM _geQ`}, 
								[
									[`a`, {class: `-_tX v202201180941`, style: {[`min-width`]: `${32}px`, height: `${32}px`}, href: `/`}, ``], 
									[`span`, {id: `vault`, class: `_aA6 _tXx`, style: {
                                        [`border-left`]: `${1}px solid #91919159`, 
                                        margin: `${0} ${7}px`,
                                        padding: `${0} ${14}px`,
                                        [`font-size`]: `${14}px`,
                                        color: `#000`, //`#00e53f`,
                                        overflow: `hidden`,
                                        [`white-space`]: `nowrap`}}, `joltquid`]]],
							[`div`, {class: `_gZz`, style: {[`align-items`]: `center`}}, 
								[(Clients.mug)? this.utilWallet: this.loadWallet]]]]]], 
				[`section`, {style: {width: `${100}%`, [`max-width`]: `${1000}px`, margin: `${60}px auto`}}, 
					[
						[`div`, {class: `_wrap_202203262208`, style: {padding: `${0} ${24}px`}}, 
							[ 
                            	[`div`, {id: `put`}, 
									[
										(Clients.mug)? this.utilVows(): [], 
										(Clients.mug)? this.utilVia(): [], 
										(Clients.vows && Tools.typen(Clients.vows) && Tools.typen(Clients.vows).length > 0)? this.vows(): [],
										(Clients.devow && Tools.typen(Clients.devow) && Tools.typen(Clients.devow).length > 0)? this.devow(): [],
										/*this.outs()*/]],
								[`div`, {id: `take`}, 
									[/*this.hold()*/]]]]]], this.utilFooter()]];
	},

	main_exchange: function () {

		return [
			[`header`, {style: {position: `static`, width: `${100}%`}}, 
				[[`div`, {class: `_gxM title-box`, style: {padding: `${10}px ${12}px`}}, 
					[
						[`div`, {class: `_gxM _geQ`}, 
							[
								[`a`, {class: `-_tX v202201180941`, style: {[`min-width`]: `${21}px`, height: `${21}px`}, href: `/`}, ``], 
								[`span`, {style: {
									[`border-left`]: `${1}px solid #91919159`,
									margin: `${0} ${7}px`,
									padding: `${0} ${14}px`,
									[`font-size`]: `${12}px`,
									overflow: `hidden`,
											//[`text-overflow`]: `ellipsis`,
									[`white-space`]: `nowrap`}}, `Market`]]],
						[`div`, {class: `_gZz`}, [this.mug[(Clients.mug) ? 1: 0]]]]]]], 
			[`main`, {style: {[`min-height`]: `${320}px`, [`line-height`]: `${13}px`, [`font-size`]: `${10}px`}}, 
				[
					[`header`, {style: {position: `static`}}, 
						[[`div`, {class: `title-box _gxM `, style: {padding: `${10}px ${12}px`}}, 
							[[`span`, {}, `BTC/USD`], [`span`, {class: `top-slide`}, ` 29226.7`], [`span`, {class: `top-slide`}, ` -3.81%`]]]]]]], 
			[`footer`, {}]]
	},

	moves: function () {

			let Pit = [[], []];

			Pit[0] = Tools.typen(Clients.moves).sort((A, B) => {return B.secs - A.secs});

			Pit[0].forEach(Move => {

				Pit[1].push(
					[`div`, {id: `pitmoves`, class: `_wrap_202203262208`, style: {
						padding: `${12}px ${0}`, [`border-bottom`]: `${1}px solid #e8e8e8`}}, 
						[
							[`div`, {style: {width: `${20}%`}}, [[`a`, {href: `javascript:;`, style: {
								color: (Move.side === `buy`) ? `#1bd401`: `#d40101`,
								[`font-size`]: `${12}px`,
								[`text-transform`]: `uppercase`}}, Move.side]]],
							[`div`, {style: {width: `${30}%`}}, [[`span`, {}, Tools.logs(Move.secs).substr(5, 10)]]],
							[`div`, {style: {width: `${30}%`}}, [[`span`, {}, `${Move.coin[0]} BTC`]]],
							[`div`, {style: {width: `${20}%`}}, [[`span`, {}, `${Move.coin[1]}`]]]]]);
			});

			return [`div`, {class: ``}, 
				[
					[`div`, {id: `pittile`, class: `_wrap_202203262208`, style: {
						padding: `${24}px ${0} ${6}px`, [`border-bottom`]: `${1}px solid #e8e8e8`}}, 
						[
							[`div`, {style: {width: `${20}%`}}, [[`span`, {}, `side`]]],
							[`div`, {style: {width: `${30}%`}}, [[`span`, {}, `date`]]],
							[`div`, {style: {width: `${30}%`}}, [[`span`, {}, `amount`]]],
							[`div`, {style: {width: `${20}%`}}, [[`span`, {}, `price`]]]]], 
					[`div`, {}, Pit[1]]]];
	},

	mug: [
				[`a`, {class: `-_tX v202204261406`, id: `mugin`, style: {margin: `${0}px ${0}px`}, href: `javascript:;`}], 
				[`span`, {style: {margin: `${0}px ${0}px`, position: `relative`, height: `${21}px`}}, 
					[
						[`svg`, {style: {[`min-height`]: `${21}px`, width: `${21}px`}, viewBox: `0 0 21 21`}, 
							[
								[`circle`, {cy: 10.5, cx: 10.5, r: 10.5, stroke: `none`, fill: `#47008c`}],
								[`text`, {x: 10.5, y: 14, [`text-anchor`]: `middle`, fill: `#fff`, style: {
									[`text-transform`]: `uppercase`, 
									[`letter-spacing`]: `normal`,
									[`font-size`]: `${11}px`}}, (Clients.mug)? Clients.mug: ``]]], 
						[`a`, {id: `mug`, class: `_aWz mug`, style: {position: `absolute`, left: 0}, href:(Clients.mug)? `/balance`:`javascript:;`}]]]],

	outs: function () {

		if (Tools.typen(Clients.outs).length === 0) return [];

		let Outs = [[], [], `https://tronscan.org/#/transaction/`];

		Outs[0] = Tools.typen(Clients.outs).sort((A, B) => {return B.secs - A.secs});

		Outs[0].forEach(MD => {

			Outs[1].push([`div`, {class: `_gxM`, style: {padding: `${10}px ${0}`, [`align-items`]: `center`}}, 
				[
					[`span`, {style: {
						[`font-family`]: `geometria`,
						[`font-size`]: `${10}px`, 
						opacity: .5,
						overflow: `hidden`, 
						[`text-overflow`]: `ellipsis`,
						[`white-space`]: `nowrap`}}, Tools.logs(MD.secs).substr(0)], 
					[`div`, {class: `_eYG _tXx`}, 
						[[`a`, {id: `tx`, href: `${Outs[2]}${MD.tx}`, style: {
							width: `${100}%`, overflow: `hidden`, [`text-overflow`]: `ellipsis`}}, MD.tx]]],
					[`div`, {class: `_gxM _gZz`, style: {[`margin-left`]: `${12}px`,[`align-items`]: `center`}}, 
                        [
                        	[`div`, {style: {
                                [`font-family`]: `geometria`,
                                [`font-size`]: `${11}px`, 
                                [`font-weight`]: 600}}, `${Tools.notate(MD.till[hold])*-1}`], 
                            [`span`, {class: `v202205081410`, style: {[`margin-left`]: `${12}px`}}, ``]]]]]);
		});

		return [`div`, {}, 
			[
				[`div`, {style: {margin: `${24}px ${0}`}}, 
					[
						[`span`, {style: {
                            [`margin-top`]: `${24}px`, 
                            opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `USDT Stake transfers`],
						[`span`, {style: {
                            [`margin-top`]: `${2}px`, 
                            opacity: 1, [`font-size`]: `${9}px`}}, ``]]], [`div`, {}, Outs[1]]]];
	},

	real: function (Real) {

			let Span = [[], [`1H`, `1D`, `1W`, `All`]];

			Span[1].forEach((a) => {

				Span[0].push([`span`, {id: `span`, style: {opacity: (a === Real[3])? 1: .3, padding: `${0} ${10}px`}}, a]);
			});

			return [
				`div`, {style: {padding: `${12}px 0`}}, 
					[
						[`div`, {class: `_gxM`}, 
							[
								[`span`, {class: `tXx`, style: {
									color: (((Real[0][1] - Real[0][0])/Real[0][1])*100 >= 0) ? `#1bd401`: `#d40101`,
									[`font-family`]: `geometria`,
									[`font-size`]: `${11}px`}}, `${(((Real[0][1] - Real[0][0])/Real[0][1])*100 >= 0) ? `+`: ``}${(((Real[0][1] - Real[0][0])/Real[0][1])*100).toFixed(2)}%`], 
								[`div`, {id: `reals`, class: `_gZz`, role: Real[2], style: {[`font-size`]: `${10}px`}}, 
									Span[0]]]], 
						[`svg`, {style: {margin: `${6}px ${0}`, width: `${100}%`, [`max-height`]: `${10}px`}}, 
							[
								[`rect`, {
									x: 0, 
									y: 1, 
									rx: 4, 
									ry: 4, 
									stroke: `rgba(${88}, ${65}, ${216}, ${.5})`,  
									opacity: 1, 
									fill: `none`, 
									width: `${100}%`, 
									height: `${4}px`}], 
								[`rect`, {
									x: 0, 
									y: 2.5, 
									rx: 4, 
									ry: 4, 
									stroke: `#5841d8`, //`rgba(${88}, ${65}, ${216}, ${.5})`, 
									fill: `none`, 
									width: `${((Real[0][1]- Real[0][2])/(Real[0][3] - Real[0][2]))*100}%`, 
									height: `${1}px`}]]], 
						[`div`, {class: `_gxM glyph_202203191319`, style: {[`font-family`]: `geometria`, [`font-size`]: `${10}px`}}, 
							[
								[`span`, {style: {color: `#6a6a6a`}}, `LOW: ${Real[0][2]} ${Real[1]}`], 
								[`div`, {class: `_gZz`}, 
									[[`span`, {style: {color: `#6a6a6a`}}, `HIGH: ${Real[0][3]} ${Real[1]}`]]]]]]]
	},

	splash: [
			`main`, {class: `_xC2 _aA2`, style: {height: `${100}%`}}, 
				[[`div`, {class: `_geQ`, style: {[`justify-content`]: `center`}}, 
					[[`span`, {class: `v202304191915`, style: {width:`${56}px`, height: `${56}px`}}]]]]],

	pit: function () {

			let Axis = Tools.typen(Clients.quo).btc;

			let vault = (parseFloat(Tools.typen(Clients.wallet)[2][0]) + parseFloat(Axis[0])*Tools.typen(Clients.wallet)[2][1]).toFixed(2)

			return [`main`, {class: `_tY0`, style: {height: `${100}px`}}, 
				[
					[`div`, {class: `_-tY`},
						[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
							[
								[`div`, {class: `_-Xg _gxM _geQ`}, 
									[
										[`a`, {class: `-_tX v202201180941`, style: {[`min-width`]: `${32}px`, height: `${32}px`}, href: `/`}, ``], 
										[`span`, {id: `vault`, class: `_aA6 _tXx`, style: {
											[`border-left`]: `${1}px solid #d5d5d5`,
												margin: `${0} ${7}px`,
												padding: `${0} ${14}px`,
												[`font-size`]: `${14}px`,
												color: `#47008c`,
												//overflow: `hidden`,
												[`font-family`]: `arcane`,
												//[`text-overflow`]: `ellipsis`,
												[`white-space`]: `nowrap`}}, `${vault} USD`], 
										[`span`, {id: `coins`, class: `_tXx`, style: {
												color: `#feef11`, 
												margin: `${1.5}px ${0} ${0}px ${-8}px`, 
												[`font-size`]: `${12}px`}}, (Clients.wallet && Tools.typen(Clients.wallet)[2][1] > 0)? `+BTC`: ``]]],
								[`div`, {class: `_gZz`}, 
									[this.wallets]]]]]], 
					[`section`, {id: `wallet`, style: {padding: `${0} ${24}px`, [`max-width`]: `${1000}px`, width: `${100}%`, margin: `${90}px auto`}}, 
						[
							[`div`, {class: `_wrap_202203262208`}, 
								[
									[`div`, {id: `pitaxis`}],
									[`div`, {id: `pittools`}, 
										[
											[`div`, {id: `pitmove`, class: `_gxM`}, 
												[
													[`div`, {class: `_geQ`}, [[`span`, {class: `pitside`, style: {
														background: `#1bd401`,
														opacity: 1,
														color: `#fff`}}, `Buy`]]],
													[`div`, {class: `_geQ`}, [[`span`, {class: `pitside`}, `Sell`]]]]], 
											[`div`, {id: `pittype`, class: `_gxM`, style: {padding: `${18}px ${0}`}}, 
												[
													[`div`, {class: `sort _geQ`}, [[`span`, {class: `pittype`, style: {opacity: 1}}, `Market`]]],
													[`div`, {class: `sort _geQ`}, [[`span`, {class: `pittype`}, `Limit`]]],
													[`div`, {class: `sort _geQ`}, [[`span`, {class: `pittype`}, `Take-profit`]]],
													/**[`div`, {class: `sort _geQ`}, [[`span`, {}, `Stop-limit`]]]**/]], 
											[`div`, {class: `_gxM _geQ`}, 
												[
													[`span`, {style: {[`font-size`]: `${12}px`, opacity: .5}}, `price`], 
													[`div`, {class: `_gZz _eYG`}, 
														[	
															[`div`, {id: `pitvalue`, class: `_gxM _gZz _geQ`}, 
																[
																	[`input`, {id: `value`, placeholder: `${Tools.typen(Clients.quo).btc[0]}`}],
																	[`span`, {class: `_tXx`, style: {color: `#d0d1d2`}}, `USD`]]]]]]], 
											[`div`, {id: `pitamount`, class: `_gxM`, style: {padding: `${18}px ${0}`}}, 
												[
													[`input`, {id: `amount`, placeholder: `0.00BTC`, type: `text`}], 
													[`div`, {class: `_gZz`, style: {width: `${35}%`}}, 
														[[`span`, {id: `pitalias`, style: {
															[`font-family`]: `geometria`, 
															[`font-size`]: `${12}px`,
															[`white-space`]: `nowrap`, 
															opacity: .5}}, `0.00 USD`]]]]], 
											[`div`, {}, 
												[[`div`, {class: `_geQ`}, 
													[[`span`, {id: `place`, style: {
														width: `${100}%`,
														padding: `${12}px ${0}`,
														background: `#1bd401`,
														[`font-size`]: `${12}px`,
														opacity: .3,
														[`text-align`]: `center`,
														color: `#fff`,
														cursor: `pointer`}}, `place order`]]]]]]]]],
							[`div`, {id: `assets`}, [this.assets()]], 
							[`div`, {id: `pits`, style: {margin: `${30}px ${0}`}}, [this.pitmoves()]]]]]];
	},

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

	pitmoves: function () {

			let Pit = [[], []];

			Pit[0] = Tools.typen(Clients.pitmoves).sort((A, B) => {return B.secs - A.secs});

			Pit[0].forEach(Move => {

				Pit[1].push(
					[`div`, {id: `pitmoves`, class: `_wrap_202203262208`, style: {
						padding: `${12}px ${0}`, [`border-bottom`]: `${1}px solid #e8e8e8`}}, 
						[
							[`div`, {style: {width: `${20}%`}}, [[`a`, {href: `javascript:;`, style: {
								color: (Move.side === `buy`) ? `#1bd401`: `#d40101`,
								[`font-size`]: `${12}px`,
								[`text-transform`]: `uppercase`}}, Move.side]]],
							[`div`, {style: {width: `${30}%`}}, [[`span`, {}, Tools.logs(Move.secs).substr(5, 10)]]],
							[`div`, {style: {width: `${30}%`}}, [[`span`, {}, `${Move.coin[0]} BTC`]]],
							[`div`, {style: {width: `${20}%`}}, [[`span`, {}, `${Move.coin[1]}`]]]]]);
			});

			return [`div`, {class: ``}, 
				[
					[`div`, {class: `_gxM _tXx`, style: {[`font-size`]: `${12}px`}}, `Trades`],
					[`div`, {id: `pittile`, class: `_wrap_202203262208`, style: {
						padding: `${24}px ${0} ${6}px`, [`border-bottom`]: `${1}px solid #e8e8e8`}}, 
						[
							[`div`, {style: {width: `${20}%`}}, [[`span`, {}, `side`]]],
							[`div`, {style: {width: `${30}%`}}, [[`span`, {}, `date`]]],
							[`div`, {style: {width: `${30}%`}}, [[`span`, {}, `amount`]]],
							[`div`, {style: {width: `${20}%`}}, [[`span`, {}, `price`]]]]], 
					[`div`, {}, Pit[1]]]];
	},

	puton: function () {

		if (Tools.typen(Clients.puton).length === 0) return [];

		let Puton = [[], []];

		Puton[0] = Tools.typen(Clients.puton).sort((A, B) => {return B.secs - A.secs});

		let a = Tools.typen(Clients.mug)[0];

		Puton[0].forEach(MD => {

			Puton[1].push([
				`div`, {class: `_wrap_202203262208`, style: {padding: `${12}px ${0}`}}, 
					[
						[`div`, {class: `_gxM`, style: {width: `${40}%`, [`align-items`]: `center`}}, 
							[
								[`div`, {class: ``, style: {[`font-family`]: `geometria`}},
                                	[[`span`, {style: {
                                    	opacity: .4, 
                                    	[`font-size`]: `${11}px`, [`font-weight`]: 600}}, Tools.logs(MD.secs).substr(0, 15)]]]]], 
						[`div`, {class: `_gxM _gZz`, style: {width: `${30}%`, [`align-items`]: `center`}}, 
                            [
                                [`div`, {},
                                    [[`div`, {style: {
                                    	[`font-family`]: `geometria`,
                                    	[`font-size`]: `${11}px`, 
                                    	[`font-weight`]: 600, color: (MD.till[a][1] < 0)? `#e50000`: `#00e53f`}}, `${Tools.notate(MD.till[a][0])}`]]], 
                                [`span`, {class: (MD.till[a][0] >= 0)? `v202205081410`: `v202205081426`, style: {[`margin-left`]: `${12}px`}}, ``]]], 
                        [`div`, {class: `_gxM _gZz`, style: {width: `${30}%`, [`align-items`]: `center`}}, 
                        	[
                                [`div`, {},
                                    [[`div`, {style: {
                                    	[`font-family`]: `geometria`,
                                    	[`font-size`]: `${11}px`, 
                                    	[`font-weight`]: 600}}, `${Tools.notate(MD.hold[0])}`]]], 
                                [`span`, {class: `v202205081343`, style: {[`margin-left`]: `${12}px`}}, ``]]]]]);
		});

		return [`div`, {}, 
			[
				[`div`, {style: {margin: `${24}px ${0}`}}, 
					[
						[`span`, {style: {
                            [`margin-top`]: `${24}px`, 
                            opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Collateral Conversions`],
						[`span`, {style: {
                            [`margin-top`]: `${2}px`, 
                            opacity: 1, [`font-size`]: `${9}px`}}, ``]]], [`div`, {}, Puton[1]]]]
	},

	settle: function () {

		return [`main`, {id: `holds`, class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}},
						[
							[`div`, {class: `_-Xg _gxM _geQ`}, 
								[
									[`a`, {class: `-_tX v202201180941`, style: {[`min-width`]: `${32}px`, height: `${32}px`}, href: `/`}, ``], 
									[`span`, {id: `vault`, class: `_aA6 _tXx`, style: {
                                        [`border-left`]: `${1}px solid #91919159`, 
                                        margin: `${0} ${7}px`,
                                        padding: `${0} ${14}px`,
                                        [`font-size`]: `${14}px`,
                                        color: `#000`,
                                        overflow: `hidden`,
                                        [`white-space`]: `nowrap`}}, `settle`]]],
							[`div`, {class: `_gZz`}, 
								[]]]]]], 
				[`section`, {style: {width: `${100}%`, [`max-width`]: `${1000}px`, margin: `${60}px auto`}}, 
					[
						[`div`, {class: `_wrap_202203262208`, style: {padding: `${0} ${24}px`}}, 
							[ 
                            	[`div`, {id: `put`}, 
									[
										[`div`, {style: {[`margin-bottom`]: `${24}px`}}, 
											[
												[`span`, {style: {
                            						[`margin-top`]: `${24}px`, 
                            						opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Settle Vows`],
												[`span`, {style: {
                            						[`margin-top`]: `${2}px`, 
                            						opacity: 1, [`font-size`]: `${9}px`}}, `*Only accepts withdrawal & deposit vows`]]], 
                            			[`div`, {class: `_gxM`, style: {[`align-items`]: `center`}}, 
                            				[
                            					[`span`, {class: `v202206271427`}], 
                            					[`div`, {class: `_eYG`}, 
                            						[[`div`, {style: {width: `${100}%`}}, 
                            							[[`input`, {id: `vow`, placeholder: `paste invoice to settle`, style: {[`font-size`]: `${12}px`}}]]]]], 
                            					[`div`, {class: `_QZg`, style: {margin: `${8}px`}}, 
                            						[[`a`, {id: `vowin`, class: `v202203191304`, href: `javascript:;`}]]]]], 
                                        this.puton()]],
								[`div`, {id: `take`}, 
									[
										[`div`, {style: {[`margin-bottom`]: `${24}px`}}, 
											[
												[`span`, {style: {
                            						[`margin-top`]: `${24}px`, 
                            						opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Settlements`],
												[`span`, {style: {
                            						[`margin-top`]: `${2}px`, 
                            						opacity: 1, [`font-size`]: `${9}px`}}, `*settled withdrawals & deposits`]]], 
                            			this.settlements()]]]]]]]];
	},

	settlements: function () {

		let Settle = [[], []]

		Settle[0] = Tools.typen(Clients.settles).sort((A, B) => {return B.secs - A.secs}),

		a = Tools.typen(Clients.mug)[0];

		Settle[0].forEach(MD => {

			Settle[1].push([
				`div`, {class: `_wrap_202203262208`, style: {padding: `${12}px ${0}`}}, 
					[
						[`div`, {class: `_gxM`, style: {width: `${40}%`, [`align-items`]: `center`}}, 
							[
								[`div`, {class: ``, style: {[`font-family`]: `geometria`}},
                                	[[`span`, {style: {
                                    	opacity: .4, 
                                    	[`font-size`]: `${11}px`, [`font-weight`]: 600}}, Tools.logs(MD.secs).substr(0, 15)]]]]], 
						[`div`, {class: `_gxM _gZz`, style: {width: `${30}%`, [`align-items`]: `center`}}, 
                            [
                                [`div`, {},
                                    [[`div`, {style: {
                                    	[`font-family`]: `geometria`,
                                    	[`font-size`]: `${11}px`, 
                                    	[`font-weight`]: 600, color: (MD.till[a][0] < 0)? `#e50000`: `#00e53f`}}, `${Tools.notate(MD.till[a][0])}`]]], 
                                [`span`, {class: (MD.till[a][0] >= 0)? `v202205081410`: `v202205081426`, style: {[`margin-left`]: `${12}px`}}, ``]]], 
                        [`div`, {class: `_gxM _gZz`, style: {width: `${30}%`, [`align-items`]: `center`}}, 
                        	[
                                [`div`, {},
                                    [[`div`, {style: {
                                    	[`font-family`]: `geometria`,
                                    	[`font-size`]: `${11}px`, 
                                    	[`font-weight`]: 600}}, `${Tools.notate(MD.hold[0])}`]]], 
                                [`span`, {class: `v202205081343`, style: {[`margin-left`]: `${12}px`}}, ``]]]]])
		});

		return [`div`, {}, Settle[1]];
	}, 

	trails: function (Trail) {

			let Trace = [];

			Trail[0].forEach(Pay => {

				Trace.push([
					`div`, {class: `_gxM _limit_202203261823`, style: {padding: `${9}px`}}, 
						[
							[`a`, {class: `tXx`, href: `/trail/${(Pay.md)}`, style: {
								color: `#48007c`, 
								[`text-transform`]: `uppercase`, [`font-size`]: `${11}px`}}, Pay.trace], 
							[`div`, {class: `_eYG`}, 
								[[`span`, {style: {color: `#b7b7b7`, [`font-size`]: `${11}px`}}, Tools.logs(Pay.secs)]]], 
							[`div`, {class: `_gZz _tXx`, style: {flex: 2}}, 
								[[`span`, {style: {
									[`font-family`]: `geometria`,
									[`font-size`]: `${12}px`,
									color: (Trail[1] === `+`)? `#1bd401`: ``}}, `${Trail[1]}${Pay.dollars} ${Trail[2]}`]]]]]);
			});

			return Trace;
	},

    trailhold: function () {

        let Trail = [/*[[new Date().valueOf(), [`Quant`, `Sell`], [`Bitcoin`, `BTC`], .0013577600, .0000035300, .00261868]]*/
            Tools.typen(Clients.trail), []];

        Trail[0].forEach(Obj => {

            Trail[1].push([
                `div`, {class: `_wrap_202203262208 _geQ`, style: {padding: `${12}px ${0}`, [`font-size`]: `${12}px`}}, 
                    [
                        [`div`, {class: `trail-a-box _gxM`}, 
                            [
                                [`div`, {style: {flex: 1}}, 
                                    [
                                        [`div`, {}, Obj[1][0]], 
                                        [`span`, {style: {
                                            opacity: .4, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, Obj[1][1]]]], 
                                [`div`, {class: `flex-z`, style: {[`font-family`]: `geometria`, [`text-align`]: `right`}},
                                    [
                                        [`div`, {}, Tools.logs(Obj[0]).substr(0, 9)], 
                                        [`span`, {style: {
                                            opacity: .4, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, Tools.logs(Obj[0]).substr(9)]]]]], 
                        [`div`, {class: `trail-z-box _gxM`}, 
                            [[`div`, {class: `_wrap_202203262208`, style: {padding: `${6}px ${0}`, [`text-align`]: `right`}}, 
                                [
                                    [`div`, {class: `_gxM _geQ _gZz flex-y`, style: {width: `${30}%`}}, 
                                        [
                                            [`div`, {class: `flex-z`},
                                                [
                                                    [`div`, {style: {
                                                        [`font-family`]: `geometria`, 
                                                        [`font-weight`]: 600,
                                                        color: (Obj[1][1] === `buy`)? `#e50000`: `inherit`}}, 
                                                        `${(Obj[1][1] === `buy`)? `-`: ``}${Obj[3]}`], 
                                                    [`span`, {style: {
                                                        opacity: .4, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, Obj[2][1]]]], 
                                            [`span`, {class: `v202205081410 trail-svg`, style: {[`margin-left`]: `${12}px`}}, ``]]], 
                                    [`div`, {class: `_gxM _geQ _gZz flex-y`, style: {width: `${30}%`, [`margin-left`]: `${24}px`}}, 
                                        [
                                            [`div`, {class: `flex-z`},
                                                [
                                                    [`div`, {style: {[`font-family`]: `geometria`, [`font-weight`]: 600}}, `${Tools.notate(Obj[4])}`], 
                                                    [`span`, {style: {
                                                        opacity: .4, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, Obj[2][1]]]], 
                                            [`span`, {class: `v202205081426 trail-svg`, style: {[`margin-left`]: `${12}px`}}, ``]]], 
                                    [`div`, {class: `_gxM _geQ _gZz flex-y`, style: {width: `${40}%`}}, 
                                        [ 
                                            [`div`, {class: `flex-z`},
                                                [
                                                    [`div`, {style: {[`font-family`]: `geometria`, [`font-weight`]: 600}}, `${Tools.notate(Obj[5])}`], 
                                                    [`span`, {style: {
                                                        opacity: .4, [`font-size`]: `${10}px`, [`font-weight`]: 600}}, Obj[2][1]]]], 
                                            [`span`, {class: `v202205081343 trail-svg`, style: {[`margin-left`]: `${12}px`}}, ``]]]]]]]]]);
        });

        return [`div`, {}, Trail[1]];
    },

	utilCollateral: [
		`div`, {class: `_gxM`}, 
			[
				[`a`, {id: ``, class: `v202203262148`, style: {width: `${21}px`, height: `${21}px`, margin: `${0} ${10}px`}, href: `/settle`}]]],

	utilVia: function () {

		return [`div`, {}, 
			[
                [`div`, {}, 
                	[
						[`span`, {style: {margin: `${24}px ${0} ${12}px`, opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Transfer`],
                    	[`div`, {class: `_gxM _geQ`}, 
                        	[
                        		[`span`, {class: `v202206271427`}], 
                        		[`div`, {class: `_eYG`}, 
                            		[[`div`, {style: {width: `${100}%`}}, 
                            			[[`input`, {id: `vialet`, placeholder: `wallet`}]]]]]]],
                    	[`div`, {class: `_gxM _geQ`, style: {margin: `${12}px ${0}`}}, 
                        	[
                        		[`div`, {class: `_eYG`}],
                        		[`div`, {class: `_gxM`}, 
                            		[[`div`, {style: {width: `${100}%`}}, 
                            			[[`input`, {id: `viafloat`, placeholder: `amount`, style: {
                            				[`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`text-align`]: `right`, overflow: `hidden`}}]]]]], 
                        		[`div`, {class: `_QZg`, style: {[`margin-left`]: `${8}px`}}, 
                        			[[`a`, {id: `via`, class: `v202203191304`, href: `javascript:;`}]]]]]]]]];
	},

	utilVows: function () {
		
		return [`div`, {}, 
			[
				[`div`, {class: `_gxM`}, 
					[
						[`div`, {style: {width: `${50}%`, [`padding-right`]: `${6}px`}}, 
							[
								[`span`, {style: {margin: `${24}px ${0} ${12}px`, opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
									`Deposit`],
								[`div`, {class: `_gxM`}, 
									[
										[`input`, {id: `putFloat`, placeholder: `amount`, style: {
                            				[`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`text-align`]: `right`, overflow: `hidden`}}],
                            			[`div`, {class: `_gZz`, style: {[`margin-left`]: `${12}px`}}, 
                            				[[`a`, {id: `putVow`, class: `v202203261943`, href: `javascript:;`}]]]]]]],
						[`div`, {style: {width: `${50}%`, [`padding-left`]: `${6}px`}}, 
							[
								[`span`, {style: {margin: `${24}px ${0} ${12}px`, opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, 
									`Withdraw`],
								[`div`, {class: `_gxM`}, 
									[
										[`input`, {id: `getFloat`, placeholder: `amount`, style: {
                            				[`font-family`]: `geometria`, [`font-size`]: `${12}px`, [`text-align`]: `right`, overflow: `hidden`}}],
                            			[`div`, {class: `_gZz`, style: {[`margin-left`]: `${12}px`}}, 
                            				[[`a`, {id: `getVow`, class: `v202203262148`, href: `javascript:;`}]]]]]]]]]]]
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
				[`a`, {id: ``, class: `v202207161737`, style: {width: `${21}px`, height: `${21}px`,margin: `${0} ${10}px`}, href: `javascript:;`}]*/]],

	vows: function () {

		let Vows = [[]];

		Tools.typen(Clients.vows).forEach(Vow => {

			Vows[0].push([`div`, {class: `_gxM _geQ`, style: {padding: `${8}px ${0}`}}, 
				[
					[`span`, {style: {[`font-family`]: `consola`, [`font-size`]: `${11}px`, [`font-weight`]: 600}}, `${Vow.md}`],
					[`div`, {class: `_gZz _gxM`}, 
						[
							[`span`, {style: {
                            	[`font-family`]: `geometria`,
                                [`font-size`]: `${11}px`, 
                                [`font-weight`]: 600, color: (Vow.float < 0)? `#e50000`: `#00e53f`}}, `${Tools.notate(Vow.float)}`]]]]])
		});

		return [`div`, {}, 
			[
				[`div`, {style: {[`margin-bottom`]: `${24}px`}}, 
					[
						[`span`, {style: {[`margin-top`]: `${24}px`, opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Vows`],
						[`span`, {style: {[`margin-top`]: `${2}px`, opacity: 1, [`font-size`]: `${9}px`}}, `*unsettled withdrawals & deposits`]]], 
                [`div`, {}, Vows[0]]]]
	},

	wallet: function () {

			return [

			`main`, {class: `_tY0`, style: {height: `${100}px`}}, 
				[
					[`div`, {class: `_-tY`}, 
						[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}}, 
							[
								[`div`, {class: `_-Xg _gxM _geQ`}, 
									[
										[`a`, {class: `-_tX v202201180941`, style: {[`min-width`]: `${32}px`, height: `${32}px`}, href: `/`}, ``], 
										[`span`, {class: `_aA6 _tXx`, style: {
												[`border-left`]: `${1}px solid #d5d5d5`,
												margin: `${0} ${7}px`,
												padding: `${0} ${14}px`,
												[`font-size`]: `${14}px`,
												color: `#47008c`,
												overflow: `hidden`,
												[`text-overflow`]: `ellipsis`,
												[`white-space`]: `nowrap`}}, `wallet`]]],
								[`div`, {class: `_gZz`}, 
									[this.mug[(Clients.mug) ? 1: 0]]]]]]], 
					[`section`, {id: `wallet`, style: {[`max-width`]: `${920}px`, width: `${100}%`, margin: `${90}px auto ${60}px`}}, 
						[[`div`, {}, 
							[[`div`, {class: `_wrap_202203262208`, style: {padding: `${0} ${24}px`}}, 
								[
									[`div`, {id: `put`}, 
										[
											[`div`, {style: {padding: `${10}px 0`, [`font-size`]: `${12}px`}}, 
												[[`span`, {class: `_tXx`}, `Deposit funds`]]], 
											[`div`, {class: `_gxM`, style: {padding: `${24}px ${12}px`, width: `${100}%`}}, 
												[
													[`div`, {style: {width: `${25}%`}}, 
														[[`input`, {id: `dollars`, placeholder: `USD`, type: `text`}]]], 
													[`div`, {class: `_gZz`, style: {width: `${75}%`}}, 
														[[`input`, {id: `mobile`, [`maxlength`]: 12, placeholder: `Mobile`, type: `text`, style: {
															//margin: `${0} ${0} ${0} ${24}px`,
															width: `${90}%`}}]]]]], 
											[`div`, {class: `_gxM`, style: {width: `${100}%`}}, 
												[
													[`span`, {class: `_tXx`, style: {color: `#a6a6a6`, [`font-size`]: `${11}px`}}, `*minimum 22.5 USD`], 
													[`div`, {class: `_gZz _geQ`}, 
														[
															[`span`, {class: `v202203261943`, style: {
																margin: `${1}px ${4}px 0`, width: `${20}px`, height: `${20}px`}}],
															[`a`, {id: `vault`, class: `_tXx`, style: {
																color: `#48007c`, [`font-size`]: `${12}px`}, href: `javascript:;`}, `Deposit`]]]]]]], 
									[`div`, {id: `take`, style: {display: `none`}}, 
										[
											[`div`, {style: {padding: `${10}px 0`, [`font-size`]: `${12}px`}}, 
												[[`span`, {class: `_tXx`}, `Withdraw funds`]]], 
											[`div`, {class: `_gxM`, style: {padding: `${24}px ${12}px`, width: `${100}%`}}, 
												[
													[`div`, {style: {width: `${25}%`}}, 
														[[`input`, {id: `dollars`, placeholder: `USD`, type: `text`}]]], 
													[`div`, {class: `_gZz`, style: {width: `${75}%`}}, 
														[[`input`, {id: `mobile`, [`maxlength`]: 12, placeholder: `Mobile`, type: `text`, style: {
															//margin: `${0} ${0} ${0} ${24}px`,
															width: `${90}%`}}]]]]], 
											[`div`, {class: `_gxM`, style: {width: `${100}%`}}, 
												[
													//[`span`, {class: `_tXx`, style: {[`font-size`]: `${11}px`}}, `*minimum 3 USD`], 
													[`div`, {class: `_gZz _geQ`}, 
														[
															[`span`, {class: `v202203262148`, style: {
																margin: `${1}px ${4}px 0`, width: `${20}px`, height: `${20}px`}}],
															[`a`, {id: `out`, class: `_tXx`, style: {
																color: `#48007c`, [`font-size`]: `${12}px`}, href: `javascript:;`}, `Withdraw`]]]]], [
											`div`, {style: {padding: `${12}px 0`, [`font-size`]: `${10}px`}}, 
												[
													[`div`, {class: `_gxM`}, 
														[
															[`span`, {class: `_tXx`, style: {
																color: `#a6a6a6`, [`font-size`]: `${11}px`}}, `Withrawal limit/day`], 
															[`div`, {class: `_gZz`, style: {[`font-family`]: `geometria`, color: `#48007c`}}, 
																[[`span`, {class: `_tXx`, href: `javascript:;`}, `0.00/250 USD`]]]]], 
													[`svg`, {style: {margin: `${6}px ${0}`, width: `${100}%`, [`max-height`]: `${10}px`}}, 
														[
															[`rect`, {
																x: 0, 
																y: 1.25, 
																rx: 4, 
																ry: 4, 
																stroke: `rgba(${88}, ${65}, ${216}, ${.5})`,  
																opacity: 1, 
																fill: `none`, 
																width: `${100}%`, 
																height: `${4}px`}], 
															[`rect`, {
																x: 0, 
																y: 2.5, 
																rx: 4, 
																ry: 4, 
																stroke: `#5841d8`, 
																fill: `none`, 
																width: `0`, 
																height: `${1}px`}]]]]]]]]]]]]], 
					[`section`, {style: {[`max-width`]: `${920}px`, width: `${100}%`, margin: `${0} auto ${30}px`}}, 
						[[`div`, {style: {padding: `${0} ${24}px`}}, 
							[
								[`span`, {class: `_tXx`, style: {margin: `${0} ${0} ${15}px`, padding: `${10}px ${0}`, [`font-size`]: `${12}px`}}, `Deposits & withdrawals`], 
								[`div`, {id: `trail`, style: {border: `${1}px solid #dfdfdf`, [`border-radius`]: `${8}px`}}, 
									this.trails([Tools.typen(Clients.vaults).plain, `+`, `USD`])]]]]]]]
	},

	wallets: function () {

		return [`main`, {id: `holds`, class: `_tY0`}, 
			[
				[`div`, {class: `_-tY`}, 
					[[`div`, {class: `_aXz`, style: {padding: `${0} ${16}px`}},
						[
							[`div`, {class: `_-Xg _gxM _geQ`}, 
								[
									[`a`, {class: `-_tX v202201180941`, style: {[`min-width`]: `${32}px`, height: `${32}px`}, href: `/`}, ``], 
									[`span`, {id: `vault`, class: `_aA6 _tXx`, style: {
                                        [`border-left`]: `${1}px solid #91919159`, 
                                        margin: `${0} ${7}px`,
                                        padding: `${0} ${14}px`,
                                        [`font-size`]: `${14}px`,
                                        color: `#000`,
                                        overflow: `hidden`,
                                        [`white-space`]: `nowrap`}}, `wallets`]]],
							[`div`, {class: `_gZz`}, 
								[this.utilCollateral]]]]]], 
				[`section`, {style: {
                    width: `${100}%`,
					[`max-width`]: `${1000}px`, margin: `${60}px auto`}}, 
					[
						[`div`, {class: `_wrap_202203262208`, style: {padding: `${0} ${24}px`}}, 
							[
								[`div`, {id: `put`}, 
									[
										[`div`, {style: {[`margin-bottom`]: `${24}px`}}, 
											[
												[`span`, {style: {
                            						[`margin-top`]: `${24}px`, 
                            						opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `USDT Collateral`],
												[`span`, {style: {
                            						[`margin-top`]: `${2}px`, 
                            						opacity: 1, [`font-size`]: `${10}px`}}, `USDT Token Deposit Address`]]], 
                            			[`div`, {class: `_gxM`, style: {[`align-items`]: `center`}}, 
                            				[
                            					[`span`, {class: `v202205081343`}], 
                            					[`div`, {class: `_eYG`}, 
                            						[[`div`, {style: {width: `${100}%`}}, 
                            							[[`span`, {class: `wallet-text`}, `TH9BuLCBLmCTfvtgBWB14Y4TxCjPdYx4WK`]]]]]]]]], 
                            	[`div`, {id: `take`}, 
									[
										[`div`, {style: {[`margin-bottom`]: `${24}px`}}, 
											[
												[`span`, {style: {
                            						[`margin-top`]: `${24}px`, 
                            						opacity: .7, [`font-size`]: `${12}px`, [`font-weight`]: 600}}, `Add Funding Wallet`],
												[`span`, {style: {
                            						[`margin-top`]: `${2}px`, 
                            						opacity: 1, [`font-size`]: `${10}px`}}, `*TRC20 wallet`]]], 
                            			[`div`, {class: `_gxM _geQ`}, 
                            				[
                            					[`span`, {class: `v202206271427`}], 
                            					[`div`, {class: `_eYG`}, 
                            						[[`div`, {style: {width: `${100}%`}}, 
                            							[[`input`, {id: `inlet`, placeholder: `paste wallet`, style: {[`font-size`]: `${12}px`}}]]]]], 
                            					[`div`, {class: `_QZg`, style: {margin: `${8}px`}}, 
                            						[[`a`, {id: `walletin`, class: `v202203191304`, href: `javascript:;`}]]]]], 
                                        (Tools.typen(Clients.inlet).length > 0)? this.inlets(): []]]]]]]]];
	}
}

View = new View;