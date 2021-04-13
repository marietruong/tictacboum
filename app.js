

var maxminutes = 0;
var launch_permission = true; 
var audio = new Audio('tiktok.mp3');
explosion = new Audio('explosion.flac');

// LES MOTS
var ordre = ["Les mots commençant par", "Les mots finissant par", "Les mots contenant"];
var frenchSounds = ["bour", "cal", "mar", "ome", "bou", "veur",
"pin" ,"ser", "ma",
"dan" ,"tou",
"pa", "ib",
"fré", "nou",
"cli", "val",
"fa" ,"tan",
"air", "gi",
"sa", "tain",
"cou", "ail",
"tro" ,"san",
"fro" ,"moi",
"per" ,"van",
"ro", "sel",
"bor", "ran",
"cré", "ron",
"fer", "cor",
"lé" ,"bel",
"ter" ,"foi",
"ir", "lu",
"son" ,"mi",
"gra", "ber",
"to", "dain",
"sou", "ra",
"li", "ti",
"rou", "mar",
"fri", "mal",
"ic" , "ul",
"it", "lan",
"do", "jan",
"po", "ver",
"ru", "bon",
"pri", "oir",
"jou", "et",
"pon", "on",
"cro" ,"gro",
"dé", "ré",
"fan", "la",
"mo" , "pro",
"bou",  "lou",
"tor",  "cri",
"tu",  "mor",
"bal" , "bla",
"flé" , "char",
"go" , "ché",
"man", "pré",
"bri", "tar",
"our",  "yé",
"fé", "si",
"por", "pi",
"mon" , "clo",
"pan" , "ri",
"bam",  "gé",
"tour",  "car",
"bar",  "mir",
"ex",  "fo"]; 
var wordPartIndex = 0;
var word = "";
var wordPart = "";

function bomb_sound(){
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}
function launch(){
    //window.alert(launch_permission)
    if (launch_permission === false){ exit
    } else 
        {var i = 0; 
        maxminutes = Math.floor(Math.random()*60) + 30;
        wordPartIndex = Math.floor(Math.random()*3);
        wordPart = ordre[wordPartIndex];
        
        soundIndex = Math.floor(Math.random()* frenchSounds.length);
        word = frenchSounds[soundIndex];
        document.getElementById("syllabe").innerHTML = wordPart + " " + word;



        
        setInterval(starttimer, 1000)
            
        
        exit}

    function starttimer(){
        if (i <= maxminutes){
            launch_permission = false;
            if (maxminutes - i > 20){bomb_sound();}
            else if (maxminutes - i === 18){
                explosion.play()
            }
            //document.getElementById("timeleft").innerHTML = maxminutes - i;
            i++} else{ i = undefined ; 
                launch_permission = true;
                document.getElementById("syllabe").innerHTML = "BOUM";
                exit};
    }
}


//