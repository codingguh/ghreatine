
import PropTypes from 'prop-types';
const Rune = ({ Icon, color }) => {
    return (
      <div
        className={`${color} w-9 h-9 p-2 rounded-full hover-transition cursor-pointer`}>
        {Icon}
      </div>
    )
  }

  Rune.propTypes={
    Icon: PropTypes.node.isRequired,
    color:PropTypes.string.isRequired,
}
  export default Rune