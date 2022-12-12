import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";
import { AboutYou } from "./AboutYou";
import { Intro } from "./Intro";
import { LogicTest } from "./LogicTest";

export const setStep = createEvent<number>();
export const $step = createStore<number>(0).on(setStep, (_, x) => x);

export const DevJunTest = () => {
    const step = useStore($step);

    return <>
        <div className="container py-2" style={{
            maxWidth: "500px"
        }}>
            {(() => {
                if (step === 0) return <Intro />
                if (step === 1) return <AboutYou />
                if (step === 2) return <LogicTest />
                if (step === 3) return <>
                    <h3>Тест окончен</h3>
                    <p>В течение недели мы даем ответ по результатам рассмотрения</p>
                    <p>Если в течение недели мы с тобой не связались, значит решение отрицательное</p>
                </>
            })()}
        </div>
    </>
}

