import React, { Component } from 'react'
import NewsItem from  '../NewsItem/NewsItem'
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {

  static defaultProps = {
    pageSize : 12,
    category : 'general'
  }

  static propTypes = {
    category : PropTypes.string,
    pageSize : PropTypes.number
  }
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page:1,
            totalResults:0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async UpdateNews() {
      this.props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      this.props.setProgress(30)
      let parsedData = await data.json();
      this.props.setProgress(70)
      this.setState({ 
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        }); 
        this.props.setProgress(100)
    }

    async componentDidMount(){
      this.UpdateNews();
      // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5ebd751a689b45d9a9b6870be3458a85&page=1&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true});
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({ 
      //   articles: parsedData.articles,
      //   totalResults: parsedData.totalResults,
      //   loading: false
      //   }); 
    }
    
     handlePrevClick = async () => {
      // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5ebd751a689b45d9a9b6870be3458a85&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true});
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({
      //   articles: parsedData.articles,
      //   page: this.state.page - 1,
      //   loading: false
      // })
      this.setState({page : this.state.page - 1});
      this.UpdateNews();
    }
  
      handleNextClick = async ()=>{
        // if(!(this.state.page +1 > Math.ceil(this.state.totalResults/20))){
        //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5ebd751a689b45d9a9b6870be3458a85&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //   this.setState({loading: true});
        //   let data = await fetch(url);
        //   let parsedData = await data.json();
        //   this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page + 1,
        //     loading: false
        //   });
        // }
        this.setState({ page: this.state.page + 1});
        this.UpdateNews();
    }

    fetchMoreData = async () => {
      this.setState({page: this.state.page + 1});
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        articles: this.state.articles.concat(parsedData.articles), 
        totalResults: parsedData.totalResults,
        loading: false,
        });   
        };

  render() {
    return (
      <>
      <br/>
        <h2 className='text-center' style={{margin: '35px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
       {this.state.loading && <Spinner />}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}>
        <div className="container-fluid" style={{backgroundColor:"#e9ecef"}}>
          <div className="row">
                {this.state.articles.map((element, url)=>{
                    return <div className="col-md-3" key={url} >
                    <NewsItem title={element.title?element.title?.slice(0,45):""} description={element.title?element.description?.slice(0,100):""} imgUrl={element.urlToImage} newsUrl={element.url}
                    author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
      </>
    )
  }
}
