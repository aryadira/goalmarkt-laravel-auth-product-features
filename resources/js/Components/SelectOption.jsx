import { Description, Field, Label, Select } from "@headlessui/react";
import clsx from "clsx";

export default function SelectOption() {
    return (
        <div className="w-full max-w-md px-4">
            <Field>
                <Label className="text-sm/6 font-medium text-white">
                    Project status
                </Label>
                <Description className="text-sm/6 text-white/50">
                    This will be visible to clients on the project.
                </Description>
                <div className="relative">
                    <Select
                        className={clsx(
                            "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                            // Make the text of each option black on Windows
                            "*:text-black"
                        )}
                    >
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="delayed">Delayed</option>
                        <option value="canceled">Canceled</option>
                    </Select>
                </div>
            </Field>
        </div>
    );
}
