const axios = require('axios').default;
async function getSong() {
    const options = {
        headers: {
            Authorization:
                'Bearer l9ChbHQMEZF9hEMo9Q2vK52HdiBaAEz4DiwZOimhER8j7KAnHnu1kOnKXQ3x1pQx'
        },
    };
    let resp = await axios.get('https://api.genius.com/songs/6287510', options);
    let data = resp.data;
    return {
        artist_names: data.artistNames,
        album: data.album,
        description: data.description,
    };
}
async function main(){
    console.log(getSong());
}
main();