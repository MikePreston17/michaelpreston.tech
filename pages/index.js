import EntryContextProvider, { EntryContext } from '../contexts/EntryContext'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Landing from './landing'
import Link from 'next/link'
import Head from 'next/head'
import Layout from './layout'

const App = () => {
  return (

    <div title="TPOT Toolbox" className="container">      
      <main>

        <h1>Test header</h1>

        <Layout />
      </main>
    </div>

  )
}

export default App

    // <EntryContextProvider>

    // <PerfectScrollbar>
    // <Layout />
    // </PerfectScrollbar>
    // </EntryContextProvider>