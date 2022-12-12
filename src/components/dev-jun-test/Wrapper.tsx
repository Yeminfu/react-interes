export const Wrapper = ({
    title,
    field
}: any) => {
    return <div className="my-3">
        <div className="mb-2"><strong className="">{title}</strong></div>
        {field}
        {/* <Field className="me-2" name="skill" component={'textarea'} placeholder="Расскажи, если что-то уже умеешь" /> */}
    </div>
}

export const required = (value: any) => (value ? undefined : 'Required')
