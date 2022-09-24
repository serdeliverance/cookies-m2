import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Layout } from '../components/layouts'
import { GetServerSideProps } from 'next'
import axios from 'axios'

interface Props {
    content: string
}

const ThemChangerPage: FC<Props> = (props) => {

    const [currentTheme, setCurrentTheme] = useState('light')

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newTheme = event.target.value
        
        setCurrentTheme(newTheme)
        
        localStorage.setItem('theme', newTheme)

        Cookies.set('theme', newTheme)
    }

    const onClick = async() => {
        const {data} = await axios.get('/api/hello')
        console.log(data)
    }

    useEffect(() => {
        // reading cookies and local storage
        const cookies =  Cookies.get('theme')
        console.log(cookies);
    }, [])
    

  return (
    <Layout>
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel>Theme</FormLabel>
                    <RadioGroup
                        value={currentTheme}
                        onChange={onThemeChange}
                    >
                        <FormControlLabel value='light' control={<Radio />} label='Light'></FormControlLabel>
                        <FormControlLabel value='dark' control={<Radio />} label='Dark'></FormControlLabel>
                        <FormControlLabel value='custom' control={<Radio />} label='Custom'></FormControlLabel>
                    </RadioGroup>
                </FormControl>
                <Button onClick={onClick}>Request</Button>
            </CardContent>
        </Card>
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const { theme = 'No theme'} = req.cookies

    console.log(theme);
    
    return {
        props: {
            theme: 'ble'
        }
    }
}

export default ThemChangerPage