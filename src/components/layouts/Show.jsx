import React from 'react'
import Container from '../Container'
import Image from '../Image'

import show1 from '../../assets/2221.png'
import show2 from '../../assets/2222.png'
import Flex from '../Flex'


const Show = () => {
  return (
    <>
    <Container className={`py-20`}>
      <Flex className={`gap-x-5`}>
         <div className="">
            <Image src={show1}/>
         </div>
         <div className="">
            <Image src={show2}/>
         </div>
      </Flex>
    </Container>
    </>
  )
}

export default Show