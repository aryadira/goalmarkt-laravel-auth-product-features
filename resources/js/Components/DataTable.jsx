import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData, useMovieData } from "@mui/x-data-grid-generator";

export default function DataTable({ resData, resColumns }) {
    const dataMovie = useMovieData();

    return (
        <div className="h-full max-h-max w-full p-4">
            <DataGrid
                {...dataMovie}
                // disableColumnFilter
                // disableDensitySelector
                slots={{ toolbar: GridToolbar }}
                sx={{ px: 3, py: 2 }}
                rows={resData}
                columns={resColumns}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
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
