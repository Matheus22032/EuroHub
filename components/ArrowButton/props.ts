import { Href } from "expo-router";
import { TouchableOpacityProps } from "react-native-gesture-handler";

export interface ArrowButtonProps extends TouchableOpacityProps {
  width: string;
  linkDirection: Href;
}
