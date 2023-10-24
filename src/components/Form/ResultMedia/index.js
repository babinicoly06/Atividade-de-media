import React from "react";
import { View, Text} from "react-native";
import styles from "./style";

export default function Resultmedia(props){
    return(

        <View style={styles.resultMedia}>
            <Text style={styles.information}>{props.messageResultMedia}</Text>
            <Text style={styles.numberMedia}>{props.resultMedia}</Text>
            <Text style={styles.information}>{props.dataMedia}</Text>
        </View>
    );
}