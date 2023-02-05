import {IcoDelete, IcoDone, IcoPen, IcoSearch, IcoAdd} from '../../svg'

const actionData = {
  'delete': IcoDelete,
  'add': IcoAdd,
  'done': IcoDone,
  'edit': IcoPen,
  'search': IcoSearch,
  
}

function Button(props) {
  const {text, actionName, disable, className, onClick} = props

  if(!text && !actionName) return null
  
  const Icon = actionData[actionName]

  const CN = `btn${className ? ' ' + className : ''}${actionName ? ' btn_' + actionName : ''}`
  return (
    <button disabled={disable} className={CN} onClick={onClick}>
      {actionName && <Icon/>}
      {text && text}
    </button>
  );
}

export default Button;