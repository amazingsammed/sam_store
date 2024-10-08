import React from 'react';
import {CategoryTable} from "@/app/stores/[storeid]/items/category/_component/categorytable";
import {getStockCategory} from "@/app/_actions/stock_item_options";

async function CategoryPage(props) {
    const data = await getStockCategory(props.params.storeid);
    return (
        <div>
            <CategoryTable element={data}/>
        </div>
    );
}

export default CategoryPage;
