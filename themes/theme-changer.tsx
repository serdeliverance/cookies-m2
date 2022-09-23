import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { Layout } from '../components/layouts'

const ThemeChanger = () => {

    const [currentTheme, setCurrentTheme] = useState('light')

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) =>
        setCurrentTheme(event.target.value)

  return (
    <Layout>
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel>Theme</FormLabel>
                    <RadioGroup
                        value={currentTheme}
                    >
                        <FormControlLabel value='light' control={<Radio />} label='Light'></FormControlLabel>
                        <FormControlLabel value='dark' control={<Radio />} label='Dark'></FormControlLabel>
                        <FormControlLabel value='custom' control={<Radio />} label='Custom'></FormControlLabel>
                    </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>
    </Layout>
  )
}

export default ThemeChanger