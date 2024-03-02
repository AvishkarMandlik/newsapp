import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card shadow-sm bg-body rounded">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>{source}</span>
          <img src={!imgUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1rK0YjnLckwn-XvgQSW2ftwWH_BgjQQi3Q&usqp=CAU":imgUrl} className="card-img-top" style={{height: "15rem"}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="blank" className="btn btn-sm btn-danger">Read More...</a>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            </div>
          </div>
      </div>
    )
  }
}
