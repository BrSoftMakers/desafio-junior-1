import React from 'react'

import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import './styles.css'

export default function Header({ title, buttonTitle, onPress }) {
    return (
        <div className='header'>
            <Text as={'h1'} fontSize='3xl'>{title}</Text>

            <Button size={'lg'} onClick={onPress} >{buttonTitle}</Button>
        </div>
    )
}
