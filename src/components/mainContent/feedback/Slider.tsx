import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

import { Navigation, Pagination } from 'swiper/modules'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import { SlideData, SliderProps } from 'mainTypes'

import '../../../styles/sliderStyles.scss'

SwiperCore.use([Navigation, Pagination])

export function Slider({ sliderData }: SliderProps) {
  const paginationRef = useRef<any>(null)
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [isPrevButtonActive, setPrevButtonActive] = useState(false)
  const [isNextButtonActive, setNextButtonActive] = useState(true)
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  const handleSlideChange = (swiper: any) => {
    setPrevButtonActive(!swiper.isBeginning)
    setNextButtonActive(!swiper.isEnd)
  }

  useEffect(() => {
    const prevButton = document.querySelector(
      '.button__prev',
    ) as HTMLButtonElement
    const nextButton = document.querySelector(
      '.button__next',
    ) as HTMLButtonElement

    if (prevButton) {
      if (isPrevButtonActive) {
        prevButton.disabled = false
      } else {
        prevButton.disabled = true
      }
    }

    if (nextButton) {
      if (isNextButtonActive) {
        nextButton.disabled = false
      } else {
        nextButton.disabled = true
      }
    }
  }, [isPrevButtonActive, isNextButtonActive])

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="block__feedback">
        <button className="button__prev"></button>
        <Swiper
          onSwiper={setSwiper}
          freeMode={isMobileScreen ? true : false}
          grabCursor={isMobileScreen ? false : true}
          navigation={{
            prevEl: '.button__prev',
            nextEl: '.button__next',
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          // loop={true} //если сделать круг бесконечным, то нет смысла дизейблить кнопки-стрелки,
          // если круг сделать конечным, то только три точки
          speed={1500}
          slidesPerGroup={1}
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: {
              slidesPerView: 1,
              freeMode: true,
              spaceBetween: 32,
            },

            420: {
              slidesPerView: 1,
              freeMode: true,
            },

            650: {
              slidesPerView: 2,
              freeMode: true,
              spaceBetween: 50,
            },

            769: {
              slidesPerView: 3,
              freeMode: false,
            },
          }}
          className="swiper"
          spaceBetween={32}
        >
          {sliderData.map((item: SlideData, index: number) => (
            <SwiperSlide key={index} className="slide">
              <div className="user">
                <img src={item.avatar} alt="avatar" className="avatar" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="city">{item.city}</div>
                </div>
              </div>
              <div className="message">{item.message}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="button__next"></button>
      </div>
      <div className="swiper-pagination" ref={paginationRef}></div>
    </>
  )
}
