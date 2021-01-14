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
    projects: {
        // fontFamily: 'Lato',
        fontSize: 10,
        marginBottom: 10,
        fontWeight: "bold" ,
    },
});

const ProjectsEntry = ({ name, projects }) => (
    <View>
        <Text style={styles.title}>{name}</Text>
        <List>
            {projects.map((project, i) => (
                <Item key={i}>{project}</Item>
            ))}
        </List>
    </View>
);

const Projects = () => (
    <View>
        <Title style={styles.bold}>Projects</Title>
        <ProjectsEntry
            name="Semester 3 group project"
            projects={[
                'Top webdesign',
            ]}
        />
    </View>
);

export default Projects;