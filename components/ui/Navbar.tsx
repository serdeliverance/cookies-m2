import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuOutlined />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
