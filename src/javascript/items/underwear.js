if(typeof window.items == "undefined"){
    window.items = {};
}

$.extend(true, window.items, {
    itemMasters:{
        //Underwear
        boxers:{
            itemType:"underwear",
            clothingSlot:"underwear",
            name: "Boxers",
            itemMaster: "boxers",
            daring:0,
            disabled:false,
            hasWorn:false,
            isMale:true,
            isFemale:false,
            tags:{
                plain:true,
                
            }
        },
        plainPanties:{
            itemType:"underwear",
            clothingSlot:"underwear",
            name: "Plain Panties",
            itemMaster: "plainPanties",
            daring:3,
            disabled:false,
            hasWorn:false,
            isMale:true,
            isFemale:false,
            tags:{
                plain:true,
                
            }
        },
        sexyPanties:{
            itemType:"underwear",
            clothingSlot:"underwear",
            name: "Sexy Panties",
            itemMaster: "sexyPanties",
            daring:3,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                sexy:true,
                
            }
        },
        latexPanties:{
            itemType:"underwear",
            clothingSlot:"underwear",
            name: "Latex Panties",
            itemMaster: "latexPanties",
            daring:5,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                sexy:true,
                slutty:true,
            }
        },
        cheerBriefs:{
            itemType:"underwear",
            clothingSlot:"underwear",
            name: "Cheerleader Briefs",
            itemMaster: "cheerBriefs",
            daring:0,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                cheer:true,
            }
        },
    },
    itemChildren:{
        //Boxers
        luckyBoxers0:{
            masterItem:"boxers",
            variant:"lucky_jocks_00",
            name:"Grey Brown Gorilla Boxers",
            price:10,
            daring:0,
            disabled:false,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                grey:true,
                school:true,
            }
        },
        luckyBoxers1:{
            masterItem:"boxers",
            variant:"lucky_jocks_01",
            name:"Blue Tartan Boxers",
            price:10,
            daring:0,
            disabled:false,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                blue:true,
                school:true,
            }
        },
        luckyBoxers2:{
            masterItem:"boxers",
            variant:"lucky_jocks_02",
            name:"Yellow Flowered Boxers",
            price:10,
            daring:0,
            disabled:false,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                yellow:true,
                school:true,
            }
        },
        luckyBoxers3:{
            masterItem:"boxers",
            variant:"lucky_jocks_03",
            name:"Plain Grey Boxers",
            price:10,
            daring:0,
            disabled:false,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                grey:true,
                school:true,
            }
        },
        luckyBoxers4:{
            masterItem:"boxers",
            variant:"lucky_jocks_04",
            name:"Plain Black Boxers",
            price:10,
            daring:0,
            disabled:false,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                black:true,
                school:true,
            }
        },
        luckyBoxers5:{
            masterItem:"boxers",
            variant:"lucky_jocks_05",
            name:"Plain Black Boxers with White Band",
            price:10,
            daring:10,
            disabled:false,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                grey:true,
                school:true,
            }
        },
        luckyBoxers6:{
            masterItem:"boxers",
            variant:"lucky_jocks_06",
            name:"Yellow Ducky Boxers",
            price:10,
            daring:0,
            disabled:true,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                grey:true,
                yellow:true,
                school:true,
            }
        },
        luckyBoxers7:{
            masterItem:"boxers",
            variant:"lucky_jocks_07",
            name:"Red Tartan Boxers",
            price:10,
            daring:0,
            disabled:false,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                red:true,
                school:true,
            }
        },

        //Plain Panties
        cottonPanties0:{
            masterItem:"plainPanties",
            variant:"panties_cotton_00",
            name:"White Panties with Lace Side",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                white:true,
                school:true,

            }
        },
        cottonPanties1:{
            masterItem:"plainPanties",
            variant:"panties_cotton_01",
            name:"White Ruffled Panties",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                white:true,
                school:true,
                
            }
        },
        cottonPanties2:{
            masterItem:"plainPanties",
            variant:"panties_cotton_02",
            name:"White Frilly Panties",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                white:true,
                school:true,
                frilly:true,
            }
        },
        cottonPanties3:{
            masterItem:"plainPanties",
            variant:"panties_cotton_03",
            name:"White with Grey Polkadot Frilly Panties",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                white:true,
                school:true,
                polkadot:true,
                frilly:true,
            }
        },
        cottonPanties4:{
            masterItem:"plainPanties",
            variant:"panties_cotton_04",
            name:"Plain Pink Panties with Girly Writing",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                pink:true,
                school:true,
                
            }
        },
        cottonPanties5:{
            masterItem:"plainPanties",
            variant:"panties_cotton_05",
            name:"Pink and White Striped Plain Panties",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                pink:true,
                school:true,
                striped:true,
            }
        },
        cottonPanties6:{
            masterItem:"plainPanties",
            variant:"panties_cotton_06",
            name:"Plain Pink Panties with White Band",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                pink:true,
                school:true,
                
            }
        },
        cottonPanties7:{
            masterItem:"plainPanties",
            variant:"panties_cotton_07",
            name:"Grey Panties with Koala Logo",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                grey:true,
                school:true,
                
            }
        },
        cottonPanties8:{
            masterItem:"plainPanties",
            variant:"panties_cotton_40",
            name:"Black with White Polkadot Boyshort Panties",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                black:true,
                white:true,
                school:true,
                polkadot:true,
                boyshort:true,
                gifted:true,
            }
        },
        cottonPanties9:{
            masterItem:"plainPanties",
            variant:"panties_cotton_60",
            name:"Pastel Blue Pain Panties with Frilly White Edges",
            price:15,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                blue:true,
                school:true,
                frilly:true,
                gifted:true,
            }
        },
        //Sexy Panties
        sexyPanties0:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_00",
            name:"Red Tartan Sexy Panties with Lace Side",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                red:true,
                school:true,
                
            }
        },
        sexyPanties1:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_01",
            name:"Sexy Red Panties with Black Dots and Lacing",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                red:true,
                school:true,
                
            }
        },
        sexyPanties2:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_02",
            name:"Righ Waisted Sexy Pink Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                pink:true,
                school:true,
                
            }
        },
        sexyPanties3:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_03",
            name:"Sexy Pink Panties with Balck Dots and Frilly Lacing",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                pink:true,
                black:true,
                school:true,
                frilly:true,
            }
        },
        sexyPanties4:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_04",
            name:"Lacy Blue G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                blue:true,
                school:true,
                frilly:true,
                gstring: true,
            }
        },
        sexyPanties5:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_05",
            name:"Lacy Pink and Cream G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                pink:true,
                school:true,
                frilly:true,
                gstring: true,
            }
        },
        sexyPanties6:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_06",
            name:"Lacy Purple G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                purple:true,
                school:true,
                frilly:true,
                gstring:true,
            }
        },
        sexyPanties7:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_07",
            name:"Pink G-String Panteis with Frilly Black Lacing",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                pink:true,
                school:true,
                frilly:true,
                gstring:true,
            }
        },
        sexyPanties8:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_08",
            name:"Sexy Yellow Panties with Black Lacing",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                yellow:true,
                school:true,
                frilly:true,
            }
        },
        sexyPanties9:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_09",
            name:"Lacy Purple G-String Panties with Black Bow",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                purple:true,
                school:true,
                frilly:true,
                gstring:true,
            }
        },
        sexyPanties10:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_10",
            name:"Frilly Purple G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                purple:true,
                school:true,
                frilly:true,
                gstring:true
            }
        },
        sexyPanties11:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_11",
            name:"Sexy Lacy Pink Panties with Black Ribbon",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                pink:true,
                school:true,
                frilly:true,
            }
        },
        sexyPanties12:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_12",
            name:"Blue and Black Sexy Panties with Ribbon and Lace",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                blue:true,
                black:true,
                school:true,
                
            }
        },
        sexyPanties13:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_13",
            name:"Sexy Blue Panties with White Frilly Trim",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                blue:true,
                school:true,
                frilly:true,
            }
        },
        sexyPanties14:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_14",
            name:"Lacy Black G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                black:true,
                school:true,
                frilly:true,
                gstring:true
            }
        },
        sexyPanties15:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_15",
            name:"Lacy Black Dotted G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                black:true,
                school:true,
                frilly:true,
                gstring:true
            }
        },
        sexyPanties16:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_16",
            name:"Lacy and Strappy Black G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                black:true,
                school:true,
                frilly:true,
                gstring:true
            }
        },
        sexyPanties17:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_17",
            name:"White Strappy G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                white:true,
                school:true,
                frilly:true,
                gstring:true
            }
        },
        sexyPanties18:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_18",
            name:"Frilly Red G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                red:true,
                school:true,
                frilly:true,
                gstring:true
            }
        },
        sexyPanties19:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_40",
            name:"Black High Waisted G-String Panties with Pink Bows",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                black:true,
                school:true,
                frilly:true,
                gstring:true,
                gifted:true,
            }
        },
        sexyPanties20:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_41",
            name:"Frilly and Strappy Red G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                red:true,
                school:true,
                frilly:true,
                gstring:true,
                gifted:true,
            }
        },
        sexyPanties21:{
            masterItem:"sexyPanties",
            variant:"panties_sexy_60",
            name:"Pink Frilly G-String Panties",
            price:55,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                pink:true,
                school:true,
                frilly:true,
                gstring:true,
                gifted:true,
            }
        },

        //Latex Panties
        latexPanties0:{
            masterItem:"latexPanties",
            variant:"panties_latex_00",
            name:"Black Full Breif Latex Panties",
            price:80,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                slutty:true,
                black:true,
                school:true,
            }
        },
        latexPanties1:{
            masterItem:"latexPanties",
            variant:"panties_latex_01",
            name:"Black Bikini Latex Panties with Pink Decoration",
            price:80,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                slutty:true,
                black:true,
                school:true,
            }
        },
        latexPanties2:{
            masterItem:"latexPanties",
            variant:"panties_latex_02",
            name:"Black Latex G-String Panties",
            price:80,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                slutty:true,
                black:true,
                school:true,
                gstring:true,
            }
        },
        latexPanties3:{
            masterItem:"latexPanties",
            variant:"panties_latex_40",
            name:"Pink Latex Panties with Black Bow",
            price:80,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                sexy:true,
                slutty:true,
                pink:true,
                school:true,
                gifted:true,
            }
        },

        //cheerBriefs
        cheerBriefs0:{
            masterItem:"cheerBriefs",
            variant:"cheer_briefs",
            name:"Red Cheerleader Briefs",
            price:80,
            daring:0,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                plain:true,
                cheer:true,
                red:true,
                school:true,
            }
        },
    }
});