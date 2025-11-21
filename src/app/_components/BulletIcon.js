import RadioButtonFillIcon from "remixicon-react/RadioButtonFillIcon"
import CheckboxCircleLineIcon from "remixicon-react/CheckboxCircleLineIcon"
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon"
import CheckLineIcon from "remixicon-react/CheckLineIcon"

function BulletIcon({ variant = "dot", className = "" }) {
  const base = "inline-flex items-center justify-center w-6 h-6"
  const color = "text-gray-600"

  if (variant === "dot") {
    return (
      <span className={`${base} ${color} ${className}`}>
        <RadioButtonFillIcon size={18} />
      </span>
    )
  }
  if (variant === "circle") {
    return (
      <span className={`${base} ${color} ${className}`}>
        <CheckboxCircleLineIcon size={18} />
      </span>
    )
  }
  if (variant === "arrow") {
    return (
      <span className={`${base} ${color} ${className}`}>
        <ArrowRightLineIcon size={18} />
      </span>
    )
  }
  if (variant === "check") {
    return (
      <span className={`${base} ${color} ${className}`}>
        <CheckLineIcon size={18} />
      </span>
    )
  }

  return (
    <span className={`${base} ${color} ${className}`}>
      <RadioButtonFillIcon size={18} />
    </span>
  )
}

export default BulletIcon