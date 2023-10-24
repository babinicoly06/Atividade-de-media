import React, { useState} from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration } from "react-native";
import Resultmedia from "./ResultMedia";
import styles from "./style";

export default function Form(){

const [n1, setn1] = useState(null);
const [n2, setn2]= useState(null);
const [n3, setn3]= useState(null);
const [n4, setn4]= useState(null);
const [messageMedia, setMessageMedia] =useState ("Preencha o peso e altura");
const [Media, setMedia]=useState (null);
const [messagedata, setMessagedata] =useState (null); 
const [textButton, setTextButton]=useState ("Calcular");
const [errormessage, setErrorMessage]=useState(null);

function MediaCalculator(){
    const medias = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4))/4

    setMedia(medias)

    if(medias <= 5){
        setMessagedata("Reprovado!")
    }
    else if(medias < 7 && medias > 5){
        setMessagedata("Recuperação")
    }
    else if(medias >= 7){
        setMessagedata("Aprovado!!!")
    }
}


    function verificationMedia(){
            setErrorMessage("Campo obrigatorio")
            Vibration.vibrate()
    }

function validationMedia(){
if (n1 != null && n2 !=null && n3 != null && n4 !=null){
    MediaCalculator()
    setn1(null)
    setn2(null)
    setn3(null)
    setn4(null)
    setMessageMedia(" Seu Media é igual a: ")
    setTextButton ("Calcular Novamente")
    setErrorMessage(null)
    return
}
    setMedia(null)
    setTextButton("Calcular")
    setMessageMedia("Preencha o Peso e altura para calcular")
    setMessagedata(null)
    verificationMedia()
}

return(
<View style={styles.formContext}>
<View style={styles.form}>
    <Text style={styles.label}>Nota 1</Text>
    <Text style={styles.errormessage}>{errormessage}</Text>
    <TextInput style={styles.input} onChangeText={setn1} value={n1} placeholder="Ex: 10.0" keyboardType="numeric"/>

    <Text style={styles.label}>Nota 2</Text>
    <Text style={styles.errormessage}>{errormessage}</Text>
    <TextInput style={styles.input} onChangeText={setn2} value={n2} placeholder="Ex: 10.0" keyboardType="numeric"/>

    <Text style={styles.label}>Nota 3</Text>
    <Text style={styles.errormessage}>{errormessage}</Text>
    <TextInput style={styles.input} onChangeText={setn3} value={n3} placeholder="Ex: 10.0" keyboardType="numeric"/>

    <Text style={styles.label}>Nota 4</Text>
    <Text style={styles.errormessage}>{errormessage}</Text>
    <TextInput style={styles.input} onChangeText={setn4} value={n4} placeholder="Ex: 10.0" keyboardType="numeric"/>

    <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationMedia()}>
    <Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>
                                                       
</View>
<Resultmedia messageResultMedia={messageMedia} resultMedia={Media} dataMedia={messagedata}/>
</View>
);}
