import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar,A11y } from "swiper";
import {SlideItem} from "../SlideItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export function ContinentSlides() {
   
  return (
    <Swiper 
    modules={[Navigation, Pagination, Scrollbar]} 
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    style={{width: '100', flex: '1', height:'100%'}}
    > 
      <SwiperSlide>
          <SlideItem
          title='America do Norte'
          description='O Continente mais tecnológico'
          link='northamerica'
          imageUrl='/images/northamerica.png'
          />
      </SwiperSlide>
      <SwiperSlide>
      <SlideItem
          title='America do Sul'
          description='O melhor Continente'
          link='sulthamerica'
          imageUrl='/images/sulthamerica.png'
          />
      </SwiperSlide>
      <SwiperSlide>
      <SlideItem
          title='Asia'
          description='O Continente mais populoso'
          link='asia'
          imageUrl='/images/asia.png'
          />
      </SwiperSlide>
      <SwiperSlide>
      <SlideItem
          title='Africa'
          description='O Continente mais colorido'
          link='africa'
          imageUrl='/images/africa.png'
          />
      </SwiperSlide>
      <SwiperSlide>
      <SlideItem
          title='Europa'
          description='O Continente mais antigo'
          link='europa'
          imageUrl='/images/europa.png'
          />
      </SwiperSlide>
      <SwiperSlide>
      <SlideItem
          title='Oceania'
          description='O Continente mais peculiar'
          link='oceania'
          imageUrl='/images/oceania.png'
          />
      </SwiperSlide>
    </Swiper>
  );
}