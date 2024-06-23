'use client'
import { Table, TableBody,  TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


function Bill() {
    const searchParams = useSearchParams()
    const budget : any = {
        primary : searchParams.get('budgetPrimary'),
        upperPrimary : searchParams.get('budgetUpperPrimary')
    }

    const students : any = {
        primary : searchParams.get('studentsPrimary'),
        upperPrimary : searchParams.get('studentsUpperPrimary')
    }

    let items : any= [
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Potato',
            rate: 25,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.52,
            individualRateUpperPrimary : 0.90
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Onion',
            rate: 40,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.28,
            individualRateUpperPrimary : 0.70
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Salt',
            rate: 15,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.16,
            individualRateUpperPrimary : 0.22
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Dal',
            rate: 90,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.52,
            individualRateUpperPrimary : 0.99
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Oil',
            rate: 130,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.34,
            individualRateUpperPrimary : 0.65
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Nutrela',
            rate: 100,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.29,
            individualRateUpperPrimary : 0.55
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Peas',
            rate: 80,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.23,
            individualRateUpperPrimary : 0.40
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Chilly',
            rate: 260,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.16,
            individualRateUpperPrimary : 0.25
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Egg',
            rate: 8,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.90,
            individualRateUpperPrimary : 0.95
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Haldi',
            rate: 300,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.17,
            individualRateUpperPrimary : 0.27
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Masala',
            rate: 330,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.20,
            individualRateUpperPrimary : 0.37
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Pooran',
            rate: 380,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.14,
            individualRateUpperPrimary : 0.10
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Firewood',
            rate: 2000,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.77,
            individualRateUpperPrimary : 0.87
        },
    ]

    const numberOfDays : any = searchParams.get('days')

    let totalPrimary = 0
    let totalUpperPrimary = 0

    items.map((item : any) => {
        item.qtyPrimary = Math.floor((students.primary * numberOfDays * item.individualRatePrimary) / item.rate)
        item.totalPrimary = item.qtyPrimary * item.rate
        totalPrimary += item.totalPrimary

        item.qtyUPrimary = Math.floor((students.upperPrimary * numberOfDays * item.individualRateUpperPrimary) / item.rate)
        item.totalUpperPrimary = item.qtyUPrimary * item.rate
        totalUpperPrimary += item.totalUpperPrimary
     }
    )

    
    let [veg, setVeg] = useState({
        primary : 0,
        upperPrimary : 0
    })
    
    useEffect(() => {
        setVeg({
            primary : budget.primary-totalPrimary,
            upperPrimary : budget.upperPrimary-totalUpperPrimary,
        })

    }, [budget])

    return (

        <div className="mt-3"> 
            <h1 className="text-2xl text-slate-700 font-bold text-center py-2">MIDDAY MEAL 2023-2024</h1>
            <h1 className="px-4 text-lg text-slate-600 font-bold">Primary Section</h1>
            <h1 className="px-4 text-slate-500 ">Number of students: {students.primary}</h1>
            <h1 className="px-4 text-slate-500 ">Number of days: {numberOfDays}</h1>
            <Table className="border-t-2 mt-5">

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] ">Quantity</TableHead>
                        <TableHead>Item name</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item : any, index : any) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.qtyPrimary}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.rate}</TableCell>
                            <TableCell className="text-right">{item.totalPrimary}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell className="">-</TableCell>
                        <TableCell>Veg</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell className="text-right">{veg.primary}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-bold text-lg">Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="text-right font-bold text-lg">{budget.primary}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>


            <h1 className="px-4  font-bold text-slate-600 text-lg  mt-3  border-t-2 pt-5">Upper Primary Section</h1>
            <h1 className="px-4 text-slate-500 ">Number of students: {students.upperPrimary}</h1>
            <h1 className="px-4 text-slate-500 ">Number of days: {numberOfDays}</h1>
            <Table className="border-t-2 mt-5">

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] ">Quantity</TableHead>
                        <TableHead>Item name</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item : any, index : any) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.qtyUPrimary}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.rate}</TableCell>
                            <TableCell className="text-right">{item.totalUpperPrimary}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell className="">-</TableCell>
                        <TableCell>Veg</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell className="text-right">{veg.upperPrimary}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-bold text-lg">Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="text-right font-bold text-lg">{budget.upperPrimary}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>

    )
}

export default Bill
