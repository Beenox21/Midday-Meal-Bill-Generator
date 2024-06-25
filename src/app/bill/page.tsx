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
            individualRateUpperPrimary : 0.70
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Onion',
            rate: 40,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.25,
            individualRateUpperPrimary : 0.17
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Salt',
            rate: 15,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.05,
            individualRateUpperPrimary : 0.09
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Masoor Dal',
            rate: 90,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.52,
            individualRateUpperPrimary : 0.99
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Mustard Oil',
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
            individualRateUpperPrimary : 0.65
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Dry Peas',
            rate: 80,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.23,
            individualRateUpperPrimary : 0.50
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Dry Chilly',
            rate: 260,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.05,
            individualRateUpperPrimary : 0.05
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Egg',
            rate: 8,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 1.50,
            individualRateUpperPrimary : 2.4
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Haldi Powder',
            rate: 300,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.08,
            individualRateUpperPrimary : 0.08
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Sabji Masala',
            rate: 330,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.08,
            individualRateUpperPrimary : 0.08
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Pas Pooran',
            rate: 380,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.05,
            individualRateUpperPrimary : 0.05
        },
        {
            qtyPrimary : 0,
            qtyUPrimary : 0,
            name: 'Firewood',
            rate: 2000,
            totalPrimary: 0,
            totalUpperPrimary : 0,
            individualRatePrimary: 0.3,
            individualRateUpperPrimary : 0.3
        },
    ]

    const numberOfDays : any = searchParams.get('days')

    let totalPrimary = 0
    let totalUpperPrimary = 0

    items.map((item : any) => {
        item.qtyPrimary = Math.round((students.primary * numberOfDays * item.individualRatePrimary) / item.rate)
        item.totalPrimary = item.qtyPrimary * item.rate
        totalPrimary += item.totalPrimary
        if(item.name === 'Mustard Oil')
            item.qtyPrimary += ' ltr'
        else if(item.name === 'Egg')
            item.qtyPrimary += ' pcs'
        else if(item.name === 'Firewood')
            item.qtyPrimary += ' trip'
        else 
            item.qtyPrimary += ' kg'

        item.qtyUPrimary = Math.ceil((students.upperPrimary * numberOfDays * item.individualRateUpperPrimary) / item.rate)
        item.totalUpperPrimary = item.qtyUPrimary * item.rate 
        if(item.name === 'Mustard Oil')
            item.qtyUPrimary += ' ltr'
        else if(item.name === 'Egg')
            item.qtyUPrimary += ' pcs'
        else if(item.name === 'Firewood')
            item.qtyUPrimary += ' trip'
        else 
            item.qtyUPrimary += ' kg'
        
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
            <h1 className="text-xl text-slate-700 font-bold text-center pt-2 pb-4">MIDDAY MEAL 2023-2024</h1>
            <h1 className="px-4 text-lg text-slate-600 font-bold">Primary Section</h1>
            <h1 className="px-4 text-slate-500 ">Number of students: {students.primary}</h1>
            <h1 className="px-4 text-slate-500 ">Number of days: {numberOfDays}</h1>
            <Table className=" border-t-[1px] mt-5">

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
                        <TableCell>G. Vegetables</TableCell>
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


            {/* <h1 className="px-4  font-bold text-slate-600 text-lg  mt-3  border-t-2 pt-5">Upper Primary Section</h1>
            <h1 className="px-4 text-slate-500 ">Number of students: {students.upperPrimary}</h1>
            <h1 className="px-4 text-slate-500 ">Number of days: {numberOfDays}</h1> */}
            <Table className="hidden border-t-[1px] mt-5">

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
                        <TableCell>G. Vegetables</TableCell>
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
