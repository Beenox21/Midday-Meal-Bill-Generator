'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  let [students,setStudents] = useState({
    primary : 0,
    upperPrimary : 0
  })

  let [budget,setBudget] = useState(
    {
      primary : 0,
      upperPrimary : 0
    }
  )

  let [numberOfDays, setNumberOfDays] = useState(113)
  
  return (
    <div className="flex md:p-10 h-[100vh] bg-slate-100">
      <div className="w-full md:border-2 p-4 md:rounded-lg  bg-opacity-40 space-y-5">
        <h1 className="text-center py-2 font-bold text-lg md:text-xl">MIDDAY MEAL BILL GENERATOR</h1>
        <div className="space-y-1">
          <h1 className="font-semibold md:text-lg">Budget for Primary Section</h1>
          <Input type="number" className="h-14" placeholder="budget amount" 
          onChange={(e) => setBudget((budget) => ({...budget, primary: parseInt(e.target.value)}))}/>
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold md:text-lg">Number of students in Primary section</h1>
          <Input type="number" className="h-14" placeholder="no. of students" 
          onChange={(e) => setStudents((preStudents) => ({...preStudents, primary : parseInt(e.target.value)}))}/>
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold md:text-lg">Budget for Upper Primary Section</h1>
          <Input type="number" className="h-14 " placeholder="budget amount" 
          onChange={(e) => setBudget((budget) => ({...budget, upperPrimary: parseInt(e.target.value)}))}/>
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold md:text-lg">Number of students in Upper Primary section</h1>
          <Input type="number" className="h-14" placeholder="no. of students" 
          onChange={(e) => setStudents((preStudents) => ({...preStudents, upperPrimary : parseInt(e.target.value)}))}/>
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold md:text-lg">Number of days</h1>
          <Input type="number" className="h-14" placeholder="no. of days" defaultValue={numberOfDays} 
          onChange={(e) => setNumberOfDays(parseFloat(e.target.value))}/>
        </div>

        <div>
          <Link href={`/bill?budgetPrimary=${budget.primary}&studentsPrimary=${students.primary}&budgetUpperPrimary=${budget.upperPrimary}&studentsUpperPrimary=${students.upperPrimary}&days=${numberOfDays}`}>
            <Button className="w-full h-14 text-lg">Generate</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
