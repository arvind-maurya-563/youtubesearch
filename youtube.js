
let container = document.querySelector("#container");
const searchOnYoutube = async () =>{
    let key = `AIzaSyCd8s2X3b-Nr_eT2AY22umiKC0OiLAxwPg`;
    let videotitle = document.getElementById("search").value;
    let url = `https://youtube.googleapis.com/youtube/v3/search?q=${videotitle}&key=${key}&maxResults=20&type=video&part=snippet`
    try {
       let res = await  fetch(url);
       let data = await res.json();
      DisplayData(data.items);
    } catch (err) {
        console.log(err);
    }
}
searchOnYoutube();
const DisplayData = (videodata) =>{
    container.innerHTML = "";
    videodata.forEach((video) => {
        let thumbline = document.createElement("img");
        thumbline.src = video.snippet.thumbnails.medium.url;
        let title = document.createElement("h5");
        title.innerText = `Title : ${video.snippet.title}`;
        let div = document.createElement("div");
        div.append(thumbline,title);
        div.addEventListener("click",()=>{
            localStorage.setItem("vdeatils",JSON.stringify(video));
            window.location.href = "video.html"
        })
        container.append(div);
    });
    
}