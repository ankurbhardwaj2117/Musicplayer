const music = new Audio('music/1.mp3');
//  music.play();


const songs = [
        {
           id: 1,
           songName: `Khamosiya<br>
           <div class="subtitle">Arijit Singh</div>`,
           poster: "./image/1.jpg"
        },
        {
          id: 2,
         songName: `hota kamar mai darad<br>
         <div class="subtitle">Pawan Singh</div>`,
         poster: "./image/2.jpg"
      },
        {
            id: 3,
            songName: `Godi mai leke<br>
            <div class="subtitle">Pawan sing</div>`,
            poster: "./image/3.jpg"
         },
         {
            id: 4,
            songName: `Aasqui aa gai<br>
            <div class="subtitle">Radhe syam</div>`,
            poster: "./image/4.jpg"
         },
         {
            id: 5,
            songName: `Fana kar lo<br>
            <div class="subtitle">Arijit Singh</div>`,
            poster: "./image/5.jpg"
         },
         // {
         //    id: 5,
         //    songName: `hota kamar mai darad<br>
         //    <div class="subtitle">Pawan Singh</div>`,
         //    poster: "./image/2.jpg"
         // },
         {
            id: 6,
            songName: `Dil jissey zinda hai<br>
            <div class="subtitle">Jubin</div>`,
            poster: "./image/6.jpg"
         },
         {
            id: 7,
            songName: `Isaq hai kajal piya<br>
            <div class="subtitle">Arijit Singh</div>`,
            poster: "./image/7.jpg"
         },
        
         
         {
            id: 8,
            songName: `piyar farak wali<br>
            <div class="subtitle">Pawan singh</div>`,
            poster: "./image/8.jpg"
         },
         {
            id: 9,
            songName: `khulne do<br>
            <div class="subtitle">Arijit Singh</div>`,
            poster: "./image/9.jpg"
         },
         {
            id: 10,
            songName: `mehri melal ba re gay re dada<br>
            <div class="subtitle">pawan singh</div>`,
            poster: "./image/10.jpg"
         },
         {
            id: 11,
            songName: `Nitay kher Mangda<br>
            <div class="subtitle">Rahat Fateh Ali Khan</div>`,
            poster: "./image/11.jpg"
         },
         {
            id: 12,
            songName: `Pal pal dil kai pass <br>
            <div class="subtitle">Arijit Singh and tulsi kumar</div>`,
            poster: "./image/12.jpg"
         },
         {
            id: 13,
            songName: `Piya ji ki muski<br>
            <div class="subtitle">Khesari Lal</div>`,
            poster: "./image/13.jpg"
         },
         {
            id: 14,
            songName: `Aara<br>
            <div class="subtitle">pawan singh</div>`,
            poster: "./image/14.jpg"
         },
         {
            id: 15,
            songName: `Raja ji kai dilwa tut jai<br>
            <div class="subtitle">pawan singh</div>`,
            poster: "./image/15.jpg"
         },
         {
            id: 16,
            songName: `Sadi se taadi<br>
            <div class="subtitle">Pawan Singh</div>`,
            poster: "./image/16.jpg"
         },
         {
            id: 17,
            songName: `tum hi ho<br>
            <div class="subtitle">Arijit Singh</div>`,
            poster: "./image/17.jpg"
         },
         {
            id: 18,
            songName: `tum jo aaye zindagi mai <br>
            <div class="subtitle">Rahat fateh ali khan</div>`,
            poster: "./image/18.jpg"
         },
         {
            id: 19,
            songName: ` Ye fitur mera<br>
            <div class="subtitle">Arijit Singh</div>`,
            poster: "./image/19.jpg"
         },
         {
            id: 20,
            songName: `Zalima<br>
            <div class="subtitle">Arijit Singh</div>`,
            poster: "./image/20.jpg"
         },
     
         
]




Array.from(document.getElementsByClassName('songitem')).forEach((e,i) => {
   e.getElementsByTagName('img')[0].src = songs[i].poster;
   e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
   if(music.paused || music.currentTime <= 0){
      music.play();
      wave.classList.add('active1');
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');

   }else{
      music.pause();
      wave.classList.remove('active1');
      masterPlay.classList.add('bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill');
   }
})


const makeAllplays = () => {
   Array.from(document.getElementsByClassName(`playlistPlay`)).forEach((el) => {
      el.classList.add('bi-play- circle-fill');
      el.classList.remove('bi-pause-circle-fill');
   })
   }
   

