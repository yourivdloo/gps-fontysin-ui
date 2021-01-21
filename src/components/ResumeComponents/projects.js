import React from 'react';

import Title from './title';
import List, { Item } from './list';
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    title: {
        // fontFamily: 'Lato Bold',
        fontSize: 11,
        marginBottom: 10,
        bold: { fontWeight: 'bold' },
    },
    projects: {
        // fontFamily: 'Lato',
        fontSize: 10,
        marginBottom: 10,
        fontWeight: "bold",
    },
});
Font.register({
    family: 'Lato',
    src: `${__dirname}/fonts/Lato/Lato.ttf`,
});
Font.register({
    family: 'Lato Bold',
    src: `${__dirname}/fonts/Lato/Lato-Bold.ttf`,
});
const ProjectEntry = ({ name, url }) => {
    return (
        <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{url}</Text>
        </View>
    );
};

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: styles
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Title style={styles.bold} fontweight={'bold'}>Projects</Title>
                {this.props.projects.map(projects => (
                    <ProjectEntry
                        name={projects.name} // projects.name
                        url={projects.url} //projects.url
                        key={projects.url}
                    />
                ))}
            </View>
        );
    }
}
export default Projects;