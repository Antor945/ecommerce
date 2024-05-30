import React from 'react'
import LeftSidebarContent from '../../layout/LeftSidebarContent'

const LeftSideBer = () => {
    return (
        <div>
            <LeftSidebarContent dropdown={false} taitle={'Shop by Category'}/>
            <LeftSidebarContent dropdown={true} taitle={'Shop by Color'}/>
            <LeftSidebarContent dropdown={true} taitle={'Shop by Brand'}/>
            <LeftSidebarContent dropdown={false} taitle={'Shop by Price'}/>
            {/* <LeftSidebarContent dropdown={true} taitle={'Shop by Brand'}/> */}
            {/* <LeftSidebarContent dropdown={true} taitle={'Shop by Price'}/> */}
        </div>
    )
}

export default LeftSideBer