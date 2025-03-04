import clsx from "clsx";
import { useExcalidrawAppState } from "../App";
import { footerCenterTunnel } from "../tunnels";
import "./FooterCenter.scss";

const FooterCenter = ({ children }: { children?: React.ReactNode }) => {
  const appState = useExcalidrawAppState();
  return (
    <footerCenterTunnel.In>
      <div
        className={clsx("footer-center zen-mode-transition", {
          "layer-ui__wrapper__footer-left--transition-bottom":
            appState.zenModeEnabled,
        })}
      >
        {children}
      </div>
    </footerCenterTunnel.In>
  );
};

export default FooterCenter;
FooterCenter.displayName = "FooterCenter";
