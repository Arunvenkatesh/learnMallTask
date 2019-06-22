
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const Header = ({
    title,
    onBack
}) => {
    return (
        <View style={headerStyles.header}>
            {onBack && <TouchableOpacity
                style={headerStyles.headerNav}
                onPress={() => {
                    if (onBack) {
                        onBack();
                    }
                }}
            >
                <Image
                    source={require("../assets/images/back_nav.png")}
                    style={headerStyles.headerNavIcon}
                />

            </TouchableOpacity>}
            <Text style={[headerStyles.headerTitle, { paddingLeft: onBack ? 0 : 15, textAlign: onBack ? "center" : "center" }]} >
                {title}
            </Text>
            <View style={headerStyles.headerNavRight}>

            </View>
        </View>
    );
};
Header.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func
};
const headerStyles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'rgba(52, 52, 52, 0.01)',
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    headerNav: {
        width: 50,
        height: 50,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 5,
        marginTop: 20

    },
    headerNavRight: {

        height: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 5
    },
    headerNavIcon: {
        width: 30,
        height: 30
    },
    headerTitle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "500",
        flexGrow: 1,
        textAlign: "center",
        paddingLeft: 10,
        marginTop: 20
    }
});
export default Header;