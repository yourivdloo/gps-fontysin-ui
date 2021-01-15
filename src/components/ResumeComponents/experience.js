import React from "react";

import Title from "./title";
import List, { Item } from "./list";
import { Text, View, StyleSheet } from  "@react-pdf/renderer";
import {withStyles} from "@material-ui/core/styles";

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

const ExperienceEntry = ({ company, details, position, date }) => {
    const title = `${company} | ${position}`;
    return (
        <View style={styles.entryContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.leftColumn}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.rightColumn}>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
            <List>
                {details.map((detail, i) => (
                    <Item key={i} style={styles.detailContainer}>
                        {detail}
                    </Item>
                ))}
            </List>
        </View>
    );
};

const experienceData = [
    {
        company: 'Philips',
        date: '04.04.2019',
        details: [
            'First internship at Philips doing machine learning',
            'Working with data set validation',
        ],
        position: 'Intern',
    },
    {
        company: 'VDL',
        date: '01.06.2017',
        details: [
            'Blue collar summer job at VDL as an electrician',
        ],
        position: 'Vehicle technician',
    },
];

const Experience = () => (
    <View style={styles.container}>
        <Title>Experience</Title>
        {experienceData.map(({ company, date, details, position }) => (
            <ExperienceEntry
                company={company}
                date={date}
                details={details}
                key={company + position}
                position={position}
            />
        ))}
    </View>
);

export default withStyles(styles)(Experience);