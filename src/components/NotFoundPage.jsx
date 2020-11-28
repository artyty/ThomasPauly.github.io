import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return(

            <div> 
            <p> Désolé la page que vous chercher n'a pas été trouvée </p>
            <p style={{textAlign:"center"}}>
              <Link to="/"> Retourner à l'acceuil </Link>
            </p>
            </div>
    )
};
export default NotFoundPage;