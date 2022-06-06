import React from 'react'

const Cards = (props) => {
  return (
        <>
            <div className="col-md-4 ">
                <div className="card" style={{width:'400px'}}>
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between">
                            <h2 className="card-title" style={{fontSize:'50px'}} >{props.num}</h2>
                            <i className={props.icon} style={{fontSize:'48px'}} ></i>
                        </div>
                        <h5 className="card-title">{props.heading}</h5>
                        <p className="card-text" style={{fontSize:'12px'}}>{props.para}</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Cards