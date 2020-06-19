import EntryContextProvider from '../contexts/EntryContext'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Landing from './landing'

import Link from 'next/link'

const Index = () => {
  return (
    <EntryContextProvider>
      <PerfectScrollbar>        
      </PerfectScrollbar>
    </EntryContextProvider>
  )
}

export default Index