const makeAllBackground = () => {
Array.from(document.getElementsByClassName(`songitem`)).forEach((el)=>{
   el.style.background = `rgb(105,105,105,.0)`;
})
}



    
let index =0;
let master_play = document.getElementById('master_play');
let title = document.getElementById('title');
Array .from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
   e.addEventListener('click',(el) => {
      index = el.target.id;
      //console.log(index);
      music.src =`music/${index}.mp3`;
      master_play.src=`./image/${index}.jpg`;
      music.play();

      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');

      let songTitles = songs.filter((els) => {
         return els.id == index;
      });
      songTitles.forEach(elss =>{
         let {songName} = elss;
         title.innerHTML = songName;
         
      });

      makeAllBackground();
      Array.from(document.getElementsByClassName(`songitem`))[index - 1].style.background = "rgb(105,105,105,.1)";
      makeAllplays();
      el.target.classList.remove(`bi-play-circule-fill`);
      el.target.classList.add(`bi-pause-circulr-fill`);
      wave.classList.add('active1');
   })
})



let currentStart = document.getElementById(`currentStart`);
let currentEnd = document.getElementById(`currentEnd`);
let seek = document.getElementById(`seek`);
let bar2 = document.getElementById(`bar2`);
let dot = document.getElementsByClassName(`dot`)[0];

music.addEventListener('timeupdate',() => {
   let music_curr = music.currentTime;
   let music_dur = music.duration;

   let min1 = Math.floor(music_dur / 60);
   let sec1 = Math.floor(music_dur % 60);

   //  console .log(min1)

   if (sec1 < 10){
      sec1 = `0${sec1}`;
   }

   currentEnd.innerText = `${min1}:${sec1}`;

   let min2 = Math.floor(music_curr / 60);
   let sec2 = Math.floor(music_curr % 60);
   if (sec2 < 10){
      sec2 = `0${sec2}`;
   }

   currentStart.innerText = `${min2}:${sec2}`;


   let progressBar = parseInt((music_curr / music_dur) *100);
   seek.value = progressBar;
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;

})

seek.addEventListener(`change`,() =>{
   music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol= document.getElementById('vol');
let vol_bar= document.getElementsByClassName('vol_bar')[0];
let vol_dot= document.getElementById('vol_dot');

vol.addEventListener('change',() =>{
   if(vol.value == 0) {
      vol_icon.classList.remove('bi-volume-up-fill');
      vol_icon.classList.remove('bi-volume-down-fill');
      vol_icon.classList.add('bi-volume-off-fill');
   }
   if(vol.value > 0){
      vol_icon.classList.remove('bi-volume-up-fill');
      vol_icon.classList.add('bi-volume-down-fill');
      vol_icon.classList.remove('bi-volume-off-fill');
   }
   if(vol.value > 50){
      vol_icon.classList.add('bi-volume-up-fill');
      vol_icon.classList.remove('bi-volume-down-fill');
      vol_icon.classList.remove('bi-volume-off-fill');
   }
   let vol_a = vol.value;
   vol_bar.style.width = `${vol_a}%`;
   vol_dot.style.left = `${vol_a}%`;
   music.volume = vol_a / 100;

})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
   index -= 1;
   if (index < 1){
      index = Array.from(document.getElementsByClassName('songitem')).length;
   }
   music.src =`music/${index}.mp3`;
      master_play.src=`./image/${index}.jpg`;
      music.play();

      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');

      let songTitles = songs.filter((els) => {
         return els.id == index;
      });
      songTitles.forEach(elss =>{
         let {songName} = elss;
         title.innerHTML = songName;
         
      });

      makeAllBackground();
      Array.from(document.getElementsByClassName(`songitem`))[index - 1].style.background = "rgb(105,105,105,.1)";
      makeAllplays();
      el.target.classList.remove(`bi-play-circule-fill`);
      el.target.classList.add(`bi-pause-circulr-fill`);
      wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
   index ++;
   if (index > Array.from(document.getElementsByClassName('songitem')).length) {
         index = 1;
   }
   music.src =`music/${index}.mp3`;
      master_play.src=`./image/${index}.jpg`;
      music.play();

      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');

      let songTitles = songs.filter((els) => {
         return els.id == index;
      });
      songTitles.forEach(elss =>{
         let {songName} = elss;
         title.innerHTML = songName;
         
      });

      makeAllBackground();
      Array.from(document.getElementsByClassName(`songitem`))[index - 1].style.background = "rgb(105,105,105,.1)";
      makeAllplays();
      el.target.classList.remove(`bi-play-circule-fill`);
      el.target.classList.add(`bi-pause-circulr-fill`);
      wave.classList.add('active1');
})







let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song =document.getElementsByClassName('pop_song')[0];



pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})
    
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})
   


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];



pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
})
    
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
})
   

   