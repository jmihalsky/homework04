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


function rndo(){
 var rndnum_temp = MinVal+(Math.random()*(MaxVal-MinVal));
 rndnum = Math.round(rndnum_temp);
 return rndnum;
}

function j_rndo(){
    var j_temp = JMinVal+(Math.random()*(JMaxVal-JMinVal));
    jwl_rando = Math.round(j_temp);
}

function jwl_value(){
    for(var i = 0; i < 4;i++){
        j_rndo();
        jewel_val.push(jwl_rando);
    }
}

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

