import { TwitterFollowCard } from "./TwitterFollowCard"
import { Link } from "react-router-dom"
export function DinamicComponentListUser() {
    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            userName:'pheralB',
            name: 'Pablo Hérnandez',
            isFollowing: false, 
        },
        {
            userName: 'elon',
            name: 'Elon Musk',
            isFollowing: false, 
        },
        {
            userName:'PacoHdezs',
            name: 'Paco Hérnandez',
            isFollowing: false, 
        },
        {
            userName:'TMChein',
            name: 'Tomas',
            isFollowing: false, 
        }
        
    ]
    return (
        
        <>
            <h1>Página listado usuarios</h1>
            {
                users.map(
                    user => {
                        const {userName, name, isFollowing} = user
                        return (
                            <TwitterFollowCard
                                key={userName}
                                userName={userName}
                                initialIsFollowing = {isFollowing}
                                name={name}
                            />
                        )
                    }
                )
            }
            <Link to={'/static'}>
                <button className="tw-link">Go to page Static/simple</button>
            </Link>
        </>
    )
}