import React from 'react';

import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
        alignItems: 'stretch',
    },
    detailColumn: {
        flexDirection: 'column',
        flexGrow: 9,
        textTransform: 'uppercase',
    },
    linkColumn: {
        flexDirection: 'column',
        flexGrow: 2,
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    },
    name: {
        fontSize: 24,
        // fontFamily: 'Lato Bold',
    },
    subtitle: {
        fontSize: 10,
        justifySelf: 'flex-end',
        // fontFamily: 'Lato',
    },
    link: {
        // fontFamily: 'Lato',
        fontSize: 10,
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    },
});

class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: styles
        }
        console.log(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.detailColumn}>
                    <Text style={styles.name}>{this.props.username}</Text>
                    <Text style={styles.subtitle}>{""}</Text>
                </View>
                <View style={styles.linkColumn}>
                    <Link style={styles.link}>{this.props.email}</Link>
                    <Link style={styles.link}>{this.props.phoneNo}</Link>

                </View>
            </View>
        )
    }
}

export default header