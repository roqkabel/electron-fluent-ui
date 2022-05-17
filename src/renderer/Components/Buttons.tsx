import { DefaultButton, PrimaryButton, Stack } from "@fluentui/react";
import { FC } from "react";

export const Buttons: FC = () => (
    <Stack horizontal tokens={{ childrenGap: 10 }}>
        <DefaultButton>Default</DefaultButton>
        <PrimaryButton>Primary</PrimaryButton>
    </Stack>
);
