import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index';
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';
import Loader from './Loader';
import { wrap } from 'framer-motion';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const [ exchanges, setExchanges ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( false );
    useEffect( () => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get( `${ server }/exchanges` );
                setExchanges( data );
                setLoading( false );
            } catch ( error ) {
                setError( true );
                setLoading( false );
            }
        };
        fetchExchanges();
    }, [] );

    if ( error ) return <ErrorComponent message={ "Error while fetching exchanges" } />

    return (
        <Container maxW={ 'container.xl' }>
            { loading ? ( <Loader /> ) : (
                <>
                    <HStack justifyContent={ 'center' } wrap={ 'wrap' }>{ exchanges.map( ( i ) => (
                        <ExchangeCard key={ i.id } name={ i.name } image={ i.image } rank={ i.trust_score_rank } url={ i.url } />
                    ) ) }
                    </HStack>
                </> ) }
        </Container>
    )
}

const ExchangeCard = ( { key, name, image, rank, url } ) => (
    <a href={ url } target={ 'blank' }>
        <VStack justifyContent={ 'space-evenly' } textAlign={ 'center' } width={ '60' } shadow={ 'lg' } p={ '8' } borderRadius={ 'lg' } transition={ 'all 0.3s' } m={ '4' } css={ {
            "&:hover": {
                transform: "scale(1.1)"
            }
        } }>
            <Image src={ image } w={ "20" } h={ "20" } objectFit={ 'contain' } alt={ 'Exchange' } />
            <Heading size={ 'md' } noOfLines={ 1 }>{ rank }</Heading>
            <Text>{ name }</Text>
        </VStack>
    </a>
)

export default Exchanges