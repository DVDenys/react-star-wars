import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavorite, removePersonToFavorite } from '@store/actions';

import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ 
    personName, 
    personPhoto,
    personId,
    personFavorite,
    setPersonFavorite
}) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonToFavorite(personId));
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }));
        }
        setPersonFavorite(!personFavorite);
    }

    return (
        <>  
            <div className={styles.container}>
                <img 
                    className={styles.photo} 
                    src={personPhoto} 
                    alt={personName} />
                <img 
                    onClick={dispatchFavoritePeople}
                    src={personFavorite ? iconFavoriteFill : iconFavorite }
                    className={styles.favorite}
                    alt="Add to favorite"  
                />  
            </div>

            
        </>
    )
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    PersonPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
}

export default PersonPhoto;