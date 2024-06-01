import './paragraph.css'
import Button from './button'
import mainTELrasm from './images/main_tel.svg'
import mainNUMBER from './images/main_number.svg'
import Main from './images/main.svg'


function Page(){
    return(
        <>
            <div className="container">
                <div className="main__left">
                    <h1 className='main__title'>Quality cleaning for your home</h1>
                    <p className='main__text'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisi
                    s senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                    <div className="main__bottom">
                        <Button/>
                        <img className='telimg' src={mainTELrasm} alt="" />
                        <img className='telnumber' src={mainNUMBER} alt="" />
                    </div>

                </div>
            <div className="main__right">
                  <img className='mainpic' src={Main} alt="" />
                </div>    

            </div>
        </>

    )
}
export default Page
