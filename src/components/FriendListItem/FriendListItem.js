import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';


export default function FriendListItem(props) {
    const { avatar, name, isOnline } = props;
    return (
        <li className={style.item}>
            <span className={style.status} style={isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
        </li>
    );
};


FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};