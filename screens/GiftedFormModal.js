import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

class GiftedFormModal extends React.Component {
  static navigationOptions({ navigation }) {
    const { getTitle, onClose, cafe } = navigation.state.params || {};

    return {
      currentCafe:cafe,
      headerTitle: getTitle(),
      headerStyle: { backgroundColor: "#2185D0" },
      headerTitleStyle: { color: "white" },
      headerLeft: (
        <FontAwesome
          name="chevron-left"
          color="white"
          size={20}
          style={{ paddingLeft: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: (
        <FontAwesome
          name="check"
          color="white"
          size={20}
          style={{ paddingRight: 10 }}
          onPress={() => {
            onClose(null, null);
            navigation.goBack();
          }}
        />
      )
    };
  }

  render() {
    const { renderContent } = this.props.navigation.state.params || {};
    return (
      <View style={{ width: "100%", height: "100%" }}>{renderContent()}</View>
    );
  }
}

GiftedFormModal.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.object
    })
  })
};

GiftedFormModal.defaultProps = {
  navigation: null
};

export default GiftedFormModal;
