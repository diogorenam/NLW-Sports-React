
import './App.css';
import Header from './components/header/Header';
import ListItem from './components/ListItems/Listitems';
import Section from './components/section/section';

const jogosList = [
  {
    imgUrl:"https://th.bing.com/th/id/OIP.aBh6xqVtMvWGsVP7HL_PnQHaJ4?pid=ImgDet&rs=1",
    imgDescription:"Imagem do jogo Subwaysurf",  
  },
  {
  imgUrl:"https://th.bing.com/th/id/R.4160ea425f96dc7e1ea36900fc9d894a?rik=Bp49BfupOlbRUA&pid=ImgRaw&r=0",
  imgDescription:"Imagem do jogo Temple run",
  },
  {
  imgUrl:"https://lh5.googleusercontent.com/proxy/qkT8swD0_0W6tIQteVFfjs_YPIZ8xu-DDrcKmmQ23uNRam_3l8dR7uR75bkrVOw3V4Bh7qOjj926X1HHXgJkI2vHYC1t2uVC3mg58TgR3eIE9D2V9F_MPss=w1200-h630-p-k-no-nu",
  imgDescription:"Imagem do jogo água e fogo",
  }
]
const CanaisList= [

  {
  url:"https://www.youtube.com/c/codigofontetv",
  imgUrl:"https://i.scdn.co/image/ab6765630000ba8a1bcb961958f2e700ecc6655d",
  imgDescription:"canal código fonte",
  },

  {
  url:"https://www.twitch.tv/rafaballerinii" ,
  imgUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/5d1bbca1-5c5e-4af5-b786-8818290afa44-profile_image-150x150.png",
  imgDescription:"rafaelabalerini",
  },

  {
    url:"https://www.twitch.tv/adrianasaty",
    imgUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/a4590d44-a8ac-456d-b1ad-19dfef0e5c94-profile_image-150x150.png",
    imgDescription:"biro",
  },
  

  {
    url:"https://www.twitch.tv/maykbrito",
    imgUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-70x70.png",
    imgDescription:"maykbrito",
  },
                   
]
const SocialList =[
{
  url:"https://www.instagram.com/renam_diogodev/",
  nome:"instagram",
  classimgsocial:"fa-brands fa-instagram",
        
}              
                   
//  <a href="https://www.twitch.tv/diogorennam" target="_blank">
//  <i id="twitch" class="fa-brands fa-twitch"></i>         
                  
                  
//  <a href="https://www.linkedin.com/in/diogo-rennam/" target="_blank">
//  <i id="linkedin" class="fa-brands fa-linkedin"></i>
                   
                  
//  <a href="https://github.com/diogorenam" target="_blank">
//   <i id="github" class="fa-brands fa-github"></i>
                       
 ]                  
function App() {
  return(
    <div className='App'>
      <Header/>
      <main>
        <Section
        title="Meus Jogos"
        subtitle="Jogos que amava jogar na infância!"
        className="setion-filme"
        >
         {
          //O metodo map pega todos os intems da lista e retorna dinamicamente
          jogosList.map(function(item){
            return <ListItem
            imgUrl={item.imgUrl}
            imgDescription={item.imgDescription}
            />
          })
         }
        </Section>

        <Section
        title="Canais e streams"
        subtitle="Listas e canais que não perco!"
        className="section-canais"
        >
          {
            CanaisList.map(function(item){
              return <ListItem
              imgUrl= {item.imgUrl}
              url={item.url}
              imgDescription={item.imgDescription}
              />
            })
          }
        </Section>

        <Section
        title="Minhas Redes!"
        subtitle="Venha se conectar comigo!"
        >
          {
            SocialList.map(function(item){
              return <ListItem
              url={item.url}
              nome={item.nome}
              classimgsocial={item.classimgsocial}
              />
            })
          }
        </Section>
      </main>
    </div>
    
  );
}
export default App;
