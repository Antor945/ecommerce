import { configureStore } from '@reduxjs/toolkit'
import VariantSlice from './silces/VariantSlice'
import  cartInfo  from './silces/CartSilce'

export const store = configureStore({
    reducer: {
        variantInfo: VariantSlice,
        cartInfo:cartInfo
    },
})