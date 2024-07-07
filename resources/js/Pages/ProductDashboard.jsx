import BasicMenu from "@/Components/BasicMenu";
import DataTable from "@/Components/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Button, ButtonBase } from "@mui/material";

const columns = [
    {
        field: "id",
        headerName: "ID",
        resizable: false,
        maxWidth: 40,
        flex: 1,
    },
    {
        field: "no_resi",
        headerName: "No. Resi",
        resizable: false,
        minWidth: 120,
        flex: 1,
    },
    {
        field: "product_name",
        headerName: "Product Info",
        resizable: false,
        minWidth: 120,
        flex: 2,
    },
    {
        field: "selling_price",
        headerName: "Selling Price",
        resizable: false,
        minWidth: 120,
        flex: 1,
    },
    {
        field: "product_condition",
        headerName: "Condition",
        resizable: false,
        minWidth: 120,
        flex: 2,
    },
    {
        field: "product_size",
        headerName: "Size",
        resizable: false,
        minWidth: 120,
        flex: 1,
    },
    {
        headerName: "Actions",
        resizable: false,
        flex: 3,
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

export default function ProductDashboard({ products, auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Product Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="w-full flex justify-between items-center p-5">
                            <div className="text-gray-900">Product List</div>
                            <div>
                                <Link href="/products/create">
                                    <Button variant="contained">
                                        Add Product
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <DataTable data={products} columns={columns} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
