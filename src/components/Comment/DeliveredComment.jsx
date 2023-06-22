import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import colors from "../../constatns/colors/colors";

export const DeliveredComment = ({ message, date }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View style={styles.commentWrapper}>
      <View style={styles.commentFiller}>
        <Text style={styles.commentText}>{message}</Text>
        <Text style={styles.commentDate}>{date}</Text>
      </View>
      <Image
        source={require("../../assets/imgs/LoginPage/User.jpg")}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  commentWrapper: {
    marginBottom: 24,
    flex: 1,
    flexDirection: "row",
    gap: 16,
    padding: 16,
  },
  commentFiller: {
    padding: 16,
    backgroundColor: colors.grayCommentBg,
    gap: 8,
    width: "100%",
  },
  commentText: {
    color: colors.darkTextColor,
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
  },
  commentDate: {
    color: colors.grayCommentDate,
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    alignSelf: "flex-end",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 100,
  },
});
