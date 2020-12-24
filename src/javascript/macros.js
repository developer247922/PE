// Begin Inventory Macros (adapted by prndev)

// Add an item to your inventory:
// Usage: <<addToInv rock>> or <<addToInv "a smooth rock">>
macros.addToInv = {
  handler: function(place, macroName, params, parser) {
    if (params.length == 0) {
      throwError(place, "<<" + macroName + ">>: no parameters given");
      return;
    }
    window.inventoryCode.ownItem(params[0]);
  }
};

// Removes an item from your inventory
// Usage: <<removeFromInv rock>> or <<removeFromInv "a smooth rock">>
macros.removeFromInv = {
	handler: function(place, macroName, params, parser) {
		if (params.length == 0) {
			throwError(place, "<<" + macroName + ">>: no parameters given");
			return;
		}
		window.inventoryCode.disownItem(params[0]);
	}
};

// End Inventory Macros

macros ['glitchText'] = {
		handler:function(place, macroName, params){
			var text = params[0].split(" ");
			var str = "";
			for(var i=0;i<text.length;i++){
				var glitch;
				
				switch(Math.floor(Math.random()*3)){
				case 0: 
					glitch="glitch";
					break;
				case 1: 
					glitch="glitch2";
					break;
				case 2: 
					glitch="glitch3";
					break;
				default:
					glitch="glitch";
					break;
				}
				
				
				
			
				str+='<span class="'+glitch+'" data-text="'+text[i]+'">'+text[i]+'</span> '; 
			}
			console.log(str);
			new Wikifier(place, str);	
			
		}
}

macros.wearClothing = {
  handler: function(place, macroName, params, parser) {
	console.log(`<<wearClothing ${params}>>`)
	window.inventoryCode.equipItem(params[0]);
  }
};

macros.buyItem = {
  handler: function(place, macroName, params, parser) {
		var w=window.itemsC[params[0]];
		var wV=window.itemF.itemTwee(params[0]);
		if (!w) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + params[0] + "'");
			return;
		}
		if (!wV) {
			throwError(place, "<<" + macroName + ">>: invalid $item '" + params[0] + "'");
			return;
		}

		var cost = w.cost;
		if (wV.cost != null) {
			cost = wV.cost;
		}

		if (!w.surgery) {
			if (state.active.variables.inventory.indexOf(w.id) == -1) {
				state.active.variables.inventory.push(w.id);
				state.active.variables.inventory=state.active.variables.inventory.sort();
			}
			if (w.maxAlt) {
				var type=params[1];
				if (type != null) {
					wV.curAlt=type;
				}
				if (type == null) {
					if (state.active.variables.showimages) {
						if ((wV.curAlt==0) && (wV.ownAlt.length==0)) {
							wV.curAlt=wV.storeCur;
						}
						wV.ownAlt[wV.storeCur]=true;
						state.active.variables.player.money-=Math.floor((wV.storeCur%10)*cost*0.02);
					}
					if (!state.active.variables.showimages) {
						wV.ownAlt[0]=true;
					}
				}
			}
		}
		
		state.active.variables.player.money-=cost;

		if (state.active.variables.player.money < 0) {
			state.active.variables.player.money = 0;
		}
	}
};

macros.payForItem = {
  handler: function(place, macroName, params, parser) {
		var w=window.itemsC[params[0]];
		var wV=window.itemF.itemTwee(params[0]);
		if (!w) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + params[0] + "'");
			return;
		}
		if (!wV) {
			throwError(place, "<<" + macroName + ">>: invalid $item '" + params[0] + "'");
			return;
		}

		var cost = w.cost;
		if (wV.cost != null) {
			cost = wV.cost;
		}
		
		state.active.variables.player.money-=cost;

		if (state.active.variables.player.money < 0) {
			state.active.variables.player.money = 0;
		}
	}
};

function getItem(id) {
	var ca=window.itemsC;
	
	for (var i=0; i<Object.keys(ca).length; i++) {
		if (ca[Object.keys(ca)[i]].id==id) {
			return ca[Object.keys(ca)[i]];
		}
	}

	return false;
}

function getItemObject(id) {
	/*var ca=state.active.variables.items;
	
	for (var i=0; i<Object.keys(ca).length; i++) {
		if (ca[Object.keys(ca)[i]].id==id) {
			return ca[Object.keys(ca)[i]];
		}
	}*/
	if (state.active.variables.items[id] && state.active.variables.items[id].name) {
		return state.active.variables.items[id].name;
	}
		
	return false;
}

