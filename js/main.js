
var arrayQuotes = [
    {
        'outputQoute': "'It's not what happens to you, but how you react to it that matters.'", 'outputQouteOuther': "--Epictetus"

    }
    ,
    {
        'outputQoute': "'Be yourself; everyone else is already taken.'", 'outputQouteOuther': "--Frank Sinatra"

    },
    {
        'outputQoute': "'Resentment is like drinking poison and waiting for your enemies to die.'", 'outputQouteOuther': "--Nelson Mandela"

    },
    {
        'outputQoute': "'You miss 100% of the shots you don't take'.", 'outputQouteOuther': "--Wayne Gretzy"

    },
    {
        'outputQoute': "'The best revenge is massive success.'", 'outputQouteOuther': "--Frank Sinatra"

    }
    






]
function getQuote() {

    var number = parseInt(Math.random() * arrayQuotes.length );
   
    document.getElementById("outputQoute").innerHTML = `${arrayQuotes[ number].outputQoute}`;
    document.getElementById("outputQouteOuther").innerHTML = `${arrayQuotes[ number].outputQouteOuther}`;
}

