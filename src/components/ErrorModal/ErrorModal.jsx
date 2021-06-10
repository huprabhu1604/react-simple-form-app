import React , {Fragment} from 'react';
import ReactDOM from 'react-dom'
import classes from './ErrorModal.module.css';
import Button from '../Button/Button';
import Card from '../Card/Card';

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const Overlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>Input Validation!</h2>
            </header>
            <p className={classes.content}>
                {props.onMessage}
            </p>
            <div className={classes.actions}>
                <Button type="button" onClick={props.onConfirm}>Ok</Button>
            </div>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<Overlay onMessage={props.onMessage} onConfirm={props.onConfirm}/>, document.getElementById("overlay-root"))}        
        </Fragment>            
    )
}

export default ErrorModal;