import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import {
  Canvas,
  Path,
  Skia,
  SkiaDomView,
  TouchInfo,
  useTouchHandler,
} from "@shopify/react-native-skia";
import { Colors } from "@/constants/Colors";

export const SignatureModal = () => {
  const [path] = useState(Skia.Path.Make());
  const canvaRef = useRef<SkiaDomView | null>(null);
  const [shouldReset, setShouldReset] = useState(false);
  const [signature, setSignature] = useState("");

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
      setSignature(path.toSVGString());
    },
  });

  const onReset = () => {
    setShouldReset(true);
  };

  const onSend = () => {
    console.log(signature);
  };

  useEffect(() => {
    if (shouldReset) {
      path.reset();
      setShouldReset(false);
    }
  }, [shouldReset]);

  return (
    <S.SignatureModalContainer>
      <S.SignatureModalContent>
        <S.HeaderModal>
          <S.SignatureModalClose>
            <S.CloseContainer>
              <S.CloseBar1 />
              <S.CloseBar2 />
            </S.CloseContainer>
          </S.SignatureModalClose>
          <S.SignatureModalTitle>
            Assine para confirmar seu treinamento
          </S.SignatureModalTitle>
        </S.HeaderModal>
        <S.SignatureBox>
          <Canvas style={styles.canva} ref={canvaRef} onTouch={touchHandler}>
            <Path
              style="stroke"
              color={Colors.cultured}
              strokeWidth={3}
              path={path}
            />
          </Canvas>
        </S.SignatureBox>
        <S.SignatureButtons>
          <S.SignatureButton onPress={onReset}>
            <S.SignatureButtonText>Resetar</S.SignatureButtonText>
          </S.SignatureButton>
          <S.SignatureButton onPress={onSend}>
            <S.SignatureButtonText>Enviar</S.SignatureButtonText>
          </S.SignatureButton>
        </S.SignatureButtons>
      </S.SignatureModalContent>
    </S.SignatureModalContainer>
  );
};

const styles = StyleSheet.create({
  canva: {
    marginHorizontal: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
});
