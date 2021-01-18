import React from 'react';

import Title from './title';
import List, { Item } from './list';
import {Text, View, StyleSheet, Font} from "@react-pdf/renderer";
import UserProfileService from "../../services/UserProfileService";

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
const SkillEntry = ({ name, details }) => (
    <View>
        <Text style={styles.title}>{name}</Text>
        <List>
            {/* {/* {skills.map((skill, i) => ( //todo add this if in the backend there's multiple elements being sents */}
        <Text style={styles.title}>{details}</Text>

                {/* <Item key={i}>{skill}</Item> */}
            {/* ))} */}
        </List>
    </View>
);

// const Skills = () => (
//     <View>
//         <Title style={styles.bold}>Skills</Title>
//         <SkillEntry
//             name="Googling"
//             skills={[
//                 'Can do 55 googles per minute',
//                 'High accuracy',
//             ]}
//         />
//     </View>
// );
class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: styles
        }
        // console.log("props " + this.props.skills);
    }
    render() {
        return (
            <View style={styles.container}>
                <Title style={styles.bold} fontweight={'bold'}>Skills</Title>
                {/* {this.props.skills.map(skills => ( */}
            <SkillEntry
                name={"Skill name"} // skills.name
                details={"skill details"} //skills.details
                // key={skills.school + skills.name} // skills.school + skills.name
            />
        {/* ))} */}
            </View>
        );
    }
}
export default Skills;