//import CSS file
import sidebarStyles from '@/app/styles/Sidebar.module.css'

//import library
import Link from 'next/link';

export default function SidebarPowerplant(){
    return (
        <>
            <aside className={sidebarStyles['sidebar-container']}>

                <div className={sidebarStyles['sidebar-category']}>
                    <div className={sidebarStyles['sidebar-title']}>
                        <b>Data summary</b>
                    </div>
                    <Link href='/powerplant/data/overview/'><div className={sidebarStyles['sidebar-section']}>Overview PDP runcase</div></Link>
                    <Link href='/powerplant/data/gas/'><div className={sidebarStyles['sidebar-section']}>Gas consumption</div></Link>
                    <Link href='/powerplant/data/co2/'><div className={sidebarStyles['sidebar-section']}>CO2</div></Link>
                    <Link href='/powerplant/data/production-cost/'><div className={sidebarStyles['sidebar-section']}>Production cost</div></Link>
                </div>
                <div className={sidebarStyles['sidebar-category']}>
                    <div className={sidebarStyles['sidebar-title']}>
                        <b>Basic knowledge</b>
                    </div>
                    <Link href='/powerplant/knowledge/overview/'><div className={sidebarStyles['sidebar-section']}>Overview</div></Link>
                    <Link href='/powerplant/knowledge/production-cost/'><div className={sidebarStyles['sidebar-section']}>Production cost</div></Link>
                    <Link href='/powerplant/knowledge/gas/'><div className={sidebarStyles['sidebar-section']}>Gas</div></Link>
                    <Link href='/powerplant/knowledge/co2/'><div className={sidebarStyles['sidebar-section']}>CO2</div></Link>
                </div>
                <div className={sidebarStyles['sidebar-category']}>
                    <div className={sidebarStyles['sidebar-title']}>
                        <b>Calculator</b>
                    </div>
                    <Link href='/powerplant/calculator/calco2/'><div className={sidebarStyles['sidebar-section']}>CO2 emission</div></Link>
                    <Link href='/powerplant/calculator/blendingh2/'><div className={sidebarStyles['sidebar-section']}>Blending H2</div></Link>
                    <Link href='/powerplant/calculator/lcoe/'><div className={sidebarStyles['sidebar-section']}>LCOE</div></Link>
                </div>


            </aside>
        </>
    );
}