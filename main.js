const API_KEY = `9c085f3a3ead4e4fad59ed05894efdaa`
let news =[];

const getLatestNews = async () => {
    let url = new URL(`http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`);
    const response = await fetch(url); 
    console.log('response',response)
    const data = await response.json();
    let news = data.articles;
    console.log('news는',news)
  
}


getLatestNews()