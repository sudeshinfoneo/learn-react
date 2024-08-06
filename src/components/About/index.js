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
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
      <hr />
      <Link to="/">Back to home</Link></>
  )
}

export default About;