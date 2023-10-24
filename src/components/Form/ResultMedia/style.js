import {StyleSheet } from "react-native";


const styles = StyleSheet.create({
    resultMedia:{
        flex: 0, // expande e diminui dinamicamente com base no espaço disponível. 
        marginTop: 10,
        paddingTop:10,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numberMedia:{
        fontSize: 25,
        color: "#ab0a0a",
        fontWeight: "bold",
    },
    information:{
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold"
    },

    infoapr:{
        fontSize: 15,
        color: "#1bb019",
    },
    inforec:{
        fontSize: 15,
        color: "#311475",
    },
    inforep:{
        fontSize: 15,
        color: "#a10609",
    }


})

export default styles