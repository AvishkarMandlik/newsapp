import React, { Component } from 'react'
import NewsItem from  '../NewsItem/NewsItem'
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    pageSize : 12,
    category : 'general'
  }

  static propTypes = {
    category : PropTypes.string,
    pageSize : PropTypes.number
  }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5ebd751a689b45d9a9b6870be3458a85&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ 
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false
          });  
    }
    
     handlePrevClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5ebd751a689b45d9a9b6870be3458a85&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false
      })
    }
  
    
      handleNextClick = async ()=>{
        if(!(this.state.page +1 > Math.ceil(this.state.totalResults/20))){
          let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5ebd751a689b45d9a9b6870be3458a85&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          this.setState({loading: true});
          let data = await fetch(url);
          let parsedData = await data.json();
          this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
          });
        }
      }
        
      

  render() {
    return (
      <div>
        <div className="container-fluid" style={{backgroundColor:"#e9ecef"}}>
        <br/>
        <h2 className='text-center' style={{margin: '35px 0px'}}>NewsMonkey - Top Headlines</h2>
       {this.state.loading && <Spinner />}
          <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-3" key={element.url} >
                    <NewsItem title={element.title?element.title?.slice(0,45):""} description={element.title?element.description?.slice(0,100):""} imgUrl={element.urlToImage} newsUrl={element.url}
                    author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>
            <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      </div>
    )
  }
}
