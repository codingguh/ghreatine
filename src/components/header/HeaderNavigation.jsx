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
import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure } from "@mantine/hooks";
import { IconLogout } from "@tabler/icons-react";
import classes from "./HeaderNavigation.module.css";
import { Link } from "react-router-dom";

function HeaderNavigation() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

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
          <MantineLogo size={30} />

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

          {/* <Button variant="default">Log in</Button> */}
          {/* <Avatar  name="John Doe" color="initials" />
           */}
          <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
              <Group>
                <Avatar src={null} alt="Vitaly Rtishchev" color="indigo">
                  VR
                </Avatar>
                <Text>Vincent Raditya</Text>
              </Group>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                color="red"
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
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderNavigation;
