import {StyleSheet } from "react-native";


const styles = StyleSheet.create({
    formContext:{
        width: "100%",
        height: "auto",
        bottom: 20,
        backgroundColor: "#0381ff",
        alignItems: "center",
        borderTopLeftRadius: 30,    
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
        marginTop: 10,
    },

    form:{
        width: "auto",
        height: "auto",
        marginTop: 30,
        marginBottom: -30,
        padding: 40,
    },

    label:{
        color:"#fff",
        fontSize: 18 ,
        paddingLeft: 20,
    },

    input:{
        width: "auto",
        borderRadius: 20,
        backgroundColor: "#ede8e8",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ede8e8",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 25,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#181a1c",
        fontWeight: "bold",
    },
    errormessage:{
        fontSize: 12,
        color: 'red',
        fontWeight: "bold",
        paddingLeft: 10,
    }


})

export default styles