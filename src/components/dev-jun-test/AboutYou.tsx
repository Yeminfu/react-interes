import axios from "axios"
import { Form, Field } from "react-final-form"
import { setStep } from "./dev-jun-test"
import { required, Wrapper } from "./Wrapper"

// Ответь на вопросы:
// Как зовут ?
// Сколько лет ?
// Откуда ты ?
// Есть ли опыт работы разработчиком ?
// Что умеешь ?
// Как с тобой связаться ?

export const AboutYou = () => {
    return <>
        <Form
            initialValues={{
                // from: "мухосранск",
                // name: "дядя вася",
                // age: "22",
                // skill: "всё могу",
                // telega: "@dasd",
            }}
            onSubmit={onSubmit}
            render={({ handleSubmit, values, errors }) => (
                <form onSubmit={handleSubmit}>
                    <h3>Расскажи немного о себе</h3>
                    <Wrapper
                        title="Откуда ты?"
                        field={<Field name="from" component={'input'} placeholder="Населенный пункт" validate={required} />}
                    />
                    <Wrapper
                        title="Как тебя зовут?"
                        field={<Field className="me-2" name="name" component={'input'} validate={required} />}
                    />
                    <Wrapper
                        title="Сколько лет?"
                        field={<Field className="me-2" name="age" component={'input'} validate={required} />}
                    />
                    <Wrapper
                        title="Есть какие-либо знания в разработке?"
                        field={<Field className="me-2" name="skill" component={'textarea'} placeholder="Расскажи, если что-то уже умеешь" validate={required} />}
                    />
                    <Wrapper
                        title="Напиши свой ник в телеге"
                        field={<Field className="me-2" name="telega" component={'input'} validate={required} />}
                    />
                    <button type="submit" className="btn btn-outline-dark btn-sm ">ДАЛЬШЕ</button>
                    {/* <pre>{JSON.stringify({ values, errors }, null, " ")}</pre> */}
                </form>
            )}
        />
    </>
}



const onSubmit = (values: any) => {
    // console.log('values', values);
    axios({
        url: '/?service=am',
        method: "POST",
        data: values

    }).then(x => {
        if (x?.data === true) {
            setStep(2);
        }
    });
}