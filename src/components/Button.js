import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
    const classnames = className(rest.className,'flex items-center','px-3 py-1.5 border',{
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-yellow-600 bg-yellow-500 text-white': secondary,
        'border-green-600 bg-green-500 text-white': success,
        'border-orange-600 bg-orange-500 text-white': warning,
        'border-red-600 bg-red-500 text-white': danger,
        'bg-white': outline,
        'rounded-full':rounded,
        'text-blue-600': outline && primary,
        'text-yellow-600': outline && secondary,
        'text-green-600': outline && success,
        'text-orange-600': outline && warning,
        'text-red-600': outline && danger,
    })
  return (
    <div className="px-2 py-2">
      <button  className={classnames}{...rest}>{children}</button>
    </div>
  );
}


Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      // console.log('Only one of primary, secondary, success, danger can be true')
      return new Error(
        "Only one of primary, secondary, success, danger can be true"
      );
    }
  },
};

export default Button;
