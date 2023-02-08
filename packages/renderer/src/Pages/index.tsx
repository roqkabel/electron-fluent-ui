import { System24Regular } from "@fluentui/react-icons";
import { ReactElement } from "react";
import { Buttons } from "./Buttons";
import { Checkboxes } from "./Checkboxes";
import { Dialog } from "./Dialog";

type NavigationItem = {
    label: string;
    path: string;
    element: ReactElement;
    icon: ReactElement;
};

export const pages: NavigationItem[] = [
    {
        label: "Buttons",
        path: "/",
        element: <Buttons />,
        icon: <System24Regular />,
    },
    {
        label: "Checkboxes",
        path: "/checkboxes",
        element: <Checkboxes />,
        icon: <System24Regular />,
    },
    {
        label: "Dialog",
        path: "/dialog",
        element: <Dialog />,
        icon: <System24Regular />,
    },
];