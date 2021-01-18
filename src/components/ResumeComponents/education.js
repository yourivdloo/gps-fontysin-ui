import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "./title";

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    school: {
        // fontFamily: 'Lato Bold',
        fontSize: 10,
    },
    degree: {
        // fontFamily: 'Lato',
        fontSize: 10,
    },
    candidate: {
        // fontFamily: 'Lato Italic',
        fontSize: 10,
    },
});
class education extends React.Component {
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
                <Title fontweight={'bold'}>Education</Title>
                <Text style={styles.school}>{education.school}</Text>
                {/* <Text style={styles.degree}>{education.name}</Text> */}
                <Text style={styles.degree}>{education.city}</Text>
                <Text style={styles.candidate}>{education.startDate}</Text>
            </View>
        );
    }
}
export default education