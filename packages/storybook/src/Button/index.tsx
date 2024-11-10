import styled from "styled-components";
import { theme as defaultTheme } from "@unisize/commonstyled";

export interface ButtonProps {
    label: string;
    size: "small" | "large";
    onClick?: () => void;
}

export const Button = ({ label, size, onClick }: ButtonProps) => {
    return (
        <NewButtonStyle size={size}>
            <p>{label}</p>
        </NewButtonStyle>
    );
}
const NewButtonStyle = styled.div<{ size: "small" | "large" }>`
    background-color: ${defaultTheme.palette.blue.blue500};
    color: ${defaultTheme.palette.gray.gray50};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;