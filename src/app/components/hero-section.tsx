
import Link from 'next/link'
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <div 
      className="relative h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(/img1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-8 leading-tight">
          manage your properties easly
          <br />
          rent a property
        </h1>
       <Link href='/register'>
       <Button>
        GET STARTED
       </Button>
       </Link>
      </div>
    </div>
  )
}

