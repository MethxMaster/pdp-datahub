//import CSS file
import contentStyles from '@/app/styles/ContentStyle.module.css'


export default function PageLoad (){
    return (
        <div className={contentStyles['content-frame']}>
            <main className={contentStyles['content-container']}>
                <h1>knowledge forecast</h1>
            </main>
        </div>
    );
}