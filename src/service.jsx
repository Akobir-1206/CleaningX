import './service.css'
import Button2 from './button02'
import Service1 from './images/service1.svg'
import Service2 from './images/service2.svg'
import Service3 from './images/service3.svg'
import Buttoncha from './Buttoncha'

function Service(){
    return(
        <>
          <div className="service__container">
                  <div className="service__title">
                            <h1 className='service__h'>Our Service</h1>
                            <Button2/>
                  </div>
                  <div className="service__card">
                        <ul className='service__list'>
                             <li className='service__item'>
                                <img className='service__img' src={Service1} alt="" /> 
                                <h3 className='service__h'>House cleaning</h3>
                                <p className='service__p'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc
                                 lacus vel facilisis volutpat est.</p>
                                </li>
                                <li className='service__item'>
                                <img className='service__img' src={Service2} alt="" /> 
                                <h3 className='service__h'>House cleaning</h3>
                                <p className='service__p'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc
                                 lacus vel facilisis volutpat est.</p>
                                </li>
                                <li className='service__item'>
                                <img className='service__img' src={Service3} alt="" /> 
                                <h3 className='service__h'>House cleaning</h3>
                                <p className='service__p'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc
                                 lacus vel facilisis volutpat est.</p>
                                </li>
                        </ul> 
                  </div>

                    
          </div>
          <Buttoncha name={"Tursunali"} akobir={"red"}/>
          <Buttoncha title={"Qodirali"}/>
        </> 

    )
}
export default Service