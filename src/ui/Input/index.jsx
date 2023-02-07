import { Field } from "formik";
import { capitalizeFirstLetter } from "../../helpers";
import _ from 'lodash'

const Input = (props) => {
  const { name, className, onBlur, values, touched, errors, label } = props
  const CN = `field-wrap ${className ? className : ''}`

  return (
    <div className={CN}>
      <Field
        name={name}
        onBlur={(e) => onBlur(e)}
        value={_.get(values, name, '')}
        placeholder=' '
      />
      {touched[name] && errors[name] && (
        <div className="error">{errors[name]}</div>
      )}
      <label htmlFor={name}>{capitalizeFirstLetter(label)}</label>
    </div>
  )

}

export default Input