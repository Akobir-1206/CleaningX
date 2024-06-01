import Button from "./button"
import Button2 from './button02'
import './about.css'
import Card1 from './images/aboout1.svg'
import Card2 from './images/about2.svg'
import Card3 from './images/about3.svg'

function About(){
    return(
       <>
          <div className="container__card">
            
               <div className="title">
                     <h1 className="title__h">About Us</h1>
                     <p className="text">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi
                         felis non ultrices massa id egestas quam velit pretium nu.</p>

               </div>
        <div className="card">
                          <ul className="card__item">
                              <li className="card__list">
                                 <img className="about__img" src={Card1} alt="" />
                                 <h3 className="card__name">1. Schedule online</h3>
                                 <p className="card__text">Sagittis nibh scelerisque vitae egetolme
                                 nt vulputate sem elementum sed n.</p>
                              </li>
                              <li className="card__list">
                                 <img className="about__img" src={Card2} alt="" />
                                 <h3 className="card__name">2. Pay online easily</h3>
                                 <p className="card__text">Vitae ut accumsan blandit ullamcorperolm
                                  suscipit dui gravida amet at nunc.</p>
                              </li>
                              <li className="card__list">
                                 <img className="about__img" src={Card3} alt="" />
                                 <h3 className="card__name">3. Get your house cleaned</h3>
                                 <p className="card__text">Nunc maecenas sollicitudin metus tellus 
                                 mattis sed porttitor cursus eleifend.</p>
                              </li>
                          </ul>

               </div>
               <div className="about__btn">
                     <Button/>
                     <Button2/>
               </div>
        </div> 
       </> 
    )
}
export default About