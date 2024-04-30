//import CSS file
import contentStyles from '@/app/styles/ContentStyle.module.css'


export default function PagePowerplant(){
    return (
        <div className={contentStyles['content-frame']}>
            <main className={contentStyles['content-container']}>
                <div>
                    <h1>Candidate data</h1>
                    <ul>
                        <li>Overview PDP runcase</li>
                        <li>Gas consumption</li>
                        <li>CO2</li>
                        <li>Production cost</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}