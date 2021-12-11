 
var result_resp = document.getElementById('img');


axios.get('/get').then((response)=>{
console.log("THE RESPONSE IS"+JSON.stringify(response.data))
console.log(response.data.filenames.length)
file_length=response.data.filenames.length;

for(let i =0;i<file_length;i++){
for(let j=0;j<9;j++){
var file_names = JSON.stringify(response.data.filenames[i][j]).replace(/"/g,"");

// 
result_resp.innerHTML +=`<p>${file_names}</p><br>`
if(j==1||j==2)

{
    var textDir = `"./TEXT/${file_names}"`;
    result_resp.innerHTML +=`<iframe src=${textDir} width="500" height="200">
</iframe>`;
 
}

else if(j==6||j==7||j==8){
    var audioDir = `"./AUDIO/${file_names}"`;
    result_resp.innerHTML +=`<audio controls autoplay muted>
    <source src=${audioDir} type="audio/mp3"></audio>`;
    
    
}
else{
    var imageDir = `"./IMAGE_DIR/${file_names}"`;
    result_resp.innerHTML +=`<img src =${imageDir} width="900px"><br>`;
  
}
}}

}).catch((error)=>{
result_resp.innerHTML+=error;
})


