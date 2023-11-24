import { TwitterFollowCard } from "./TwitterFollowCard"
import { Link } from "react-router-dom"
export function StaticComponent() {
    const formatUserName = (userName) => `@${userName}`
    const objectMiduDev = {isFollowing: true, userName: 'midudev'}
    return (
        /*
        <React.Fragment>
            <Componente1 />
            <Componente2 />
        </React.Fragment>
        */

        /*
        <></> Hace referencia a lo de arriba
        */

        <>
            <h1>Página simple</h1>
            {/* {... object}
            
                Esto lo que hace e spasar todas las 
                propiedades del objecto como props

                No es lo más aconsejable
            */}
            <TwitterFollowCard { ... objectMiduDev}>
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard 
                isFollowing={false} 
                name="Pablo Hérnandez"
                userName='pheralB'
            />

            <TwitterFollowCard 
                userName="elonmusk"
                isFollowing
                name="Elon Musk"
            />

            <TwitterFollowCard 
                isFollowing 
                userName="vxnder" 
                name="Vanderhart"
            />

            <TwitterFollowCard 
                isFollowing 
                userName="yoasir1" 
                name="Yoasir1"
            />

            <Link to={'/dinamic'}>
                <button className="tw-link">Go to page Dinamic</button>
            </Link>
        </>
    )
}