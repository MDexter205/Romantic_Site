const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const music = document.getElementById("bgMusic");
const typedText = document.getElementById("typedText");

let yesScale = 1;

// "No" button moves when hovered
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute"; // now it moves
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Yes button grows a little
    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
});

// Smooth music fade-in
function fadeInMusic(){
    music.volume = 0;
    music.play();
    let fade = setInterval(()=>{
        if(music.volume < 0.9){
            music.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    },200);
}

// Typewriter effect for poem
function typeWriter(text, i=0){
    if(i < text.length){
        typedText.innerHTML += text.charAt(i);
        setTimeout(()=>typeWriter(text,i+1),40);
    }
}

// Yes button clicked
yesBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    fadeInMusic();

    confetti({
        particleCount:200,
        spread:120,
        origin:{y:0.6}
    });

    const message = 
`In a world full of temporary moments,
you chose something real.

From this day forward,
every song sounds sweeter,
every night feels softer,
because you are mine.`;

    typedText.innerHTML = "";
    typeWriter(message);
});

// Close popup
function closePopup(){
    popup.style.display = "none";
}