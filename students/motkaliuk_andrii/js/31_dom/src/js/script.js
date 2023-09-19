var playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

const songsList = document.getElementById('songlist');
const orderedList = document.createElement('ol');
playList.forEach((item) => {
    const listItem = document.createElement('li');
    const authorLable = document.createElement('strong');
    authorLable.textContent = 'Author: ';
    const authorName = document.createTextNode(item.author + '; ')

    const songLable = document.createElement('strong');
    songLable.textContent = 'Song name: ';
    const songName = document.createTextNode(item.song);

    listItem.append(authorLable);
    listItem.append(authorName);
    listItem.append(songLable);
    listItem.append(songName);
    orderedList.append(listItem);
});
songsList.append(orderedList);


