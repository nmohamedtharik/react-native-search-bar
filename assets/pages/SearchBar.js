import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import {Button} from "react-native-elements";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 5,
            marginVertical: 5,
            paddingVertical: 5,
            paddingHorizontal: 5,
            borderColor: "lightgray",
            borderWidth: StyleSheet.hairlineWidth
        }}>
            <View style={{flex: 1}}><TextInput placeholder={this.props.placeholder}/>
            </View>
            <Button type={"clear"} title={"search"}/>
        </View>);
    }
}

export default SearchBar;