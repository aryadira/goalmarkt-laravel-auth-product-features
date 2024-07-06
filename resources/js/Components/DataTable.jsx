import * as React from "react";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import { Button } from "@mui/material";

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
        flex: 1,
        renderCell: () => {
            return (
                <div className="flex gap-2">
                    <Button variant="contained">Action</Button>
                    <Button variant="contained" className="ml-10">
                        Action
                    </Button>
                </div>
            );
        },
    },
];

export default function DataTable({ data }) {
    return (
        <div className="h-full max-h-max w-full">
            <DataGrid
                className="w-full flex justify-between bg-red-100"
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
