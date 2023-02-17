import PropTypes from 'prop-types';
import style from './Layout.module.css';


export default function Layout(props) {
    return (<div className={style.layout}>{props.children}</div>);
};

Layout.propTypes = {
    children: PropTypes.node,
};
