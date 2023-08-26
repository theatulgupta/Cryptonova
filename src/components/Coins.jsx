import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index';
import { Container, HStack, VStack, Image, Heading, Text, Button, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {

    const [ coins, setCoins ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( false );
    const [ page, setPage ] = useState( 1 );
    const [ currency, setCurrency ] = useState( 'inr' );
    const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const changePage = ( page ) => {
        setPage( page );
        setLoading( true );
    }
    const btns = new Array( 132 ).fill( 1 );
    useEffect( () => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get( `${ server }/coins/markets?vs_currency=${ currency }&page=${ page }` );
                setCoins( data );
                setLoading( false );
            } catch ( error ) {
                setError( true );
                setLoading( false );
            }
        };
        fetchCoins();
    }, [ currency, page ] );

    if ( error ) return <ErrorComponent message={ "Error while fetching coins..." } />

    return (
        <Container maxW={ 'container.xl' }>
            { loading ? ( <Loader /> ) : (
                <>
                    <RadioGroup value={ currency } onChange={ setCurrency } p={ '8' }>
                        <HStack spacing={ '4' }>
                            <Radio value={ 'inr' } >INR</Radio>
                            <Radio value={ 'eur' } >USD</Radio>
                            <Radio value={ 'usd' } >EUR</Radio>
                        </HStack>
                    </RadioGroup>
                    <HStack justifyContent={ 'space-evenly' } wrap={ 'wrap' }>{ coins.map( ( i ) => (
                        <CoinCard id={ i.id } name={ i.name } image={ i.image } symbol={ i.symbol } currencySymbol={ currencySymbol } price={ i.current_price } />
                    ) ) }
                    </HStack>
                    <HStack w={ 'full' } overflowX={ 'auto' } p={ '8' }>
                        {
                            btns.map( ( item, index ) => (
                                <Button key={ index } bgColor={ "blackAlpha.900" } color={ 'white' } onClick={ () => changePage( index + 1 ) }>{ index + 1 }</Button>

                            ) )
                        }
                    </HStack>

                </> ) }
        </Container>
    )
}

export default Coins;