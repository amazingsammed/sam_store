import React, {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {createChartofAccounts} from "@/app/_actions/account";
import {useFormState} from "react-dom";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {deleteStockItem, editStockItem} from "@/app/_actions/stock_item";
import CTextfield from "@/components/ktextfield";




