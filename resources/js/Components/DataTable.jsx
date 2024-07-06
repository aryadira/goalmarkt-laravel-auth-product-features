import * as React from "react";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import BasicMenu from "./BasicMenu";

const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "product_name", headerName: "Product Info", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
    {
        field: "expiry_date",
        headerName: "Expiry Date",
        sortable: false,
        minWidth: 200,
    },
    {
        headerName: "Actions",
        flex: 2,
        renderCell: () => {
            return (
                <div className="flex gap-2 items-center w-full h-full">
                    <Button variant="outlined">Product Detail</Button>
                    <BasicMenu items={["Edit", "Delete"]}>Actions</BasicMenu>
                </div>
            );
        },
    },
];

export default function DataTable({ data }) {
    return (
        <div className="h-full max-h-max w-full">
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
                autoHeight={true}
                checkboxSelection
            />
        </div>
    );
}
