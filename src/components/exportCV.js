import React from "react";
import ReactDOM from "react-dom";
import ReactPDF, {PDFDownloadLink, Text, Document, Font, Page, StyleSheet, Image, View,} from "@react-pdf/renderer"
import Header from "./ResumeComponents/header"
import Education from "./ResumeComponents/education"
import Experience from "./ResumeComponents/experience"
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
        fontSize: 12,
        textAlign: 'center',
        marginTop: 25,
        paddingTop: 10,
        borderWidth: 3,
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
        this.state = {
            userProfile: new UserProfile(),
            username: "",
            email: "",
        };
        this.getUserData = this.getUserData.bind(this);
        this.getUserData();
        console.log(this.state.username);
    }

    getUserData() {
        UserProfileService.whoAmI()
            .then((response) => {
                var Profile = new UserProfile();
                Profile.loadFromObject(response);

                this.setState({userProfile: Profile});

                var name = "";
                if (this.state.userProfile.prefix.trim() !== "") {
                    name =
                        this.state.userProfile.firstName +
                        " " +
                        this.state.userProfile.prefix +
                        " " +
                        this.state.userProfile.lastName;
                } else {
                    name =
                        this.state.userProfile.firstName +
                        " " +
                        this.state.userProfile.lastName;
                }


                var email_address = "";
                email_address = this.state.userProfile.emailAddress;

                this.setState({username: name, email: email_address});

                console.log(this.state.email_Address);
                console.log(this.state.email);


            })
            .catch((error) => {
                console.log("error 3 " + error);
            });
    }

    render() {
        return (
            <Document>
                DOWNLOAD PDF in A4 format:
                <PDFDownloadLink document={<OutputA4 username={this.state.username} email={this.state.email}/>} fileName="CVA4.pdf">
                    {({blob, url, loading, error}) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
                <p></p>
                DOWNLOAD PDF in landscape format:
                <PDFDownloadLink document={<OutputLandscape username={this.state.username} email={this.state.email}/>} fileName="CVLandscape.pdf">
                    {({blob, url, loading, error}) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
                <p></p>

                DOWNLOAD PDF in 380 by 1250 format:
                <PDFDownloadLink document={<Output380by1250 username={this.state.username} email={this.state.email}/>} fileName="CV380by1250.pdf">
                    {({blob, url, loading, error}) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
            </Document>
        );
    }
}

    const Resume = (props) => (

        <Page {...props} style={styles.page}>
            <Header username={props.username} email={props.email}/>

            <View style={styles.container}>
                <View style={styles.leftColumn}>
                    <Image
                        src="https://www.indiewire.com/wp-content/uploads/2017/07/the-big-lebowski-e1520362797168.jpg" //Not showing up
                        style={styles.image}
                    />
                    <Description/>
                    <Education/>
                    <Skills/>
                    <Projects/>

                </View>
                <Experience/>
            </View>
            <Text style={styles.footer}>footer</Text>
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
            <Resume size="A4" username={props.username} email={props.email}/>
        </Document>
    );
    const OutputLandscape = (props) => (
        <Document
            author="Dude"
            keywords="Cool resume bro, resume"
            subject="The resume of the Dude"
            title="Resume"
        >
            <Resume orientation="landscape" size="A4" username={props.username} email={props.email}/>
        </Document>
    );
    const Output380by1250 = (props) => (
        <Document
            author="Dude"
            keywords="Cool resume bro, resume"
            subject="The resume of the Dude"
            title="Resume"
        >
            <Resume size={[380, 1250]} username={props.username} email={props.email}/>
        </Document>
    );



export default withStyles(styles)(ExportCV)
