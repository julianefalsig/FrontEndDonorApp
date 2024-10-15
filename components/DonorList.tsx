import React from "react";
import { observer } from "mobx-react-lite";
import { View, Text, FlatList } from "react-native";
import DonorStore from "../app/stores/DonorStore";

const DonorList = observer(() => {
  return (
    <View>
      <Text>Donors:</Text>
      <FlatList
        data={DonorStore.donor}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
});

export default DonorList;
