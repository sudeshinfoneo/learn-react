import { Link } from "react-router-dom";
import Abt from '../../assets/imgs/about.jpg'
import Land2 from '../../assets/imgs/post-landscape-2.jpg'
import Land1 from '../../assets/imgs/post-landscape-1.jpg'
import Portrait3 from '../../assets/imgs/post-portrait-3.jpg'
import Protrait4 from '../../assets/imgs/post-portrait-4.jpg'

const About = (props) => {
  return (
    <>
      <main id="main" />
      <section>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h1 className="page-title">About us</h1>
            </div>
          </div>
          <div className="row mb-5">
            <div className="d-md-flex post-entry-2 half">
              <a href="#" className="me-4 thumbnail">
                <img src={Land2} alt="" className="img-fluid" />
              </a>
              <div className="ps-md-5 mt-4 mt-md-0">
                <div className="post-meta mt-4">About us</div>
                <h2 className="mb-4 display-4">Company History</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci
                  non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum
                  in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
                <p>Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos
                  vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa
                  iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi.</p>
              </div>
            </div>
            <div className="d-md-flex post-entry-2 half mt-5">
              <a href="#" class="me-4 thumbnail order-2">
                <img src={Land1} alt="" className="img-fluid" />
              </a>
              <div className="pe-md-5 mt-4 mt-md-0">
                <div className="post meta mt-4">Mission & amp; Vision</div>
                <h2 className="mb-4 display-4">Mission & amp; Vision</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non
                  ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora
                  earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
                <p>Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero
                  harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum
                  accusantium cum hic quisquam dolor placeat officiis eligendi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 bg-light py-5">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-between align-items-lg-center">
            <div className="col-lg-5 mb-4 mb-lg-4">
              <h2 className="display-4 mb-4">Lastest News</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rem eaque vel est asperiores iste pariatur placeat molestias,
                rerum provident ea maiores debitis eum earum esse quas architecto! Minima, voluptatum! Minus tempora distinctio quo sint est
                blanditiis voluptate eos. Commodi dolore nesciunt culpa adipisci nemo expedita suscipit autem dolorum rerum?</p>
              <p>At magni dolore ullam odio sapiente ipsam, numquam eius minus animi inventore alias quam fugit corrupti error iste laboriosam
                dolorum culpa doloremque eligendi repellat iusto vel impedit odit cum. Sequi atque molestias nesciunt rem eum pariatur quibusdam
                deleniti saepe eius maiores porro quam, praesentium ipsa deserunt laboriosam adipisci. Optio, animi!</p>
              <p><a href="#" className="more">View All Blog Posts</a></p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <img src={Portrait3} alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-6 mb-4">
                  <img src={Protrait4} alt="" className="img-fluid mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div className="row-justify-content-center">
                <div className="col-lg-6">
                  <h2 className="display 4">Our team</h2>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </section>





    </>
  )
}

export default About;