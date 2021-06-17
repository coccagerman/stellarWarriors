export default function Hero ({darkMode}) {
    return (
        <div className={darkMode ? 'hero-container hero-container-dark' : 'hero-container'}>
            <section className="hero">
                <div className="stars">
                    <div className="small"></div>
                    <div className="medium"></div>
                    <div className="big"></div>
                </div>
                <div className={darkMode ? 'hero-phrase dark' : 'hero-phrase'}>
                    <p className='hero-phrase1'>Get to know the warriors.</p>
                    <p className='hero-phrase2'>Build your own.</p>
                    <p className='hero-phrase3'>Make them fight!</p>
                </div>
            </section>
        </div>
    )
}