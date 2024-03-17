import React, { useEffect, useState, useRef } from "react";
import { Menu } from "antd";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Aboutt from "./About";
import Services1 from "./Services";
import DoiTac1 from "./DoiTac";
import Contact1 from "./Contact";
import axios from "axios";
import { urlCommon } from "./common";

const ListMenu = () => {
    const [list, setList] = useState([]);
    const [listHome, setListHome] = useState([]);
    const [listAbout, setListAbout] = useState([]);
    const [listService, setListService] = useState([]);
    const [listDoiTac, setListDoiTac] = useState([]);
    const [listContact, setListContact] = useState([]);
    let listHomeAdd = [];
    let listAboutAdd = [];
    let listServiceAdd = [];
    let listDoiTacAdd = [];
    let listContactAdd = [];
    
    useEffect(() => {
        let url = urlCommon + "getdata"
        console.log(url);
        axios
          .get(url)
          .then((response) => {
            console.log("ac: ", response.data);
            let rs = response.data;
            setList(rs);
            for(let i = 0; i < rs.length; i++){
                if(rs[i].menu == '1'){
                    listHomeAdd.push(rs[i]);
                }else if(rs[i].menu == '2'){
                    listAboutAdd.push(rs[i]);
                }else if(rs[i].menu == '3'){
                    listServiceAdd.push(rs[i]);
                }else if(rs[i].menu =='4'){
                    listDoiTacAdd.push(rs[i]);
                }else if(rs[i].menu == '5'){
                    listContactAdd.push(rs[i]);
                }
            }
            setListHome(listHomeAdd);
            setListAbout(listAboutAdd);
            setListService(listServiceAdd);
            setListDoiTac(listDoiTacAdd);
            setListContact(listContactAdd);
            listHomeAdd = [];
            listAboutAdd = [];
            listServiceAdd = [];
            listDoiTacAdd = [];
            listContactAdd = [];
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    const Home = () => <HomePage list ={listHome} setList={setListHome}/>;
    const About = () => <Aboutt list ={listAbout} setList={setListAbout}></Aboutt>;
    const Services = () => <Services1 list ={listService} setList={setListService}/>;
    const DoiTac = () => <DoiTac1 list ={listDoiTac} setList={setListDoiTac}/>;
    const Contact = () => <Contact1 list ={listDoiTac} setList={setListDoiTac}/>;
    // Tạo một hàm để xử lý sự kiện khi chọn một mục menu
    const handleMenuClick = (e) => {
        console.log("Menu item clicked:", e.key);
    };
    // Trả về component App
    return (
        <div className="App">
            {/* Sử dụng component Router để bao bọc các component liên quan đến đường dẫn */}
            <Router>
                {/* Sử dụng component Menu từ antd */}
                <Menu mode="horizontal" onClick={handleMenuClick}>
                    {/* Tạo các mục menu bằng component Menu.Item và component Link */}
                    <Menu.Item key="home">
                        <Link to="/">Trang chủ</Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about">Về chúng tôi</Link>
                    </Menu.Item>
                    <Menu.Item key="services">
                        <Link to="/services">Dịch vụ</Link>
                    </Menu.Item>
                    <Menu.Item key="doitac">
                        <Link to="/doitac">Đối tác</Link>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Link to="/contact">Liên hệ</Link>
                    </Menu.Item>
                </Menu>
                {/* Sử dụng component Switch để hiển thị component tương ứng với đường dẫn */}
                <Routes>
                    {/* Sử dụng component Route để định nghĩa các đường dẫn và component */}
                    <Route exact path="/" element={Home()} />
                    <Route path="/about" element={About()} />
                    <Route path="/services" element={Services()} />
                    <Route path="/doitac" element={DoiTac()} />
                    <Route path="/contact" element={Contact()} />
                </Routes>
            </Router>
        </div>
    );
};

export default ListMenu;