const API_KEY = `9c085f3a3ead4e4fad59ed05894efdaa`
let news =[];

const getLatestNews = async () => {
    let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const response = await fetch(url); 
    console.log('response',response)
    const data = await response.json();
    let news = data.articles;
    console.log('news는',news)
  
}


getLatestNews()