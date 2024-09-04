
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import style from './ButtonBack.module.scss';
import arrowBack from '../../assets/icons/arrowBack.svg';

export default function ButtonBack() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    };

    return (
        <div className={style.toolbar}>
            <Button onClick={handleBack}>
                <img src={arrowBack} alt="Arrow Back" />
            </Button>
        </div>
    );
}
