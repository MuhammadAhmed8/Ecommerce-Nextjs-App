import { Typography, makeStyles, useMediaQuery } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Homepage/Header'
import MainSection from '../components/Homepage/Main Section/MainSection'

const useStyles = makeStyles((theme) => ({
  body: {
      margin: '0px 50px',
      [theme.breakpoints.down(960)]: {
        margin: "0px 10px"                   // secondary
      }
  },
}),
{index:1})


export default function Home() {
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));

  const classes = useStyles(); 

  return (
    <div >
      <Head>
        <title>Renovabelle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header image="/img/header_bg.png"/>
      
      <div className={classes.body}>
        <MainSection  />        
      </div>
      </div>  
  )
}
