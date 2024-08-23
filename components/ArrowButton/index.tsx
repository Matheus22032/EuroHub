import { Link } from "expo-router";
import { ArrowButtonProps } from "./props";
import * as S from "./styles";

const ArrowButton: React.FC<ArrowButtonProps> = ({ linkDirection, width }) => {
  
  return (
    <Link href={linkDirection} asChild>
      <S.ArrowContainer width={width} >
        <S.ArrowButton source={require('../../assets/images/arrowButton.png')} />
      </S.ArrowContainer>
    </Link>
  )
}

export default ArrowButton;
