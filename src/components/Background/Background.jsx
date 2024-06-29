import './Background.css'
import video1 from '../../Assets/video1.mp4'
import Image1 from '../../Assets/image1.png'
import Image2 from '../../Assets/image2.png'
import Image3 from '../../Assets/image3.png'

const Background = ({playStatus,heroCount}) => {
  
    if (playStatus) {
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source  src={video1} type='video/mp4' />
            </video>
        )
    }
    else if(heroCount === 0)
        {
            return <img src={Image1} className='background fade-in' alt="" />
        }
    else if(heroCount === 1)
        {
            return <img src={Image2} className='background fade-in' alt="" />
        }
    else if(heroCount === 2)
        {
            return <img src={Image3} className='background fade-in' alt="" />
        }

}

export default Background
