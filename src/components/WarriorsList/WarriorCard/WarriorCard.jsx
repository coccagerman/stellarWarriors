import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

export default function WarriorCard ({warrior, id}) {
    
    return (
        <Link to={`/warrior/${id}`} >
            <Card style={{ width: '18rem' }} className='warriorCard'>
                <div className='img-container'>
                    <Card.Img variant="top" className='card-img' src={`/warriors/${warrior.name}.jpeg`} alt='Warrior'/>
                </div>
                <Card.Body>
                    <Card.Title>{warrior.name}</Card.Title>
                    <Button variant="primary" className='btn-primary'>View profile</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}