import { Link } from 'react-router-dom'

export default function Winner ({warrior1, warrior2}) {

    let winner

    (warrior1.height * warrior1.mass) > (warrior2.height * warrior2.mass) ? winner = warrior1 : winner = warrior2

    return (
        <section className='winner'>
            <h1>{winner.name} wins!</h1>
            <img src={`/warriors/${winner.name}.jpeg`} alt='Winner' />
            <Link to='/stellarFighting/selectFighters'><button className='btn-primary'>Fight again!</button></Link>
        </section>
    )
}