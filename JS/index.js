// adding the buttons to the HTML file

// first container (we are styling all the buttons)
const divButton = Array.from(document.getElementsByClassName("button"));

divButton.forEach(div => {

    div.style.width = "6rem";

    div.style.height = "6rem";

    div.style.border = "1px solid yellow";
    
});

// first h1 (button A)
const a = document.createElement("h1");

a.textContent = "A";

// first h2 (sound button A)
const clap = document.createElement("h2");

clap.textContent = "Clap";

// adding h1 and h2 to the container (button A)
document.getElementById("buttonA").appendChild(a);

document.getElementById("buttonA").appendChild(clap);

// 2nd button

// 2nd h1 for 2nd button (S)
const s = document.createElement("h1");

s.textContent = "S";

// 2nd h2 (sound) for 2nd button (S)
const hihat = document.createElement("h2");

hihat.textContent = "Hihat";

// adding h1 and h2 to the 2nd container (button S)
document.getElementById("buttonS").appendChild(s);

document.getElementById("buttonS").appendChild(hihat);

// 3rd button (D)

// 3rd h1 (button D)
const d = document.createElement("h1");

d.textContent = "D";

// 3rd h2 (sound) for 3rd button (D)
const kick = document.createElement("h2");

kick.textContent = "Kick";

// adding h1 and h2 to the 3rd container (button D)
document.getElementById("buttonD").appendChild(d);

document.getElementById("buttonD").appendChild(kick);

// 4th h1 (button F)
const f = document.createElement("h1");

f.textContent = "F";

// 4th h2 (button F-sound)

const openhat = document.createElement("h2");

openhat.textContent = "Openhat";

// adding h1 and h2 to the 4th container (button F)
document.getElementById("buttonF").appendChild(f);

document.getElementById("buttonF").appendChild(openhat);

// 5th container

// 5th h1 (button G)
const g = document.createElement("h1");

g.textContent = "G";

// 5th h2 (button G-sound)
const boom = document.createElement("h2");

boom.textContent = "Boom";

// adding h1 and h2 to the 5th container (button G)
document.getElementById("buttonG").appendChild(g);

document.getElementById("buttonG").appendChild(boom);

// 6th container

// 6th h1 (button H)
const h = document.createElement("h1");

h.textContent = "H";

// 6th h2 (button H-sound)
const ride = document.createElement("h2");

ride.textContent = "Ride";

// adding h1 and h2 to the 6th container (button H)
document.getElementById("buttonH").appendChild(h);

document.getElementById("buttonH").appendChild(ride);

// 7th container

// 7th h1 (button J)
const j = document.createElement("h1");

j.textContent = "J";

// 7th h2 (button J-sound)
const snare = document.createElement("h2");

snare.textContent = "Snare";

// adding h1 and h2 to the 7th container (button J)
document.getElementById("buttonJ").appendChild(j);

document.getElementById("buttonJ").appendChild(snare);

// 8th container

// 8th h1 (button K)
const k = document.createElement("h1");

k.textContent = "K";

// 8th h2 (button K-sound)
const tom = document.createElement("h2");

tom.textContent = "Tom";

// adding h1 and h2 to the 8th container (button K)
document.getElementById("buttonK").appendChild(k);

document.getElementById("buttonK").appendChild(tom);

// 9th container

// 9th h1 (button L)
const l = document.createElement("h1");

l.textContent = "L";

// 9th h2 (button L-sound)
const tink = document.createElement("h2");

tink.textContent = "Tink";

// adding h1 and h2 to the 9th container (button L)
document.getElementById("buttonL").appendChild(l);

document.getElementById("buttonL").appendChild(tink);

// modules in order to get the sound once pressed the relative key
document.addEventListener("keypress", e => {

    // changing style when key is pressed
    function changeStyle() {

        document.getElementById(`button${key}`).style.width = "8rem";
        document.getElementById(`button${key}`).style.height = "8rem";
        document.getElementById(`button${key}`).style.backgroundColor = "black";
        return document.getElementById(`button${key}`);
        
    }

    // changing the style back to normal
    function backToNormal() {

        document.getElementById(`button${key}`).style.width = "6rem";
        document.getElementById(`button${key}`).style.height = "6rem";
        document.getElementById(`button${key}`).style.backgroundColor = "transparent";
        return document.getElementById(`button${key}`);

    }

    // get key that is pressed
    let key = String.fromCharCode(e.charCode);
    key = key.toUpperCase();

    if (key === "A") {

        let audio = document.getElementById("a_audio");
        audio.play();
        changeStyle();
        setTimeout(backToNormal, 200);

    }

    else if (key === "S") {

        let audio = document.getElementById("s_audio");
        audio.play();
        changeStyle();
        setTimeout(backToNormal, 200);

    }

    else if (key === "D") {

        let audio = document.getElementById("d_audio");
        audio.play();
        changeStyle();
        setTimeout(backToNormal, 200);
        
    }

    else if (key === "F") {

        let audio = document.getElementById("f_audio");
        audio.play();
        changeStyle();
        setTimeout(backToNormal, 200);
        
    }

    else if (key === "G") {

        let audio = document.getElementById("g_audio");
        audio.play();
        changeStyle();
        setTimeout(backToNormal, 200);
        
    }

    else if (key === "H") {

        let audio = document.getElementById("h_audio");
        audio.play();
        changeStyle();
        setTimeout(backToNormal, 200);
        
    }

    else if (key === "J") {

        let audio = document.getElementById("j_audio");
        audio.play();
        changeStyle();
        setTimeout(backToNormal, 200);
        
    }

    else if (key === "K") {

        let audio = document.getElementById("k_audio");
        audio.play();
        changeStyle();
        setTimeout(backToNormal, 200);
        
    }

    else if (key === "L") {

        let audio = document.getElementById("l_audio");
        audio.play();
        changeStyle();
        setTimeout(backToNormal, 200);
        
    }

});