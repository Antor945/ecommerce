import { Button, Input, Modal, Select, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ApproveSubCategory = () => {
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState('');
  const [status, setStatus] = useState('');


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (item) => {
    console.log(item);
    setSubCategoryName(item);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const data = axios.post('http://localhost:8000/api/v1/category/subCategoryStatus', {
      name: subCategoryName.name,
      status: status
    })
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: 'Serial',
      dataIndex: 'serial',
      key: 'serial',
      render: (_, record, index) => index + 1,
    },
    {
      title: 'Subcategory Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'isActive',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive) => <p>{isActive ? "Active" : "inActive"}</p>
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>
      (
        <>
          <Button type="primary" onClick={() => showModal(record)}>
          Edit status
          </Button>
          <Modal okText="update" title="Edit status" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {/* <Input onChange={(e) => setStatus(e.target.value)}
                       placeholder='waiting, reject, approved' /> */}
            <Select
              defaultValue="waiting"
              style={{
                width: 120,
              }}
              onChange={(e) => setStatus(e)}
              options={[
                { value: 'waiting', label: 'waiting' },
                { value: 'approved', label: 'approved' },
                { value: 'reject', label: 'reject' },
              ]}
            />
          </Modal>
        </>
      ),
    }
  ];

  useEffect(() => {
    async function getAllCategory() {
      const subCategoryData = await axios.get('http://localhost:8000/api/v1/category/getSubcategory');
      setSubCategoryData(subCategoryData.data);
    }
    getAllCategory();
  }, [subCategoryData])

  return (
    <Table
            dataSource={subCategoryData}
            columns={columns} />
  )
}

export default ApproveSubCategory