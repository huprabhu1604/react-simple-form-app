import classes from './ErrorModal.module.css';
import Button from '../Button/Button';
import Card from '../Card/Card';

const ErrorModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
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
        </div>            
    )
}

export default ErrorModal;