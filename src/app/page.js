import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <form action='?' method='POST'>
          <div className='g-recaptcha' data-sitekey='6LfuTEUpAAAAADWOEefHUqLjEgkUyEMJ-9F6HayK'></div>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </main>
  )
}

// 6LfuTEUpAAAAADWOEefHUqLjEgkUyEMJ-9F6HayK
