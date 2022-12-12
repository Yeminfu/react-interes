import axios from "axios";
import { setStep } from "./dev-jun-test";

export const Intro = () => {
    return <>

        <h3>Приветствуем тебя, дорогой друг!</h3>
        <p>В рамках расширения мы решили объявить небольшой конкурс на бесплатное обучение веб-разработке</p>
        <p>Да, это абсолютно бесплатно</p>
        <p>Но, есть нюанс. Кого попало не берем 😜</p>
        <p>Мы подготовили небольшой тест, по результатам которого мы с тобой свяжемся, если результаты нас устроят</p>

        <div>
            Удачи!
        </div>

        <div className="d-flex mt-4">
            <button
                onClick={() => {
                    axios({
                        url: '/?service=gt',
                    }).then(x => {
                        if (x?.data === true) {
                            setStep(1);
                        }
                    });
                }}
                className="btn btn-outline-dark">Пройти тест</button>
            <button
                onClick={() => {
                    axios({
                        url: '/?service=dc',
                    }).then(x => {
                        if (x?.data === true) {
                            document.location.href = "https://www.youtube.com/results?search_query=мультики"
                            // console.log('decline');
                            // setStep(1);
                        }
                    });
                }}
                className="btn btn-outline-dark ms-2">Не интересно</button>
        </div>
    </>
}