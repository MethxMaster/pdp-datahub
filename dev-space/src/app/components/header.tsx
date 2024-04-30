//import CSS file
import navbarStyles from '@/app/styles/NavbarStyle.module.css'

//import library jsx
import Link from 'next/link';

export default function Navbar(){
    return (
        <>
            <nav className={navbarStyles['nav-container']}>

                <div className={navbarStyles['nav-left-part']}>
                    <div className={navbarStyles['nav-icon']}>
                        MENU ICON
                    </div>
                    <div className={navbarStyles['nav-logo']}>
                        <Link href='/'><div className={navbarStyles['nav-menu-item']}>LOGO</div></Link>
                    </div>
                    <div className={navbarStyles['nav-menu']}>
                        <Link href='/pdp/'><div className={navbarStyles['nav-menu-item']}>PDP</div></Link>
                        <Link href='/powerplant/'><div className={navbarStyles['nav-menu-item']}>Power plant</div></Link>
                        <Link href='/load/'><div className={navbarStyles['nav-menu-item']}>Load forecast</div></Link>
                    </div>
                </div>


                <div className={navbarStyles['nav-right-part']}>
                    <div className={navbarStyles['nav-search']}>
                        SEARCH FORMS
                    </div> 
                </div>
                
            </nav>
            <div className={navbarStyles['nav-empty']}>
                EMPTY BOX
            </div>

        </>
        
    );
}