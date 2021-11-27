import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { typography } from '@material-ui/system'


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage: `url(${useBaseUrl('img/header.jpg')})`}}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎来到 ${siteConfig.title} 档案馆`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <br />
      <br />
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
      }}
    >

<Link to="paper"> 
  <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: '#c96c2a',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        borderRadius: '16px',
        textAlign: 'center',
        fontSize: '4.5rem',
        fontWeight: '500',
        lineHeight: '1.4',
        fontFamily: 'Monospace',
        href: 'https://github.com/ErikQQY',
        
      }}><a href="https://github.com/ErikQQY">川渝文献</a></Box>
</Link>

<Link to="history"> 
    <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: '#c96c2a',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        borderRadius: '16px',
        textAlign: 'center',
        fontSize: '4.5rem',
        fontWeight: '500',
        lineHeight: '1.4',
        fontFamily: 'Monospace'
      }}><a href="https://github.com/ErikQQY">口述历史</a></Box>
       </Link>
       
       
       <Link to="map"> 
        <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: '#c96c2a',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        borderRadius: '16px',
        textAlign: 'center',
        fontSize: '4.5rem',
        fontWeight: '500',
        lineHeight: '1.4',
        fontFamily: 'Monospace'
      }}>地图册</Box></Link>

<Link to="time"> 
            <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: '#c96c2a',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        borderRadius: '16px',
        textAlign: 'center',
        fontSize: '4.5rem',
        fontWeight: '500',
        lineHeight: '1.4',
        fontFamily: 'Monospace'
      }}>时光轴</Box>
      </Link>

    </Box>
          
          
      <main>
      </main>
    </Layout>
  );
}
