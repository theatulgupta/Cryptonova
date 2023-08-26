import React from 'react'
import { Link } from 'react-router-dom'
import { Text, VStack, Heading, Image } from '@chakra-ui/react'

const CoinCard = ( { id, name, image, symbol, currencySymbol, price } ) => (
    <Link to={ `/coin/${ id }` }>
        <VStack justifyContent={ 'center' } textAlign={ 'center' } width={ '60' } shadow={ 'lg' } p={ '8' } borderRadius={ 'lg' } transition={ 'all 0.3s' } m={ '4' } css={ {
            "&:hover": {
                transform: "scale(1.1)"
            }
        } }>
            <Image src={ image } w={ "20" } h={ "20" } objectFit={ 'contain' } alt={ 'Exchange' } />
            <Heading textTransform={ 'uppercase' } size={ 'md' } noOfLines={ 1 }>{ symbol }</Heading>
            <Text noOfLines={ 1 }>{ name }</Text>
            <Text noOfLines={ 1 }>{ price ? `${ currencySymbol }${ price }` : 'NA' }</Text>
        </VStack>
    </Link>
);

export default CoinCard