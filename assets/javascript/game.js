// Jewel game code
var rndnum = 0;
var jwl_rando = 0;
var jewel_val = [];
var MinVal = 55;
var MaxVal = 150;
var JMinVal = 1;
var JMaxVal = 15;
var usrNum = 0;
var wins = 0;
var losses = 0;

// Generate random number between 55 and 150 that user will add numbers up against.
function rndo(){
 var rndnum_temp = MinVal+(Math.random()*(MaxVal-MinVal));
 rndnum = Math.round(rndnum_temp);
 return rndnum;
}

// Generate random numbers for buttons.
function j_rndo(){
    var j_temp = JMinVal+(Math.random()*(JMaxVal-JMinVal));
    jwl_rando = Math.round(j_temp);
}

// Function to generate random numbers for each button.
function jwl_value(){
    for(var i = 0; i < 4;i++){
        j_rndo();
        jewel_val.push(jwl_rando);
    }
}

// Function to start the game and for reset after a win or loss.
function game_start(){
    jewel_val = [];
    usrNum = 0;
    rndo();
    console.log(rndnum);
    $("#rando").html(rndnum);
    $("#usrscore").html(0);
    jwl_value();
    console.log(jewel_val);
}


game_start();

$('.jewel').on("click", function(){
    usrNum += jewel_val[$(this).val()];
    console.log(usrNum);
    $("#usrscore").html(usrNum);
    jewel_validate();
});

function jewel_validate(){
    if (usrNum == rndnum)
    {
        wins++;
        $("#wins").html(wins);
        game_start();
    }
    else if (usrNum > rndnum)
    {
        losses++;
        $("#losses").html(losses);
        game_start();
    }
}

// StarWars RPG Code
var charArry = ["luke","obiwan","darthsidious","darthmaul"];
var sltChar = {};

var luke = {
    name: "Luke Skywalker",
    health: 100,
    attack: 5,
    counterattack: 5,
    clss: "luke",
    char_image: "assets/images/starwars/lukeskywalker.jpg"
};

var obiwan = {
    name: "Obi-Wan Kenobi",
    health: 120,
    attack: 8,
    counterattack: 8,
    clss: "obiwan",
    char_image: "assets/images/starwars/obiwankenobi.jpg"
};

var darthsidious = {
    name: "Darth Sidious",
    health: 150,
    attack: 20,
    counterattack: 20,
    clss: "darthsidious",
    char_image: "assets/images/starwars/darthsidious.jpg"
};

var darthmaul = {
    name: "Darth Maul",
    health: 180,
    attack: 25,
    counterattack: 25,
    clss: "darthmaul",
    char_image: "assets/images/starwars/darthmaul.png"
};

function set_avail_chars(){
addObiWan();
addLuke();
addDarthSidious();
addDarthMaul();
}

function addObiWan(){
    var char_col = $("<div>");
    char_col.addClass("col-xs-6 col-sm-6 col-md-2 " + obiwan.clss);
    $(".avail-chars").append(char_col);

    var char_name = $("<div>");
    char_name.addClass("charname");
    char_name.text(obiwan.name);
    char_col.append(char_name);

    char_col.append("<img src=" + obiwan.char_image + ">");

    var char_hlth = $("<div>");
    char_hlth.addClass("charhealth");
    char_hlth.text(obiwan.health);
    char_col.append(char_hlth);
}

function addLuke(){
    var char_col = $("<div>");
    char_col.addClass("col-xs-6 col-sm-6 col-md-2 " + luke.clss);
    $(".avail-chars").append(char_col);

    var char_name = $("<div>");
    char_name.addClass("charname");
    char_name.text(luke.name);
    char_col.append(char_name);

    char_col.append("<img src=" + luke.char_image + ">");

    var char_hlth = $("<div>");
    char_hlth.addClass("charhealth");
    char_hlth.text(luke.health);
    char_col.append(char_hlth);
}

function addDarthSidious(){
    var char_col = $("<div>");
    char_col.addClass("col-xs-6 col-sm-6 col-md-2 " + darthsidious.clss);
    $(".avail-chars").append(char_col);

    var char_name = $("<div>");
    char_name.addClass("charname");
    char_name.text(darthsidious.name);
    char_col.append(char_name);

    char_col.append("<img src=" + darthsidious.char_image + ">");

    var char_hlth = $("<div>");
    char_hlth.addClass("charhealth");
    char_hlth.text(darthsidious.health);
    char_col.append(char_hlth);
}

function addDarthMaul(){
    var char_col = $("<div>");
    char_col.addClass("col-xs-6 col-sm-6 col-md-2 " + darthmaul.clss);
    $(".avail-chars").append(char_col);

    var char_name = $("<div>");
    char_name.addClass("charname");
    char_name.text(darthmaul.name);
    char_col.append(char_name);

    char_col.append("<img src=" + darthmaul.char_image + ">");

    var char_hlth = $("<div>");
    char_hlth.addClass("charhealth");
    char_hlth.text(darthmaul.health);
    char_col.append(char_hlth);
}

set_avail_chars();

$(".obiwan").on("click", function(){
    if (jQuery.isEmptyObject(sltChar))
    {
        sltChar = obiwan;
        $(".sel-char").append($(this));
    }

});

$(".luke").on("click", function(){
    if (jQuery.isEmptyObject(sltChar))
    {
        sltChar = luke;
        $(".sel-char").append($(this));
    }

});

$(".darthsidious").on("click", function(){
    if (jQuery.isEmptyObject(sltChar))
    {
        sltChar = darthsidious;
        $(".sel-char").append($(this));
    }

});

$(".darthmaul").on("click", function(){
    if (jQuery.isEmptyObject(sltChar))
    {
        sltChar = darthmaul;
        $(".sel-char").append($(this));
    }

});