function getItemName(id) {
	var ca=state.active.variables.items;
	var w=window.itemsC[id];
	var wV=window.itemF.itemTwee(id);

	if (!w) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + id + "'");
			return;
		}
	if (!wV) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + id + "'");
			return;
		}
		
	if ((wV != null) && (wV.name != null)) {
		return wV.name;
	}
	return w.name;
}

macros.notDressed = {
  handler: function(place, macroName, params, parser) {
		var id=params[0].replace(/[ ,']/g, '_');
		var r=params[1] ? params[1] : "You're not dressed appropriately";
		var ex=params[2] ? params[2] : '';
		new Wikifier(place, '<<click "' + params[0] + '">><<replace "#' + id + '">> @@.deny;' + r + '@@<</replace>><</click>> ' + ex + '<span id="' + id + '"></span>');
	}
};

macros.showClothingImage = {
  handler: function(place, macroName, params, parser) {
		if (state.active.variables.clothingSelectorRender) {
			state.active.variables.clothingSelectorRender=false;
			state.active.variables.worn=[];
			state.active.variables.type=[];
			if (state.active.variables.showimages) {
				setTimeout(function() {
					var cis=document.getElementById('clothing_images');
					var wa=state.active.variables.worn;
					var wt=state.active.variables.type;
					var si=state.active.variables.itemsSize;
					for (var i=0;i<wa.length; i++) {
						if (wt[i]==100) {
							cis.innerHTML+='<img src="Images/items/' + wa[i] + '" class="clothing_image_' + si + '">';
							continue;
						}
						if (wt[i]>9) {
							cis.innerHTML+='<img src="Images/items/' + wa[i] + wt[i] + '.jpg" class="clothing_image_' + si +'">';
							continue;
						}
						if (wt[i]<10) {
							cis.innerHTML+='<img src="Images/items/' + wa[i] + '0' + wt[i] + '.jpg" class="clothing_image_' + si +'">';
							continue;
						}
					}
				}, 1);
			}
		}
		state.active.variables.worn.push(params[0]);
		state.active.variables.type.push(params[1]);
	}
};

macros.showClothingImageSidebar = {
  handler: function(place, macroName, params, parser) {
		if (state.active.variables.clothingSelectorRender) {
			state.active.variables.clothingSelectorRender=false;
			state.active.variables.worn=[];
			state.active.variables.type=[];
			if (state.active.variables.showimages) {
				setTimeout(function() {
					var cis=document.getElementById('clothing_images_sidebar');
					var wa=state.active.variables.worn;
					var wt=state.active.variables.type;
					for (var i=0;i<wa.length; i++) {
						if (wt[i]==100) {
							cis.innerHTML+='<img src="Images/items/' + wa[i] + '" class="clothing_image_sidebar">';
							continue;
						}
						if (wt[i]>9) {
							cis.innerHTML+='<img src="Images/items/' + wa[i] + wt[i] + '.jpg" class="clothing_image_sidebar">';
							continue;
						}
						if (wt[i]<10) {
							cis.innerHTML+='<img src="Images/items/' + wa[i] + '0' + wt[i] + '.jpg" class="clothing_image_sidebar">';
							continue;
						}
					}
				}, 1);
			}
		}
		state.active.variables.worn.push(params[0]);
		state.active.variables.type.push(params[1]);
	}
};

macros.showRoomImage = {
  handler: function(place, macroName, params, parser) {
		if (state.active.variables.bedroomRender) {
			state.active.variables.bedroomRender=false;
			state.active.variables.roomIm=[];
			var si=state.active.variables.roomSize;
			if (state.active.variables.showimages) {
				setTimeout(function() {
					if (si==0) { var cis=document.getElementById('room_images_0'); }
					if (si==1) { var cis=document.getElementById('room_images_1'); }
					if (si==2) { var cis=document.getElementById('room_images_2'); }
					if (si==3) { var cis=document.getElementById('room_images_3'); }
					if (si==4) { var cis=document.getElementById('room_images_4'); }
					if (si==5) { var cis=document.getElementById('room_images_5'); }
					if (si==6) { var cis=document.getElementById('room_images_6'); }
					var ri=state.active.variables.roomIm;
						for (var i=0;i<ri.length; i++) {
							if (i==0) {
								cis.innerHTML+='<img src="Images/room/' + ri[i] + '" class="room_main_image_' + si + '">';
								continue;
							}
							cis.innerHTML+='<img src="Images/room/' + ri[i] + '" class="room_image_' + si + '">';
							continue;
						}
				}, 1);
			}
		}
		state.active.variables.roomIm.push(params[0]);
	}
};

macros.removeClothing = {
  handler: function(place, macroName, params, parser) {
		var w=window.itemsC[params[0]];
		if (!w) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + params[0] + "'");
			return;
		}
		var i=state.active.variables.player.clothes.indexOf(w.id);
		if (i >= 0) {
			state.active.variables.player.clothes.splice(i, 1);
		}
	}
};

