/*------------------------------------------------------
                                                        
      blathersText() by @glenthemes
      [#] lorem ipsum but it's ACNH Blathers' quotes
          when you donate to the museum
      [#] github.com/glenthemes/blathers-text

-------------------------------------------------------*/

window.blathersText = function(params){
    return new Promise((resolve,reject) => {
        let blathersTextInit = () => {
            fetch("https://cdn.jsdelivr.net/gh/glenthemes/blathers-text@main/quotes.min.json")
            .then(res => res.json())
            .then(res => {
                let blathersJSON = res;
                
                function grabQuote(query){
                    let quote;
                    
                    // blathers empty, use a random one from ANY category
                    if(!query || (query && query.trim() == "")){
                        quote = blathersJSON[Math.floor(Math.random()*blathersJSON.length)].quote;
                    }
                    
                    else if(query){
                        // clean up user input/attr first
                        query = query.toString().toLowerCase();

                        // get random bug quote
                        if(query.trim() == "bug" || query.trim() == "bugs"){
                            let bugs = blathersJSON.filter(x => x.type == "bug");
                            quote = bugs[Math.floor(Math.random()*bugs.length)].quote;
                        }

                        // get random fish quote
                        else if(query.trim() == "fish" || query.trim() == "fishes"){
                            let fishes = blathersJSON.filter(x => x.type == "fish");
                            quote = fishes[Math.floor(Math.random()*fishes.length)].quote;
                        }

                        // get random sea creatures quote
                        else if(query.trim() == "sea creature" || query.trim() == "sea" || query.trim() == "sea creatures"){
                            let sea_creatures = blathersJSON.filter(x => x.type == "sea_creature");
                            quote = sea_creatures[Math.floor(Math.random()*sea_creatures.length)].quote;
                        }

                        // get random fossil quote
                        else if(query.trim() == "fossil" || query.trim() == "fossils"){
                            let fossils = blathersJSON.filter(x => x.type == "fossil");
                            quote = fossils[Math.floor(Math.random()*fossils.length)].quote;
                        }

                        // others, e.g. a specific creature name
                        else {
                            let target = blathersJSON.find(x => x.name.toLowerCase() == query);
                            target ? quote = target.quote : null
                        }
                    }

                    if(quote) return quote
                }

                /*------ FOR HTML ------*/
                document.querySelectorAll("[blathersText]")?.forEach(div => {
                    if(!div.matches("[blathersTextComplete]")){
                        let options = div.getAttribute("blathersText");
                        let quote = grabQuote(options)

                        div.textContent = quote;
                        div.setAttribute("blathersTextComplete","")
                    }
                })

                resolve(grabQuote(params))
            }).catch(err => {
                console.error(`blathersText: ${err}`)
                reject(err)
            })            
        }//end blathersTextInit()

        document.readyState == "loading" ?
        document.addEventListener("DOMContentLoaded", () => blathersTextInit(params)) :
        blathersTextInit(params);
    })//end promise
}
