import React from 'react';

import Title from './title';
import List, {Item} from './list';
import {Text, View, StyleSheet, Font, Link} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 15,
        '@media max-width: 400': {
            paddingTop: 10,
            paddingLeft: 0,
        },
    },
    entryContainer: {
        marginBottom: 10,
    },
    date: {
        fontSize: 11,
        // fontFamily: 'Lato Italic',
    },
    detailContainer: {
        flexDirection: 'row',
    },
    detailLeftColumn: {
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
    },
    detailRightColumn: {
        flexDirection: 'column',
        flexGrow: 9,
    },
    bulletPoint: {
        fontSize: 10,
    },
    details: {
        fontSize: 10,
        // fontFamily: 'Lato',
    },
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: 'column',
        flexGrow: 9,
    },
    rightColumn: {
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'flex-end',
        justifySelf: 'flex-end',
    },
    title: {
        fontSize: 11,
        color: 'black',
        textDecoration: 'none',
        // fontFamily: 'Lato Bold',
    },
});


class description extends React.Component {
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
                <Title fontweight={'bold'}>Description</Title>
                <View style={styles.entryContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>{this.props.description} </Text>

                        <View style={styles.headerContainer}>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}

export default description