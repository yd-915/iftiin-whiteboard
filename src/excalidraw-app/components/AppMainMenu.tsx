import React from "react";
import { PlusPromoIcon } from "../../components/icons";
import { MainMenu } from "../../packages/excalidraw/index";
import { LanguageList } from "./LanguageList";

export const AppMainMenu: React.FC<{
  setCollabDialogShown: (toggle: boolean) => any;
  isCollaborating: boolean;
}> = React.memo((props) => {
  return (
    <MainMenu>
      <MainMenu.DefaultItems.LoadScene />
      <MainMenu.DefaultItems.SaveToActiveFile />
      <MainMenu.DefaultItems.Export />
      <MainMenu.DefaultItems.SaveAsImage />
      <MainMenu.DefaultItems.LiveCollaborationTrigger
        isCollaborating={props.isCollaborating}
        onSelect={() => props.setCollabDialogShown(true)}
      />

      <MainMenu.DefaultItems.Help />
      <MainMenu.DefaultItems.ClearCanvas />
      <MainMenu.Separator />
      <MainMenu.ItemLink
        icon={PlusPromoIcon}
        href="https://super-quokka-07af64.netlify.app/"
        className="ExcalidrawPlus"
      >
        Upgrade+
      </MainMenu.ItemLink>
      <MainMenu.DefaultItems.Socials />
      <MainMenu.Separator />
      <MainMenu.DefaultItems.ToggleTheme />
      <MainMenu.ItemCustom>
        <LanguageList style={{ width: "100%" }} />
      </MainMenu.ItemCustom>
      <MainMenu.DefaultItems.ChangeCanvasBackground />
    </MainMenu>
  );
});
