
import homeAnimation from '../assets/homeAnimation.gif';
function Hero() {
    return (
        <header id='home' className="lg:h-[100vh] h-[100vh] w-[100%]  flex flex-col-reverse  lg:flex-row justify-end pt-12  lg:pt-0 items-center lg:justify-between lg:pl-4 text-center lg:text-left ">
            <div className='lg:w-[50%] w-[90%]  lg:pl-4 '>
                <h1 className='lg:text-5xl text-3xl  font-semibold text-center text-white font-fira'>ABDULRAHMAN EHAB</h1>
                <h2 className='lg:text-3xl text-2xl mb-6 font-fira text-raisinBlack text-center  bg-meadow  rounded-sm font-bold uppercase '>Front End Developer</h2>
                <p className='lg:text-2xl text-xl font-exo text-white'>I’m passionate <span className=' text-aqua'>React.js</span> developer with a strong interest in Web Development
                    with an interest in full-stack development . </p>
            </div>
            <div className='lg:w-[50%] max-h-[60vh] lg:max-h-[100%] '>
                <img className='max-h-[100%]' src={homeAnimation} alt='animation'></img>
            </div>
        </header>
    )
}

export default Hero