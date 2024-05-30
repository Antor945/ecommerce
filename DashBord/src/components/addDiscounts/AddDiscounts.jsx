import { Button, Input, Select } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddDiscounts = () => {

    const [productData, setProductData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [discountData, setDiscountData] = useState({
        percent: '',
        cash: ''
    })

    useEffect(() => {
        async function getAllData() {
            const data = await axios.get('http://localhost:8000/api/v1/product/getAllProduct');
            let arr = [];
            data.data.map((item) => (
                arr.push({
                    value: item._id,
                    label: item.name
                })
            ));
            setProductData(arr);
        };
        getAllData();
    }, []);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDiscountData({ ...discountData, [name]: value })
    }


    const handleDiscount = () => {
        axios.post('http://localhost:8000/api/v1/discount/productdiscount', {
            product:selectedProduct,
            percent:discountData.percent,
            cash:discountData.cash
        })
    }





    return (
        <div style={{ marginLeft: "30px" }}>
            <h5>Select Product</h5>
            <Select
                style={{
                    width: 120,
                }}
                onChange={(e) => setSelectedProduct(e)}
                options={productData}
            />
            <div>
                <h5>Add Discount</h5>
                <Input placeholder='percent' onChange={handleChange} name='percent' />
            </div>
            <div>
                <h5>Add Cash</h5>
                <Input placeholder='Add Cash' onChange={handleChange} name='cash' />
            </div>
            <Button style={{ marginTop: "10px" }} onClick={handleDiscount}>Add Discount</Button>
        </div>
    )
}

export default AddDiscounts