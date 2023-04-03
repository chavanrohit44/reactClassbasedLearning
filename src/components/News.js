import React, { Component } from "react";
import NewItems from "./NewItems";
class News extends Component{
    constructor(){
        super();
        console.log('hello in constructor')
        this.state={
            articles: [],
            loading:false,
            page:1,
            pageSize:10
        }
    }

    async componentDidMount(){
        console.log("render component")
        let p = this.state.page;
        let ps = this.state.pageSize;

        let articles = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=475651737d6f4681a7e4159a2a1195a6&pageSize=${ps}&page=${p}`);
        let parsedData = await articles.json()
        console.log(parsedData)
        this.setState({
            articles:parsedData.articles
        })
    }

    handleNextClick=()=>{

    }

    handlePreviousClick=()=>{
        let currPage = this.state.page
    }

    render(){
        console.log("render")
        return(
            <div className="container">
            <div className="container my-3">
                <div className="row">
                   {this.state.articles.map(element => {
                        return <div className="col-md-4" key={element.url}>
                        <NewItems title={element?.title?.slice(0,45) + '...'} description={element?.description?.slice(0,60) + '...'} imagUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                        }) }
                </div>             
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled = {this.state.page<=1} className="btn btn-sm btn-dark" onClick={this.handlePreviousClick}>
                    Previous
                </button>
                <button className="btn btn-sm btn-dark" onClick={this.handleNextClick}>
                    Next
                </button>
            </div>
            </div>
        )
    }
}

export default News;