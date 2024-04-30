//import CSS file
import navbarStyles from '@/app/styles/NavbarStyle.module.css'

//import library jsx
import Link from 'next/link';

export default function Navbar(){
    return (
        <nav className={navbarStyles['nav-container']}>

            <div className={navbarStyles['nav-left-part']}>
                <div className={navbarStyles['nav-icon']}>
                    MENU ICON
                </div>
                <div className={navbarStyles['nav-logo']}>
                    Logo
                </div>
                <div className={navbarStyles['nav-menu']}>
                    <Link href='/'><div className={navbarStyles['nav-menu-item']}>1</div></Link>
                    <Link href='/'><div className={navbarStyles['nav-menu-item']}>2</div></Link>
                    <Link href='/'><div className={navbarStyles['nav-menu-item']}>3</div></Link>
                </div>
            </div>


            <div className={navbarStyles['nav-right-part']}>
                <div className={navbarStyles['nav-search']}>
                    SEARCH FORMS
                </div> 
            </div>
            
        </nav>
    );
}