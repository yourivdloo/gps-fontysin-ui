import React from "react";
import ReactDOM from "react-dom";
import ReactPDF,  {PDFDownloadLink, Text, Document, Font, Page, StyleSheet, Image, View,} from "@react-pdf/renderer"
import Header from "./ResumeComponents/header"
import Education from "./ResumeComponents/education"
import Job from "./ResumeComponents/job"
import Skills from "./ResumeComponents/skills"
import Description from "./ResumeComponents/description"
import Projects from "./ResumeComponents/projects"
import {withStyles} from "@material-ui/core/styles";
import UserProfile from "./../entities/UserProfile";
import UserProfileService from "../services/UserProfileService";


const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        '@media max-width: 400': {
            flexDirection: 'column',
        },
    },
    image: {
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: 'column',
        width: 170,
        paddingTop: 30,
        paddingRight: 15,
        '@media max-width: 400': {
            width: '100%',
            paddingRight: 0,
        },
        '@media orientation: landscape': {
            width: 200,
        },
    },
    footer: {
        fontSize: 8,
        textAlign: 'center',
        marginTop: 25,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderStyle: 'dashed',
        '@media orientation: landscape': {
            marginTop: 10,
        },
    },
});

Font.register({
    family: 'Open Sans',
    src: "./fonts/fonts/Open_Sans/OpenSans-Regular.ttf",
});
Font.register({
    family: 'Lato',
    src: "./fonts/Lato/Lato-Regular.ttf",
});
Font.register({
    family: 'Lato Italic',
    src: "./fonts/Lato/Lato-Italic.ttf",
});
Font.register({
    family: 'Lato Bold',
    src: "./fonts/Lato/Lato-Bold.ttf",
});

class ExportCV extends React.Component {
    constructor(props) {
        super(props);
        // ! Any new entry made in the state needs to be passed in the state below, then into getUserData(), then into the PDFDownloader section, then into the component where it will exist in the Resume(), and then in all the Output options 
        this.state = {
            userProfile: null,
            username: "",
            email: "",
            phoneNo: "",
            education:[],
            job:[],
            projects:[],
            skills: [],
        };
        this.getUserData = this.getUserData.bind(this);
        this.getUserData();
        // console.log(this.state.username);
    }

    getUserData() {
        UserProfileService.whoAmI()
            .then((response) => {
                var Profile = new UserProfile();
                Profile.loadFromObject(response);
                this.setState({userProfile: Profile});
                // setting up local variables containing the data from the back-end
                
                var name = Profile.fullName;
// From User
                var email_address =Profile.emailAddress;
                var phone_address = Profile.phoneNumber;
                var studies = Profile.studies;
                var jobs = Profile.jobs;
                var projects = Profile.projects;
                var skillss = Profile.skills;

                // putting everything in the state
                this.setState({username: name, email: email_address, phoneNumber: phone_address, education: studies, job: jobs, projects: projects, skills: skillss});

                console.log(this.state.userProfile);
            })
            .catch((error) => {
                console.log("error 3 " + error);
            });
    }
// make a variable to contain one instance of the details passed to the PDFDownloadLink
    render() {
        return (
            <Document>
                DOWNLOAD PDF in A4 format:
                <PDFDownloadLink document={<OutputA4 
                username={this.state.username} 
                email={this.state.email}
                phoneNo={this.state.phoneNo}
                education={this.state.education}
                job={this.state.job} projects={this.state.projects} skills={this.state.skills}
                />} fileName="CVA4.pdf">
                    {({blob, url, loading, error}) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
                <p></p>
                DOWNLOAD PDF in landscape format:
                <PDFDownloadLink document={<OutputLandscape username={this.state.username} email={this.state.email} phoneNo={this.state.phoneNo} education={this.state.education} job={this.state.job} projects={this.state.projects} skills={this.state.skills}/>} fileName="CVLandscape.pdf">
                    {({blob, url, loading, error}) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
                <p></p>

                DOWNLOAD PDF in 380 by 1250 format:
                <PDFDownloadLink document={<Output380by1250 username={this.state.username} email={this.state.email} phoneNo={this.state.phoneNo} education={this.state.education} job={this.state.job} projects={this.state.projects} skills={this.state.skills}/>} fileName="CV380by1250.pdf">
                    {({blob, url, loading, error}) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
            </Document>
        );
    }
}

const Resume = (props) => (

    <Page style={styles.page}>
        {/* {console.log(props)} */}
        <Header username={props.username} email={props.email} phoneNo={props.phoneNo}/>

        <View style={styles.container}>
            <View style={styles.leftColumn}>
                <Image
                    src="https://www.indiewire.com/wp-content/uploads/2017/07/the-big-lebowski-e1520362797168.jpg" //TODO image doesn't work
                    style={styles.image}
                />
                {console.log("education " + props.education.school)}
                <Education education={props.education}/>
                <Skills skills={props.skills}/>
                {/* <Projects projects={props.projects}/> */}

            </View>
            {/*<Description/>*/}
            <Job job={props.job}/>
            
        </View>
        <Text style={styles.footer}>Made with FontysIn</Text>
    </Page>
);
// Page output in different formats
const OutputA4 = (props) => (
    <Document
        author="Dude"
        keywords="Cool resume bro, resume"
        subject="The resume of the Dude"
        title="Resume"
    >
        <Resume size="A4" username={props.username} email={props.email} phoneNo={props.phoneNo} education={props.education} job={props.job} projects={props.projects} skills={props.skills}/>
    </Document>
);
const OutputLandscape = (props) => (
    <Document
        author="Dude"
        keywords="Cool resume bro, resume"
        subject="The resume of the Dude"
        title="Resume"
    >
        <Resume orientation="landscape" size="A4" username={props.username} email={props.email}
                phoneNo={props.phoneNo} education={props.education} job={props.job} projects={props.projects} skills={props.skills}/>
    </Document>
);
const Output380by1250 = (props) => (
    <Document
        author="Dude"
        keywords="Cool resume bro, resume"
        subject="The resume of the Dude"
        title="Resume"
    >
        <Resume size={[380, 1250]} username={props.username} email={props.email} phoneNo={props.phoneNo} education={props.education} job={props.job} projects={props.projects} skills={props.skills}/>
    </Document>
);


export default withStyles(styles)(ExportCV)
