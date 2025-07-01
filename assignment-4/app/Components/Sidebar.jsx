"use client";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

// Width of the side bar in pixels
const drawerWidth = 240;

export default function Sidebar() {
  // State to check sidebar is open or closed
  const [open, setOpen] = useState(false);

  // Function to make it opposite
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  // Links of all the pages in the form of array
  const links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Dashboard", href: "/dashboard" },
    { text: "Profile", href: "/profile" },
  ];

  return (
    <>
      {/* Menu button */}
      <IconButton onClick={toggleDrawer} sx={{ m: 1 }}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer open={open} onClose={toggleDrawer}>
        <List sx={{ width: drawerWidth }}>
          {links.map((link, index) => (
            <ListItem button key={index} onClick={toggleDrawer}>
              <Link href={link.href} passHref legacyBehavior>
                <a style={{ textDecoration: "none", color: "inherit" }}>
                  <ListItemText primary={link.text} />
                </a>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
