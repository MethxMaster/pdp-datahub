//import CSS file
import sidebarStyles from '@/app/styles/Sidebar.module.css'

//import library
import Link from 'next/link';

export default function Sidebar(){
    return (
        <>
            <aside className={sidebarStyles['sidebar-container']}>

                <div className={sidebarStyles['sidebar-category']}>
                    <div className={sidebarStyles['sidebar-title']}>
                        <b>Data summary</b>
                    </div>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>Overview PDP runcase</div></Link>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>Gas consumption</div></Link>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>CO2</div></Link>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>Production cost</div></Link>
                </div>
                <div className={sidebarStyles['sidebar-category']}>
                    <div className={sidebarStyles['sidebar-title']}>
                        <b>Basic knowledge</b>
                    </div>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>Overview</div></Link>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>Production cost</div></Link>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>Gas</div></Link>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>CO2</div></Link>
                </div>
                <div className={sidebarStyles['sidebar-category']}>
                    <div className={sidebarStyles['sidebar-title']}>
                        <b>Calculator</b>
                    </div>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>CO2 emission</div></Link>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>Blending H2</div></Link>
                    <Link href=''><div className={sidebarStyles['sidebar-section']}>LCOE</div></Link>
                </div>


            </aside>
        </>
    );
}