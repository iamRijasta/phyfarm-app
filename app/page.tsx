import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className={`hero`}>
       <div className="container">
       <div className={`banner-animation-wrapper`}>
        <div className={`banner-animation-wrapper-blur`}></div>
        </div><object type="image/svg+xml" data="/banner.svg" className={`banner-animation`}>svg-animation</object>
       </div>
      </section>
      <section className={`device-section`}>
        <object type="image/svg+xml" data="/PhyFarm-Device.svg" className={`device-animation`}>svg-animation</object>
      </section>
      <section className={`device-section`}>
        <object type="image/svg+xml" data="/PhyFarm-Device-Mobile.svg" className={`device-animation`}>svg-animation</object>
      </section>
      
    </main>
    
  )
}
