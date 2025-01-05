import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import images from "@/constants/images";

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start q-60 h-80 relative"
    >
      <Image source={images.japan} className="size-full rounded-2xl" />
    </TouchableOpacity>
  );
};

export const Cards = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};
