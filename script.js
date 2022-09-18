async function uthmani(){
    let res=await fetch("https://api.quran.com/api/v4/quran/verses/uthmani"); 
    let res1=await res.json();
    try {
        var div=document.createElement("div");
        div.innerHTML=`
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header"><h3>Quran verses uthmani</h3></div>
  <div class="card-body">
    <p class="card-text">book_id: ${res1.verses[0].id} </p>
    <p class="card-text">book_verses: ${res1.verses[0].verse_key}</p>
    <p class="card-text">uthmani: ${res1.verses[0].text_uthmani}</p>
   
  </div>
    
  </div>
</div>
        `;
       
document.body.append(div);



console.log(res1.id);
console.log(res1.verse_key);
console.log(res1.text_uthmani);

        
    } catch (error) {
        console.log(error);
        
    }
}
uthmani();