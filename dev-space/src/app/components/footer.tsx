
//import CSS file
import footerStyles from '@/app/styles/FooterStyle.module.css'

//import library
import Link from 'next/link';
import Image from 'next/image';


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

                <div className='py-2'>
                    Copyright &copy;2024 SPD EGAT
                    <hr/>
                </div>
            </div>

            <div className={footerStyles['footer-list-container']}>
                <div className={footerStyles['footer-menu']}>
                    <div className={footerStyles['footer-menu-title']}>PDP</div>
                    <hr/>
                    <Link href='/pdp/'><div className={footerStyles['footer-menu-item']}>Developing...</div></Link>
                </div>
                <div className={footerStyles['footer-menu']}>
                    <div className={footerStyles['footer-menu-title']}>Power plant</div>
                    <hr/>
                    <Link href='/powerplant/data/'><div className={footerStyles['footer-menu-item']}>Data</div></Link>
                    <Link href='/powerplant/knowledge/'><div className={footerStyles['footer-menu-item']}>Knowledge</div></Link>
                    <Link href='/powerplant/calculator/'><div className={footerStyles['footer-menu-item']}>Calculator</div></Link>

                </div>
                <div className={footerStyles['footer-menu']}>
                    <div className={footerStyles['footer-menu-title']}>Load forecast</div>
                    <hr/>
                    <Link href='https://pchunark.github.io/load_forecast_EGAT_strategies/' target='_blank'><div className={footerStyles['footer-menu-item']}>Overview (Github)</div></Link>

                </div>
            </div>

        </div>
    );
}