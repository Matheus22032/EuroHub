import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./styles";
import Container from "@/components/Container";
import ArrowButton from "@/components/ArrowButton";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import {
  Canvas,
  Path,
  Skia,
  SkiaDomView,
  TouchInfo,
  useTouchHandler,
} from "@shopify/react-native-skia";
import { useRef, useState } from "react";
import { StyleSheet } from "react-native";

const IndexTemplate = () => {
  const [path] = useState(Skia.Path.Make());
  const canvaRef = useRef<SkiaDomView | null>(null);

  const touchHandler = useTouchHandler({
    onStart: (touchInfo: TouchInfo) => {
      const { x, y } = touchInfo;

      path.moveTo(x, y);
    },
    onActive: (touchInfo: TouchInfo) => {
      const { x, y } = touchInfo;

      path.lineTo(x, y);
    },
    onEnd: () => {
      const test = path.toSVGString();
      console.log(test);
      path.reset();
    },
  });

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Container type="default">
          <S.IndexContainer>
            <S.HeroText>
              Vamos melhorar a <S.SpanHeroText>saúde juntos!</S.SpanHeroText>
            </S.HeroText>
            <Canvas style={styles.canva} ref={canvaRef} onTouch={touchHandler}>
              <Path style="stroke" strokeWidth={2} path={path} />
            </Canvas>
            <ArrowButton linkDirection={"/home"} width="82px" type="next" />
          </S.IndexContainer>
        </Container>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  canva: {
    width: 200,
    height: 200,
    backgroundColor: "white",
  },
});

export default IndexTemplate;
