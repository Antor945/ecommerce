import { Button, Input, Select } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Addvariant = () => {

    const [productData, setProductData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [image, setImage] = useState('');
    const [variantData, setVariantData] = useState({
        name: "",
        price: '',
        storage: '',
        ram: '',
        color: '',
        size: ''

    })
    console.log(selectedProduct);

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

    const HandleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const HandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setVariantData({ ...variantData, [name]: value })
    }

    const handleAddvariant = () => {

        axios.post('http://localhost:8000/api/v1/product/productvariant', {

            price: variantData.price,
            storage: variantData.storage,
            ram: variantData.ram,
            color: variantData.color,
            image: image,
            size: variantData.size,
            product: selectedProduct,
            variantName:variantData.variantName,

        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }
        )

    }

    return (
        <div style={{ marginLeft: "30px" }}>
            <h5>select product name</h5>
            <Select
                style={{
                    width: 120,
                }}
                onChange={(e) => setSelectedProduct(e)}
                options={productData}
            />
             <div>
                <h5>Variant Name</h5>
                <Input onChange={HandleChange} name="variantName" />
            </div>
            <div>
                <h5>Price</h5>
                <Input onChange={HandleChange} name="price" />
            </div>
            <div>
                <h5>storage</h5>
                <Input onChange={HandleChange} name="storage" />
            </div>
            <div>
                <h5>ram</h5>
                <Input onChange={HandleChange} name="ram" />
            </div>
            <div>
                <h5>color</h5>
                <Input onChange={HandleChange} name="color" />
            </div>
            <div >
                <h5>size</h5>
                <Input onChange={HandleChange} name="size" />
            </div>
            <div>
                <h5>image</h5>
                <Input onChange={HandleImage} type='file' />
            </div>

            <Button type='primary' style={{ marginTop: "20px" }} onClick={handleAddvariant}>Add variant</Button>
        </div>
    )
}

export default Addvariant