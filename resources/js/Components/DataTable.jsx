import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ data, columns }) {
    return (
        <div className="h-full max-h-max w-full p-4">
            <DataGrid
                sx={{ px: 3 }}
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
                autoHeight={true}
            />
        </div>
    );
}
