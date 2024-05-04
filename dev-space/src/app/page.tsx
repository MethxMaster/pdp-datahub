import Image from "next/image";
import contentStyles from '@/app/styles/ContentStyle.module.css'


export default function Home() {
  return (
    <div className={contentStyles['content-frame']}>
        <main className={contentStyles['dev-container']}>
            <h1>Home page draft</h1>
        </main>
    </div>
  );
}
