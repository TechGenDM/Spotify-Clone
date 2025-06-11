console.log("Let's Write Javascript")

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return songs
}

async function main() {
    // Get the list of all the Songs
    let songs = await getSongs()
    console.log(songs)

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + 
    }

    // Play the first Song
    var audio = new Audio(songs[0]);
    // audio.play(); 

    audio.addEventListener("ontimeupdate", ()=> {
        console.log(audio.duration, audio.currentSrc, audio.currentTime)
    })
}

main()
