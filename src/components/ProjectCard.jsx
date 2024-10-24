import React from 'react'
import PropTypes from 'prop-types';


const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    className,
}) => {
  return (
    <div>ProjectCard</div>
  )
}

projectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    className: PropTypes.string,
}

export default ProjectCard