import * as React from 'react'
import './app.scss'
// import { EventsBlock } from './components/EventsBlock'
import { useRef } from 'react'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/Header'
import { MainPage } from './components/mainContent/MainPage'
// import { eventsData } from './assets/eventsData'
// import { eventsProp } from './components/Types'
// import CircleWithDots from './components/circle/CircleWithDots'
// import { ActivePageProvider } from './components/context/context'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  )
}

export default App
