import React, { useEffect, useState } from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button, Input, message } from 'antd';
import { Select, Space } from 'antd';
import axios from 'axios';


const AddProduct = () => {


    const [productName, setProductName] = useState();
    const [storeName, setStoreName] = useState();
    const [storeData, setStoreData] = useState([]);

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [messageApi, contextHolder] = message.useMessage();

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
    };

    const filterOption = (input, option) =>
        option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;

    const onChange = (value) => {
        setStoreName(value);
    };
    const onSearch = (value) => {
    };
    const warning = (warning) => {
        messageApi.open({
            type: 'warning',
            content: warning,
        });
    };
    const success = (success) => {
        messageApi.open({
            type: 'success',
            content: success,
        });
    };

    useEffect(() => {
        async function getAllStore() {
            const data = await axios.get('http://localhost:8000/api/v1/merchant/getAllStore');
            let arr = [];
            data.data.map((item) => {
                arr.push({
                    value: item._id,
                    label: item.storename,
                });
                setStoreData(arr)
            });
        }
        getAllStore();
    }, []);


    const handleClick = () => {

        if (!productName) {
            warning('Product name please')
        } else if (!storeName) {
            warning("please select store")
        }
        if (productName && storeName) {
            axios.post('http://localhost:8000/api/v1/product/productController', {
                name: productName,
                description:  draftToHtml(convertToRaw(editorState.getCurrentContent())),
                store: storeName
            }).then(() => {
                success('Product create successfuly done');
                setProductName('');
                setStoreName('');
            })

        }
    }

    return (
        <div style={{ marginLeft: "30px" }}>
            <div>
                <h4>Product Name</h4>
                <Input style={{ fontSize: "16px", fontFamily: "Poppins", }}
                    onChange={(e) => setProductName(e.target.value)} value={productName} placeholder=' Enter Product Name' />
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: "center", gap: "30px" }}>
                    <h4>Discription</h4>
                </div>
                <Editor
                    value={storeName}
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                />
            </div>
            <div>
                <h4>Store Name</h4>
                <Select
                    style={{ width: "300px" }}
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={storeData}
                />
            </div>
            <>
                {contextHolder}
                <Space>
                    <Button onClick={handleClick} style={{ top: '20px' }} type="primary">Submit</Button>
                </Space>
            </>
        </div>
    )
}

export default AddProduct