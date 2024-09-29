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
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import { SignatureModalProps } from "./props";
import { LogBox } from "react-native";
import { User } from "@/constants/User";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const SignatureModal = ({ setIsOpen }: SignatureModalProps) => {
  const [path] = useState(Skia.Path.Make());
  const canvaRef = useRef<SkiaDomView | null>(null);
  const [shouldReset, setShouldReset] = useState(false);
  const [signature, setSignature] = useState("");
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const userId = User.id;
  const courseId = useSelector((state: any) => state.id);
  //   LogBox.ignoreAllLogs();

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
      const svgString = path.toSVGString();

      setSignature(svgString);
      setDisabled(svgString === "" || svgString === "M0,0");
    },
  });

  const handleAuthentication = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const enrolled = await LocalAuthentication.isEnrolledAsync();

    if (!compatible || !enrolled) {
      alert("Autenticação não disponível ou não configurada.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Confirme que é você",
      fallbackLabel: "Usar senha",
    });

    if (result.success) {
      await sendSignature();
      router.push("/conteudos/confirmIdentity");
    } else {
      alert("Autenticação falhou.");
    }
  };

  const sendSignature = async () => {
    const body = {
      employee_id: userId,
      signature: signature,
      course_id: courseId,
    };

    const ip = process.env.EXPO_PUBLIC_IP_URL;
    const url = `${ip}:8080/`;

    try {
      const response = axios.post(url, body);
      console.log(response);
    } catch (error) {
      console.log("error sending signature", error);
    }
  };

  const onReset = () => {
    setShouldReset(true);
  };

  const onSend = () => {
    console.log("enviado", signature);
    handleAuthentication();
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (shouldReset) {
      path.reset();
      setShouldReset(false);
      setDisabled(true); // Desabilita o botão após o reset
    }
  }, [shouldReset, path]);

  return (
    <S.SignatureModalContainer>
      <S.SignatureModalContent>
        <S.HeaderModal>
          <S.SignatureModalClose onPress={onClose}>
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
          <S.SignatureSendButton
            onPress={onSend}
            disabled={disabled}
            $isDisabled={disabled}
          >
            <S.SignatureButtonText>Enviar</S.SignatureButtonText>
          </S.SignatureSendButton>
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
