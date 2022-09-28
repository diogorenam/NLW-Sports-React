
import './App.css';
import Header from './components/header/Header';
import ListIten from './components/ListItens/Listitens';
import Section from './components/section/section';


function App() {
  return(
    <div className='App'>
      <Header/>
      <main>
        <Section
        title="Meus Jogos"
        subtitle="Jogos que amava jogar na infância!"
        >
          <ListIten/>
          
        </Section>

        <Section
        title="Canais e streams"
        subtitle="Listas e canais que não perco!"
        />
      </main>
    </div>
  );
}
export default App;
