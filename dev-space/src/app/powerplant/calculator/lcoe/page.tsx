//import CSS file
import contentStyles from '@/app/styles/ContentStyle.module.css'


export default function PagePowerplant(){
    return (
        <div className={contentStyles['content-frame']}>
            <main className={contentStyles['content-container']}>
                <h1>Candidate Cal LCOE</h1>
            </main>
        </div>
    );
}