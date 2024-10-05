import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className='flex justify-center items-center p-16'>
      <SignUp />
    </section>)
}