macros.removeClothingType = {
  handler: function(place, macroName, params, parser) {
		if (!params[0]) {
			throwError(place, "<<" + macroName + ">>: invalid item type '" + params[0] + "'");
			return;
		}
		var ca=state.active.variables.player.clothes;
		for (var i=ca.length-1; i>=0; i--) {
			var pc=window.itemsC[ca[i]];
			if ((pc==null) || ((pc.clothingType & params[0]) > 0)) {
				state.active.variables.player.clothes.splice(i, 1);
			}
		}
	}
};

macros.nextClothing = {
  handler: function(place, macroName, params, parser) {
		var w=window.itemF.itemTwee(params[0]);
		if (!w) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + params[0] + "'");
			return;
		}
		for (var i=0; i<=w.ownAlt.length; i++) {
			w.curAlt++;
			if (w.curAlt > w.ownAlt.length) {
				w.curAlt=0;
			}
			if (w.ownAlt[w.curAlt]) {
				return;
			}
		}
		return;
	}
};

macros.previousClothing = {
  handler: function(place, macroName, params, parser) {
		var w=window.itemF.itemTwee(params[0]);
		if (!w) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + params[0] + "'");
			return;
		}
		for (var i=0; i<=w.ownAlt.length; i++) {
			w.curAlt--;
			if (w.curAlt < 0) {
				w.curAlt=w.ownAlt.length;
			}
			if (w.ownAlt[w.curAlt]) {
				return;
			}
		}
		return;
	}
};

macros.nextStoreClothing = {
  handler: function(place, macroName, params, parser) {
		var w=window.itemsC[params[0]];
		var wV=window.itemF.itemTwee(params[0]);
		if (!w) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + params[0] + "'");
			return;
		}
		if (!wV) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + params[0] + "'");
			return;
		}
		var start=wV.storeCur;
		var cur=wV.storeCur;
		for (var i=0; i<=w.maxAlt+1; i++) {
			cur++;
			if (cur > w.maxAlt) {
				cur=0;
			}
			if (wV.storeAlt[cur] && wV.ownAlt[cur]) {
				wV.storeAlt[cur]=false;
			}
			if (wV.storeAlt[cur]) {
				wV.storeCur=cur;
				return;
			}
		}
		wV.storeCur=start;
		wV.storeAlt=[];
		return;
	}
};

macros.previousStoreClothing = {
  handler: function(place, macroName, params, parser) {
		var w=window.itemsC[params[0]];
		var wV=window.itemF.itemTwee(params[0]);
		if (!w) {
			throwError(place, "<<" + macroName + ">>: invalid item '" + params[0] + "'");
			return;
		}
		var start=wV.storeCur;
		var cur=wV.storeCur;
		for (var i=0; i<=w.maxAlt+1; i++) {
			cur--;
			if (cur < 0) {
				cur=w.maxAlt;
			}
			if (wV.storeAlt[cur] && wV.ownAlt[cur]) {
				wV.storeAlt[cur]=false;
			}
			if (wV.storeAlt[cur]) {
				wV.storeCur=cur;
				return;
			}
		}
		wV.storeCur=start;
		wV.storeAlt=[];
		return;
	}
};


