window.playerCode={	
	isWearing: function(item) {
		/* this is used almost never */
		return window.inventoryCode.getOwnedItem(i => item && i.id === item.id && i.equipped) || false;
	},
	isWearingOn: function(typeid) {
		// TODO: this should be named getEquippedItemByType
		let typename = Object.entries(window.itemTypes).find(([name, value]) => value === typeid)[0];
		return window.inventoryCode.getOwnedItem(i => i[typename] && i.equipped);
	},
	getNaked: function() {
		let equippedItems = window.inventoryCode.getOwnedItems(i => i.equipped);
		equippedItems.forEach(i => {
			if (!i.Chastity || !State.active.variables.flags.chastityLocked) {
				window.inventoryCode.unequipItem(i.id);
			}
		});
	},
	masturbate: {
		isReady: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			var refractoryMinutes=180;
			return ((time.day * 1440 + time.hour * 60 + time.minute) - (masturbate.lastDay * 1440 + masturbate.lastHour * 60 + masturbate.lastMinute)) >= refractoryMinutes;
		},
		isCalm: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			return (time.day * 1440 + time.hour * 60 + time.minute) <= (masturbate.DayTemp * 1440 + masturbate.HourTemp * 60 + masturbate.MinuteTemp);
		},
		isTeased: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			return (time.day * 1440 + time.hour * 60 + time.minute) <= (masturbate.DayTease * 1440 + masturbate.HourTease * 60 + masturbate.MinuteTease);
		},
		sinceLastCum: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			return (time.day * 1440 + time.hour * 60 + time.minute) - (masturbate.lastDay * 1440 + masturbate.lastHour * 60 + masturbate.lastMinute);
		},
		tease: function(hours) {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			masturbate.DayTease=time.day;
			masturbate.HourTease=time.hour;
			masturbate.MinuteTease=time.minute;
			masturbate.HourTease+=hours;
			while (masturbate.HourTease >= 24) {
				masturbate.DayTease++;
				masturbate.HourTease-=24;
			}
		},
		tempRelief: function(hours) {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			if (this.isCalm()) {
				return;
			}
			window.playerCode.changeArousal(5);
			State.active.variables.flags.forcedHorny=false;
			masturbate.DayTemp=time.day;
			masturbate.HourTemp=time.hour;
			masturbate.MinuteTemp=time.minute;
			masturbate.HourTemp+=hours;
			while (masturbate.HourTemp >= 24) {
				masturbate.DayTemp++;
				masturbate.HourTemp-=24;
			}
		},
		cum: function() {
			var time=State.active.variables.time;
			var masturbate=State.active.variables.player.masturbate;
			window.playerCode.changeArousal(-100);
			window.playerCode.setStatus("Satisfied",3,0);
			State.active.variables.flags.forcedHorny=false;
			masturbate.lastDay=time.day;
			masturbate.lastHour=time.hour;
			masturbate.lastMinute=time.minute;
		}
	},
	changeArousal: function(Delta) {
		var player=State.active.variables.player;
		player.arousal=Math.floor(player.arousal + Delta);
		player.arousal=Math.max(player.arousal, 0);
		player.arousal=Math.min(player.arousal, 100);
	},
	upArousalTo: function(Delta, Max) {
		var player=State.active.variables.player;
		var change=Math.max(Max - player.arousal, 0);
		player.arousal=Math.floor(player.arousal + change);
		player.arousal=Math.max(player.arousal, 0);
		player.arousal=Math.min(player.arousal, 100);
	},
	setStatus: function(string, scenes, hours) {
		var status=State.active.variables.status;
		var time=State.active.variables.time;
		status.text=string;
		status.scenesCounter=scenes;
		status.endDay=time.day;
		status.endHour=time.hour+hours;
		status.endMinute=time.minute;
		while (status.endHour >= 24) {
			status.endDay++;
			status.endHour-=24;
		}
	},
	checkStatus: function() {
		var status=State.active.variables.status;
		var time=State.active.variables.time;
		if (State.active.variables.status.text != "") {
			if (((time.day * 1440 + time.hour * 60 + time.minute) > (status.endDay * 1440 + status.endHour * 60 + status.endMinute)) || status.scenesCounter <= 0) {
				State.active.variables.status.text="";
				return false;
			}
			status.scenesCounter--;
			return true;
		}
		return false;
	},
	isHalfHorny: function() {
		return (!this.isNotHorny() && !this.isHorny());
	},
	isNotHorny: function() {
		return State.active.variables.player.arousal < 20;
	},
	isHorny: function() {
		return State.active.variables.player.arousal >= 50;
	},
	hornyLevel: function() {
		if (this.isNotHorny()) {return 0;}
		if (this.isHalfHorny()) {return 1;}
		if (this.isHorny()) {return 2;}
		return 0;
	},
	isMind_0: function() {
		return false;
	},
	isMind_1: function() {
		return false;
	},
	isMind_2: function() {
		return true;
	},
	isMind: function() {
		return 2;
	},
	isMaid: function() {
		return (State.active.variables.player.perversion.guardian >= 5);
	},
	isButtslut: function() {
		return (State.active.variables.player.perversion.teacher >= 8);
	},
	isWaxed: function() {
		return (State.active.variables.body.bodyhair == 1);
	},
	isHairless: function() {
		return (State.active.variables.body.bodyhair >= 2);
	},
	isHairy: function() {
		return (State.active.variables.body.bodyhair == 0);
	},
	isInChastity: function() {
	    return this.isWearingOn(itemTypes.Chastity);
	},
	isLockedInChastity: function() {
		return (this.isWearingOn(itemTypes.Chastity) &&
		        State.active.variables.flags.chastityLocked);
	},
	haveHaircut: function() {
		return (State.active.variables.body.hairstyle > 0);
	},
	hairstyle: function() {
		return State.active.variables.body.hairstyle;
	},
	scoreMakeup: function() {
		return State.active.variables.body.makeup;
	},
	scoreBoobs: function() {
		return State.active.variables.body.boobs;
	},
	scoreAss: function() {
		return State.active.variables.body.ass;
	},
	scoreLips: function() {
		return State.active.variables.body.lips;
	},
	scoreAnalSmooth: function() {
		return State.active.variables.body.anal;
	},
	haveMakeup: function() {
		return (State.active.variables.body.makeup > 0);
	},
	haveBimboMakeup: function() {
		return (State.active.variables.body.makeup >= 3);
	},
	haveHeavyMakeup: function() {
		return (State.active.variables.body.makeup == 4);
	},
	havePermanentMakeup: function() {
		return (State.active.variables.body.permMakeup > 0 || State.active.variables.body.semiMakeup > 0);
	},
	haveManicure: function(){
		return (State.active.variables.body.manicure > 0);
	},
	haveGirlyFace: function() {
		return (State.active.variables.body.makeup > 0 || State.active.variables.body.face > 0);
	},
	haveBoobs: function() {
		return (State.active.variables.body.boobs > 0);
	},
	haveBplus: function() {
		return (State.active.variables.body.boobs > 1);
	},
	haveCplus: function() {
		return (State.active.variables.body.boobs > 2);
	},
	haveDplus: function() {
		return(State.active.variables.body.boobs > 3);
	},
	haveLips: function() {
		return (State.active.variables.body.lips > 0);
	},
	haveAss: function() {
		return (State.active.variables.body.ass > 0);
	},
	obviousFemaleAppearance: function() {
		var itemTypes=window.itemTypes;
		var body=State.active.variables.body;
		var fo=this.isWearingOn(itemTypes.Outerwear).female;
		var fs=this.isWearingOn(itemTypes.Shoes).slutty;
		var e=this.isWearingOn(itemTypes.Earrings);
		var itemTypes=window.itemTypes;
		var itemTypes=window.itemTypes;
		if (fo || fs || e || body.makeup>1 || body.hairstyle>1 || body.boobs>1 || body.lips>1 || body.manicure>0) {
			return true;
		}
		return false;
	},    
	slutScoreBasic: function() {
		var score=0;
		var items=window.itemsC;
		var itemTypes=window.itemTypes;
		var body=State.active.variables.body;
		var s=this.isWearingOn(itemTypes.Shoes);
		var st=(this.isWearing(items.stilettoHeels) || this.isWearing(items.maidOutfit));
		var o=this.isWearingOn(itemTypes.Outerwear);
		var u=this.isWearingOn(itemTypes.Underwear);
		var b=this.isWearingOn(itemTypes.AnalPlug);
		var c=this.isWearingOn(itemTypes.Chastity);
		var e=this.isWearingOn(itemTypes.Earrings);
		// Score
		if ((body.makeup>=4 && body.lips>=2 && body.boobs>=4 && body.ass>=2) || (body.makeup>=4 && body.boobs>=4 && body.lips>=1 && body.ass>=1 && (e && e.slutty) && (st))) {
			score=9;
			return score;
			// total whore
		}
		if (((body.makeup>=4 && (e && e.slutty) && (st)) || (body.makeup>=4 && (body.lips>=2 || body.boobs>=4 || body.ass>=2))) || (body.makeup>=2 && body.boobs>=3 && body.lips>=1 && body.ass>=1 && (e && e.slutty) && (st))) {
			score=8;
			return score;
			// whorish girl
		}
		if (body.makeup>=4 || (body.makeup>=3 && (st)) || (body.makeup>=3 && body.boobs>=3 && body.lips>=1 && body.ass>=1) || (body.makeup>=2 && body.boobs>=3 && body.lips>=1 && (e) && (s && s.slutty))) {
			score=7;
			return score;
			//slutty girl
		}
		if (this.haveGirlyFace() && body.hairstyle>1 && body.lips>=1 && (body.boobs>=3 || ((body.boobs>=2 || body.ass>=1) && (s && s.slutty)))) {
			score=6;
			return score;
			//sexy girl
		}
		if (this.haveGirlyFace() && body.hairstyle>1 && (body.boobs>=2 || body.lips>=1 || body.ass>=1)) {
			score=5;
			return score;
			//ordinary girl
		}
		if (this.haveGirlyFace() || (body.hairstyle>1 && body.makeup>=2) || body.boobs>=2) {
			score=4;
			return score;
			//plain looking girl
		}
		if (body.hairstyle>1 || (body.hairstyle==1 && body.bodyhair>=2 && (body.boobs==1 || body.manicure==1 || body.makeup>=2))) {
			score=3;
			return score;
			//very feminine boy
		}
		if (body.boobs==1 || body.manicure==1 || (body.bodyhair>=2 && (!o || (o && o.female)))) {
			score=2;
			return score;
			//feminine boy
		}
		if ((u && u.female) || (c) || (b)) {
			score=1;
			return score;
			//ordinary boy
		}
		return score;
	},
	slutScore: function() {
		var score=this.slutScoreBasic();
		var o=this.isWearingOn(window.itemTypes.Outerwear);
		if (o) {
			if (o.female) {
				score+=10;
				}
			if (o.slutty) {
				score+=10;
				}
		}
		return score;
	},
	heelsCheck: function() {
		var s=this.isWearingOn(window.itemTypes.Shoes);
		var player=State.active.variables.player;
		if (s && s.heels) {
			if (s.daringRec > 6) {
				if ((window.randomCode.getIntInclusive(0, 10) >= player.heelsSkill) && (window.randomCode.getIntInclusive(0, 2) == 0)) {
					player.heelsSkill++;
					State.active.variables.flags.heelsFall=true;
					return true;
				}
				if (window.randomCode.getIntInclusive(0, 9) >= player.heelsSkill) {
					player.heelsSkill++;
				}
				return false;
			}
			if (s.daringRec > 4) {
				if ((window.randomCode.getIntInclusive(0, 5) >= player.heelsSkill) && (window.randomCode.getIntInclusive(0, 2) == 0)) {
					player.heelsSkill++;
					State.active.variables.flags.heelsFall=true;
					return true;
				}
				if (window.randomCode.getIntInclusive(0, 4) >= player.heelsSkill) {
					player.heelsSkill++;
				}
				return false;
			}
		}
		return false;
	},
	payTuition: function() {
		var player=State.active.variables.player;
		player.money-=Math.max(0, State.active.variables.tuitionAmount-player.tuitionDiscount);
		player.tuitionDiscount=0;
		State.active.variables.tuitionAmount=window.playerCode.nextTuitionAmount();
		State.active.variables.flags.tuitionPaid=true;
	},
	payTuitionPartial: function() {
		var player=State.active.variables.player;
		player.tuitionDiscount+=player.money;
		player.tuitionDiscount-=State.active.variables.tuitionAmount;
		player.money=0;
		State.active.variables.flags.tuitionPaid=true;
		State.active.variables.flags.tuitionFail=true;
		State.active.variables.tuitionAmount=window.playerCode.nextTuitionAmount();
	},
	payTuitionRefusal: function() {
		var player=State.active.variables.player;
		player.tuitionDiscount-=State.active.variables.tuitionAmount;
		State.active.variables.flags.tuitionPaid=true;
		State.active.variables.flags.tuitionFail=true;
		State.active.variables.tuitionAmount=window.playerCode.nextTuitionAmount();
	},
	nextTuitionAmount: function() {
		var player=State.active.variables.player;
		return Math.min(State.active.variables.tuitionAmount + player.tuitionIncrease, 200*State.active.variables.flags.tuitionFactor);
	},
	calculateTuitionIncrease: function() {
		var player=State.active.variables.player;
		
		if (player.perversion.teacher < 3) { player.tuitionIncrease = 10*State.active.variables.flags.tuitionFactor; return; }
		if (player.perversion.teacher < 5) { player.tuitionIncrease = Math.floor(15*State.active.variables.flags.tuitionFactor); return; }
		if ((player.perversion.teacher == 5) && (player.perversion.teacherCooldown < 2)) { player.tuitionIncrease = 0; return; }
		if (player.perversion.teacher < 7) { player.tuitionIncrease = 20*State.active.variables.flags.tuitionFactor; return; }
		
		player.tuitionIncrease = 30*State.active.variables.flags.tuitionFactor;
	},
	owns: function(item) {
		return window.inventoryCode.getOwnedItem(i => item && i.id === item.id);
	},
	ownsType: function(clothingType) {
		let typename = Object.entries(window.itemTypes).find(([name, value]) => value === typeid)[0];
		return window.inventoryCode.getOwnedItem(i => i[typename]);
	},
    quickSlotSelect : function(quickSlotName) {
        this.getNaked();
        let quickSlots = State.active.variables.inventory.quickSlots;
        quickSlots.find(qs => qs.name === quickSlotName).itemids.forEach(iid => window.inventoryCode.equipItem(iid));
    },
	wearClothesJS: function(id) {
		if (!id) {
			return;
		}
		var item=window.itemsC[id];
		if (!item) {
			return;
		}
		var ca=state.active.variables.player.clothes;
		for (var i=ca.length-1; i>=0; i--) {		
			var pc=window.itemsC[ca[i]];
			if ((pc==null) || (((pc.clothingType + pc.cantWearWith) & (item.clothingType + item.cantWearWith)) > 0)) {
				state.active.variables.player.clothes.splice(i, 1);
			}
		}
		state.active.variables.player.clothes.push(id);
		if (ca.length > 0) {
			state.active.variables.player.clothes=state.active.variables.player.clothes.sort();
		}
	},
	removeClothesJS: function(id) {
		if (!id) {
			return;
		}
		var i=state.active.variables.player.clothes.indexOf(id);
		if (i >= 0) {
			state.active.variables.player.clothes.splice(i, 1);
		}
	},
	clothesOverride: function() {
		var itemsC=window.itemsC;
		/* Check for wet panties */
		if (State.active.variables.flags.laundryAccident) {
			var itemsC=window.itemsC;
			var player=State.active.variables.player;
			
			var i=player.clothes.indexOf(itemsC.pantiesCotton.id);
			if (i >= 0) {
				player.clothes.splice(i, 1);
			}
			var i=player.clothes.indexOf(itemsC.gString.id);
			if (i >= 0) {
				player.clothes.splice(i, 1);
			}
			var i=player.clothes.indexOf(itemsC.pantiesLatex.id);
			if (i >= 0) {
				player.clothes.splice(i, 1);
			}
		}
		/* Forcing on Maid stuff */
		if (playerCode.isWearing(window.itemsC.maidOutfit)) {
			if (State.active.variables.flags.gTrialBalletHeels) {
				this.wearClothesJS('balletHeels');
			} else {
				if (State.active.variables.flags.gTrialLatexMaid) {
					State.active.variables.items.stilettoHeels.curAlt=39;
					this.wearClothesJS('stilettoHeels');
				} else {
					State.active.variables.items.highHeel3.curAlt=39;
					this.wearClothesJS('highHeel3');
				}
			}
			
			if (State.active.variables.flags.gTrialLatexMaid) {
				if (!playerCode.isWearing(window.itemsC.stockingsLatex)) {
					State.active.variables.items.stockingsLatex.curAlt=39;
					this.wearClothesJS('stockingsLatex');
				}
			} else {
				State.active.variables.items.stockings.curAlt=39;
				this.wearClothesJS('stockings');
			}

			if (playerCode.isWearing(window.itemsC.cheerBriefs)) {
				this.removeClothesJS('cheerBriefs');
			}
		}
	},
	wearPajamas: function() {
		var c=this.isWearingOn(window.itemTypes.Chastity);
		var player=State.active.variables.player;
		var items=window.itemsC;
		player.clothes=[];
		if (c) {
			player.clothes.push(c.id);
		}
		var o;
		for (var i=0; i < Object.keys(items).length; i++) {
			o=items[Object.keys(items)[i]];
			if (o.sleepWear && this.owns(o) && ((player.perversion.guardian >= 2) || !o.female)) {
				player.clothes.push(o.id);
				return;
			}
		}
	},
	purgeMaleClothes: function() {
		var itemsC=window.itemsC;
		for (var i=0; i < Object.keys(itemsC).length; i++) {
			var o=itemsC[Object.keys(itemsC)[i]];
			if ((o.clothingType != itemTypes.NotClothing && o.clothingType != itemTypes.Extra) && playerCode.owns(o) && !o.female) {
				State.active.variables.inventory.splice(State.active.variables.inventory.indexOf(o.id), 1);
			}
		}
	},
	disableMaleClothes: function() {
		var itemsC=window.itemsC;
		var items=State.active.variables.items;
		for (var i=0; i < Object.keys(itemsC).length; i++) {
			var o=itemsC[Object.keys(itemsC)[i]];
			var oV=items[Object.keys(itemsC)[i]];
			if ([itemTypes.Underwear, itemTypes.Outerwear, itemTypes.Shoes].includes(o.clothingType) && !o.female) {
				oV.disabled=true;
				oV.cost=0;
			}
		}
	},
	checkGameSkill: function (){
		var player=State.active.variables.player;
		var skillLevel = player.gameSkill;
		return skillLevel;
	},
	improveGameSkill: function(){
		var player=State.active.variables.player;
		var skillLevel = player.gameSkill;
		var skillImprove = Math.floor((Math.random() * 3) + 1);
		player.gameSkill = skillLevel + skillImprove;
		return skillImprove;
	},
}
