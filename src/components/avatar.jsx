import PropTypes from 'prop-types';

const Avatar = ({ src, alt }) => {
    return (
      <div className="w-12 h-12 overflow-hidden rounded-full">
        <img src={src} alt={alt} className="w-full" />
      </div>
    )
  }


  Avatar.propTypes={
    src:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
}
  export default Avatar