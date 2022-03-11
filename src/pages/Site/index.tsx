import Banner from './Components/Banner';
import Features from './Components/Features';
import Menu from './Components/Menu';
import Precos from './Components/Precos';
import Testemunho from './Components/Testemunho';

export default function Site() {
    return (        
        <>
            <Menu />
            <Banner />
            <Features />
            <Testemunho />
            <Precos />
        </>
    )
}