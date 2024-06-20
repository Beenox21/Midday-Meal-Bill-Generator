'use client'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


function Bill() {
    const seachParams = useSearchParams()
    let [budget,setBudget] : any = useState(seachParams.get('budget'))
    let [students,setStudents] : any = useState(seachParams.get('students'))
    let [veg, setVeg] = useState(0)

    let [items, setItems] = useState([
        {
            qty: 0,
            name: 'Potato',
            rate: 25,
            total: 0,
            individualRate: 0.52
        },
        {
            qty: 0,
            name: 'Onion',
            rate: 40,
            total: 0,
            individualRate: 0.28
        },
        {
            qty: 0,
            name: 'Salt',
            rate: 15,
            total: 0,
            individualRate: 0.16
        },
        {
            qty: 0,
            name: 'Dal',
            rate: 90,
            total: 0,
            individualRate: 0.52
        },
        {
            qty: 0,
            name: 'Oil',
            rate: 130,
            total: 0,
            individualRate: 0.34
        },
        {
            qty: 0,
            name: 'Nutrela',
            rate: 100,
            total: 0,
            individualRate: 0.29
        },
        {
            qty: 0,
            name: 'Peas',
            rate: 80,
            total: 0,
            individualRate: 0.23
        },
        {
            qty: 0,
            name: 'Chilly',
            rate: 260,
            total: 0,
            individualRate: 0.16
        },
        {
            qty: 0,
            name: 'Egg',
            rate: 8,
            total: 0,
            individualRate: 0.90
        },
        {
            qty: 0,
            name: 'Haldi',
            rate: 300,
            total: 0,
            individualRate: 0.17
        },
        {
            qty: 0,
            name: 'Masala',
            rate: 330,
            total: 0,
            individualRate: 0.20
        },
        {
            qty: 0,
            name: 'Pooran',
            rate: 380,
            total: 0,
            individualRate: 0.14
        },
        {
            qty: 0,
            name: 'Firewood',
            rate: 2000,
            total: 0,
            individualRate: 0.77
        },
    ])


    let total = 0
    items.map((item) => {
        item.qty = Math.floor((students * 85.54 * item.individualRate) / item.rate)
        item.total = item.qty * item.rate
        total += item.total
    }
    )
    
    useEffect(() => {
        setVeg(budget-total)

    }, [budget])
    return (

        <div>
            <h1 className="p-4 text-lg font-semibold">Number of students: {students}</h1>
            <h1 className="px-4 text-lg font-semibold">Number of days: 85.54</h1>
            <h1 className="px-4 text-lg font-semibold">School: Primary</h1>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] ">Quantity</TableHead>
                        <TableHead>Item name</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.qty}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.rate}</TableCell>
                            <TableCell className="text-right">{item.total}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell className="">-</TableCell>
                        <TableCell>Veg</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell className="text-right">{veg}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-bold text-lg">Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="text-right font-bold text-lg">{budget}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>

    )
}

export default Bill
