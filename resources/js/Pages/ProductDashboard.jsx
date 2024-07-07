import BasicMenu from "@/Components/BasicMenu";
import DataTable from "@/Components/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Button, ButtonBase } from "@mui/material";

const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
});

const idrPrice = {
    type: "number",
    valueFormatter: (value) => currencyFormatter.format(value),
    cellClassName: "font-tabular-nums",
};

const columns = [
    {
        field: "id",
        headerName: "ID",
        resizable: false,
        hideable: false,
        flex:1,
        maxWidth: 40,
    },
    {
        field: "no_resi",
        headerName: "No. Resi",
        resizable: false,
        hideable: false,
        flex:1,
        minWidth: 120,
    },
    {
        field: "product_name",
        headerName: "Product Info",
        resizable: false,
        hideable: false,
        flex:1,
        minWidth: 120,
    },
    {
        field: "product_condition",
        headerName: "Condition",
        resizable: false,
        hideable: false,
        flex:1,
        minWidth: 120,
    },
    {
        field: "product_size",
        headerName: "Size",
        resizable: false,
        hideable: false,
        flex:1,
        minWidth: 120,
    },
    {
        field: "selling_price",
        headerName: "Selling Price",
        resizable: false,
        hideable: false,
        flex:1,
        minWidth: 120,
        ...idrPrice,
    },
    {
        headerName: "Actions",
        resizable: false,
        hideable: false,
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

                        <DataTable resData={products} resColumns={columns} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
