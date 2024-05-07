'use client'

//import CSS file
import contentStyles from '@/app/styles/ContentStyle.module.css'

//import hook
import React, { useState,useEffect,useRef } from 'react';

//import chart
import { Chart } from 'react-chartjs-2';

export default function PagePowerplant(): JSX.Element {

    //Initial value
    const fuelList:string[] = ['Gas', 'Coal', 'Lignite', 'Diesel']
    const assumptionIPCC:string[] = ['IPCC1996', 'IPCC2006']

    // Declare fuel
    const [fuelSelected, setFuelSelected] = useState<string>(fuelList[0]);
    const [IPCCSelected, setIPCCSelected] = useState<string>(assumptionIPCC[1])

    //handling event
    const selectAssumption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIPCCSelected(event.target.value)
    }
    const selectFuel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFuelSelected(event.target.value)
    }



    return (
        <div className={contentStyles['content-frame']}>
            <main className={contentStyles['content-container']}>

                <div className='text-center'>
                    <h1>Candidate Cal co2</h1>
                </div>
                <div className='border-2 border-red-500 p-6'>
                    Chart
                </div>
                <div className='border-2 border-red-500 p-5'>
                    <form>


                        {/* Assumption */}
                        <div className='border-2 border-gray-900 p-2'>
                            <label>Assumption - </label>
                            <select value={IPCCSelected} onChange={selectAssumption}>
                                {assumptionIPCC.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })}
                            </select>
                            <label> - selected : {IPCCSelected}</label>
                        </div>

                        {/* Fuel consumption */}
                        <div className='border-2 border-gray-900 p-2'>
                            <label>Fuel - </label>
                            <select value={fuelSelected} onChange={selectFuel}>
                                {fuelList.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })}
                            </select>
                            <label> - select : {fuelSelected}</label>
                        </div>

                        {/* Heat sector */}
                        <div className='border-2 border-gray-900 p-2'>
                            <label>NCV - </label>
                            <input type='text' value='draft'></input>
                            <span> -&gt; Energy produced</span> 
                        </div>

                        {/* Carbon sector */}
                        <div className='border-2 border-gray-900 p-2'>
                            <label>Carbon emission factor - </label>
                            <input type='text' value='draft'></input>
                            <span> -&gt; Carbon content</span> 
                        </div>

                        {/* Oxidised sector */}
                        <div className='border-2 border-gray-900 p-2'>
                            <label>Oxidised factor - </label>
                            <input type='text' value='1.000'></input>
                            <span> -&gt; Carbon after oxidation -&gt; CO2 Emission</span> 
                        </div>
                            


                    </form>
                </div>
            </main>
        </div>
    );
}
