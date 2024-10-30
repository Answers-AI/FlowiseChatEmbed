import { MessageType } from '@/components/Bot';
export type BubbleParams = {
    theme?: BubbleTheme;
};
export type BubbleTheme = {
    chatWindow?: ChatWindowTheme;
    button?: ButtonTheme;
    tooltip?: ToolTipTheme;
    disclaimer?: DisclaimerPopUpTheme;
};
export type TextInputTheme = {
    backgroundColor?: string;
    textColor?: string;
    placeholder?: string;
    sendButtonColor?: string;
    maxChars?: number;
    maxCharsWarningMessage?: string;
    autoFocus?: boolean;
    sendMessageSound?: boolean;
    sendSoundLocation?: string;
    receiveMessageSound?: boolean;
    receiveSoundLocation?: string;
};
export type UserMessageTheme = {
    backgroundColor?: string;
    textColor?: string;
    showAvatar?: boolean;
    avatarSrc?: string;
};
export type BotMessageTheme = {
    backgroundColor?: string;
    textColor?: string;
    showAvatar?: boolean;
    avatarSrc?: string;
};
export type FooterTheme = {
    showFooter?: boolean;
    textColor?: string;
    text?: string;
    company?: string;
    companyLink?: string;
};
export type FeedbackTheme = {
    color?: string;
};
export type SourceBubbleTheme = {
    hideSources?: boolean;
    label?: string;
    getLabel?: (accessor: string | boolean | object | MessageType[]) => void;
    onSourceClick: (accessor: string | boolean | object | MessageType[]) => void;
};
export type ChatWindowTheme = {
    showTitle?: boolean;
    showAgentMessages?: boolean;
    title?: string;
    titleAvatarSrc?: string;
    welcomeMessage?: string;
    errorMessage?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    height?: number;
    width?: number;
    fontSize?: number;
    userMessage?: UserMessageTheme;
    botMessage?: BotMessageTheme;
    textInput?: TextInputTheme;
    feedback?: FeedbackTheme;
    footer?: FooterTheme;
    sourceDocsTitle?: string;
    poweredByTextColor?: string;
    starterPrompts?: string[];
    starterPromptFontSize?: number;
    clearChatOnReload?: boolean;
    sourceBubble?: SourceBubbleTheme;
};
export type ButtonTheme = {
    size?: 'small' | 'medium' | 'large' | number;
    backgroundColor?: string;
    iconColor?: string;
    customIconSrc?: string;
    bottom?: number;
    right?: number;
    dragAndDrop?: boolean;
    autoWindowOpen?: autoWindowOpenTheme;
};
export type ToolTipTheme = {
    showTooltip?: boolean;
    tooltipMessage?: string;
    tooltipBackgroundColor?: string;
    tooltipTextColor?: string;
    tooltipFontSize?: number;
};
export type autoWindowOpenTheme = {
    autoOpen?: boolean;
    openDelay?: number;
    autoOpenOnMobile?: boolean;
};
export type DisclaimerPopUpTheme = {
    title?: string;
    message?: string;
    buttonText?: string;
};
//# sourceMappingURL=types.d.ts.map