const express = require('express')
const app = express()
const cors = require('cors');
//const port = 3000;

app.use(express.json());

const searches = [
    {id:0,name:`Guide to Programming Languages | ComputerScience.org`,webLink:`https://www.computerscience.org/resources/computer-programming-languages/`},
    {id:1,name:`The 10 Most Popular Programming Languages to Learn in 2021`,webLink:`https://www.northeastern.edu/graduate/blog/most-popular-programming-languages/`},
    {id:2,name:`Common Coding Languages`,webLink:`https://www.codeconquest.com/what-is-coding/common-programming-languages/`},
    {id:3,name:`Programming language - Wikipedia`,webLink:`https://en.wikipedia.org/wiki/Programming_language`},
    {id:4,name:`What are different programming languages used for?`,webLink:`https://www.futurelearn.com/info/blog/what-are-different-programming-languages-used-for`},
    {id:5,name:`Ten coding languages you should be learning | reed.co.uk`,webLink:`https://www.reed.co.uk/career-advice/ten-coding-languages-you-should-be-learning/`},
    {id:6,name:`Types of Coding Languages: A Guide to Master Programming`,webLink:`https://careerkarma.com/blog/types-of-coding-languages/`},
    {id:7,name:`11 Most In-Demand Programming Languages in 2021`,webLink:`https://bootcamp.berkeley.edu/blog/most-in-demand-programming-languages/`},
    {id:8,name:`The 9 Best Programming Languages to Learn in 2021`,webLink:`https://www.fullstackacademy.com/blog/nine-best-programming-languages-to-learn`},
    {id:9,name:`10 Most Popular Programming Languages Today | Inc.com`,webLink:`https://www.inc.com/larry-kim/10-most-popular-programming-languages-today.html`}
]

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

//Create a route for retrieving all search results
app.get('/search', (req,res) => {
  res.send(searches);
})

//Create a route for retrieving a random search
app.get('/random', (req,res) => {
  //Generate random number for search index
  let searchId = Math.floor(Math.random() * searches.length);
  res.send(searches[searchId]);
})

//Add handling for out-of-range index
app.get('/search/:index', (req, res) => {
  let searchId = req.params.index;
  //Check index is in range of search array
  if (0 <= searchId && searchId < searches.length) {
    res.send(searches[searchId]);
  } else {
    res.send('Search index out of range');
  }
})

//Get the server running
// app.listen(port, () => {
//   console.log(`Google search app listening at http://localhost:${port}`);
// })

const port = process.env.PORT || 3000; // if there is no PORT env variable, 3000 will be used
app.listen(port, () => console.log(`Express is running on port ${port}`))
