import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Allvariant = () => {
    const [variantData, setVariantData] = useState('')

    useEffect(() => {
        async function getAllVariant() {
            const data = await axios.get('http://localhost:8000/api/v1/product/getAllVariant');
            setVariantData(data.data);
        }
        getAllVariant();
    }, [])


    return (
        <div style={{ marginLeft: "20px" }}>
            dsfgsr
        </div>
    )
}

export default Allvariant