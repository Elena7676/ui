import './style.css';
function Home() {
    return (
        <div className="containerHome">
            <h1 className="offerTitle">
                Полёт твоего творчества со скоростью рифмы на всех частотах
            </h1>
            <div className='offerWrap'>
                <div className='offerDesc'>
                    <p className='offerName'>
                        творческая студия <span>РИФМОЛЕТ</span>
                    </p>
                    <p className='offerText'>
                        Пишем тексты песен и музыку на заказ. Сочиним, напоём, сыграем, запишем. А ещё научим сочинять самостоятельно
                    </p>
                </div>

            </div>
        </div>
    )
}
export default Home;