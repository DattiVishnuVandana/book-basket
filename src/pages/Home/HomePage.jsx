import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Testimonials } from './components/Testimonal'
import { Faq } from './components/Faq'

export const HomePage = () => {
  return (
    <div className='mx-40'>

<Hero/>

<Featured/>
<Testimonials/>
<Faq/>
    </div>
  )
}
