import Document from "@react-pdf/renderer";
import Page from "@react-pdf/renderer";
import Text from "@react-pdf/renderer";
import React from "react";

// class home extends React.Component {
//
//     render() {
const cv = () => (
    <Document>
        <Page size="A4"> {/**style={styles.page}**/}
            {/*<View style={styles.section}>*/}
            <Text>Section #1</Text>
            {/*</View>*/}
            {/*<View style={styles.section}>*/}
            <Text>Section #2</Text>
            {/*</View>*/}
        </Page>
    </Document>
);

export default cv;
