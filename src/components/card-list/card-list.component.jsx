import './card-list.styles.css';
import { Card } from '../card'

export const CardList = (props) => (
    <div className='card-list'>
        {
            props.monsters.map( monster => (
                <Card key ={monster.id} monster={monster}></Card>
            ))
        }
    </div>
)