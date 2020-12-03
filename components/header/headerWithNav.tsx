import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  useScrollTrigger,
  Slide,
  Paper,
} from '@material-ui/core';

const Logo = styled.a`
  flex: 1;
  margin-top: 6px;
  h1 {
    color: ${(props) => props.theme.palette.secondary.contrastText};
  }
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;
  margin-top: -5px;
`;

const MainNav = styled(AppBar)`
  height: 60px;
  .MuiButton-label {
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.secondary.contrastText};
  }
`;

const NavMenuList = styled(MenuList)`
  li {
    height: 40px;
    color: ${(props) => props.theme.palette.secondary.contrastText};
  }
`;

export default function Header(): ReactElement {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setDrawerOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setDrawerOpen(false);
    }
  }

  const trigger = useScrollTrigger();

  // return kieran focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(drawerOpen);
  React.useEffect(() => {
    if (prevOpen.current === true && drawerOpen === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = drawerOpen;
  }, [drawerOpen]);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <MainNav color="secondary">
        <Toolbar>
          <Link passHref href="/">
            <Logo>
              <h1 variant="h5" noWrap>
                Steinar.io
              </h1>
            </Logo>
          </Link>
          {!mobile && (
            <>
              <Button href="/">Home</Button>
              <Link href="/tag/news" passHref>
                <Button color="inherit">News</Button>
              </Link>
            </>
          )}
          {mobile && (
            <>
              <IconButton ref={anchorRef} onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Popper
                open={drawerOpen}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <NavMenuList
                          autoFocusItem={drawerOpen}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <Link href="/" passHref>
                            <Button color="inherit">Home</Button>
                          </Link>
                          <li>
                            <Link href="/tag/news" passHref>
                              <Button color="inherit">News</Button>
                            </Link>
                          </li>
                        </NavMenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          )}
        </Toolbar>
      </MainNav>
    </Slide>
  );
}
