import { useRouter } from "next/router";
import styles from './index.module.css';
import Image from "next/image";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";
import ApplemusicGuideImage1 from '../guideImages/applemusic/applemusic-1.png';
import ApplemusicGuideImage2 from '../guideImages/applemusic/applemusic-2.png';
import ApplemusicGuideImage3 from '../guideImages/applemusic/applemusic-3.png';
import SpotifyGuideImage1 from '../guideImages/spotify/spotify-1.png';
import SpotifyGuideImage2 from '../guideImages/spotify/spotify-2.png';
import SpotifyGuideImage3 from '../guideImages/spotify/spotify-3.png';



const Guide=()=>{
    const router = useRouter();
    const { vendor } = router.query;

    const applemusicGuideImages : any[] = [ApplemusicGuideImage1, ApplemusicGuideImage2, ApplemusicGuideImage3];
    const spotifyGuideImages : any[] = [SpotifyGuideImage1, SpotifyGuideImage2, SpotifyGuideImage3];

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const Wrap = styled.div`
      .slick-prev:before {
        opaicty: 1;
        color: black;
        left: 0;
      }
      .slick-next:before {
        opacity: 1;
        color: black;
      }`


    return(
      <Wrap className={styles.wrapper}>
      <Slider {...settings} className={styles.slider}>
        {vendor==='applemusic' ? 
        applemusicGuideImages.map((image) => {
          return <Image
            src={image}
            alt='applemusicGuideImage'/>
        })
        : vendor==='spotify' ?
        spotifyGuideImages.map((image) => {
          return <Image
          src={image}
          alt='spotifyGuideImage'/>
        })
        :
        <div>
          No Guide for this streaming service
        </div>
        }
      </Slider>
      </Wrap>
    )
}

export default Guide;