import css from './Dialogs.module.css'
import { NavLink } from'react-router-dom';
const Dialogs = (props) => {
    let path = '/messages/id' + props.id
    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_list}>
                <div className={css.dialog}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg" alt="" />
                    <NavLink to={path} className={(navData) => navData.isActive ? css.selected : ""}>{props.name}</NavLink>
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>
                    <p>{props.message}</p>
                </div>


            </div>
        </div>
    )
}
export default Dialogs;