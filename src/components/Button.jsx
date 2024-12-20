import React from 'react'
import PropTypes from 'prop-types';

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    className,
    download,
}) => {
  if (href || download) {
    return (
        <a 
            href={download ? download : href}
            target={target}
            className={`btn btn-primary ${className}`}
        >
            {label}
            {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
                </span> : undefined
            }
        </a>
    )
  } else {
    return (
        <button className={'btn btn-primary ' + className}>
            {label}

            {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
                </span> : undefined
            }
        </button>
    )
  }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
}





const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    className,
}) => {
  if (href) {
    return (
        <a 
            href={href}
            target={target}
            className={`btn btn-outline ${className}`}
        >
            {label}
            {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
                </span> : undefined
            }
        </a>
    )
  } else {
    return (
        <button className={'btn btn-outline ' + className}>
            {label}

            {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                {icon}
                </span> : undefined
            }
        </button>
    )
  }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    download: PropTypes.string,
}

export {
    ButtonPrimary,
    ButtonOutline
}