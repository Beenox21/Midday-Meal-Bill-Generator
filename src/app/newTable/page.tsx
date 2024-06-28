'use client'
import React from 'react'


function Page() {
    

    return (
        <div className='p-8' id='table'>
            <h1 className='cursor-pointer hover:scale-105 hover:text-indigo-500 transition-all duration-150 text-xl font-bold text-center m-10'>Generate pdf</h1>
            <div className='border-b-0 border border-black p-2 text-sm'>
                <div className='flex justify-between '>
                    <div>
                        <h1 className=' '>GSTIN: 12BANPM4724K2ZJ</h1>
                    </div>
                    <div >
                        <h1 className=''>Mob: 8787824091</h1>
                        <h1 className='text-right'>8415085516</h1>

                    </div>
                </div>

                <h1 className='text-3xl font-sans font-bold text-center mb-4'>M/s. MURARI ENTERPRISES</h1>

                <div className='text-center'>
                    <p>
                        <i className='mr-2'>
                            Deals in:
                        </i>
                        All Kinds of Hardware goods  & General Order Supplier
                    </p>
                    <h1>VILL - MOHONG MURA, BORDUMSA</h1>
                    <h1>DIST. CHANGLANG ( ARUNACHAL PRADESH )</h1>
                </div>
            </div>
            <table className='w-full text-xs'>
                <tbody>

                <tr>
                    <td className='border border-black text-center'>SL NO. 
                        <span className='font-bold text-red-500 ml-1'>609</span>
                        </td>
                    <td className='border border-black text-center'>Date: 14/6/2024</td>
                    <td className='border  border-black '>
                        

                        State : Arunachal Pradesh <br/>
                        State Code : 12    
            
                        
                    </td>
                </tr>
                <tr>
                    <td className='border border-black' colSpan={2}>
                        The Deputy Director of School Education <br/>
                        Changlang (AP)<br/>
                        MDM 2023-2024 (113 days)
                    </td>
                    <td className='border border-black'>
                        Vehicle No. AR-20-5247 <br/>
                        Place of Supply : <strong>GUPS LONGKHAM PONTHAI</strong>
                    </td>
                </tr>
                
                </tbody>
            </table>

            <table className='w-full text-xs'>
                <thead>
                <tr>
                    <td className='border border-black border-t-0'>QNTY.</td>
                    <td className='border border-black border-t-0'>Description</td>
                    <td className='border border-black border-t-0'>RATE</td>
                    <td className='border border-black border-t-0'>Taxable <br/> Value 0%</td>
                    <td className='border border-black border-t-0'>Taxable <br/> Value 5%</td>
                    <td className='border border-black border-t-0'>Taxable <br/> Value 12%</td>
                    <td className='border border-black border-t-0'>Taxable <br/> Value 18%</td>
                    <td className='border border-black border-t-0'>Taxable <br/> Value 28%</td>
                    <td className='text-center border border-t-0 border-black'>TOTAL <br/> AMOUNT</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Potato</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>

                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Onion</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Salt</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Masoor Dal</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Mustard Oil</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Nutrela</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Dry Peas</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Dry Chilly</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Egg</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Haldi Powder</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Sabji Masala</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Pas Pooran</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'>24 kg</td>
                    <td className='border border-black'>Firewood</td>
                    <td className='text-right border border-black'>25/-</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black'> - </td>
                    <td className='border border-black'>G. Vegetables</td>
                    <td className='text-right border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>600</td>

                </tr>
                <tr>
                    <td className='border border-black font-semibold' colSpan={2}> Bank Details </td>
                    
                    <td className='text-right border border-black font-semibold'>Total before Tax</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'>1225</td>

                </tr>
                <tr>
                    <td className='border border-black ' colSpan={2}> Bank: State Bank of India </td>
                    
                    <td className='text-right border border-black '>Add: CGST</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'></td>

                </tr>

                <tr>
                    <td className='border border-black ' colSpan={2}> Branch: Bordumsa</td>
                    
                    <td className='text-right border border-black '>Add: SGST</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'></td>

                </tr>

                <tr>
                    <td className='border border-black ' colSpan={2}> A/c. No.: 38041710002</td>
                    
                    <td className='text-right border border-black '>Add: IGST</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right'></td>

                </tr>
                <tr>
                    <td className='border border-black ' colSpan={2}> IFSC: SBIN0009407</td>
                    
                    <td className='text-right border border-black font-semibold'>Total after Tax</td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black'></td>
                    <td className='border border-black text-right font-bold'>9232</td>

                </tr>
                </tbody>
            </table>
            <div className='pt-5 border border-black border-t-0 p-2'>
                <span className='mr-1 font-bold'>Rupees:</span><i>Nine thousand two hundred thirty two only.</i>
                <h1 className='mt-5 font-bold text-right'>M/s MURARI ENTERPRISES</h1>
            </div>

        </div>
    )
}

export default Page
