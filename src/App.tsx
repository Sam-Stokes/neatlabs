import { useLenis } from '@studio-freight/react-lenis'
import './styles/app.scss'
import AnimatedCursor from 'react-animated-cursor'
import Header from './components/header'
import Hero from './components/hero'

// https://www.npmjs.com/package/react-animated-cursor#-commands

function App() {
    useLenis()

    return (
        <>
            <AnimatedCursor innerSize={4} outerSize={4} color="20, 255, 75" trailingSpeed={1} />
            <Header />
            <Hero />
        </>
    )
}

export default App
