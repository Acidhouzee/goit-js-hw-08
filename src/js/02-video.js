import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const LOCAL_STORAGE_CURRENT_TIME_KEY = 'videoplayer-current-time';

function startMovie() {
    const savedTime = Number(localStorage.getItem(LOCAL_STORAGE_CURRENT_TIME_KEY));
    if(!!savedTime) {
        player.setCurrentTime(savedTime);
    }
    player.on('timeupdate', throttle( (e) => {
        const cureentTime = Math.floor(e.seconds);
        localStorage.setItem(LOCAL_STORAGE_CURRENT_TIME_KEY, cureentTime);
        console.log(cureentTime);
    }, 1000));
}

if (iframe && player) {
    startMovie();
}