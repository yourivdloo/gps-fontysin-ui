import React from 'react';

import Title from './title';
import List, { Item } from './list';
import {Text, View, StyleSheet, Font} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    title: {
        // fontFamily: 'Lato Bold',
        fontSize: 10,
        marginBottom: 10,
        bold: {fontWeight: 'bold'},
    },
    projects: {
        // fontFamily: 'Lato',
        fontSize: 10,
        marginBottom: 10,
        fontWeight: "bold" ,
    },
});

const Desc= ({ description }) => (
    <View>
        <Text style={styles.title}>{description}</Text>
    </View>
);

const Description = () => (
    <View>
        <Title fontweight={'bold'}>Description</Title>
        <Desc
            description="Sick description of The Dude"
        />
    </View>
);

export default Description;