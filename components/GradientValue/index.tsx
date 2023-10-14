import { Box, BoxText } from './styles';
import { GradientMain } from "../GradientMain";

export type ActionLabelProps = {
    label: string;
};

export function GradientValue({
    label
}: ActionLabelProps) {
    return (
        <Box>
            <BoxText>
                <GradientMain>{label}
                </GradientMain>
            </BoxText>
        </Box>
    );
}