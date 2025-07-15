import Heading from './Heading'
import Container from '../Container'
import Flex from '../Flex'
import Product from './Product'

import One from '../../assets/image 10.png'
import Two from '../../assets/image 9.png'
import Three from '../../assets/image 7.png'
import Four from '../../assets/image 11.png'
import Five from '../../assets/image 12.png'
import Six from '../../assets/image 14.png'
import Seven from '../../assets/image 5.png'
import Eight from '../../assets/image 15.png'

const ProductShow = () => {
  return (
   <Container className={`my-20`}>
       <Heading className={`text-[35px] text-center`} txt={"Our trendy products"} as={'h3'}/>
       <Flex className={`justify-center gap-x-6.5 text-[14px] text-[#6B7280] mt-3 uppercase`}>
         <p>All</p>
         <p>New Arrival</p>
         <p>Bes Seller</p>
         <p>Top Rating</p>
       </Flex>

       <Flex className={`justify-center gap-y-20 gap-x-5 mt-10 flex-wrap`}>
         <Product className={`mb-10`} src={One} />
         <Product className={`mb-10`} src={Two} />
         <Product className={`mb-10`} src={Three} />
         <Product className={`mb-10`} src={Four} />
         <Product src={Five} />
         <Product src={Six} />
         <Product src={Seven} />
         <Product src={Eight} />
       </Flex>
   </Container>
  )
}

export default ProductShow