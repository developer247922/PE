if(typeof window.items == "undefined"){
    window.items = {};
}

$.extend(true, window.items, {
    itemMasters:{
        //Bras
        bras:{
            itemType:"bra",
            clothingSlot:"bra",
            name:"Bras",
            itemMaster: "bras",
            daring:3,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                plain:true,
            }
        },
        sexyBras:{
            itemType:"bra",
            clothingSlot:"bra",
            name:"Lacy Bras",
            itemMaster: "sexyBras",
            daring:4,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                sexy:true,
            }
        },
        latexBras:{
            itemType:"bra",
            clothingSlot:"bra",
            name:"Latex Bras",
            itemMaster: "latexBras",
            daring:6,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                sexy:true,
                slutty:true,
            }
        },
        corsets:{
            itemType:"bra",
            clothingSlot:"bra",
            name:"Corsets",
            itemMaster: "corsets",
            daring:6,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                sexy:true,
                slutty:true,
            }
        },
    },
    itemChildren:{
        //bras
        bras00:{
            masterItem:"bras",
            variant:"bra_00",
            name:"White Lacy Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Plain White",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        bras01:{
            masterItem:"bras",
            variant:"bra_01",
            name:"White Frilly Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Plain White",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        bras02:{
            masterItem:"bras",
            variant:"bra_02",
            name:"White Cotton Bra with Frilly Back",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Plain White",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        bras03:{
            masterItem:"bras",
            variant:"bra_03",
            name:"White Polkadot Bra with Grey Lace",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Grey Polka Dots",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        bras04:{
            masterItem:"bras",
            variant:"bra_04",
            name:"Pink Satin Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Plain Pink",
            canBuy:true,
            tags:{
                pink:true,
                plain:true,
                school:true,
            }
        },
        bras05:{
            masterItem:"bras",
            variant:"bra_05",
            name:"Pink Cotton Bra with Blue Bow",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Plain Bright Pink",
            canBuy:true,
            tags:{
                pink:true,
                plain:true,
                school:true,
            }
        },
        bras06:{
            masterItem:"bras",
            variant:"bra_06",
            name:"Pink Cotton Bra with White Lace Trim",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Plain Pink and Grey",
            canBuy:true,
            tags:{
                pink:true,
                plain:true,
                school:true,
            }
        },
        bras07:{
            masterItem:"bras",
            variant:"bra_07",
            name:"Black Strapless Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Plain Black",
            canBuy:true,
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        bras08:{
            masterItem:"bras",
            variant:"bra_08",
            name:"Blue Cotton Patterned Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
                school:true,
            }
        },
        bras09:{
            masterItem:"bras",
            variant:"bra_09",
            name:"Green Lacy Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                green:true,
                plain:true,
                school:true,
            }
        },
        bras10:{
            masterItem:"bras",
            variant:"bra_10",
            name:"Blue and Grey Sports Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                grey:true,
                plain:true,
                school:true,
            }
        },
        bras11:{
            masterItem:"bras",
            variant:"bra_11",
            name:"Red and Grey Sports Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                grey:true,
                red:true,
                plain:true,
                school:true,
            }
        },
        bras12:{
            masterItem:"bras",
            variant:"bra_12",
            name:"White Sports Bra with Grey Straps",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        bras13:{
            masterItem:"bras",
            variant:"bra_13",
            name:"Baby Blue Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
                school:true,
            }
        },
        bras14:{
            masterItem:"bras",
            variant:"bra_14",
            name:"Blue Sports Bra with Pink Trim",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
                school:true,
            }
        },
        bras15:{
            masterItem:"bras",
            variant:"bra_15",
            name:"Blue Lacy Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
                school:true,
            }
        },
        bras16:{
            masterItem:"bras",
            variant:"bra_16",
            name:"Grey Lacy Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                grey:true,
                plain:true,
                school:true,
            }
        },
        bras17:{
            masterItem:"bras",
            variant:"bra_17",
            name:"Black Lacy Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        bras18:{
            masterItem:"bras",
            variant:"bra_18",
            name:"Pink Long Bra with Pink Straps",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                plain:true,
                school:true,
            }
        },
        bras19:{
            masterItem:"bras",
            variant:"bra_19",
            name:"Blue Sheer Bra with Black Straps",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
                school:true,
            }
        },
        bras20:{
            masterItem:"bras",
            variant:"bra_20",
            name:"Cream Cotton Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                cream:true,
                plain:true,
                school:true,
            }
        },
        bras21:{
            masterItem:"bras",
            variant:"bra_21",
            name:"Green Frilly Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                green:true,
                plain:true,
                school:true,
            }
        },
        bras22:{
            masterItem:"bras",
            variant:"bra_22",
            name:"Black Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        bras40:{
            masterItem:"bras",
            variant:"bra_40",
            name:"Black Polkadot Bra with Red Trim and Bow",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Plain Black Polka Dots",
            canBuy:false,
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },

        //sexyBras
        sexyBras00:{
            masterItem:"sexyBras",
            variant:"bra_sexy_00",
            name:"Red Tartan Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Tartan",
            canBuy:true,
            tags:{
                red:true,
                sexy:true,
                tartan:true,
            }
        },
        sexyBras01:{
            masterItem:"sexyBras",
            variant:"bra_sexy_01",
            name:"Red Sexy Bra with Black Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Red with Dots",
            canBuy:true,
            tags:{
                red:true,
                sexy:true,
            }
        },
        sexyBras02:{
            masterItem:"sexyBras",
            variant:"bra_sexy_02",
            name:"Pink Sexy Bra with Black Straps and Bow",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Silky Cream",
            canBuy:true,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras03:{
            masterItem:"sexyBras",
            variant:"bra_sexy_03",
            name:"Pink Polkadot Sexy Bra with Black Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Cream Dots",
            canBuy:true,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras04:{
            masterItem:"sexyBras",
            variant:"bra_sexy_04",
            name:"Blue Lacy Sexy Bra with White Straps",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Blue Lacy",
            canBuy:true,
            tags:{
                blue:true,
                sexy:true,
            }
        },
        sexyBras05:{
            masterItem:"sexyBras",
            variant:"bra_sexy_05",
            name:"Bright Pink and Baby Pink Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Pink and Cream Lacy",
            canBuy:true,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras06:{
            masterItem:"sexyBras",
            variant:"bra_sexy_06",
            name:"Purple Lacy Sexy Bra with Pink Straps",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Purple Lacy",
            canBuy:true,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras07:{
            masterItem:"sexyBras",
            variant:"bra_sexy_07",
            name:"Pink Sexy Bra with Black Lace",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Pink and Black Lacy",
            canBuy:true,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras08:{
            masterItem:"sexyBras",
            variant:"bra_sexy_08",
            name:"Yellow Satin Sexy Bra with Black Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Yellow Silky",
            canBuy:true,
            tags:{
                yellow:true,
                sexy:true,
            }
        },
        sexyBras09:{
            masterItem:"sexyBras",
            variant:"bra_sexy_09",
            name:"Purple Sexy Bra with Light Purple Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Mauve Frilly",
            canBuy:true,
            tags:{
                purple:true,
                sexy:true,
            }
        },
        sexyBras10:{
            masterItem:"sexyBras",
            variant:"bra_sexy_10",
            name:"Purple Sexy Bra with Frilly Trim and Bow",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Purple with Bows Lacy",
            canBuy:true,
            tags:{
                purple:true,
                sexy:true,
            }
        },
        sexyBras11:{
            masterItem:"sexyBras",
            variant:"bra_sexy_11",
            name:"Pink Sexy Low Cut Bra with Black Straps and Bows",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Cream Open",
            canBuy:true,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras12:{
            masterItem:"sexyBras",
            variant:"bra_sexy_12",
            name:"Blue Sexy Satin Bra with Black Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Blue and Black Silky",
            canBuy:true,
            tags:{
                blue:true,
                sexy:true,
            }
        },
        sexyBras13:{
            masterItem:"sexyBras",
            variant:"bra_sexy_13",
            name:"Blue Sexy Coton Bra with White Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Blue and White Frilly",
            canBuy:true,
            tags:{
                blue:true,
                sexy:true,
            }
        },
        sexyBras14:{
            masterItem:"sexyBras",
            variant:"bra_sexy_14",
            name:"Black Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Black Lacy",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras15:{
            masterItem:"sexyBras",
            variant:"bra_sexy_15",
            name:"Black Sexy Bra with Black Lacing and Bow",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Black Lacy",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras16:{
            masterItem:"sexyBras",
            variant:"bra_sexy_16",
            name:"Black Sheer Sexy Bra with Black Straps",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Black Lacy",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras17:{
            masterItem:"sexyBras",
            variant:"bra_sexy_17",
            name:"Pink Sexy Full Cup Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras18:{
            masterItem:"sexyBras",
            variant:"bra_sexy_18",
            name:"Red Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Red Lacy",
            canBuy:true,
            tags:{
                red:true,
                sexy:true,
            }
        },
        sexyBras19:{
            masterItem:"sexyBras",
            variant:"bra_sexy_19",
            name:"White Leopard Pink Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                sexy:true,
            }
        },
        sexyBras20:{
            masterItem:"sexyBras",
            variant:"bra_sexy_20",
            name:"Black Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Black Lacy",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras21:{
            masterItem:"sexyBras",
            variant:"bra_sexy_21",
            name:"Black Sheer Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras22:{
            masterItem:"sexyBras",
            variant:"bra_sexy_22",
            name:"White Lacy Sexy Bra with Pink Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                sexy:true,
            }
        },
        sexyBras23:{
            masterItem:"sexyBras",
            variant:"bra_sexy_23",
            name:"Pink Frilly Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras24:{
            masterItem:"sexyBras",
            variant:"bra_sexy_24",
            name:"Black Sheer Sexy Bra with Black Straps",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras25:{
            masterItem:"sexyBras",
            variant:"bra_sexy_25",
            name:"Black Sexy Bra with Black Lacy Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Black Lacy",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras26:{
            masterItem:"sexyBras",
            variant:"bra_sexy_26",
            name:"Pink Sexy Bra with Black Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras27:{
            masterItem:"sexyBras",
            variant:"bra_sexy_27",
            name:"Pink and Grey Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                grey:true,
                sexy:true,
            }
        },
        sexyBras40:{
            masterItem:"sexyBras",
            variant:"bra_sexy_40",
            name:"Black Sexy Bra with Pink Bow and Ribbon",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Black Lacy with Pink",
            canBuy:false,
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras41:{
            masterItem:"sexyBras",
            variant:"bra_sexy_41",
            name:"Red Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Red Strappy and Lacy",
            canBuy:false,
            tags:{
                red:true,
                sexy:true,
            }
        },
        sexyBras60:{
            masterItem:"sexyBras",
            variant:"bra_sexy_60",
            name:"Pink Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Pink and Not Yours",
            canBuy:false,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras61:{
            masterItem:"sexyBras",
            variant:"bra_sexy_61",
            name:"Pink Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Pink and Not Yours",
            canBuy:false,
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras63:{
            masterItem:"sexyBras",
            variant:"bra_sexy_63",
            name:"Blue & Cream Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Blue and Pink Lacy",
            canBuy:false,
            tags:{
                blue:true,
                sexy:true,
            }
        },
        sexyBras74:{
            masterItem:"sexyBras",
            variant:"bra_sexy_74",
            name:"Purple Sexy Frilly Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Red Fine Lacy",
            canBuy:false,
            tags:{
                purple:true,
                frilly:true,
                sexy:true,
            }
        },



        //latexBras
        latexBras00:{
            masterItem:"latexBras",
            variant:"bra_latex_00",
            name:"Black Low Cut Latex Bra",
            price:150,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Black Latex",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
                slutty:true,
            }
        },
        latexBras01:{
            masterItem:"latexBras",
            variant:"bra_latex_01",
            name:"Black Full Cup Latex Bra",
            price:150,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Black Latex",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
                slutty:true,
            }
        },
        latexBras02:{
            masterItem:"latexBras",
            variant:"bra_latex_02",
            name:"Black Cutout Latex Bra",
            price:150,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:true,
            setName:"Black Latex",
            canBuy:true,
            tags:{
                black:true,
                sexy:true,
                slutty:true,
            }
        },

        //corsets
        corsets62:{
            masterItem:"corsets",
            variant:"corset_62",
            name:"White Boned Corset",
            price:150,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:false,
            tags:{
                white:true,
                sexy:true,
                slutty:true,
            }
        },
        corsets73:{
            masterItem:"corsets",
            variant:"corset_73",
            name:"Red Boned Corset with Black Trim",
            price:150,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:false,
            tags:{
                red:true,
                sexy:true,
                slutty:true,
				maid:true,
            }
        },
    }
});