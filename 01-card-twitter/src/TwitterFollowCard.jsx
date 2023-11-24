/*
    Utilizar estados - hooks
*/

import { useState } from "react"


/*
 * 1º Parametro (children) => accede a los hijos del elemento
 * 2º Parámetro (userName) => Ponemos valor por defecto si nos viene nulo/no viene
*/
export function TwitterFollowCard({children, userName= 'unknow', name}){
    /*
        const state = useState(false)
        const isFollowing = state[0]
        const setIsFollowing = state[1]
        
       lo de arriba es lo mismo que lo de abajo --desestructuración--
    */

    const [isFollowing, setIsFollowing] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    

    const imgSrc = `https://unavatar.io/${userName}`
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const setTextButton = () => {
        if(isFollowing && isHovered){
            return "Dejar de seguir"
        } else if(isFollowing){
            return "Siguiendo"
        } else{
            return "Seguir"
        }
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar"
                alt="El avatar de miduDev" 
                src={imgSrc} />
                <div className="tw-followCard-info">
                {/*
                  * Accedemos al hijo si no tiene el parametro name
                 */
                }
                    <strong>{name != null ? name : children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                    {setTextButton()}
                </button>
            </aside>
        </article>
    )
}