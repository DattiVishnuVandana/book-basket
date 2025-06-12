import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Testimonials } from './components/Testimonal'
import { Faq } from './components/Faq'
import { ProductList } from '../products/ProductList'
import { useTitle } from '../../hooks/useTitle'
export const HomePage = () => {
  useTitle("welcome to BookBasket")
  return (
    <div className='mx-40'>

<Hero/>

<Featured/>
<Testimonials/>
<Faq/>

    </div>
  )
}
