import React, { useEffect, useState } from 'react';
import {
    UsergroupAddOutlined,
    ProductOutlined,
    LoginOutlined,
    UserOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Col, Divider, Menu, Row, Switch } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const Home = () => {
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();
    const data = useSelector(state => state.userInfo.value);

    useEffect(() => {
        if (!data) {
            navigate('/login')
        }
    }, []);


    const items = [
        data?.role == 'admin' &&
        getItem('User', 'sub1', <UsergroupAddOutlined />, [
            getItem('Login', '/1', <LoginOutlined />),
            getItem('Merchent', '/2', <UserOutlined />),
        ]),
        getItem('Product', 'sub2', <ProductOutlined />, [
            getItem('Add product', '/AddProduct'),
            getItem('All product', '/Allproduct'),
            getItem('Add variant', '/Addvariant'),
            getItem('All variant', '/allvariant'),
        ]),
        getItem('Category', 'sub3', <SettingOutlined />, [
            getItem('All Category', '/AllCategory'),
            getItem('Add Category', '/addCategory'),
        ]),
        getItem('Sub Category', 'sub4', <SettingOutlined />, [
            getItem('All Sub Category', '/allsubcategory'),
            getItem('Add Sub Category', '/addSubCategory'),
        ]),
        getItem('approve', 'sub5', <SettingOutlined />, [
            getItem('approve category status', '/approvecategory'),
            getItem('approve Subcategory status', '/approveSubCategory'),
        ]),
        getItem('Discount', 'sub6', <SettingOutlined />, [
            getItem('addDiscount', '/addDiscount'),
            getItem('approve Subcategory status', 'approveSubCategory'),
        ])
    ];

    const onClick = (e) => {
        navigate(e.key);
    };

    return (
        <>
            <Row>
                <Col span={5}>
                    <Menu
                        onClick={onClick}
                        // style={{
                        //     width: 256,
                        // }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode={mode}
                        theme={theme}
                        items={items}
                    />
                </Col>
                <Col span={18}>
                    <Outlet />
                </Col>
            </Row>
        </>
    )
}

export default Home