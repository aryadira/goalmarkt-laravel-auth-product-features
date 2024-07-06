import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function VerifyCode() {
    const { data, setData, post, processing, errors, reset } = useForm({
        code: "",
    });

    useEffect(() => {
        return () => {
            reset("code");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("verify.store"));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Code" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="code" value="OTP Code" />

                    <TextInput
                        id="code"
                        type="number"
                        name="code"
                        value={data.code}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("code", e.target.value)}
                    />

                    <InputError message={errors.code} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Confirm
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
