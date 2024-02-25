import React, { Component } from 'react'
import NewsItem from  '../NewsItem/NewsItem'
export default class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=cricket&from=2024-02-21&to=2024-02-21&sortBy=popularity&apiKey=5ebd751a689b45d9a9b6870be3458a85&page=1&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });  
    }
     handlePrevClick = async () => {
      let url = `https://newsapi.org/v2/everything?q=cricket&from=2024-02-21&to=2024-02-21&sortBy=popularity&apiKey=5ebd751a689b45d9a9b6870be3458a85&page=${this.state.page - 1}&pageSize=20`
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles });  
      this.setState({
        page: this.state.page - 1,
      })
    }
    
      handleNextClick = async ()=>{
        if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
          let url = `https://newsapi.org/v2/everything?q=cricket&from=2024-02-21&to=2024-02-21&sortBy=popularity&apiKey=5ebd751a689b45d9a9b6870be3458a85&page=${this.state.page + 1}&pageSize=20`
          let data = await fetch(url);
          let parsedData = await data.json();
          this.setState({ articles: parsedData.articles });  
          this.setState({
            page: this.state.page + 1,
          })
        }

    }

  render() {
    return (
      <div>
        <div className="container-fluid" style={{backgroundColor:"#e9ecef"}}>
          <div className="row">
            <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
                {this.state.articles.map((element)=>{
                    return <div className="col-md-3" key={element.url} >
                    <NewsItem title={element.title?element.title?.slice(0,45):""} description={element.title?element.description?.slice(0,100):""} imgUrl={element.urlToImage} newsUrl={element.url}/></div>
                })}
            </div>
            <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      </div>
    )
  }
}