macros.showAvatarImage = {
  handler: function(place, macroName, params, parser) {
		if (state.active.variables.avatarRender) {
			state.active.variables.avatarRender=false;
			state.active.variables.avatarImageName=[];
			var str = "";
			if (state.active.variables.showimages) {
				setTimeout(function() {
					var strIn = state.active.variables.avatarImageName;
					
					if (state.active.variables.avatar.classic == 0) {
						str+='<div id="showBody" class="sideframe_bodyimage_empty" style="background-image: url(./Images/avatar/classic/torso.png)"></div>';
						
						for (var i=0;i<strIn.length; i++) {
							str+='<div id="showBody" class="sideframe_bodyimage_empty" style="background-image: url(./Images/avatar/classic/'+strIn[i]+')"></div>';
						}
						
						$('#showClothes').empty();
						$('#showClothes').append(str);
						console.log("createAvatar:"+str);
					}
					else if (state.active.variables.avatar.classic == 1) {
						str+='<div id="showBody" class="sideframe_bodyimage_empty" style="background-image: url(./Images/avatar/newnew/torso.png)"></div>';
						
						for (var i=0;i<strIn.length; i++) {
							str+='<div id="showBody" class="sideframe_bodyimage_empty" style="background-image: url(./Images/avatar/newnew/'+strIn[i]+')"></div>';
						}
						
						$('#showClothes').empty();
						$('#showClothes').append(str);
						console.log("createAvatar:"+str);
					}
					else {
						str+='<div id="showBody" class="sideframe_bodyimage_empty" style="background-image: url(./Images/avatar/new/torso.png)"></div>';
						
						for (var i=0;i<strIn.length; i++) {
							str+='<div id="showBody" class="sideframe_bodyimage_empty" style="background-image: url(./Images/avatar/new/'+strIn[i]+')"></div>';
						}
						$('#showClothes').empty();
						$('#showClothes').append(str);
						console.log("createAvatar:"+str);
					}
				}, 1);
			}
		}
		state.active.variables.avatarImageName.push(params[0]);
	}
};

macros.showImage = {
  handler: function(place, macroName, params, parser) {
		if (state.active.variables.showimages) {
			if (params[2]) {
				setTimeout(function() {
					var i=document.getElementById(params[2]);
					i.setAttribute('src', 'Images/' + params[0] + '/' + params[1]);
					i.className=params[0]+'_image';
				}, 1);
			} else {
				new Wikifier(place, '<img src="Images/' + params[0] + '/' + params[1] + '" class="' + params[0] + '_image">');
			}
		}
	}
};

macros.showImageSpecial = {
  handler: function(place, macroName, params, parser) {
		if (state.active.variables.showimages) {
			new Wikifier(place, '<img src="Images/' + params[0] + '/' + params[1] + '" class="' + params[2] + '">');
		}
	}
};

macros.showBanner = {
  handler: function(place, macroName, params, parser) {
		if (state.active.variables.showimages) {
			new Wikifier(place, '<img src="Images/general/PE_Banner.png" class="banner_image">');
		}
	}
};

macros.showMultiImage = {
  handler: function(place, macroName, params, parser) {
		if (state.active.variables.showimages) {
			if (params[2]) {
				new Wikifier(place, '<img src="Images/' + params[2] + '/' + params[1] + '" class="' + params[0] + '">');
			} else {
				if (state.active.variables.avatar.classic == 0){
					new Wikifier(place, '<img src="Images/avatar/classic/' + params[1] + '" class="' + params[0] + '">');
				} else if (state.active.variables.avatar.classic == 1){
					console.log("new new avy");
					new Wikifier(place, '<img src="Images/avatar/newnew/' + params[1] + '" class="' + params[0] + '">');
				}else {
					new Wikifier(place, '<img src="Images/avatar/new/' + params[1] + '" class="' + params[0] + '">');
				}
			}
		}
	}
};

macros.showVideo = {
  handler: function(place, macroName, params, parser) {
		if (state.active.variables.showimages) {
			if (params[2]) {
				setTimeout(function() {
					var i=document.getElementById(params[2]);
					i.setAttribute('src', 'Images/' + params[0] + '/' + params[1]);
					i.className=params[0]+'_video';
					i.setAttribute('autoplay', true);
				}, 1);
			} else {
				new Wikifier(place, '<video src="Images/' + params[0] + '/' + params[1] + '" class="' + params[0] + '_video" autoplay="true" loop="true"></video>');
			}
		}
	}
};

