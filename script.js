console.log("Welcome To Spotify");

// Intialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/Unravel.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let masterSongImage = document.getElementById('masterSongImage');
let songItems = Array.from(document.getElementsByClassName('SongItem'));
let songs = [
    {SongName:"Unravel", filepath:"Songs/Unravel.mp3", coverpath: "Covers/Unravel.jpg"},
    {SongName:"Ultra Instinct Theme", filepath:"Songs/Ultra Instinct Theme.mp3", coverpath: "Covers/Ultra Instinct Theme.png"},
    {SongName:"Overtaken", filepath:"Songs/Overtaken.mp3", coverpath: "Covers/Overtaken.jpeg"},
    {SongName:"Senya - Itachi", filepath:"Songs/Senya - Itachi.mp3", coverpath: "Covers/Senya - Itachi.jpg"},
    {SongName:"Haruka Mirai", filepath:"Songs/Haruka Mirai.mp3", coverpath: "Covers/Haruka Mirai.jpg"},
    {SongName:"Shinzou Wo Sasageyo", filepath:"Songs/Shinzou Wo Sasageyo.mp3", coverpath: "Covers/Shinzou Wo Sasageyo.png"},
    {SongName:"You Say Run", filepath:"Songs/You Say Run.mp3", coverpath: "Covers/You Say Run.jpg"},
]

songItems.forEach((element, i)=>{ 
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 

})
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songs[songIndex].filepath}`;
        masterSongName.innerText = songs[songIndex].SongName;
        masterSongImage.src= `${songs[songIndex].coverpath}`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songs[songIndex].filepath}`;
    masterSongName.innerText = songs[songIndex].SongName;
    masterSongImage.src= `${songs[songIndex].coverpath}`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songs[songIndex].filepath}`;
    masterSongName.innerText = songs[songIndex].SongName;
    masterSongImage.src= `${songs[songIndex].coverpath}`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})