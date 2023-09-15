import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className={`hero`}>
        <div className={`banner-animation-wrapper  m-24`}>
        <div className={`banner-animation-wrapper-blur`}></div>
        </div><object type="image/svg+xml" data="/banner.svg" className={`banner-animation`}>svg-animation</object>
      </section>
    </main>
  )
}