macros.delayedLink = {
  handler: function(place, macroName, params, parser) {
		var id=params[1].replace(/[ ,']/g, '_');
		if (params.length < 3){
			new Wikifier(place, '<span id="'+id+'" class="hidden">[[' + params[1] + ']]</span>');
		} else {
			new Wikifier(place, '<span id="'+id+'" class="hidden">[[' + params[1] + '][' + params[2] + ']]</span>');
		}
		setTimeout(function() {
				if (id) {
				var i=document.getElementById(id);
					if (i) {
					i.className='delayed_link';
					}
				}
			}, 
			parseInt(params[0]) * 1000
		);
	}
};

macros.toggleStats = {
  handler: function(place, macroName, params, parser) {
		var cn='hidden';
		var ct='Show';
		if (state.active.variables.showStats) {
			cn='';
			ct='Hide';
		}
		var oc='var ao=document.getElementById(\'toggle_stats\');var so=document.getElementById(\'stats\');var ns=!SugarCube.State.variables.showStats;SugarCube.State.variables.showStats=ns;ao.innerHTML=(ns ? \'Hide\' : \'Show\')+\' Stats\';so.className=(ns ? \'\' : \'hidden\');';
		new Wikifier(place, '<a id="toggle_stats" onclick="'+oc+'">'+ct+' Stats</a>');
	}
};

String.prototype.toProperCase = function () {
	return this.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
};

Config.history.controls = true;

Macro.add('selectScene', {
    tags	: ['scene', 'scene-if', 'restIsRandom'],
    handler() {
	var sceneOK = (index) => {
	    var payload = this.payload[index];
	    if (payload.name != 'scene-if') {
		return true;
	    } else {
		var ret = false;
		try { ret = Scripting.evalJavaScript(payload.args[0]); }
		catch (ex) { ret = false; }
		return ret;
	    }
	};
	var rand = (limit) => Math.floor(Math.random() * limit);
	var checksum = 0;
	var hash =  (str) => {
	    var len = str.length, i = 0;
	    while (i < len) {
		checksum = ((checksum << 5) - checksum + str.charCodeAt(i++)) << 0;
	    }
	};
	if (this.args.length != 2) {
	    return this.error('takes two arguments, <id> and <strategy>');
	}
	var id = this.args[0], strategy = this.args[1];
	if (!['SEQ', 'SEQ2RND', 'RND', 'RND2RND'].includes(strategy)) {
	    return this.error('strategy "' + strategy + '" is not correct');
	}
	if (this.payload.length < 2) {
	    return this.error('requires at least one <<scene>>');
	}
	
	// This is where the state is stored
	var topObj = State.active.variables.selectScene;
	
	// Compute checksum
	hash(strategy);
	for (var i = 1; i < this.payload.length; ++i) {
	    hash(this.payload[i].args.raw);
	    hash(this.payload[i].contents);
	}

	var errorStr = '';
	var expErrors = '';
	// Reset state if state exists and checksum has changed
	if ((id in topObj) && (topObj[id].checksum != checksum)) {
	    errorStr = '@@.debugMsg;id "' + id + '" is not unique or has been changed@@ ';
	    delete topObj[id];
	}
	
	if (! (id in topObj)) { // No state for this id, so create it
	    var scenesObj = {
		strategy: strategy,
		checksum: checksum,
		scenes: [], perm: [], chances: [], 
		last: -1,
	    };
			
	    // Iterate over this.payload and store in scenesObj
	    var restIsRnd = false; var chances = [];
	    var lastSceneType = ''; var nonZeroChance = false;
	    for (var i = 1; i < this.payload.length; ++i) {
		var chance = undefined;
		var payload = this.payload[i];
		var argsLen = payload.args.length;
		lastSceneType = payload.name;
		if (payload.name == 'restIsRandom') {
		    if (strategy != 'SEQ' && strategy != 'RND') {
			return this.error('<<restIsRandom>> can only be used with strategy SEQ or RND');
		    } else if (restIsRnd) {
			return this.error('<<restIsRandom>> can only be called once');
		    } else if (i + 2 > this.payload.length) {
			return this.error('<<restIsRandom>> must have at least one <<scene>> after it');
		    }
		    restIsRnd = true;
		    scenesObj.scenes = [];
		    continue;

		} else if (payload.name == 'scene-if') {
		    if (argsLen == 0) {
			return this.error('<<scene-if>> must have one argument, expression');
		    } else if (argsLen > 2) {
			return this.error('<<scene-if>> only takes two args, expression and chance');
		    }
		    // Try to evalluate expression, collect errors
		    try { Scripting.evalJavaScript(payload.args[0]); }
		    catch (ex) { expErrors += '<<scene-if>> bad conditional expression ' + ex.message + ' '; }
		    if (argsLen == 2) {
			chance = payload.args[1];
		    }
		} else {	// must be <<scene>>
		    if (argsLen > 1) {
			return this.error('<<scene>> only takes one arg, chance');
		    } else if (argsLen == 1) {
			chance = payload.args[0];
		    }
		}

		if (chance === undefined) {
		    chance = 10;
		} else 	if (!Number.isInteger(chance)) {
		    return this.error('chance must be an integer, not ' + chance);
		} else if (chance < 0) {
		    return this.error('chance can not be negative');
		} else if (strategy == 'SEQ' && !restIsRnd) {
		    return this.error('chance can only be set after <<restIsRandom>> for strategy SEQ');
		} else if (strategy == 'RND' && chance == 0) {
		    return this.error("chance can't be zero for strategy RND");
		} else if (restIsRnd && chance == 0) {
		    return this.error("chance can't be zero after <<restIsRanndom>>");
		}

		if (chance > 0) { scenesObj.scenes.push(i); }
		scenesObj.chances[i] = chance;
		// Build permutation for SEQ,SEQ2RND, and RND2RND
		if ((strategy == 'SEQ2RND' || strategy == 'SEQ')
		    && !restIsRnd) {
		    // 'Permutation' is in sequential order
		    scenesObj.perm.unshift(i);
		} else if (strategy == 'RND2RND' ||
			   (strategy == 'RND' && !restIsRnd)) {
		    var j = rand(scenesObj.perm.length + 1);
		    scenesObj.perm.splice(j, 0, i);
		}
	    }
	    if (expErrors) {
		return this.error(expErrors);
	    }
	    // For strategy SEQ, if no <<restIsRandom>>, get 'stuck' on last scene
	    if (strategy == 'SEQ' && !restIsRnd) {
		scenesObj.scenes = [scenesObj.perm[0]];
	    }
	    
	    // SEQ with no <<restIsRandom>> can not have a <<scene-if>> as last scene
	    if (strategy == 'SEQ' && !restIsRnd && lastSceneType == 'scene-if') {
		return this.error('Last scene can not be <<scene-if>> for strategy SEQ');
	    }

	    // Sanity check on chanses
	    if (scenesObj.scenes.length == 0) {
		return this.error('Not all chance can be zero');
	    }
	    topObj[id] = scenesObj;		// Store state for id
	} // End of adding new selectScene

	// Find state for id
	var obj = topObj[id];
	
	// Find scene, first in perm and then in scenes
	var index = -1;
	while (obj.perm.length > 0) {
	    index = obj.perm.pop();
	    if (sceneOK(index)) {
		break;
	    }
	    index = -1;
	}
	if (index == -1) {
	    if (strategy == 'SEQ') {
		obj.strategy = 'RND';
	    }
	    var scenes = obj.scenes.filter(sceneOK);
	    var len = scenes.length;
	    var chanceTot = 0;
	    for (var i = 0; i < len; i++) {
		var scenesIndex = scenes[i];
		if (len < 3 || scenesIndex != obj.last) {
		    chanceTot += obj.chances[scenesIndex];
		}
	    }
	    // Find a random scene (except last scene selected)
	    //  weighted by chance
	    var chance = rand(chanceTot);
	    for (var i = 0; i < len; i++) {
		var scenesIndex = scenes[i];
		if (len < 3 || scenesIndex != obj.last) {
		    chance -= obj.chances[scenesIndex];
		    if (chance < 0) {
			index = scenesIndex;
			break;
		    }
		}
	    }
	}
	if (!State.active.variables.player.debugA) { errorStr = ''; }
	obj.last = index;		// Store index to selected scene
	jQuery(this.output).wiki(errorStr + this.payload[index].contents);
    }
});

macros.openQuote = {
  handler: function(place, macroName, params, parser) {
		var td='"';
		if (state.active.variables.openQuote && (!state.active.variables.closeQuote)) {
		td='<br><br>"';
		}
		new Wikifier(place, td);
		state.active.variables.openQuote=true;
		state.active.variables.closeQuote=false;
	}
};

macros.closeQuote = {
  handler: function(place, macroName, params, parser) {
		var td='"';
		if (state.active.variables.openQuote) {
		td='"<br><br>';
		}
		if (state.active.variables.closeQuote) {
		td='';
		}
		new Wikifier(place, td);
		state.active.variables.closeQuote=true;
		state.active.variables.openQuote=false;
	}
};

//Chat App Macros by Moonhead __Testing

Macro.add('SetupChat', {
    handler : function(){
		var divMain = document.createElement('div');
		var header = document.createElement('div');
		var leftHeading = document.createElement('span');
		var rightHeading = document.createElement('span');
		var appHeading = document.createElement('h2');
		var chatAppWrapper = document.createElement('div');

		jQuery(leftHeading)
			.text('Back')
			.addClass('chatApp')
			.addClass('chatLeft')
			.appendTo(header)

		jQuery(rightHeading)
			.text('...')
			.addClass('chatApp')
			.addClass('chatRight')
			.appendTo(header)

		jQuery(appHeading)
			.text('Messages')
			.addClass('chatApp')
			.appendTo(header)

		jQuery(header)
			.addClass('chatApp')
			.addClass('chatHeader')
			.appendTo(divMain)

		jQuery(chatAppWrapper)
			.addClass('chatApp')
			.addClass('chatApp-wrapper')
			.appendTo(divMain)

        jQuery(divMain)
            .attr({
                id : 'chatAppDiv',
                name : 'chatAppDiv'
            })
            .addClass('chatAppDiv')
            .appendTo(this.output);
    }
});

Macro.add('SetupPhone', {
    handler : function(){
		var divMain = document.createElement('div');
		var header = document.createElement('div');
		var leftHeading = document.createElement('span');
		var rightHeading = document.createElement('span');
		var appHeading = document.createElement('h2');
		var chatAppWrapper = document.createElement('div');

		jQuery(leftHeading)
			.text('Back')
			.addClass('chatApp')
			.addClass('chatLeft')
			.appendTo(header)

		jQuery(rightHeading)
			.text('...')
			.addClass('chatApp')
			.addClass('chatRight')
			.appendTo(header)

		jQuery(appHeading)
			.text('Tasks')
			.addClass('chatApp')
			.appendTo(header)

		jQuery(header)
			.addClass('chatApp')
			.addClass('chatHeader')
			.appendTo(divMain)

		jQuery(chatAppWrapper)
			.addClass('chatApp')
			.addClass('chatApp-wrapper')
			.appendTo(divMain)

        jQuery(divMain)
            .attr({
                id : 'chatAppDiv',
                name : 'chatAppDiv'
            })
            .addClass('chatAppDiv')
            .appendTo(this.output);
    }
});

Macro.add('ChatPCResponse', {
	tags : null,
    handler : function(){
        if(this.args.length == 0){
            var pcText = '';
            if(typeof this.payload[0].contents == 'string'){
                pcText = this.payload[0].contents
			}
			if(typeof state.active.variables.chatTextId == 'undefined')
			{
				state.active.variables.chatTextId = 0;
			}
			state.active.variables.chatTextId++;
			var chatMessageDiv = document.createElement('div');
            var chatBubble = document.createElement('div');
			var spanText = document.createElement('span');
			var pcNameDiv = document.createElement('div');
			var spanName = document.createElement('span');
			
			jQuery(spanName)
				.text('Me')
				.appendTo(pcNameDiv);

			jQuery(pcNameDiv)
				.addClass('chatAppPCName')
				.appendTo(chatMessageDiv);

            jQuery(spanText)
				.wiki(pcText)
				.addClass('chatAppNPCText')
                .appendTo(chatBubble);
            
            jQuery(chatBubble)
				.addClass('chatAppTextPC')
				.addClass('chatAppText')
				.appendTo(chatMessageDiv);

			jQuery(chatMessageDiv)
                .attr({
                    id: 'chatBubble_' + state.active.variables.chatTextId,
                    name: 'chatBubble_' + state.active.variables.chatTextId
				})
				.addClass('chatBubble')
				.appendTo(jQuery('.chatApp-wrapper'));
			
			var chatAppWrapper = jQuery('.chatApp-wrapper');
			chatAppWrapper[0].scrollTop = chatAppWrapper[0].scrollHeight;
        }
    }
});


Macro.add('ChatNPCResponse', {
	tags : null,
    handler : function(){
        if(this.args.length == 1){
            var npcName = '';
            var npcText = '';
            if(typeof this.args[0] == 'string'){
                npcName = this.args[0]
            }
            if(typeof this.payload[0].contents == 'string'){
                npcText = this.payload[0].contents
			}
            if(typeof state.active.variables.chatTextId == 'undefined')
			{
				state.active.variables.chatTextId = 0;
			}
			state.active.variables.chatTextId++;
			var chatMessageDiv = document.createElement('div');
            var chatBubble = document.createElement('div');
			var spanText = document.createElement('span');
			var spanName = document.createElement('span');

			jQuery(spanName)
				.wiki(npcName)
				.addClass('chatAppNPCName')
				.appendTo(chatMessageDiv);

            jQuery(spanText)
				.wiki(npcText)
				.addClass('chatAppNPCText')
                .appendTo(chatBubble);
            
			jQuery(chatBubble)
				.addClass('chatAppTextNPC')
				.addClass('chatAppText')
				.appendTo(chatMessageDiv);
			
			jQuery(chatMessageDiv)
                .attr({
                    id: 'chatBubble_' + state.active.variables.chatTextId,
                    name: 'chatBubble_' + state.active.variables.chatTextId
				})
				.appendTo(jQuery('.chatApp-wrapper'));

			var chatAppWrapper = jQuery('.chatApp-wrapper');
			chatAppWrapper[0].scrollTop = chatAppWrapper[0].scrollHeight;
        }
    }
});

// ordinal macro as requested by Saoirsa, by Andrew Svedby
var ordinals = {
    fifth: ['zeroth', 'first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eight', 'ninth', 'tenth'],
	fi5th: ['0th', '1st', '2nd', '3rd'],
	
    ordFun: (macro, arr, casify) => {
		if (macro.args.length  < 1) {
			return macro.error('takes at least one argument');
		}

		var num;

		try { 
			num = Scripting.evalJavaScript(macro.args.full); 
		}
		catch (ex) { 
			return macro.error('error in argument evaluation ' + ex.message); 
		}

		if (!Number.isInteger(num) || num < 0) {
			return macro.error('takes non negative integer as argument');
		} 
		else if (num >= arr.length) {
			num += 'th';
		} 
		else {
			num = arr[num];
		}
		
		if (casify) { 
			num = num.toUpperFirst(); 
		}
		
		return jQuery(macro.output).wiki(num);
    }
};
Macro.add('ordinal', {
    handler() {
	return ordinals.ordFun(this, ordinals.fifth, false);
	//return "";
    }
});
Macro.add('Ordinal', {
    handler() {
	return ordinals.ordFun(this, ordinals.fifth, true);
	//return "";
    }
});
Macro.add('ord1nal', {
    handler() {
	return ordinals.ordFun(this, ordinals.fi5th, false);
	//return "";
    }
});

/* macro reactOnce, (c) 2018 Andrew Svedby, same license as Perverted Education */
 
Macro.add('reactOnce', {
    tags: ['reactOnceMore', 'reactElse'],
    handler() {
	let i;
	let noReaction = true;
	let flags = State.active.variables.once;
	const len = this.payload.length;
	for (i=0; i<len; i++) {
	    switch (this.payload[i].name) {
			case 'reactElse':
				if (this.payload[i].args.length > 0) {
					return this.error('<<else>> takes no arguments');
				} else if (i + 1 != len) {
					return this.error('<<else>> must be final clause');
				}
				break;
			default:
				if (this.payload[i].args.length < 2) {
					return this.error('<<reactOnce>> and <<reactOnceMore>> takes a boolean and flags');
				}
				break;
	    }
	}
	try {
	    for (i=0; i<len; i++) {
			switch (this.payload[i].name) {
				case 'reactElse':
					if (noReaction) {
					new Wikifier(this.output, this.payload[i].contents)
					}
					break;
				default:
					let argBool = Scripting.evalJavaScript(this.payload[i].args[0]), argFlag = this.payload[i].args[1];
					if (argBool && !flags[argFlag]) {
						noReaction = false;
						for (let j = 1; j < this.payload[i].args.length; j++) {
							flags[this.payload[i].args[j]] = true;
						}
						new Wikifier(this.output, this.payload[i].contents);
					}
			}
	    }
	}
        catch (ex) { return this.error('unknown error ' + ex.message); }
    }
});
