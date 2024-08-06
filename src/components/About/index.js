import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <>
      <div className="container mt-3">
        <h2>Card titles, text, and links</h2>
        <p>Use .card-title to add card titles to any heading element. The .card-text class is used to remove bottom margins
          for a p element if it is the last child (or the only one) in card-body. The .card-link class adds a blue color to
          any link, and a hover effect.</p>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some example text. </p>
          </div>
          <div className="progress">
    <div className="progress-bar" style="width:10%"></div>
    </div><br></br>
          <h6><span classNameName="badge bg-primary">Primary</span></h6>
          <h6><span className="badge bg-secondary">Secondary</span></h6>
          <h6><span className="badge bg-success">Success</span></h6>
          <h6><span className="badge bg-danger">Danger</span></h6>
   
        </div>
      </div><br />

      <hr />
      <Link to="/">Back to home</Link></>
  )
}

export default About;