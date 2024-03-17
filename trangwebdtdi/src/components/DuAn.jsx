import Input from "antd/es/input/Input";
import React, { useState } from "react";

export default function DuAn(){
    const [value, setValue] = useState("aaa")
    return(
        <>
        <section id="services" className="testimonial-section pt-0">
        <Input value = {value} placeholder="Nhập thông tin"></Input>
        <h3></h3>
        <div className="bg bg-pattern-4 pull-up" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Các dự án đã triển khai</span>
            <h2>Chúc mừng năm mới thật nhiều sức khỏe và thành công, học được thật nhiều kiến thức lập trình về java spring boot và react js có thêm kiến thức về devops</h2>
          </div>
          <div className="carousel-outer">
            <div className="testimonial-carousel owl-carousel owl-theme">
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box ct">
                  <div className="upper-box">
                    <h4 className="name">Triển khai giải pháp <br /> cổng thanh toán</h4>
                  </div>
                  <div className="text-box">
                    <div className="text">Giải pháp cổng thanh toán trực tuyến do AT Tech phát triển là giải
                      pháp có
                      tính an toàn cao, hạn
                      chế các rủi ro trong quá trình thanh toán.</div>
                  </div>
                  <div className="info-box">
                    <figure className="thumb"><img src="./css/images/trienkhaithanhtoan.jpg" alt="" />
                    </figure>
                    <div className="rating">
                      <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      <span className="avg-review">4.9 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box ct">
                  <div className="upper-box">
                    <h4 className="name">Tham gia thực hiện <br /> chuyển đổi số</h4>
                  </div>
                  <div className="text-box">
                    <div className="text">Chuyển đổi số đang là "hot trend" những năm gần đây, AT Tech đã
                      thực hiện chuyển đổi số cho các lĩnh vực như: Tài chính ngân hàng, giáo dục, nha
                      khoa ... .</div>
                  </div>
                  <div className="info-box">
                    <figure className="thumb"><img src="./css/images/corebanking.jpg" alt="" />
                    </figure>
                    <div className="rating">
                      <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half" />
                      <span className="avg-review">4.5 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box ct">
                  <div className="upper-box">
                    <h4 className="name">Triển khai nền tảng <br /> Backbase cho ngân hàng</h4>
                  </div>
                  <div className="text-box">
                    <div className="text">Giải pháp BackBase Việt Nam đầy đủ và toàn diện nhằm cung cấp cho
                      ngân hàng và các tổ
                      chức tài chính một ngân hàng tương tác trên nền tảng số.</div>
                  </div>
                  <div className="info-box">
                    <figure className="thumb"><img src="./css/images/backbase.jpg" alt="" /></figure>
                    <div className="rating">
                      <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half" />
                      <span className="avg-review">4.5 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box ct">
                  <div className="upper-box">
                    <h4 className="name">Triển khai giải pháp trục <br /> tích hợp ESB</h4>
                  </div>
                  <div className="text-box">
                    <div className="text">Cung cấp khả năng gọi dich vụ đồng bộ và không đồng bộ: Các dịch
                      vụ có thể được triển
                      khai bởi hàng loạt các công nghệ khác nhau.</div>
                  </div>
                  <div className="info-box">
                    <figure className="thumb"><img src="./css/images/ESB.jpg" alt="" /></figure>
                    <div className="rating">
                      <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      <span className="avg-review">4.9 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="testimonial-section pt-0">
        <div className="bg bg-pattern-4 pull-up" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Các dự án đã triển khai</span>
            <h2>Dự án của AT Tech</h2>
          </div>
          <div className="carousel-outer">
            <div className="testimonial-carousel owl-carousel owl-theme">
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box ct">
                  <div className="upper-box">
                    <h4 className="name">Triển khai giải pháp <br /> cổng thanh toán</h4>
                  </div>
                  <div className="text-box">
                    <div className="text">Giải pháp cổng thanh toán trực tuyến do AT Tech phát triển là giải
                      pháp có
                      tính an toàn cao, hạn
                      chế các rủi ro trong quá trình thanh toán.</div>
                  </div>
                  <div className="info-box">
                    <figure className="thumb"><img src="./css/images/trienkhaithanhtoan.jpg" alt="" />
                    </figure>
                    <div className="rating">
                      <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      <span className="avg-review">4.9 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box ct">
                  <div className="upper-box">
                    <h4 className="name">Tham gia thực hiện <br /> chuyển đổi số</h4>
                  </div>
                  <div className="text-box">
                    <div className="text">Chuyển đổi số đang là "hot trend" những năm gần đây, AT Tech đã
                      thực hiện chuyển đổi số cho các lĩnh vực như: Tài chính ngân hàng, giáo dục, nha
                      khoa ... .</div>
                  </div>
                  <div className="info-box">
                    <figure className="thumb"><img src="./css/images/corebanking.jpg" alt="" />
                    </figure>
                    <div className="rating">
                      <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half" />
                      <span className="avg-review">4.5 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box ct">
                  <div className="upper-box">
                    <h4 className="name">Triển khai nền tảng <br /> Backbase cho ngân hàng</h4>
                  </div>
                  <div className="text-box">
                    <div className="text">Giải pháp BackBase Việt Nam đầy đủ và toàn diện nhằm cung cấp cho
                      ngân hàng và các tổ
                      chức tài chính một ngân hàng tương tác trên nền tảng số.</div>
                  </div>
                  <div className="info-box">
                    <figure className="thumb"><img src="./css/images/backbase.jpg" alt="" /></figure>
                    <div className="rating">
                      <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half" />
                      <span className="avg-review">4.5 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box ct">
                  <div className="upper-box">
                    <h4 className="name">Triển khai giải pháp trục <br /> tích hợp ESB</h4>
                  </div>
                  <div className="text-box">
                    <div className="text">Cung cấp khả năng gọi dich vụ đồng bộ và không đồng bộ: Các dịch
                      vụ có thể được triển
                      khai bởi hàng loạt các công nghệ khác nhau.</div>
                  </div>
                  <div className="info-box">
                    <figure className="thumb"><img src="./css/images/ESB.jpg" alt="" /></figure>
                    <div className="rating">
                      <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                      <span className="avg-review">4.9 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}