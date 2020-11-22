export const renderField = ({ input, type, meta: { touched, error, warning } }) => (
    <div>
        <div>
            <input {...input} type={type}/>
            {touched && ((error && <span className="error-field">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)