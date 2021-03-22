//Macros
macros.addItemVariantToInventory = {
    handler: function(place, macroName, params, parser){
        if (params.length == 0) {
            throwError(place, "<<" + macroName + ">>: no parameters given");
            return;
        }
        window.itemFuncs.addItemToInventory(params[0]);
    }
};
macros.buyItemVariant = {
    handler: function(place, macroName, params, parser){
        if (params.length == 0) {
            throwError(place, "<<" + macroName + ">>: no parameters given");
            return;
        }
        window.itemFuncs.buyItemVariant(params[0]);
    }
};
macros.removeItemVariantFromInventory = {
    handler: function(place, macroName, params, parser){
        if (params.length == 0) {
            throwError(place, "<<" + macroName + ">>: no parameters given");
            return;
        }
        window.itemFuncs.removeItemFromInventory(params[0]);
    }
};

//JS Functions
window.itemFuncs= {
    hasTag: function(item, tag){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        var itemVariant = window.itemFuncs.getItemByVariant(item);
        if(!(itemVariant === undefined)){
            if(!(itemVariant.tags[tag] === undefined)){
                return itemVariant.tags[tag];
            }
            else{
                var masterItem = window.items.itemMasters[itemVariant.masterItem];
                if(!(masterItem.tags[tag] === undefined)){
                    return masterItem.tags[tag];
                }
                else{
                    return false;
                }
            }
        }
        else{
            return false;
        }
    },
    notTag: function (item, tag){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        var itemVariant = window.itemFuncs.getItemByVariant(item);
        if(!(itemVariant === undefined)){
            if(!(itemVariant.tags[tag] === undefined)){
                return false;
            }
            else{
                var masterItem = window.items.itemMasters[itemVariant.masterItem];
                if(!(masterItem.tags[tag] === undefined)){
                    return false;
                }
                else{
                    return true;
                }
            }
        }
        else{
            return false;
        }
    },
    hasTagsAnd: function (item, tags){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof item !== 'object'){
            item = window.itemFuncs.getItemByVariant(item);
        }
        var hasTags = false;
        if(tags.constructor === Array){
            hasTags = true;
            for(var i = 0; i < tags.length && hasTags === true; i++){
                var hasTag = window.itemFuncs.hasTag(item, tags[i]);
                hasTags = hasTag;
            }
        }
        return hasTags;
    },
    hasTagsOr: function (item, tags){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof item !== 'object'){
            item = window.itemFuncs.getItemByVariant(item);
        }
        var hasTags = false;
        if(tags.constructor === Array){
            for(var i = 0; i < tags.length; i++){
                var hasTag = window.itemFuncs.hasTag(item, tags[i]);
                if(hasTag){
                    hasTags = hasTag;
                    break;
                }
            }
        }
        return hasTags;
    },
    notTagsAnd: function (item, tags){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof item !== 'object'){
            item = window.itemFuncs.getItemByVariant(item);
        }
        var notTags = false;
        if(tags.constructor === Array){
            notTags = true;
            for(var i = 0; i < tags.length && notTags === true; i++){
                var notTag = window.itemFuncs.notTag(item, tags[i]);
                notTags = notTag;
            }
        }
        return notTags;
    },
    notTagsOr: function (item, tags){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof item !== 'object'){
            item = window.itemFuncs.getItemByVariant(item);
        }
        var notTags = false;
        if(tags.constructor === Array){
            for(var i = 0; i < tags.length; i++){
                var notTag = window.itemFuncs.notTag(item, tags[i]);
                if(notTag){
                    notTags = notTag;
                    break;
                }
            }
        }
        return notTags;
    },

    getChildItemsForMaster: function(masterItem){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        var itemChildren = [];
        for(var itemName in window.items.itemChildren){
            var item = window.items.itemChildren[itemName];
            var itemVariant = window.itemFuncs.getItemByVariant(item);
            if(typeof itemVariant == 'object' && itemVariant.masterItem == masterItem){
                itemChildren.push(itemVariant);
            }
        }
        return itemChildren;
    },

    getItemByVariant: function(itemVariant){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof itemVariant !== 'object'){
            for(var itemIdx in actVar.itemVariantsOverrides){
                var item = actVar.itemVariantsOverrides[itemIdx]
                if(item.variant == itemVariant){
                    return item;
                }
            }
            for(var itemIdx in window.items.itemChildren){
                var item = window.items.itemChildren[itemIdx];
                if(typeof item == 'object' && item.variant == itemVariant){
                    return item;
                }
            }
        }
        else if(!(itemVariant === null)){            
            for(var itemIdx in actVar.itemVariantsOverrides){
                var item = actVar.itemVariantsOverrides[itemIdx]
                if(item.variant == itemVariant.variant){
                    return item;
                }
            }
            for(var itemIdx in window.items.itemChildren){
                var item = window.items.itemChildren[itemIdx];
                if(typeof item == 'object' && item.variant == itemVariant.variant){
                    return item;
                }
            }
        }
    },

    getItemMaster: function(itemMaster){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof itemMaster !== 'object'){
            for(var itemIdx in actVar.itemMasterOverrides){
                var item = actVar.itemMasterOverrides[itemIdx]
                if(item.itemMaster == itemMaster){
                    return item;
                }
            }
            for(var itemIdx in window.items.itemMasters){
                var item = window.items.itemMasters[itemIdx];
                if(typeof item == 'object' && item.itemMaster == itemMaster){
                    return item;
                }
            }
        }
        else{            
            for(var itemIdx in actVar.itemMasterOverrides){
                var item = actVar.itemMasterOverrides[itemIdx]
                if(item.itemMaster == itemMaster.itemMaster){
                    return item;
                }
            }
            for(var itemIdx in window.items.itemMasters){
                var item = window.items.itemMasters[itemIdx];
                if(typeof item == 'object' && item.itemMaster == itemMaster.itemMaster){
                    return item;
                }
            }
        }
    },

    buyItemVariant: function(itemVariant){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }
        if(typeof itemVariant !== 'object'){
            itemVariant = window.itemFuncs.getItemByVariant(itemVariant);
        }
        for(var itemName in window.items.itemChildren){
            var item = window.items.itemChildren[itemName];
            if(typeof item !== 'function'){
                item = window.itemFuncs.getItemByVariant(item);
                if(typeof itemVariant == 'object' && itemVariant.variant == item.variant){
                    if(item.price <= actVar.player.money){
                        actVar.player.money -= item.price;
                        window.itemFuncs.addItemToInventory(item);
                    }
                    break;
                }
            }
        }
    },

    addItemToInventory: function(itemVariant){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        itemVariant = window.itemFuncs.getItemByVariant(itemVariant);
        if(!(window.inventoryFuncs.checkItemInInventory(itemVariant))){
            actVar.inventory.push(itemVariant);
        }
    },

    addItemsToInventoryByTag: function(tagName, tagValue){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        for(var itemIdx in window.items.itemChildren){
            var itemVariant = window.itemFuncs.getItemByVariant(window.items.itemChildren[itemIdx]);
            if(typeof itemVariant == 'object' && !(window.inventoryFuncs.checkItemInInventory(itemVariant)) && itemVariant.tags[tagName] == tagValue){
                actVar.inventory.push(itemVariant);
            }
        }
    },

    removeItemFromInventory: function(itemVariant){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        itemVariant = window.itemFuncs.getItemByVariant(itemVariant);
        if(itemVariant){
            for(var itemIdx in actVar.inventory){
                var item = actVar.inventory[itemIdx];
                if(typeof item == 'object' && item.variant == itemVariant.variant){
                    actVar.inventory.splice(itemIdx, 1);
                }
            }
        }
    },

    removeItemsFromInventoryByProperty: function(propertyName, propertyValue){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        for(var arrIdx = actVar.inventory.length - 1; arrIdx >= 0; arrIdx--){
            var item = actVar.inventory[arrIdx];
            if(typeof item == 'object' && item[propertyName] == propertyValue){
                actVar.inventory.splice(arrIdx, 1);
            }
        }
    },

    removeItemsFromInventoryByTag: function(tagName, tagValue){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        for(var arrIdx = State.active.variables.inventory.length - 1; arrIdx >= 0; arrIdx--){
            var item = State.active.variables.inventory[arrIdx];
            if(typeof item == 'object' && item.tags[tagName] == tagValue){
                actVar.inventory.splice(arrIdx, 1);
            }
        }
    },

    getTagsForItem: function(item){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof item !== 'object'){
            item = window.itemFuncs.getItemByVariant(item);
        }
        var tags = [];
        for(var tagName in item.tags){
            if(item.tags[tagName] && tags.indexOf(tagName) < 0){
                tags.push(tagName);
            }
        }
        var masterItem = window.items.itemMasters[item.masterItem];
        for(var tagName in masterItem.tags){
            if(masterItem.tags[tagName] && tags.indexOf(tagName) < 0 && (item.tags[tagName] === undefined || item.tags[tagName])){
                tags.push(tagName);
            }
        }
        return tags;
    },

    disableItemVariant: function(item){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        window.itemFuncs.overrideItemVariantProperty(item, 'disabled', true);
    },

    enableItemVariant: function(item){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        window.itemFuncs.overrideItemVariantProperty(item, 'disabled', false);
    },

    overrideItemVariantProperty: function(item, propertyName, propertyValue){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof item !== 'object'){
            item = window.itemFuncs.getItemByVariant(item);
        }
        item[propertyName] = propertyValue;
        for(var itemIdx in actVar.itemVariantsOverrides){
            var overrideItem = actVar.itemVariantsOverrides[itemIdx]
            if(overrideItem.variant == item.variant){
                actVar.itemVariantsOverrides.splice(itemIdx, 1);
            }
        }
        actVar.itemVariantsOverrides.push(item);
    },

    addTattooToInventory: function(item){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        var itemVariant = window.itemFuncs.getItemByVariant(item);
        if(!window.inventoryFuncs.checkItemInInventory(itemVariant)){
            window.itemFuncs.addItemToInventory(itemVariant);
            actVar.player.tattoos.push(itemVariant);
        }
    },

    disableItemVariantsByProperty: function(propertyName, propertyValue){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        for(var arrIdx = window.items.itemChildren - 1; arrIdx >= 0; arrIdx--){
            var item = window.items.itemChildren[arrIdx];
            if(typeof item == 'object' && item[propertyName] == propertyValue){
                window.itemFuncs.disableItemVariant(item);
            }
        }
    },

    disableItemMaster: function(itemMaster){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        window.itemFuncs.overrideItemMasterProperty(itemMaster, 'disabled', true);
    },

    enableItemMaster: function(itemMaster){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        window.itemFuncs.overrideItemMasterProperty(itemMaster, 'disabled', false);
    },

    overrideItemMasterProperty: function(item, propertyName, propertyValue){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof item !== 'object'){
            item = window.itemFuncs.getItemMaster(item);
        }
        item[propertyName] = propertyValue;
        for(var itemIdx in actVar.itemMasterOverrides){
            var overrideItem = actVar.itemMasterOverrides[itemIdx]
            if(overrideItem.itemMaster == item.itemMaster){
                actVar.itemMasterOverrides.splice(itemIdx, 1);
            }
        }
        actVar.itemMasterOverrides.push(item);
    },

    addTagToItemMaster: function(item, tag, value){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof item !== 'object'){
            item = window.itemFuncs.getItemMaster(item);
        }

        $.extend(true, item.tags, {[tag]: value});
        for(var itemIdx in actVar.itemMasterOverrides){
            var overrideItem = actVar.itemMasterOverrides[itemIdx]
            if(overrideItem.itemMaster == item.itemMaster){
                actVar.itemMasterOverrides.splice(itemIdx, 1);
            }
        }
        actVar.itemMasterOverrides.push(item);
    },
    
    addTagToItemVariant: function(item, tag, value){
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }

        if(typeof item !== 'object'){
            item = window.itemFuncs.getItemVariant(item);
        }

        $.extend(true, item.tags, {[tag]: value});
        for(var itemIdx in actVar.itemVariantsOverrides){
            var overrideItem = actVar.itemVariantsOverrides[itemIdx]
            if(overrideItem.variant == item.variant){
                actVar.itemVariantsOverrides.splice(itemIdx, 1);
            }
        }
        actVar.itemVariantsOverrides.push(item);
    },

    getItemMastersForStore: function(storeID){
        var store = window.stores[storeID];
        var soldMasterItems = [];
        for(var masterItemIdx in store.masterItemsSold){
            var masterItemName = store.masterItemsSold[masterItemIdx];
            soldMasterItems.push(window.itemFuncs.getItemMaster(masterItemName));
        }
        return soldMasterItems;
    },

    getItemVariantsForPurchase: function(masterItem){
        var itemVariants = window.itemFuncs.getChildItemsForMaster(masterItem);
        itemVariants = itemVariants.filter(
            variant => variant.disabled != true
        )
        var purchasableItemVariants = itemVariants.filter(
            variant => variant.purchasable && variant.disabled != true
        )
        if(purchasableItemVariants.length >= Math.min(itemVariants.length, 5)){
            return purchasableItemVariants;
        }
        else{
            for(var i=0; i < Math.min(itemVariants.length, 5) - purchasableItemVariants.length; i++){
                itemVariants = window.itemFuncs.getChildItemsForMaster(masterItem);
                var unpurchasableItemVariants = itemVariants.filter(
                    variant => variant.purchasable != true && variant.disabled != true
                )
                var unpurchasableItemVariant = unpurchasableItemVariants[Math.floor(Math.random() * unpurchasableItemVariants.length)]
                window.itemFuncs.overrideItemVariantProperty(unpurchasableItemVariant, 'purchasable', true);
            }
            itemVariants = window.itemFuncs.getChildItemsForMaster(masterItem);
            purchasableItemVariants = itemVariants.filter(
                variant => variant.purchasable && variant.disabled != true
            )
            return purchasableItemVariants;
        }
    },

    getItemVariantsForPurchase2: function(masterItem, storeID){
        //TODO - store item variant names(only) aginst a store object
        //TODO - split out the store refresh process
        if(SugarCube.State){
            var actVar = SugarCube.State.active.variables;
        }
        else{
            var actVar = State.active.variables;
        }
        var availableItems = [];
        var store = actVar.stores[storeID];
        for(var availableItemIdx in store.availableItemVariants){
            var itemVariantName = store.availableItemVariants[availableItemIdx];
            var item = window.itemFuncs.getItemByVariant(itemVariantName)
            if(item.masterItem == masterItem){
                availableItems.push(itemVariantName)
            }
        }
        
    },

    refreshItemsForStore: function(masterItem, storeID){

    },

    resetItemVariantsForPurchase: function(masterItem){
        var itemVariants = window.itemFuncs.getChildItemsForMaster(masterItem.itemMaster);
        itemVariants.forEach(iv => addTagToItemVariant(iv, 'purchasable', false));
        return true;
    }
}


//Objects
//Most object definitions are stored in seperate files to make managing them easier.
//As we're modifying the same object over several files, we need to check if the object exists first, if not create it, then merge our changes into the main object
if(typeof window.items == "undefined"){
    window.items = {};
}

$.extend(true, window.items, {
    colourTags: ['pink', 'black', 'white', 'blue', 'yellow', 'grey', 'gray', 'orange', 'green', 'red', 'gold', 'silver', 'purple'],
    itemMasters:{
        length: function(){
            return Object.keys(window.items.itemMasters).length;
        },
    },
    itemChildren:{
        length: function(){
            return Object.keys(window.items.itemChildren).length;
        },
    }
});
