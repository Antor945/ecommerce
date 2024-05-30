import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import ShopProduct from './ShopProduct';


const Pagination = ({ itemsPerPage }) => {

    const [product, setProduct] = useState([]);
    console.log(product,"product");

    const items = product;

    useEffect(() => {
        async function getAllData() {
            const AllProductData = await axios.get('http://localhost:8000/api/v1/product/getAllProduct')
            setProduct(AllProductData.data);
        }
        getAllData();
    }, []);

  

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <div className='w-[33%]'>
                            <ShopProduct productData={item} />
                        </div>
                    ))}
            </>
        );
    };

    const [itemOffset, setItemOffset] = useState(0);
    const [itemSelected, setItemSelected] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemSelected(event.selected)
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className=' flex flex-wrap'>
                <Items currentItems={currentItems} />
            </div>
            <div className=' flex items-center justify-between'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=""
                    pageLinkClassName="block border-2 px-2 border-primary text-blod text-[20px]"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={pageCount}
                    previousLabel=""
                    renderOnZeroPageCount={null}
                    breakClassName="page-item"
                    containerClassName="flex gap-x-4 mt-10 mb-5"
                    activeClassName="bg-primary text-white"
                    previousClassName="hidden"
                />
                <p className=' text-primary text-[14px] font-DMSans mr-6 mt-5'>
                    Products from  {itemSelected + 1} to {itemOffset + itemsPerPage} of {items.length}</p>
            </div>
        </>
    )
}

export default Pagination