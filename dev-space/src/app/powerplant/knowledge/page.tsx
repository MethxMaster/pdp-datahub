//import CSS file
import contentStyles from '@/app/styles/ContentStyle.module.css'


export default function PagePowerplant(){
    return (
        <div className={contentStyles['content-frame']}>
            <main className={contentStyles['content-container']}>
                <div>
                    <h1>Candidate knowledge</h1>
                    <ul>
                        <li>Overview</li>
                        <li>Production cost</li>
                        <li>Gas</li>
                        <li>CO2</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}