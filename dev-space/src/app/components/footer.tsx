
//import CSS file
import footerStyles from '@/app/styles/FooterStyle.module.css'

//import library
import Link from 'next/link';


export default function Footer(){
    return (
        <div className={footerStyles['footer-container']}>

            <div className={footerStyles['footer-contact']}>
                <div className={footerStyles['footer-contact-quote']}>
                    Tell anything to us
                </div>
                <div className={footerStyles['footer-contact-form']}>
                    <form>
                        <label htmlFor="fname">Information</label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            value=''
                        />
                        <input type="button" value="Submit" />
                    </form> 
                </div>
            </div>


            <div className={footerStyles['footer-logo']}>
                <div className=''>
                    LOGO
                </div>
                <div className=''>
                    Copyright &copy;2024 SPD EGAT
                </div>
            </div>

            <div className={footerStyles['footer-list-container']}>
                <div className={footerStyles['footer-menu']}>
                    <div className={footerStyles['footer-menu-title']}>PDP</div>
                    <Link href='/'><div className={footerStyles['footer-menu-item']}>Data</div></Link>
                    <Link href='/'><div className={footerStyles['footer-menu-item']}>Library</div></Link>
                    <Link href='/'><div className={footerStyles['footer-menu-item']}>Calculator</div></Link>
                </div>
                <div className={footerStyles['footer-menu']}>
                    <div className={footerStyles['footer-menu-title']}>Power plant</div>
                    <Link href='/'><div className={footerStyles['footer-menu-item']}>Data</div></Link>
                    <Link href='/'><div className={footerStyles['footer-menu-item']}>Library</div></Link>
                    <Link href='/'><div className={footerStyles['footer-menu-item']}>Calculator</div></Link>
                </div>
                <div className={footerStyles['footer-menu']}>
                    <div className={footerStyles['footer-menu-title']}>Load</div>
                    <Link href='/'><div className={footerStyles['footer-menu-item']}>Data</div></Link>
                    <Link href='/'><div className={footerStyles['footer-menu-item']}>Library</div></Link>
                    <Link href='/'><div className={footerStyles['footer-menu-item']}>Calculator</div></Link>
                </div>
            </div>

        </div>
    );
}