import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectOption from "@/Components/SelectOption";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Button, FormControl, MenuItem, TextField } from "@mui/material";

const productConditions = [
    {
        value: "New Brand With Tags",
    },
    {
        value: "Mint",
    },
    {
        value: "Excellent",
    },
    {
        value: "Very Good",
    },
    {
        value: "Good",
    },
    {
        value: "Fair",
    },
];

const productSizes = [
    {
        value: "XS",
    },
    {
        value: "S",
    },
    {
        value: "M",
    },
    {
        value: "L",
    },
    {
        value: "XL",
    },
    {
        value: "XXL",
    },
];

export default function AddProduct({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        product_name: "",
        product_condition: "",
        description: "",
        product_size: "",
        selling_price: 0,
    });

    console.log(data);

    const submit = (e) => {
        e.preventDefault();

        post(route("products.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Product
                </h2>
            }
        >
            <Head title="Add Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit}>
                        <FormControl className="w-full">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4">
                                <div className="w-full flex justify-between items-center p-5">
                                    <div className="text-gray-900 font-bold">
                                        Product Information
                                    </div>
                                </div>
                                <div className="p-5 flex gap-4 flex-col">
                                    <TextField
                                        value={data.product_name}
                                        fullWidth
                                        label="Product Name"
                                        id="filled-size-normal"
                                        variant="outlined"
                                        name="product_name"
                                        required
                                        onChange={(e) =>
                                            setData(
                                                "product_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        id="filled-select-condition"
                                        select
                                        label="Select Condition"
                                        helperText="Please select your product conditions"
                                        variant="outlined"
                                        name="product_condition"
                                        onChange={(e) =>
                                            setData(
                                                "product_condition",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {productConditions.map((condition) => (
                                            <MenuItem
                                                key={condition.value}
                                                value={condition.value}
                                            >
                                                {condition.value}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        value={data.description}
                                        fullWidth
                                        id="filled-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        defaultValue="Describe the product"
                                        variant="outlined"
                                        name="description"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4">
                                <div className="w-full flex justify-between items-center p-5">
                                    <div className="text-gray-900 font-bold">
                                        Product Spesification
                                    </div>
                                </div>
                                <div className="p-5 flex gap-4 flex-col">
                                    <TextField
                                        value={data.product_size}
                                        fullWidth
                                        id="filled-select-size"
                                        select
                                        label="Select Size"
                                        helperText="Please select your product size"
                                        variant="outlined"
                                        name="product_size"
                                        onChange={(e) =>
                                            setData(
                                                "product_size",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {productSizes.map((size) => (
                                            <MenuItem
                                                key={size.value}
                                                value={size.value}
                                            >
                                                {size.value}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        value={data.selling_price}
                                        fullWidth
                                        label="Price"
                                        id="selling_price"
                                        type="number"
                                        name="selling_price"
                                        onChange={(e) =>
                                            setData(
                                                "selling_price",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </FormControl>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

// <Button
//     fullWidth
//     variant="contained"
//     sx={{
//         p: 2,
//         bgcolor: "#9FCC86",
//     }}
//     disabled={processing}
// >
//     Submit
// </Button>;
