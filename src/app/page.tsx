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
    <div className="flex p-10">
      <div className="w-full border-2 p-4 rounded-lg bg-slate-100 bg-opacity-40 space-y-5">

        <div className="space-y-1">
          <h1 className="font-semibold text-lg">Budget for Primary Section</h1>
          <Input type="number" className="" placeholder="budget amount" 
          onChange={(e) => setBudget((budget) => ({...budget, primary: parseInt(e.target.value)}))}/>
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold text-lg">Number of students in Primary section</h1>
          <Input type="number" className="" placeholder="no. of students" 
          onChange={(e) => setStudents((preStudents) => ({...preStudents, primary : parseInt(e.target.value)}))}/>
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold text-lg">Budget for Upper Primary Section</h1>
          <Input type="number" className="" placeholder="budget amount" 
          onChange={(e) => setBudget((budget) => ({...budget, upperPrimary: parseInt(e.target.value)}))}/>
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold text-lg">Number of students in Upper Primary section</h1>
          <Input type="number" className="" placeholder="no. of students" 
          onChange={(e) => setStudents((preStudents) => ({...preStudents, upperPrimary : parseInt(e.target.value)}))}/>
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold text-lg">Number of days</h1>
          <Input type="number" className="" placeholder="no. of days" defaultValue={numberOfDays} 
          onChange={(e) => setNumberOfDays(parseInt(e.target.value))}/>
        </div>

        <div>
          <Link href={`/bill?budgetPrimary=${budget.primary}&studentsPrimary=${students.primary}&budgetUpperPrimary=${budget.upperPrimary}&studentsUpperPrimary=${students.upperPrimary}&days=${numberOfDays}`}>
            <Button>Generate</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
