export const fetchNews =  (currentPage: number) => {
   return fetch(`https://newsapi.org/v2/everything?sources=techcrunch&pageSize=6&page=${currentPage}&apiKey=c3c33d7b2b384cfca9242957584d5df3`)
        .then(res => res.json())
}

