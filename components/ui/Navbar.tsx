import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { MenuOutlined } from '@mui/icons-material'
import NextLink from 'next/link'

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
            <NextLink href="/" passHref>
              <Link>
                <Typography variant='h6' color="white">Cookies-M</Typography>
              </Link>
            </NextLink>

            <div style={{ flex: 1}}/>

            <NextLink href="/theme-changer" passHref>
              <Link>
                <Typography variant='h6' color="white">Change Theme</Typography>
              </Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
