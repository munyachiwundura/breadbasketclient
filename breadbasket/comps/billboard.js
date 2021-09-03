
const Billboard = (props) => {
    return ( 
    <div className="jumbotron">
    <div className='jumbotron-text-container'>
      <p className='jumbotron-text'>{props.billboardTitle}</p>
      <button className='jumbotron-call-to-action'>{props.callToAction}</button>
    </div>
    <div className='jumbotron-image-container'>
          {props.children}
    </div>
</div> ); 
}
 
export default Billboard;