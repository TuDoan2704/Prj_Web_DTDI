import React from "react";
export default function Test1() {
    return(
        <section id="contact" className="footerc">
        <footer className="main-footer">
          {/*Widgets Section*/}
          <div className="widgets-section">
            <div className>
              <div className="row fth" style={{margin: '0 146px'}}>
                {/*Footer Column*/}
                <div className="footer-column col-xl-4 col-lg-4 col-md-4">
                  <div className="footer-widget about-widget">
                    {/* <img class="logo" src="./css/images/Logo_full color.svg" alt=""> */}
                    {/* <img class="logo" src="./css/images/ATTECH., JSC.svg" alt="logo" style="width: 65%;">  */}
                    <h5 style={{color: '#ffffff'}}>AT TECH ,. JSC</h5>
                    <div className="text" style={{width: '92%'}}>Chúng tôi tự hào là một công ty công nghệ hàng
                      đầu trong lĩnh
                      vực
                      công
                      nghệ thông tin, mang đến cho quý khách hàng những giải pháp hữu ích.</div>
                    {/* <ul class="social-icon-two">
									<li><a href="#"><i class="fab fa-twitter"></i></a></li>
									<li><a href="#"><i class="fab fa-facebook"></i></a></li>
									<li><a href="#"><i class="fab fa-pinterest"></i></a></li>
									<li><a href="#"><i class="fab fa-instagram"></i></a></li>
								</ul> */}
                  </div>
                </div>
                {/*Footer Column*/}
                <div className="footer-column col-xl-3 col-lg-3 col-md-3">
                  <div className="footer-widget links-widget">
                    <h6 className="widget-title fontft">Giờ làm việc</h6>
                    <ul className="user-links">
                      <li>
                        <div className="timelv">
                          <div>Thứ 2 đến thứ 6:&nbsp;</div>
                          <div>8h00 - 17h00</div>
                        </div>
                      </li>
                      <li>
                        <div className>Thứ 7: 8h00 - 12h00</div>
                      </li>
                      <li>
                        <div className>Chủ nhật: NGHỈ</div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Footer Column*/}
                <div className="footer-column col-xl-5 col-lg-5 col-md-5">
                  <div className="footer-widget contacts-widget">
                    <h6 className="widget-title fontft">Thông tin liên hệ</h6>
                    <div className="tencty">
                      <div className="contact-info textlg clg">CÔNG TY CỔ PHẦN CÔNG NGHỆ&nbsp;</div>
                      <div className="contact-info textlg clg">VÀ GIẢI PHÁP AT</div>
                      {/* <div class="contact-info textlg">CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ GIẢI PHÁP AT</div> */}
                    </div>
                    <ul className="contact-info">
                      <li><i className="fa fa-envelope" /> <a className="clg" href="mailto:needhelp@potisen.com">admin@at-tech.com.vn</a><br /></li>
                      <li><i className="fa fa-phone-square" /> <a href="tel:+926668880000" className="clg">
                          +84 393 245 192</a><br /></li>
                      <li><i className="fa-solid fa-house" /> <a target="_blank" className="clg" href="https://www.google.com/maps/place/Viwaseen+Tower+T%E1%BB%91+H%E1%BB%AFu/@20.9980766,105.7918503,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ad8f8064667b:0x65f8f955fb2e87c1!8m2!3d20.9980716!4d105.7944252!16s%2Fg%2F11j8tlptwv?entry=ttu">
                          Tầng 12, tòa nhà Viwaseen Tower, 48 Tố Hữu, Phường Trung Văn, Quận Nam
                          Từ Liêm, Thành phố Hà Nội.</a><br />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Footer Bottom*/}
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="inner-container">
                <div className="copyright-text">©2023, VietNam, AT Tech., JSC <a href="index.html"> | All
                    rights
                    reserved</a></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    )
}