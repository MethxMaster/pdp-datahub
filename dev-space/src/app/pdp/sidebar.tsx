//import CSS file
import sidebarStyles from '@/app/styles/Sidebar.module.css'

//import library
import Link from 'next/link';

export default function SidebarPDP(){
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
                    {/* <Link href=''><div className={sidebarStyles['sidebar-section']}>Developing...</div></Link> */}
                    <div className={sidebarStyles['sidebar-section']}>Developing...</div>
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