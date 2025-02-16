import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import'./skill.css'
import vs from '../portfolioimges/vs.png';
import git from '../portfolioimges/git.png';
import ec from '../portfolioimges/ec.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

let Tools= () => {
  return (
    <>
    <div className='skill'>
         
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={70}
      slidesPerView={1}
      navigation
      fadeEffect={1}
      zoom={true}
      autoplay={true}
      flipEffect={(SwiperSlide)}
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     
      <SwiperSlide className='slide1' style={{width:'100%',height:'100vh'}}>
      <div className="imge1 imge2 ">
            <img src={git} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide1' style={{width:'100%',height:'100vh'}}>
      <div className="imge1">
            <img src={vs} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide1' style={{width:'100%',height:'100vh'}}>
      <div className="imge1">
            <img src={ec} alt="" />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
    </div>

    </>
  );
};
export default Tools