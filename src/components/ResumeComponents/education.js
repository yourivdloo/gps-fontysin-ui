import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "./title";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        '@media max-width: 400': {
            paddingTop: 10,
            paddingLeft: 0,
        },
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
const EducationEntry = ({ school, name, city, startDate }) => {
    const title = `${school} | ${name}`;
    return (
        <View style={styles.entryContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.leftColumn}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.rightColumn}>
                    <Text style={styles.date}>{city}</Text>
                    <Text style={styles.date}>{startDate}</Text>
                </View>
            </View>
        </View>
    );
};
class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: styles
        }
        console.log("props " + this.props.school);
    }
    render() {
        return (
            <View style={styles.container}>
                <Title fontweight={'bold'}>Education</Title>
                {this.props.education.map(education => (
            <EducationEntry
                school={education.school}
                startDate={education.startDate}
                key={education.school + education.name}
                city={education.city}
                name={education.name}
            />
        ))}
            </View>
        );
    }
}
export default Education