

import styled from "styled-components";
import Slider1 from '../components/slider/Slider1';
import Slider2 from '../components/slider/Slider2';
import Slider3 from '../components/slider/Slider3';
import Slider4 from '../components/slider/Slider4';
import Slider5 from '../components/slider/Slider5';
import Slider6 from '../components/slider/Slider6';
import Slider7 from '../components/slider/Slider7';
import Slider8 from '../components/slider/Slider8';


const Main = styled.main`
&& {
  & .md {
      display: block;
    }
    & .sm {
      display: none;
    }
  @media screen and (max-width: 768px) {
    & .md {
      display: none;
    }
    & .sm {
      display: block;
    }
} 
}
`


function Home() {
  const home = (<Main style={{ marginTop: 60 }}>
    <div className="md">
      <Slider1 />
      {/* <Slider2 /> */}
      <Slider5 />
      {/* <Slider6 /> */}
    </div>
    <div className="sm">
      <Slider3 />
      {/* <Slider4 /> */}
      <Slider7 />
      {/* <Slider8 /> */}
    </div>
  </Main>)


  return (
    <>
      {home}

    </>
  );
}

export default Home;
