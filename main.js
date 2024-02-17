const API_KEY = `9c085f3a3ead4e4fad59ed05894efdaa`
//async function getLatestNews() {}
//url이 먼저 나오고, 그 다음에 for문, 그 이후에 response 출력
const getLatestNews = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    //URL이라는 instance를 생성, new를 통해서 만들어 준다. -> 객체가 생긴것이 확인이 된다.
    let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    console.log('url은',url);
    const response = await fetch(url); //fetch를 통해서 정보를 받아볼 수 있다. 
    console.log(response)
}

getLatestNews();

for(let i =0;i<20;i++) {
    console.log('after',i)
}