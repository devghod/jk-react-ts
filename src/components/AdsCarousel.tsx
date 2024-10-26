import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useAdsStore } from '../stores/adsStore'
import { useEffect, useMemo } from 'react'

const AdsCarousel = () => {
  const { getAdsGames, ads, isLoading } = useAdsStore()

  useEffect(() => {
    getAdsGames()
  }, [getAdsGames])

  const filteredAds = useMemo(() => ads, [ads])

  return (
    <div className='px-4 pt-4 pb-1'>
      {isLoading && (
        <div className='h-40 bg-gray-300 rounded-lg animate-pulse'></div>
      )}
      {!isLoading && ads.length === 0 && (
        <div className='text-center text-slate-500 my-5 h-full'>No data</div>
      )}
      {!isLoading && (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className='rounded-xl z-0'
          containerClass=''
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=''
          slidesToSlide={1}
          swipeable
        >
          {filteredAds?.map((ads, index) => (
            <img
              key={index}
              src={ads.imageUrl}
              className='h-40 w-full object-cover'
              loading='lazy'
              alt={ads.name}
            />
          ))}
        </Carousel>
      )}
    </div>
  )
}

export default AdsCarousel
