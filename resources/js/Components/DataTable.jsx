import * as React from "react";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const columns = [
    { field: "id", headerName: "ID" },
    { field: "product_name", headerName: "Product Info" },
    { field: "price", headerName: "Price" },
    { field: "expiry_date", headerName: "Expiry Date", sortable: false },
    {
        headerName: "Actions",
        renderCell: () => {
            return <Button variant="contained">Action</Button>;
        },
    },
];

export default function DataTable({ data }) {
    return (
        <div className="h-full max-h-max">
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
                autosizing
                checkboxSelection
            />
        </div>
    );
}
