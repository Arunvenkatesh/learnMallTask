import React, { Component } from 'react';
import { View, Image, Text, ScrollView, ImageBackground } from 'react-native';
import { profileStyles } from "../../styles/profile"
import Header from "../Header"
import map from "lodash/map"
import reverse from "lodash/reverse"

export default class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            following: [
                { name: "Mark", image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
                { name: "Clare", image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
                { name: "Jaden", image: "https://bootdey.com/img/Content/avatar/avatar5.png" },
                { name: "Srick", image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
                { name: "Erick", image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
                { name: "Francis", image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
                { name: "Matilde", image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
            ],
            imageGallery: [{
                imgURL: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
                title: "Mountain"
            }, {
                imgURL: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
                title: "Cat"
            }, {
                imgURL: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
                title: "Fruits"
            }, {
                imgURL: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
                title: "Monarch"
            }, {
                imgURL: "https://homepages.cae.wisc.edu/~ece533/images/tulips.png",
                title: "Tuilps"
            }, {
                imgURL: "https://homepages.cae.wisc.edu/~ece533/images/serrano.png",
                title: "Serrano"
            }, {
                imgURL: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
                title: "Mountain"
            }]
        };
    }
    render() {

        return (
            <View style={profileStyles.mainView}>
                <ScrollView>

                    <ImageBackground style={profileStyles.header} source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/lena.png' }} >
                        <View style={{ flex: 1, width: "100%", marginTop: 10 }}>
                            <Header onBack={() => { alert("Back is pressed") }} title=" @anjialina " />
                        </View>
                        <Text style={{ color: "#FFF", fontSize: 22 }}>Angelina Johnson</Text>
                    </ImageBackground>
                    <Image style={profileStyles.avatar} source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/lena.png' }} />
                    <View style={profileStyles.bodyContent}>
                        <View style={profileStyles.tabRow}>
                            <Text style={profileStyles.tabLabelText}>
                                Followers
                        </Text>
                            <Text style={[profileStyles.tabLabelNumber]}>
                                15,000
                        </Text>
                        </View>
                        <View style={profileStyles.tabRow}>
                            <Text style={profileStyles.tabLabelText}>
                                Followings
                        </Text>
                            <Text style={profileStyles.tabLabelNumber}>
                                3000
                        </Text>
                        </View>
                    </View>

                    <View style={profileStyles.photoList}>
                        <ScrollView horizontal={true}>
                            {map(this.state.imageGallery, (image, key) => {
                                return (<Image style={[profileStyles.photoItem]} source={{ uri: image.imgURL }} />)
                            })}
                        </ScrollView>
                    </View>
                    <View style={profileStyles.recentTab}>
                        <Text style={[profileStyles.recentTabName]}>
                            Recently Following
                        </Text>
                    </View>
                    <View style={profileStyles.photoList}>
                        <ScrollView horizontal={true}>
                            {map(this.state.following, (image, key) => {
                                return (<View style={profileStyles.recentlyView}>
                                    <Image style={profileStyles.recentlyAvatar} source={{ uri: image.image }} />
                                    <Text style={profileStyles.recentlyLabelText}>
                                        {image.name}
                                    </Text>
                                </View>)
                            })}
                        </ScrollView>
                    </View>
                    <View style={profileStyles.recentTab}>
                        <Text style={[profileStyles.recentTabName]}>
                            Recent Followers
                        </Text>
                    </View>
                    <View style={profileStyles.photoList}>
                        <ScrollView horizontal={true}>
                            {map(reverse(this.state.following), (image, key) => {
                                return (<View style={profileStyles.recentlyView}>
                                    <Image style={profileStyles.recentlyAvatar} source={{ uri: image.image }} />
                                    <Text style={profileStyles.recentlyLabelText}>
                                        {image.name}
                                    </Text>
                                </View>)
                            })}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

