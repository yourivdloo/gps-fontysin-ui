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
    skills: {
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
const SkillEntry = ({ name, skills }) => (
    <View>
        <Text style={styles.title}>{name}</Text>
        <List>
            {skills.map((skill, i) => (
                <Item key={i}>{skill}</Item>
            ))}
        </List>
    </View>
);

const Skills = () => (
    <View>
        <Title style={styles.bold}>Skills</Title>
        <SkillEntry
            name="Googling"
            skills={[
                'Can do 55 googles per minute',
                'High accuracy',

            ]}
        />
    </View>
);

export default Skills;