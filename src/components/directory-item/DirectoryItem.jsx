import { BackgroundImage, Body,DirectoryItemContainer} from  './Directoryitem.style'
import { useNavigate } from 'react-router-dom'


const Directoryitem =({category})=>{
    const{id,title,imageurl,route}=category;

    const navigate=useNavigate()
    const onNavigateHandler=()=> navigate(route)



    return(
        <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
            <BackgroundImage imageurl={imageurl}
            >
            </BackgroundImage>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default Directoryitem;