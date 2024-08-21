import { Link } from "expo-router";
import { Image, TouchableOpacity } from "react-native";


const ArrowButton = () => {
    return (
        <Link href={'/home'} asChild>
            <TouchableOpacity>
                <Image source={require('../../assets/images/arrowButton.png')}/>
            </TouchableOpacity>
        </Link>
    )
}

export default ArrowButton;