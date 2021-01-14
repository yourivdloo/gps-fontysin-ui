import React from "react";
import ReactDOM from "react-dom";
import ReactPDF, { PDFDownloadLink,Text, Document, Font, Page, StyleSheet, Image, View,} from "@react-pdf/renderer"
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

Font.register( {
    family: 'Open Sans',
    src: "./fonts/fonts/Open_Sans/OpenSans-Regular.ttf",
});
Font.register( {
    family: 'Lato',
    src: "./fonts/Lato/Lato-Regular.ttf",
});
Font.register( {
    family: 'Lato Italic',
    src: "./fonts/Lato/Lato-Italic.ttf",
});
Font.register( {
    family: 'Lato Bold',
    src: "./fonts/Lato/Lato-Bold.ttf",
});


const Resume = props => (
    <Page {...props} style={styles.page}>
        <Header />
        <View style={styles.container}>
            <View style={styles.leftColumn}>
                <Image
                    src="https://www.indiewire.com/wp-content/uploads/2017/07/the-big-lebowski-e1520362797168.jpg"
                    style={styles.image}
                />
                <Description/>
                <Education />
                <Skills />
                <Projects/>

            </View>
            <Experience />
        </View>
        <Text style={styles.footer}>This IS the candidate you are looking for</Text>
    </Page>
);
// Page output in different formats
const OutputA4 = () => (
    <Document
        author="Dude"
        keywords="Cool resume bro, resume"
        subject="The resume of the Dude"
        title="Resume"
    >
        <Resume size="A4" />
    </Document>
);
const OutputLandscape = () => (
    <Document
        author="Dude"
        keywords="Cool resume bro, resume"
        subject="The resume of the Dude"
        title="Resume"
    >
        <Resume orientation="landscape" size="A4" />
    </Document>
);const Output380by1250 = () => (
    <Document
        author="Dude"
        keywords="Cool resume bro, resume"
        subject="The resume of the Dude"
        title="Resume"
    >
        <Resume size={[380, 1250]} />
    </Document>
);
class ExportCV extends React.Component {
constructor(props) {
    super(props);
    this.state = {
       profile: UserProfileService.whoAmI(),
    }
}
    render() {
        return (
            <Document>
                DOWNLOAD PDF in A4 format:
                    <PDFDownloadLink document={<OutputA4/>} fileName="NameA4.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? "Loading document..." : "Download now!"
                        }
                    </PDFDownloadLink>
                <p></p>
                DOWNLOAD PDF in landscape format:
                <PDFDownloadLink document={<OutputLandscape/>} fileName="NameLandscape.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
                <p></p>

                DOWNLOAD PDF in 380 by 1250 format:
                <PDFDownloadLink document={<Output380by1250/>} fileName="NameOutput380by1250.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
    </Document>
    );
    }
}
export default withStyles(styles)(ExportCV)
