import { Href } from "expo-router";

export interface ContentProps {
  title: String;
  subtitle: String;
  linkDirection: Href;
  tags?: String[];
  pressFunction?: () => void;
  publishedAt: string;
}
