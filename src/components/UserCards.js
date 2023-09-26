import React from 'react'

function UserCards({name,avatar, id}) {
  return (
    <>
      <div className="container  w-50 my-3">
        
        <div className="container d-flex justify-content-center align-items-center py-2 rounded-2 shadow " style={{backgroundColor : "#A6ABBD"}}>
          <img src={avatar} alt="" className=' p-2 bg-light ' style={{height: "80px", borderRadius: "50%", backgroundColor:"#F5F9FF", border:"3px solid #5898FF"}}/>
          <div className="container">
          <h4>Name : {name}</h4> 
          <h5>ID : {id}12</h5>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default UserCards 



