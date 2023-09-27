import React from "react";
import { useRouterContext, useLink, useRouterType } from "@refinedev/core";
import MuiLink from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import type { RefineLayoutThemedTitleProps } from "@refinedev/mui";
import { t } from "i18next";


const defaultIcon = (
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  data-testid="refine-logo"
  >
    <path
      d="M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z"
      fill="currentColor"
      />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V6Z"
      fill="currentColor"
      />
  </svg>
);

export const ThemedTitleV2: React.FC<RefineLayoutThemedTitleProps> = ({
  collapsed = true,
  wrapperStyles,
  icon = defaultIcon,
  text,
}) => {
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();
  
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;
  const title = text ?? t("sideBar.title", "Kiakkai Web Admin");
  
  return (
    <MuiLink
      to="/"
      component={ActiveLink}
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...wrapperStyles,
      }}
    >
      {!collapsed ? (
        <Typography
          variant="h1"
          fontWeight={1000}
          color="text.primary"
          fontSize="19px"
          textOverflow="ellipsis"
          overflow="hidden"
          alignContent="center"
        >
          {title}
        </Typography>
      ) : (
        <Typography
          variant="h1"
          fontWeight={900}
          color="text.primary"
          fontSize="25px"
          textOverflow="ellipsis"
          overflow="hidden"
          alignSelf={collapsed ? "center" : "flex-start"}
        >
          {t('sideBar.shortTitle', 'K')}
        </Typography>
      )}
    </MuiLink>
  );
};
