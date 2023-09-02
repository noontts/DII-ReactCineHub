import React from 'react'
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <BiIcons.BiSolidGridAlt className='icon'/>,
        cName:'nav-text'

    },
    {
        title: 'Top Rate',
        path: '/top-rate/1',
        icon:  <BiIcons.BiSolidStar className='icon_top'/>,
        cName:'nav-text'

    },
    {
        title: 'Favorite',
        path: '/Favorite',
        icon: <BiIcons.BiSolidHeart className='icon_fav'/>,
        cName:'nav-text'

    },
    {
        title: 'Logout',
        path: '/Logout',
        icon: <BiIcons.BiSolidLogOut className='icon'/>,
        cName:'nav-text-logout'

    },
]