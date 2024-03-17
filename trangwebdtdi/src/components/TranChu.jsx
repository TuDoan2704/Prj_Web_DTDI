
import axios from "axios";
import React, { useEffect, useState } from "react";
import { urlCommon } from "./common";

export default function TranChu() {
  const [listDataHome, setListDataHome] = useState([]);
  const [id1, setId1] = useState();
  const [img1, setImg1] = useState();
  const [id5, setId5] = useState();
  const [img5, setImg5] = useState();
  const [title5, setTitle5] = useState();
  const [tittle6, setTitle6] = useState();
  const [content6, setContent6] = useState();
  const [tittle7, setTitle7] = useState();
  const [content7, setContent7] = useState();
  const [tittle8, setTitle8] = useState();
  const [content8, setContent8] = useState();
  const [tittle9, setTitle9] = useState();
  const [content9, setContent9] = useState();
  const [tittle10, setTitle10] = useState();
  const [content10, setContent10] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  () => {
    axios
      .get(urlCommon)
      .then( (response) => {
        let listData = response.data;
        setListDataHome(listData);
        for (var i = 0; i < listData.length; i++) {
          if (listData[i].id == 1) {
            let a =  'data:image/jpeg;base64,' + listData[i].fileData;
            setId1(listData[i].content);
            setImg1(a);
            
          }else if(listData[i].id == 5){
            setId5(listData[i].content);
            setImg5(listData[i].fileData);
              setTitle5(listData[i].title);          
          }else if(listData[i].id == 6){
            setTitle6(listData[i].title);
            setContent6(listData[i].content);          
          }else if(listData[i].id == 7){
            setTitle7(listData[i].title);
            setContent7(listData[i].content);          
          }else if(listData[i].id == 8){
            setTitle8(listData[i].title);
            setContent8(listData[i].content);          
          }else if(listData[i].id == 9){
            setTitle9(listData[i].title);
            setContent9(listData[i].content);          
          }else if(listData[i].id == 10){
            setTitle10(listData[i].title);
            setContent10(listData[i].content);          
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <section className="main-slider" id="home">
        <div
          className="rev_slider_wrapper fullwidthbanner-container"
          id="rev_slider_one_wrapper"
          data-source="gallery"
        >
          <div
            className="rev_slider fullwidthabanner"
            id="rev_slider_one"
            data-version="5.4.1"
          >
            <ul>
              {/* Slide 1 */}
              <li data-index="rs-1" data-transition="zoomout">
                {/* MAIN IMAGE */}
                <img
                  src={"data:image/jpeg;base64,"+img1}
                  alt=""
                  className="rev-slidebg"
                />

                <div
                  className="tp-caption"
                  data-paddingbottom="[10,0,0,0]"
                  data-paddingleft="[15,15,15,15]"
                  data-paddingright="[15,15,15,15]"
                  data-paddingtop="[0,0,0,0]"
                  data-responsive_offset="on"
                  data-type="text"
                  data-height="none"
                  data-width="['900','800','600','500']"
                  data-whitespace="normal"
                  data-hoffset="['0','0','0','0']"
                  data-voffset="['-20','-20','-20','-20']"
                  data-x="['left','left','left','left']"
                  data-y="['middle','middle','middle','middle']"
                  data-textalign="['top','top','top','top']"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                >
                  <h1>
                    Phát triển <br />
                    ứng dụng web
                  </h1>
                </div>
                <div
                  className="tp-caption"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[15,15,15,15]"
                  data-paddingright="[15,15,15,15]"
                  data-paddingtop="[0,0,0,0]"
                  data-responsive_offset="on"
                  data-type="text"
                  data-height="none"
                  data-width="['700','750','700','450']"
                  data-whitespace="normal"
                  data-hoffset="['0','0','0','0']"
                  data-voffset="['120','185','200','150']"
                  data-x="['left','left','left','left']"
                  data-y="['middle','middle','middle','middle']"
                  data-textalign="['top','top','top','top']"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                >
                  <div className="btn-box">
                    <div className="btn-outer">
                      <a href="#contact" className="theme-btn btn-style-one">
                        <span className="btn-title">Liên hệ chúng tôi</span>
                      </a>
                      {/* <a href="page-contact.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                    </div>
                  </div>
                </div>
              </li>
              {/* Slide 2 */}
              <li data-index="rs-2" data-transition="zoomout">
                {/* MAIN IMAGE */}
                <img src={"data:image/jpeg;base64,"+img1}
                  alt=""
                  className="rev-slidebg"/>
                

                <div
                  className="tp-caption"
                  data-paddingbottom="[10,0,0,0]"
                  data-paddingleft="[15,15,15,15]"
                  data-paddingright="[15,15,15,15]"
                  data-paddingtop="[0,0,0,0]"
                  data-responsive_offset="on"
                  data-type="text"
                  data-height="none"
                  data-width="['900','800','600','500']"
                  data-whitespace="normal"
                  data-hoffset="['0','0','0','0']"
                  data-voffset="['-20','-20','-20','-20']"
                  data-x="['left','left','left','left']"
                  data-y="['middle','middle','middle','middle']"
                  data-textalign="['top','top','top','top']"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                >
                  <h1>{id1}</h1>
                </div>
                <div
                  className="tp-caption"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[15,15,15,15]"
                  data-paddingright="[15,15,15,15]"
                  data-paddingtop="[0,0,0,0]"
                  data-responsive_offset="on"
                  data-type="text"
                  data-height="none"
                  data-width="['700','750','700','450']"
                  data-whitespace="normal"
                  data-hoffset="['0','0','0','0']"
                  data-voffset="['120','185','200','150']"
                  data-x="['left','left','left','left']"
                  data-y="['middle','middle','middle','middle']"
                  data-textalign="['top','top','top','top']"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                >
                  <div className="btn-box">
                    <div className="btn-outer">
                      <a href="#contact" className="theme-btn btn-style-one">
                        <span className="btn-title">Liên hệ chúng tôi</span>
                      </a>
                      {/* <a href="page-contact.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                    </div>
                  </div>
                </div>
              </li>
              {/* Slide 3 */}
              <li data-index="rs-3" data-transition="zoomout">
                {/* MAIN IMAGE */}
                <img
                  src="./css/images/slide.png"
                  alt=""
                  className="rev-slidebg"
                />

                <div
                  className="tp-caption"
                  data-paddingbottom="[10,0,0,0]"
                  data-paddingleft="[15,15,15,15]"
                  data-paddingright="[15,15,15,15]"
                  data-paddingtop="[0,0,0,0]"
                  data-responsive_offset="on"
                  data-type="text"
                  data-height="none"
                  data-width="['900','800','600','500']"
                  data-whitespace="normal"
                  data-hoffset="['0','0','0','0']"
                  data-voffset="['-20','-20','-20','-20']"
                  data-x="['left','left','left','left']"
                  data-y="['middle','middle','middle','middle']"
                  data-textalign="['top','top','top','top']"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                >
                  <h1>
                    Phân tích &amp; <br />
                    xử lý dữ liệu
                  </h1>
                </div>
                <div
                  className="tp-caption"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[15,15,15,15]"
                  data-paddingright="[15,15,15,15]"
                  data-paddingtop="[0,0,0,0]"
                  data-responsive_offset="on"
                  data-type="text"
                  data-height="none"
                  data-width="['700','750','700','450']"
                  data-whitespace="normal"
                  data-hoffset="['0','0','0','0']"
                  data-voffset="['120','185','200','150']"
                  data-x="['left','left','left','left']"
                  data-y="['middle','middle','middle','middle']"
                  data-textalign="['top','top','top','top']"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                >
                  <div className="btn-box">
                    <div className="btn-outer">
                      <a href="#contact" className="theme-btn btn-style-one">
                        <span className="btn-title">Liên hệ chúng tôi</span>
                      </a>
                      {/* <a href="page-contact.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                    </div>
                  </div>
                </div>
              </li>
              {/* Slide 4 */}
              <li data-index="rs-4" data-transition="zoomout">
                {/* MAIN IMAGE */}
                <img
                  src="./css/images/5g-connection.jpg"
                  alt=""
                  className="rev-slidebg"
                />
                <div
                  className="tp-caption"
                  data-paddingbottom="[10,0,0,0]"
                  data-paddingleft="[15,15,15,15]"
                  data-paddingright="[15,15,15,15]"
                  data-paddingtop="[0,0,0,0]"
                  data-responsive_offset="on"
                  data-type="text"
                  data-height="none"
                  data-width="['900','800','600','500']"
                  data-whitespace="normal"
                  data-hoffset="['0','0','0','0']"
                  data-voffset="['-20','-20','-20','-20']"
                  data-x="['left','left','left','left']"
                  data-y="['middle','middle','middle','middle']"
                  data-textalign="['top','top','top','top']"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                >
                  <h1>Tư vấn &amp; thực hiện chuyển đổi số</h1>
                </div>
                <div
                  className="tp-caption"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[15,15,15,15]"
                  data-paddingright="[15,15,15,15]"
                  data-paddingtop="[0,0,0,0]"
                  data-responsive_offset="on"
                  data-type="text"
                  data-height="none"
                  data-width="['700','750','700','450']"
                  data-whitespace="normal"
                  data-hoffset="['0','0','0','0']"
                  data-voffset="['120','185','200','150']"
                  data-x="['left','left','left','left']"
                  data-y="['middle','middle','middle','middle']"
                  data-textalign="['top','top','top','top']"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                >
                  <div className="btn-box">
                    <div className="btn-outer">
                      <a href="#contact" className="theme-btn btn-style-one">
                        <span className="btn-title">Liên hệ chúng tôi</span>
                      </a>
                      {/* <a href="page-contact.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="home" className="features-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
              <div className="inner-column">
                <div className="sec-title">                 
                  <h2>{title5}</h2>                
                  <div className="text">
                    {id5}
                  </div>
                </div>                
                <a href="#contact" className="theme-btn btn-style-one hvr-dark"><span className="btn-title">Liên hệ
                    chúng tôi</span></a>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <span className="bg-shpe-1 bounce-x" />
                <span className="bg-shpe-2 zoom-one" />
                <figure className="image-1 overlay-anim wow fadeInUp"><img src={'data:image/jpeg;base64,' + img5} alt="" />
                </figure>
                <span className="logo-box bounce-y"><img src="images/icons/icon-logo.png" alt="" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="home" className="fun-fact-section pt-0">
        {/* Call To Action */}
        <section className="call-to-action" id="home">
          <div className="outer-box">
            <div className="bg bg-image" style={{backgroundImage: 'url(./css/images/image015.jpg)'}}>
            </div>
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="title-box col-xl-8 col-lg-6 col-md-12">
                  <h2 className="title">{tittle6}</h2>
                </div>
                <div className="btn-box col-xl-4 col-lg-6 col-md-12">
                  <div className="btn-outer">
                    {/* <a href="page-about.html" class="theme-btn btn-style-one"><span class="btn-title">Explore Now</span></a> */}
                    {/* <a href="page-services.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Call To Action */}
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">
              {/* Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner">
                  <div className="content">
                    <i className="icon flaticon-checking" />
                    <div className="count-box"><span className="count-text" data-speed={1000} data-stop={tittle7}>{tittle7}</span></div>
                    <h6 className="counter-title">{content7}</h6>
                  </div>
                </div>
              </div>
              {/*Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                <div className="inner">
                  <div className="content">
                    <i className="icon flaticon-recommend" />
                    <div className="count-box"><span className="count-text" data-speed={2500} data-stop={100}>{tittle8}</span></div>
                    <h6 className="counter-title">{content8}</h6>
                  </div>
                </div>
              </div>
              {/*Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                <div className="inner">
                  <div className="content">
                    <i className="icon flaticon-increment" />
                    <div className="count-box"><span className="count-text" data-speed={2500} data-stop={100}>{tittle9}</span></div>
                    <h6 className="counter-title">{content9}</h6>
                  </div>
                </div>
              </div>
              {/*Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                <div className="inner">
                  <div className="content">
                    <i className="icon flaticon-consulting" />
                    <div className="count-box"><span className="count-text" data-speed={2500} data-stop={80}>{tittle10}</span></div>
                    <h6 className="counter-title">{content10}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
