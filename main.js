// const API_KEY = `9c085f3a3ead4e4fad59ed05894efdaa`;
let newsList = [];

const getLatestNews = async () => {
	let url = new URL(`https://newsnoona.netlify.app/top-headlines`);
	const response = await fetch(url);
	console.log('response', response);
	const data = await response.json();
	newsList = data.articles;
	render();
	console.log('news는', newsList);
};

const render = () => {
	const newsHTML = newsList
		.map(
			(news) => `
    <div class="row news">
    <div class="col-lg-4">
        <img class="news-img-size"  src=${news.urlToImage ? news.urlToImage : './images.png'} />
    </div>
    <div class="col-lg-8">
        <h2>${news.title ? news.title : '제목 없음'}</h2>
        <p>${news.description ? (news.description.length > 200 ? news.description.substring(0, 200) + '...' : news.description) : '내용 없음'}</p>
        <div>
            ${news.source.name ? news.source.name : 'no source'} * ${moment(news.publishedAt).fromNow()}
        </div>
    </div>
</div> `
		)
		.join('');
	console.log('html', newsHTML);
	document.getElementById('news-board').innerHTML = newsHTML;
};

getLatestNews();
render();
