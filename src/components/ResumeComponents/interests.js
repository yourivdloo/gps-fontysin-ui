import React from 'react';

import Title from './title';
import List, { Item } from './list';
import {Text, View, StyleSheet, Font} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    title: {
        // fontFamily: 'Lato Bold',
        fontSize: 11,
        marginBottom: 10,
        bold: {fontWeight: 'bold'},
    },
    interests: {
        // fontFamily: 'Lato',
        fontSize: 10,
        marginBottom: 10,
        fontWeight: "bold" ,
    },
});
Font.register( {
    family: 'Lato',
    src: `${__dirname}/fonts/Lato/Lato.ttf`,
});
Font.register( {
    family: 'Lato Bold',
    src: `${__dirname}/fonts/Lato/Lato-Bold.ttf`,
});
const InterestEntry = ({ name, details }) => (
    <View>
        <Text style={styles.title}>{name}</Text>
        <List>
            <View style={styles.leftColumn}>
        <Text style={styles.title}>{details}</Text>
        </View>
        </List>
    </View>
);


class Interests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: styles
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Title style={styles.bold} fontweight={'bold'}>Interests</Title>
                {this.props.interests.map(interests => (
            <InterestEntry
                name={interests.name} 
                // details={interests.details} 
                key={interests.name}
            />
        ))}
            </View>
        );
    }
}
export default Interests;