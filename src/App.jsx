import Hero from './components/Hero'
import MenuTease from './components/MenuTease'
import Experience from './components/Experience'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
    return (
          <main className="bg-background min-h-screen text-white selection:bg-accent selection:text-background">
                <Hero />
                <MenuTease />
                <Experience />
                <Reviews />
                <Footer />
          </main
        )
}

export default App
