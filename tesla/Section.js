function Section(props)
{
    return(
    
        <section style={{backgroundImage:"url("+props.backgroundimg+")"}}>
          {/* <h1>hii</h1> */}

          <div className="box">
            <div className="model">
                <h1>{props.model}</h1>
                <p> {props.desc}</p>
            </div>
            <div className="buttons">
                <button className="lbtn" >{props.lbtn} </button>
                
                <button className="rbtn">{props.rbtn}</button>
            </div>
          </div>
        </section>
    
    )
}
export default Section