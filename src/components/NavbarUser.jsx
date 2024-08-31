import { Avatar, Group, Text } from "@mantine/core";
import PropTypes from 'prop-types';

const NavbarUser = ({name,email,avatar}) => {
  return (
    <Group>
      <Avatar src={null} alt="Vitaly Rtishchev" color="indigo">
        VR
      </Avatar>
      <Text>{name}</Text>
    </Group>
  );
};

NavbarUser.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };

  
export default NavbarUser;
