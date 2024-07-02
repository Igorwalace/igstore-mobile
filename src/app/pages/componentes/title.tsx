import React from 'react'
import { Text } from 'react-native'

interface Title {
    title: string
}

const Title = ({ title }: Title) => {
    return (
        <Text className='text-white text-base font-extrabold ml-1 pb-2 uppercase' >{title}</Text>
    )
}

export default Title