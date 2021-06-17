import Button from 'react-bootstrap/Button'

export default function WarriorBuilder () {
    return (
        <section className='warriorBuilder'>
            <h1>Build your warrior!</h1>

            <form>
                <div className='input-container'>
                    <label for="name">Name</label>
                    <input type="text" />
                </div>

                <div className='input-container'>
                    <label for="eyeColor">Eye color</label>
                    <input type="text" />
                </div>

                <div className='input-container'>
                    <label for="gender">Gender</label>
                    <input type="text" />
                </div>

                <div className='input-container'>
                    <label for="hairColor">Hair color</label>
                    <input type="text" />
                </div>

                <div className='input-container'>
                    <label for="skinColor">Skin color</label>
                    <input type="text" />
                </div>

                <div className='input-container'>
                    <label for="height">Height</label>
                    <input type="text" />
                </div>

                <div className='input-container'>
                    <label for="mass">Mass</label>
                    <input type="text" />
                </div>

                <div className='input-container'>
                    <label for="image">Image URL</label>
                    <input type="text" />
                </div>

                <Button variant="primary" className='btn-primary'>Build warrior</Button>
            </form>
        </section>
    )
}