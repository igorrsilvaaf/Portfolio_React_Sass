import Avatar from '../img/Avatar.jpg';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt='Imagem de perfil' /> //no Src foi importada a nossa variavel avatar que foi importada acima
      <p className="title">Analista de qualidade</p>
      <p>redes sociais</p>
      <p>Informações de contatos</p>
      <a href="" className="btn">
        Dowload CV
      </a>
    </aside>
  );
}

export default Sidebar