import {default as axios} from 'axios';

import promptPKG from 'prompt-sync';
const prompt = promptPKG();
async function getSong() {
    const options = {
        headers: {
            Authorization:
                'Bearer l9ChbHQMEZF9hEMo9Q2vK52HdiBaAEz4DiwZOimhER8j7KAnHnu1kOnKXQ3x1pQx'
        },
    };
    let resp = await axios.get('https://api.genius.com/songs/6287510', options);
    //console.log(JSON.stringify(resp.data));
    let data = resp.data;
    return {
        artist_names: data.response.song.artistNames,
        album: data.response.song.album.name,
        description: data.response.song.description.dom.children,
    };
   }

async function stitchDescription(){
    let song = await getSong().description;
    let stitched = [];
    let relevantFile = song
    function searchAppend(){
        for (let i = 0; i<relevantFile.length; i++){
            switch (Array.isArray(relevantFile[i])){
                case false:
                    stitched.push(relevantFile[i]);
                    break;
                case true:
                    relevantFile = relevantFile[i];
                    searchAppend();
                    break;
            }
        } 
    }
    
}
console.log(await stitchDescription());
//console.log(await getSong());
// async function main(){
//     console.log(getSong());
// }
// main();