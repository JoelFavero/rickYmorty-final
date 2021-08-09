import React from 'react';
import { StyleSheet,Text, View, TextInput, Button, Image } from 'react-native';
import 'react-native-gesture-handler';


export default function App() {
  const[characterData, setCharacterData] = React.useState(undefined);  
  const[searchText, setSearch] = React.useState('');
  const[errorInput, setError]= React.useState('');
  const[buttonClicked, setButtonClicked]=React.useState('');
  
    React.useEffect(() => {
    if(buttonClicked!=""){
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchText}`)
    .then(response=>response.json().then(data=>{ if(data.results===undefined){ setButtonClicked(""); setError("error");  
    }else{ setButtonClicked("");  setError(''); setCharacterData(data)} }))
    .catch(e=>console.error(e))
    }
    });
     
  return (
    <View title="view" style={styles.container}>
    <Text style={{marginBottom:20}} > Welcome to rick y morty appi make a search : </Text>
    <TextInput  style={styles.textInput}  placeholder="Search a character" onChangeText={text=> setSearch(text)} />
    <Button color="#00FA9A"  title="Search" onPress={()=>setButtonClicked("clicked")}/>
  
  { characterData  != undefined && errorInput === ''  && <Text style={styles.text}> Nombre: {characterData.results[0].name}</Text> } 
  { characterData != undefined && characterData  && errorInput === '' && <Text style={styles.text} > Status: {characterData.results[0].status}</Text> }
  { characterData  != undefined && characterData  && errorInput === '' && <Text style={styles.text} >Species: {characterData.results[0].species}</Text> }
  { characterData  != undefined && characterData  && errorInput === ''  && <Text style={styles.text} >Gender: {characterData.results[0].gender}</Text> }
  { characterData != undefined && characterData  && errorInput === '' && <Image style={{width: 200, height: 200 , marginTop:15}} source={{uri:characterData.results[0].image}} /> }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:'#90EE90',
      justifyContent:'center',
      alignItems:'center'   
    },
    text:{
      marginTop:15
    },
    textInput:{
      marginBottom:20,
      padding:2 ,
      borderColor: 'black',
      borderWidth: 1 ,
      backgroundColor:"#00FA9A"       
    },  
    button:{
      justifyContent:'center',
      alignItems:'center',
      color:"#ff5c5c"
    }        
    });
    