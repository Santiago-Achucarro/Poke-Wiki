import React from "react";
import {
  HStack,
  Box,
  Img,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon, EditIcon, AddIcon } from "@chakra-ui/icons";
import PokeLogo from "../../assets/Poke-Logo.png";

const Navbar = () => {
  return (
    <HStack display="flex" alignItems="center" justifyContent='center'>
        <Box>
          <Link fontSize='3xl' fontWeight='semibold'>
           Poke-Wiki
          </Link>
        </Box>

      <Stack
        direction={{ base: "row" }}
        display={{ base: "none", sm: "block" }}
        fontSize="20px"
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Wiki">Wiki</NavLink>
      </Stack>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          display={{ base: "block", xl: "none", lg: "none", sm: "block" }}
        />
        <MenuList>
          <MenuItem>
            <NavLink to="/">Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/Wiki">Wiki</NavLink>
          </MenuItem>
          <MenuDivider />

          <MenuItem>Perfil</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export { Navbar };
