import {
  HoverCard,
  Group,
  Button,
  Text,
  Anchor,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Avatar,
  Menu,
} from "@mantine/core";
import PropTypes from "prop-types";
import { useDisclosure } from "@mantine/hooks";
import { IconLogout } from "@tabler/icons-react";
import classes from "./HeaderNavigation.module.css";
import { Link } from "react-router-dom";

function HeaderNavigation({ authUser, onLogout }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  console.log("auth user", authUser);

  return (
    <Box
      mb={30}
      py={12}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "white",
      }}
    >
      <header className={classes.header} style={{ position: "sticky" }}>
        <Group justify="space-between" h="100%">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Ghreatine
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              Threads
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <Link to="/leaderboards" className={classes.link}>
              Leaderboard
            </Link>
          </Group>

          <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
            {authUser !== null ? (
              <>
                <Menu.Target>
                  <Group>
                    <Avatar src={null} alt="User Avatar" color="indigo">
                      {/* {authUser.charAt(0).toUpperCase()} */}
                    </Avatar>
                    <Text>{authUser.name}</Text>
                  </Group>
                </Menu.Target>
              </>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}

            <Menu.Dropdown>
              <Menu.Item
                color="red"
                onClick={onLogout}
                leftSection={
                  <IconLogout style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="60%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link
            to="/"
            className={classes.link}
            style={{ paddingBottom: "30px", fontSize: "17px" }}
          >
            Threads
          </Link>

          <Link
            to="/leaderboards"
            className={classes.link}
            style={{ paddingBottom: "30px", fontSize: "17px" }}
          >
            Leaderboard
          </Link>
          <Link
            to="/"
            onClick={onLogout}
            className={classes.link}
            style={{ paddingBottom: "30px", fontSize: "17px" }}
          >
            <IconLogout color="red"/> &nbsp;<span style={{color:'red'}}>Logout</span>
          </Link>
          
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

// HeaderNavigation.defaultProps = {
//   authUser: null,
// };

HeaderNavigation.propTypes = {
  authUser: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

export default HeaderNavigation;
