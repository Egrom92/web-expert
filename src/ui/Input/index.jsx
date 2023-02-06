import { Field } from "formik";

const Input = (props) => {
  const { name, className, onBlur, values, touched, errors } = props
  const CN = `field-wrap ${className ? className : ''}`

  return (
    <div className={CN}>
      <Field
        name={name}
        onBlur={(e) => onBlur(e)}
        value={values[name] || ''}
      />
      {touched[name] && errors[name] && (
        <div className="error">{errors[name]}</div>
      )}
      <label htmlFor={name}>Username</label>
    </div>
  )

}

export default Input