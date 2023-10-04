const storageKey = "jokeOfTheDay";
const twentyFourHours = 24 * 60 * 60 * 1000;

async function hello(){

    const lastFetchTime = localStorage.getItem("lastFetchTime");
    const currentTime = new Date().getTime();

    if(!lastFetchTime || currentTime - lastFetchTime >= twentyFourHours)
    {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        
            const data = await response.json();
        
            const setup = data.setup;
            const punch = data.punchline;
        
            const jokeText = setup + punch;
            document.getElementById("joke-of-the-day").textContent = jokeText; 

            localStorage.setItem(storageKey, jokeText);
            localStorage.setItem("lastFetchTime", currentTime);
    }
    else{
        const storedJoke = localStorage.getItem(storageKey);
        document.getElementById("joke-of-the-day").textContent = storedJoke;
    }

    
}

hello()

setInterval(hello, twentyFourHours);