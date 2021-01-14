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

export default () => (
    <View style={styles.container}>
        <Title fontweight={'bold'}>Education</Title>
        <Text style={styles.school}>Fontys ICT</Text>
        <Text style={styles.degree}>Software stream</Text>
        <Text style={styles.candidate}>01.08.2023</Text>
    </View>
);