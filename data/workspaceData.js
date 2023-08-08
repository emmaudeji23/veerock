import {AiOutlineCompass} from 'react-icons/ai'
import {FiShoppingCart, FiHelpCircle, FiFile, FiBook, FiDollarSign} from 'react-icons/fi';
import {MdOutlineEmail,MdOutlineMarkEmailUnread, MdOutlineMarkEmailRead, } from 'react-icons/md'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {SiMinutemailer} from 'react-icons/si'



export const workspaceLinks = [
    {
        icon: <AiOutlineCompass/>,
        title: 'dashboard',
        link: '/workspace/dashboard'
    },
    {
        icon: <FiShoppingCart/>,
        title: 'orders',
        link: '/workspace/orders'
    },
    {
        icon: <FiDollarSign/>,
        title: 'invoices',
        link: '/workspace/invoices'
    },
    {
        icon: <FiBook/>,
        title: 'inventory',
        link: '/workspace/inventory'
    },
    {
        icon: <FiFile/>,
        title: 'quotes',
        link: '/workspace/quotes'
    },
    {
        icon: <FiHelpCircle/>,
        title: 'help',
        link: '/workspace/help'
    },   
]


export const workspaceData = {
    quotes: {
        icon: <MdOutlineEmail/>,
        data: 2800,
        title: 'Total Quotes',
    },
    sentEmail: {
        icon: <SiMinutemailer/>,
        data: 1200,
        title: 'Email Sent',
    },
    deliveredEmail: {
        icon: <MdOutlineMarkEmailRead/>,
        data: 640,
        title: 'Email Delivered',
    },
    openedEmail: {
        icon: <HiOutlineMailOpen/>,
        data: 1200,
        title: 'Email Opened',
    },
    clickedEmail: {
        icon: <MdOutlineMarkEmailUnread/>,
        data: 453,
        title: 'Email Clicked',
    },
    bouncedEmail: {
        icon: <MdOutlineMarkEmailUnread/>,
        data: 343,
        title: 'Email Bounced',
    },
}