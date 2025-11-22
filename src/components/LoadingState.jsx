const LoadingState = () => {
    return (
        <>
<div className="card placeholder-glow" aria-hidden="true" style={{width:"400px",height:"330px",margin:"0,10px"}} >
 <span className="placeholder col-12" style={{margin:"0 ,15px"}}></span>
 
  <div className="card-body" style={{width:"400px",height:"200px",border:"none"}} >
    
    <div className="placeholder  placeholder-glow col-4" style={{width:"400px",height:"200px"}}></div>
   
    <p className="card-text placeholder-glow">
      <span className="placeholder col-1 reaction-holder"></span>
      <span className="placeholder col-1 reaction-holder"></span>
      <span className="placeholder col-1 reaction-holder"></span>
    </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div></>
    )
}

export default LoadingState