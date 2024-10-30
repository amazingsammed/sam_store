"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useState} from "react";
import {Label} from "@/components/ui/label";

export function DatePickerWithPresets({label ,onChange}) {
    const [date, setDate] = useState(new Date());

    function handleDateChange(e) {
        console.log(date);
        setDate(addDays(new Date(), parseInt(e)));
            onChange(date);
    }
    function handleDateChange2(a) {
        console.log(a);
        setDate(a);
        onChange(a);
    }

    return (
        <div className="flex flex-col gap-3 w-full">
            <Label>{label}</Label>
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal gap-2",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                    onValueChange={handleDateChange
                    }
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="0">Today</SelectItem>
                        <SelectItem value="1">Tomorrow</SelectItem>
                        <SelectItem value="3">In 3 days</SelectItem>
                        <SelectItem value="7">In a week</SelectItem>
                    </SelectContent>
                </Select>
                <div className="rounded-md border">
                    <Calendar mode="single" selected={date} onSelect={handleDateChange2} />
                </div>
            </PopoverContent>
        </Popover>
        </div>
    )
}
