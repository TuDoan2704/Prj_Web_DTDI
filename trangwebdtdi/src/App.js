import DichVu from "./components/DichVu";
import DoiTac from "./components/DoiTac";
import DoiTacTu from "./components/DoiTacTu";
import Test1 from "./components/Test1";
import TranChu from "./components/TranChu";
import VeChungToi from "./components/VeChungToi";



function App() {
    return(
      <div className="page-wrapper">
      {/* Preloader */}
      {/* <div className="preloader" /> */}
      {/* Main Header*/}
      <header id="home" className="main-header header-style-one">
        {/* Header Top */}
        <div className="header-top">
          <div className="inner-container">
            
            <div className="top-left">
              {/* Info List */}
              <ul className="list-style-one">
                <li>
                  <i className="fa fa-envelope" />{" "}
                  <a href="mailto:admin@at-tech.com.vn">admin@at-tech.com.vn</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Viwaseen+Tower+T%E1%BB%91+H%E1%BB%AFu/@20.9980766,105.7918503,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ad8f8064667b:0x65f8f955fb2e87c1!8m2!3d20.9980716!4d105.7944252!16s%2Fg%2F11j8tlptwv?entry=ttu"
                  >
                    <i className="fa fa-map-marker" />
                    Tầng 12, tòa nhà Viwaseen Tower, 48 Tố Hữu, Phường Trung
                    Văn, Quận Nam Từ Liêm, Thành phố Hà Nội
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-right">
              {/* <ul class="useful-links">
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul> */}
              <ul className="social-icon-one">
                <li>
                  <a href="https://twitter.com/?lang=vi" target="_blank">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/attechjsc" target="_blank">
                    <span className="fab fa-facebook-square" />
                  </a>
                </li>
                {/* <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li> */}
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Header Top */}
        {/* Header Lower */}
        <div className="header-lower">
          {/* Main box */}
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <a href="index.html">
                  <img
                    className="logo"
                    src="./css/images/ATTECH LOGO_Green&Mint.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li className="mhb">
                    <a
                      onclick="scrollToElement(home)"
                      href="#home"
                      className="active navbarmenu"
                    >
                      TRANG CHỦ
                    </a>
                  </li>
                  <li className="mhb">
                    <a href="#about">VỀ CHÚNG TÔI</a>
                  </li>
                  <li className="mhb">
                    <a href="#services">DỊCH VỤ</a>
                  </li>
                  <li className="mhb">
                    <a href="#doitac">ĐỐI TÁC</a>
                  </li>
                  <li className="mhb">
                    <a href="#contact">LIÊN HỆ</a>
                  </li>
                  {/* <li><a href="#projects">Projects</a></li> */}
                  {/* <li><a href="#news">Blog</a></li> */}
                </ul>
              </nav>
              {/* Main Menu End*/}
              <div className="outer-box">
                {/* <a href="tel:+84 393 245 192" class="info-btn">
                                    <img src="images/icons/icon-chat.png" alt="" class="icon">
                                    <small>Bạn muốn đặt câu hỏi cho chúng tôi? <br>Miễn phí</small>
                                    <strong>+84 393 245 192 </strong>
                                </a> */}
                <div className="ui-btn-outer">
                  <button className="ui-btn ui-btn search-btn">
                    <span className="icon lnr lnr-icon-search" />
                  </button>
                </div>
                {/* Mobile Nav toggler */}
                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <a href="index.html">
                  <img
                    className="logo"
                    src="./css/images/Logo_full color.svg"
                    alt=""
                    title
                  />
                </a>
              </div>
              <div className="close-btn">
                <i className="icon fa fa-times" />
              </div>
            </div>
            <ul className="navigation clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </ul>
            <ul className="contact-list-one">
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Gọi ngay cho chúng tôi</span>
                  <a href="tel:+92880098670">+84 393 245 192</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Email liên hệ</span>
                  <a href="mailto:help@company.com">admin@at-tech.com.vn</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Hoạt động</span>
                  T2 - T7 8:00 - 17:00, Chủ nhật - NGHỈ
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="https://twitter.com/?lang=vi">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/attechjsc">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              {/* <li><a href="#"><i class="fab fa-pinterest"></i></a></li> */}
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop" />
          <button className="close-search">
            <span className="fa fa-times" />
          </button>
          <div className="search-inner">
            <form method="post" action="index.html">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  defaultValue
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo">
                <a href="index.html" title>
                  <img src="./css/images/Logo_full color.svg" alt="" title />
                </a>
              </div>
              {/*Right Col*/}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      {/*Keep This Empty / Menu will come through Javascript*/}
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>
        <TranChu></TranChu>
        <VeChungToi></VeChungToi>
        <DichVu></DichVu>
        
        
        <Test1></Test1>
        {/* <DuAn></DuAn>
        <DoiTacTu></DoiTacTu> */}
        </div>
    )

  
}

export default App;
