'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  let [students,setStudents] = useState(0)
  let [budget,setBudget] = useState(0)

  return (
    <div className="flex p-10">
      <div className="w-full border-2 p-4 rounded-lg bg-slate-100 bg-opacity-40 space-y-5">

        <div className="space-y-1">
          <h1 className="font-semibold text-lg">Budget</h1>
          <Input type="number" className="" placeholder="budget amount" 
          onChange={(e) => setBudget(parseInt(e.target.value))}/>
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold text-lg">Number of students</h1>
          <Input type="number" className="" placeholder="no. of students" 
          onChange={(e) => setStudents(parseInt(e.target.value))}/>
        </div>

        <div>

          <Link href={`/bill?budget=${budget}&students=${students}`}>
            <Button>Generate</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
