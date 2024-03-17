import { Button, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DichVu1() {
  const [value,  setValue] = useState("");
  const [valueP, setValueP] = useState("");
  const [id1, setId1] = useState();
  const [img1, setImg1] = useState();
  useEffect(() => {
    console.log("DEBUGGERS");
    fetchData();
  }, []);
  console.log("11111: " + img1);

  const fetchData =  () => {
    axios
      .get("http://localhost:8080/login/getdata")
      .then( (response) => {
        console.log("ac: ", response.data);
        debugger;
        let listData = response.data;
        for (var i = 0; i < listData.length; i++) {
          if (listData[i].id == 1) {
            let a =  'data:image/jpeg;base64,' + listData[i].fileData;
            setId1(listData[i].content);
            setImg1(a);
            break;
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function setDataValue(a){
    setValue(a.target.value);
    // setValueP(a.target.value);
  }
    return(
        <section id="home" className="features-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
              <div className="inner-column">
                <div className="sec-title">                 
                  <h2>{id1}</h2>                
                  <div className="text">
                    Một năm mới thật nhiều sức khỏe cho gia đình người thân mình và cho bản thân mình, 1 năm thành công về công việc cố gắng làm chủ được java spring boot, react js, và có kiến thức về devops
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
                <figure className="image-1 overlay-anim wow fadeInUp"><img src="./css/images/about.jpg" alt="" />
                </figure>
                <span className="logo-box bounce-y"><img src="images/icons/icon-logo.png" alt="" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}