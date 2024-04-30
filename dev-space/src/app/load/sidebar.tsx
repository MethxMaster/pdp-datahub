//import CSS file
import sidebarStyles from '@/app/styles/Sidebar.module.css'

//import library
import Link from 'next/link';

export default function SidebarLoad(){
    return (
        <>
            <aside className={sidebarStyles['sidebar-container']}>

                <div className={sidebarStyles['sidebar-category']}>
                    <div className={sidebarStyles['sidebar-title']}>
                        <b>Data summary</b>
                    </div>
                    {/* <Link href=''><div className={sidebarStyles['sidebar-section']}>Developing...</div></Link> */}
                    <div className={sidebarStyles['sidebar-section']}>Developing...</div>
                </div>
                <div className={sidebarStyles['sidebar-category']}>
                    <div className={sidebarStyles['sidebar-title']}>
                        <b>Basic knowledge</b>
                    </div>
                    <Link href='https://pchunark.github.io/load_forecast_EGAT_strategies/' target='_blank'><div className={sidebarStyles['sidebar-section']}>Overview</div></Link>
                </div>
                <div className={sidebarStyles['sidebar-category']}>
                    <div className={sidebarStyles['sidebar-title']}>
                        <b>Calculator</b>
                    </div>
                    {/* <Link href=''><div className={sidebarStyles['sidebar-section']}>Developing...</div></Link> */}
                    <div className={sidebarStyles['sidebar-section']}>Developing...</div>
                </div>


            </aside>
        </>
    );
}