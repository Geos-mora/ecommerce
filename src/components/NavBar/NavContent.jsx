import {  useState } from "react";
import { NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const NavContent = ({navItemsLeft,navItemsRight}) => {

    const [state, setState] = useState(null);
   

    const activeState=(id)=>{
        
        if (state===id) {
            setState(null)
        }else{
            setState(id)
        }
    }

    const navItems = navItemsLeft? navItemsLeft :navItemsRight;

    return (
        <>
              {
                    navItems.map((element)=>(
                        <li key={element.id} onClick={()=>activeState(element.id)} >
                            <NavLink className={`navLink ${state===element.id && !navItems ? 'active':''}`} to={element.target} >
                                {element.item}
                            </NavLink>
                        </li>
                    ))
              }    
              
        </>
    );
};

export default NavContent;


NavContent.propTypes={
    navItemsLeft:PropTypes.any,
    navItemsRight:PropTypes.any,
    ulnode:PropTypes.any
}