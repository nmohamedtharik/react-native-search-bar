import React from "react";
import {View, Text, TextInput, StyleSheet, AppRegistry} from "react-native";
import {Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: true, ...props}
    }

    _on_submit = () => {
        this.state.onSubmit(this.state.value);
    };

    _text_on_change = (text) => {
        this.setState({value: text.trim()});
    };

    _text_on_blur = () => {
        this._on_submit();
    };

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
            {this.state.search ? (<Icon name={"search"} size={12} color={"gray"} style={{marginLeft: 5}}/>) : (
                <Icon name={"back"} size={12} color={"gray"} style={{marginLeft: 5}} onPress={() => {
                    if (this.state.onBackPress) this.state.onBackPress();
                }}/>)}
            <View style={{flex: 1, marginLeft: 8}}><TextInput placeholder={this.state.placeholder}
                                                              defaultValue={this.state.value}
                                                              value={this.state.value}
                                                              onFocus={() => {
                                                                  this.setState({search: false})
                                                              }}
                                                              onBlur={() => this.setState({search: true}, () => this._text_on_blur())}
                                                              onChangeText={text => this._text_on_change(text)}/>
            </View>
            {(this.state.value.trim() !== '' ? (<Button
                icon={
                    <Icon
                        name="remove"
                        size={15}
                        color="gray"
                    />
                }
                onPress={() => this.setState({value: ''})}
                type={"clear"}
            />) : null)}
            <Button disabledTitleStyle={[{color: "lightgray"}, this.state.disableSearchBtnStyle]}
                    disabled={this.state.value.trim() === ''} type={"clear"}
                    icon={<Icon name={"search"} size={12} color={"gray"}/>}
                    onPress={() => this._on_submit()}/>
        </View>);
    }
}

export default SearchBar;
module.exports = SearchBar;

AppRegistry.registerComponent('SearchBar', () => SearchBar)
