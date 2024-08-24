import { Link, useRouter } from "expo-router";
import { ArrowButtonProps } from "./props";
import * as S from "./styles";

const ArrowButton: React.FC<ArrowButtonProps> = ({ linkDirection, width, type }) => {
  
  const router = useRouter();
  const arrowSrc = type === 'next' ? require('../../assets/images/arrowButton.png') : require('../../assets/images/arrowBackButton.png');

  const handleClick = () => {
    linkDirection ? router.push(linkDirection) : router.back();
  }

  return (
      <S.ArrowContainer width={width} onPress={handleClick}>
        <S.ArrowButton source={arrowSrc} />
      </S.ArrowContainer>
  )
}

export default ArrowButton;
