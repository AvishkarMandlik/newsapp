import React, { Component } from 'react'
import NewsItem from  '../NewsItem/NewsItem'
export default class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5ebd751a689b45d9a9b6870be3458a85"
        let data = await fetch(url);
        let parsedData = await data.json();
         this.setState({ articles: parsedData.articles });  
    }

  render() {
    return (
        <>
      <div>
        <div className="container">
        <div className="row justify-content-evenly">
        <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
        {this.state.articles.map((element)=>{
            return <div className="col-auto" key={element.url} >
            <NewsItem title={element.title?element.title:""} description={element.title?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
         
          </div>
        </div>
      </div>
      </>
    )
  }
}
