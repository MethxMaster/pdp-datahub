//import CSS file
import contentStyles from '@/app/styles/ContentStyle.module.css'


export default function PagePowerplant(){
    return (
        <div className={contentStyles['content-frame']}>
            <main className={contentStyles['content-container']}>
                <div>
                    <h1>Candidate Calculator</h1>
                    <ul>
                        <li>CO2 Emission</li>
                        <li>Blending H2</li>
                        <li>LCOE</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}