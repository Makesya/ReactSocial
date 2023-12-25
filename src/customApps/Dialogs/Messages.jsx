import Dialogs from './Dialogs';
import css from './Dialogs.module.css';


const Messages = (props) => {

    return (
        <div className={css.message_area}>
            {props.msgList.map((obj) => <Dialogs id={obj.id} name={obj.name} message={obj.message} />)}
            <hr />
        </div>
    )
}
export default Messages;