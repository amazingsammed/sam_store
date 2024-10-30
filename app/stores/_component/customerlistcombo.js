
"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useEffect} from "react";
import {getCustomers, getCustomersComboBox} from "@/app/_actions/customer";
import {useParams} from "next/navigation";
import {Label} from "@/components/ui/label";
export function CustomerListCombo({onChange,onPressed}) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [list, setList] = React.useState([])
    const param = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const results = await getCustomersComboBox(param.storeid);
            if (results.length === 0) return;
            setList(results);
        }
        fetchData()
    },[])
    return (
        <div className="flex flex-col gap-3">
            <Label>Customer</Label>
            <div className="flex flex-row gap-2">

        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? list.find((item) => item.uuid === value)?.name
                        : "Select a Customer..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search customer" />
                    <CommandList>
                        <CommandEmpty>No Customer found.</CommandEmpty>
                        <CommandGroup>
                            {list.map((element,i) => (
                                <CommandItem
                                    key={i}
                                    value={element.uuid}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        onChange(element)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === element.uuid ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {element.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>

                <Button onClick={onPressed} variant='outline'>+</Button>
            </div>
        </div>
    )
}


