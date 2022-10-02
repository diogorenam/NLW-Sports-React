
const ListItem = (props)=> {
    return(
          <li>
            <a href={props.url} target="_blank" rel="noreferrer">
            <img src={props.imgUrl}
            alt={props.imgDescription}/>
            <i id={props.nome} class={props.classimgsocial}></i>
            </a>
         </li>
       
    );
}
export default ListItem;