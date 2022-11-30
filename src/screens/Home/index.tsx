import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home(){
    const participants = ['Renan', 'Vini', 'Diego', 'Caio', "Beta", "Carla", "Mari", "Ju", "Felipe", "Flávia"]

function handleParticipantAdd(){
    console.log("tóis")
}

function handleParticipantRemove(name:string){
    console.log(`tóis ----- ${name}`)
}


  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do Evento
        </Text>
        <Text style={styles.eventDate}>
            Sexta, 4 de Novembro de 2022
        </Text>
        <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant)=>{
return(
    <Participant key={participant} name={participant} onRemove={()=> handleParticipantRemove(participant)}/>
)
})}
</ScrollView>
    </View>
  )
}