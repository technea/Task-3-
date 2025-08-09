let songs = [
  "peacable-milieu-297513.mp3",
  "happy-kids-music-background-378309.mp3",
  "simple-happy-life_short-2-353815.mp3"
];

let index = 0;
let audio = document.querySelector("audio");
let playbtn = document.getElementById('play');
let pausebtn = document.getElementById('pause');
let nextbtn = document.getElementById('next');
let prevbtn = document.getElementById('prev');

audio.src = songs[index]; 

playbtn.onclick = () => audio.play();
pausebtn.onclick = () => audio.pause();

nextbtn.onclick = () => {
  index++;
  if (index >= songs.length) {
    index = 0;
  }
  audio.src = songs[index];
  audio.play();
};

prevbtn.onclick = () => {
  index--;
  if (index < 0) {
    index = songs.length - 1;
  }
  audio.src = songs[index];
  audio.play();
};