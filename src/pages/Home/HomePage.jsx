import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Testimonials } from './components/Testimonal'
import { Faq } from './components/Faq'
import { ProductList } from '../products/ProductList'

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
