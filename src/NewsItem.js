import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (

      <div>
        <div className="my-3">
            <div className="card" style={{width:"18rem"}}>
                <img src={imageUrl?imageUrl:"https://cdn.expresshealthcare.in/wp-content/uploads/2023/04/24103026/admin-ajax.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target='blank' className="btn btn-outline-secondary">Read More</a>
                </div>
            </div>
        </div>
       
      </div>
    )
  }
}

export default NewsItem
