import '../styles/components/dummy.scss'

const Dummy = (props) => {
  function getLosePhrase() {
if(props.number >=11){
    return (
      <span>Has perdido</span>
    )
     } else {
    return( 
      <span></span>
    )
  }
}
  
  return(
    <section className={'dummy error-' + props.number}>
          {/* <span className="error-13 eye"></span>
          <span className="error-12 eye"></span> */}
          <span>{getLosePhrase()}</span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
  )
}

export default Dummy;