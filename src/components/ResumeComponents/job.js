import React from "react";

import Title from "./title";
import List, { Item } from "./list";
import { Text, View, StyleSheet } from  "@react-pdf/renderer";
import {withStyles} from "@material-ui/core/styles";
import { render } from "@testing-library/react";

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

function name(props){
render()
return("test")
}
const JobEntry = ({ company, position, date }) => {
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
        </View>
    );
};
class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: styles,
        }
    }

    render() {
        return (
            <View style={styles.container}>
        <Title>Experience</Title>
        {this.props.experience.map(experience => (
            <JobEntry
                company={experience.companyName}
                date={experience.startDate}
                key={experience.companyName + experience.name}
                position={experience.name}
            />
        ))}
    </View>
        );
    }
}

export default Jobs;