import { ImageProps } from "@/interfaces/interfaces";
import { Href } from "expo-router";

export interface ContentProps {
  title: String;
  subtitle: String;
  linkDirection: Href;
  tags?: String[];
  coverImage?: ImageProps;
  pressFunction?: () => void;
}
