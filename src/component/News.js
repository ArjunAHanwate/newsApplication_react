import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
  
    constructor(){
        super();
        this.state ={
            articles:[],
            loading: false,
            page:1
        }

    }

    async componentDidMount(){
    
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a26d2fe655bb44fea220c6d4e31d944b&page=${this.state.page+1}&pageSize=10`
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults})
    }
  
     
    handlePrevClick= async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a26d2fe655bb44fea220c6d4e31d944b&page=${this.state.page-1}&pageSize=10`;
      let data = await fetch(url)
      let parsedData = await data.json()
     
      this.setState({
        page : this.state.page-1,
        articles:parsedData.articles
      })
    }

     handleNextClick= async ()=>{

      if(this.state.page+1 > Math.ceil(this.state.totalResults/10)){
        
      }else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a26d2fe655bb44fea220c6d4e31d944b&page=${this.state.page+1}&pageSize=10`;
      let data = await fetch(url)
      let parsedData = await data.json()
     
      this.setState({
        page : this.state.page+1,
        articles:parsedData.articles,
       
      })
    }
  }
  render() {
    return (
      <div className='container' >
        <div className="headline my-3">
          <h2 id='headline'>NewsMonkey - Top Headlines</h2>
        </div>
        
        <div className="row mb-3" >
            {this.state.articles.map((element)=>{
              return  <div className="col md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,95):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
             })}
           
        </div>
       
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}  type="button" onClick={this.handlePrevClick} className="btn btn-secondary">&larr; Previous</button>
        
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/10)} type="button" onClick={this.handleNextClick} className="btn btn-secondary" >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
