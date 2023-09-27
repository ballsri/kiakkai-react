import common from "../../base.i18n.json";
console.log(common)
import { useTranslation } from "react-i18next";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useGetLocale, useSetLocale } from "@refinedev/core";
import React from "react";
export const LanguageChanger = () => {
    const { i18n } = useTranslation();
    const locale = useGetLocale();
    const changeLanguage = useSetLocale();
    const currentLocale = locale();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        lang: string,
        index: number
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        changeLanguage(lang);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const menu = (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                "aria-labelledby": "language-picker",
                role: "listbox",
            }}
        >
            {[...(i18n.languages || [])].sort().map((lang: string, index: number) => (
                <MenuItem
                    key={lang}
                    onClick={(event) => handleMenuItemClick(event, lang, index)}
                    selected={currentLocale === lang}
                >
                    <ListItemIcon>
                        <span style={{ marginRight: 8 }} className={`fi fi-${lang}`}></span>
                    </ListItemIcon>
                    {common["languageToText"][lang]}
                </MenuItem>
            ))}
        </Menu>
    );
    
    return (
        <>
            <List style={{ width: '150px' }} component="nav" aria-label="Language Select">
                <ListItem
                    button
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="Language"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickListItem}
                >
                    <div className="flex flex-2">
                        <span
                            style={{ marginRight: 8 }}
                            className={`fi fi-${currentLocale}`}
                        ></span>
                        <ListItemText
                            primary={common['languageToText'][`${currentLocale}`]}
                            className="px-2"
                        />
                    </div>
                </ListItem>
            </List>
            {menu}
        </>
    )
};