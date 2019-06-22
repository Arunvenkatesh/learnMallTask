import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    header: {
        backgroundColor: "#000",
        height: 250,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 42,
        paddingBottom: 10
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'flex-start',
        position: 'absolute',
        marginTop: 170,
        marginLeft: 25
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        alignItems: 'center',
        padding: 10,
        flexDirection: "row",
        alignSelf: "flex-end"
    },
    tabRow: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 10,
        paddingHorizontal: 10
    },
    tabLabelNumber: {
        color: 'black',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 2,
    },
    tabLabelText: {
        color: 'black',
        fontSize: 14,
        textAlign: 'left',
    },
    photoList: {
        flexDirection: "row",
        marginTop: 10
    },
    photoItem: {
        width: 100,
        height: 100,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        backgroundColor: "#0C142B",
        marginRight: 8,
        marginLeft: 8,
        opacity: 0.8,
        shadowColor: "#000",
        shadowOffset: {
            width: -4,
            height: 6
        },
        shadowOpacity: 0.1
    },
    recentTabName: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 2,
        fontWeight: "500"
    },
    recentTab: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 15,
        marginHorizontal: 10,
        paddingHorizontal: 10
    },
    recentlyAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
        alignSelf: 'flex-start',

    },
    recentlyLabelText: {
        color: 'black',
        fontSize: 12,
        fontWeight: "100",
        textAlign: 'center',
    },
    recentlyView: {
        alignSelf: "center",
        marginTop: 10,
        marginHorizontal: 15,
    }
});
