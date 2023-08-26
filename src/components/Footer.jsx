import { Avatar, Box, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import founderSrc from '../assets/founder.jpg'

const Footer = () => {
    return (
        <Box bgColor={ 'blackAlpha.900' } color={ 'whiteAlpha.700' } minHeight={ '48' } px={ 16 } py={ [ 16, 8 ] }>
            <Stack direction={ [ 'column', 'row' ] } h={ 'full' } alignItems={ 'center' }>
                <VStack w={ 'full' } alignItems={ [ 'center', 'flex-start' ] }>
                    <Text fontWeight={ 'bold' }>About Us</Text>
                    <Text fontSize={ 'sm' } letterSpacing={ 'widest' } textAlign={ [ 'center', 'left' ] }>We are the best Crypto Trading App in India, we provide our guidance at a reasonable price.</Text>
                </VStack>
                <VStack w={ ['full',"20vw"] } alignItems={'center'} mr={['0','-16']}>
                    <Avatar src={ founderSrc } boxSize={ '28' } mt={ [ '4', '0' ] } />
                    <Text fontWeight={ 'bold' } textAlign={ 'center' }>Atul Kumar Gupta</Text>
                    <Text textAlign={ 'center' }>Our Founder</Text>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer