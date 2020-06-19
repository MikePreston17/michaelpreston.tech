import EntryContextProvider, { EntryContext } from '../contexts/EntryContext'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Landing from './landing'
import Link from 'next/link'
import Head from 'next/head'
import Layout from './layout'

import { StatusChip } from '@components'

// const x  = X;
// console.log('x :>> ', x);

const App = () => {
  return (
    <div title="TPOT Toolbox" className="container">
      <main>
        <PerfectScrollbar>
          {/* <StatusChip status="FEED ME" color="#c14af3" backgroundColor="cyan" /> */}
          <Layout />
        </PerfectScrollbar>
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