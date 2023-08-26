import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import btcSrc from '../assets/bitcoin.png'
import { motion, reverseEasing } from 'framer-motion'

const Home = () => {
  return ( <Box bgColor={ 'blackAlpha.900' } w={ 'full' } h={ '85vh' }>
    <motion.div
      style={ {
        height: '80vh'
      } }
      animate={ {
        translateY: "20px"
      } }
      transition={ {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse'
      } }>
      <Image src={ btcSrc } w={ 'full' } h={ 'full' } objectFit={ 'contain' } filter={ "grayscale(1)" }></Image>
    </motion.div>
    <Text
      color={ 'whiteAlpha.700' }
      fontSize={ '6xl' }
      textAlign={ 'center' }
      fontWeight={ 'thin' }
      marginTop={ [ '-180', '-20' ] }
    >Cryptonova
    </Text>
  </Box>
  );
}

export default Home;