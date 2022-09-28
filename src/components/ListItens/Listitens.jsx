
const ListIten = (props)=> {
    return(
        <div>
          <li>
            <a href={props.url} target="_blank" rel="noreferrer">
            <img src={props.imgUrl}
            alt={props.imgDescription}/>
            </a>
         </li>
        </div>
    );
}
export default ListIten;