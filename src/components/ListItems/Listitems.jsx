
const ListItem = (props)=> {
    return(
          <li>
            <a href={props.url} target="_blank" rel="noreferrer">
            <img src={props.imgUrl}
            alt={props.imgDescription}/>
            </a>
         </li>
       
    );
}
export default ListItem;