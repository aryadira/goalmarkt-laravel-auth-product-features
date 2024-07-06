import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "ID" },
    { field: "product_name", headerName: "Product Info" },
    {
        field: "price",
        headerName: "Price",
        type: "number",
    },
    {
        field: "expiry_date",
        headerName: "Expiry Date",
        sortable: false,
    },
];

export default function DataTable({ data }) {
    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            
        </div>
    );
}
