import { t } from "../../i18n";
import {
  WelcomeScreenHelpArrow,
  WelcomeScreenMenuArrow,
  WelcomeScreenTopToolbarArrow,
} from "../icons";
import {
  welcomeScreenMenuHintTunnel,
  welcomeScreenToolbarHintTunnel,
  welcomeScreenHelpHintTunnel,
} from "../tunnels";

const MenuHint = ({ children }: { children?: React.ReactNode }) => {
  return (
    <welcomeScreenMenuHintTunnel.In>
      <div className="virgil welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--menu">
        {WelcomeScreenMenuArrow}
        <div className="welcome-screen-decor-hint__label">
          {children || t("welcomeScreen.defaults.menuHint")}
        </div>
      </div>
    </welcomeScreenMenuHintTunnel.In>
  );
};
MenuHint.displayName = "MenuHint";

const ToolbarHint = ({ children }: { children?: React.ReactNode }) => {
  return (
    <welcomeScreenToolbarHintTunnel.In>
      <div className="virgil welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--toolbar">
        <div className="welcome-screen-decor-hint__label">
          {children || t("welcomeScreen.defaults.toolbarHint")}
        </div>
        {WelcomeScreenTopToolbarArrow}
      </div>
    </welcomeScreenToolbarHintTunnel.In>
  );
};
ToolbarHint.displayName = "ToolbarHint";

const HelpHint = ({ children }: { children?: React.ReactNode }) => {
  return (
    <welcomeScreenHelpHintTunnel.In>
      <div className="virgil welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--help">
        <div>{children || t("welcomeScreen.defaults.helpHint")}</div>
        {WelcomeScreenHelpArrow}
      </div>
    </welcomeScreenHelpHintTunnel.In>
  );
};
HelpHint.displayName = "HelpHint";

export { HelpHint, MenuHint, ToolbarHint };
