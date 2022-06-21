import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';

const CPA2 = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [topic,setTopic] = useState('');
  //const [isLoading, setLoading] = useState(true);

  
  const getInfo = async () => {
        try {
          const url = "https://api.plos.org/search?q=title:"+topic
          const response = await fetch(url);
          const json = await response.json();
          setData(json.response.docs); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getInfo()}, [topic])


  return (

    <SafeAreaView style={{ flex: 1, padding: 24 }}>
    <Text style={{textAlign: 'center', fontFamily:'Bangla MN', fontSize: 22, paddingTop:10}}> Find info about unclear concepts: </Text>
    <View style={{flexDirection:'row',margin:10}}>
                <Text>ENTER CONCEPT: </Text>
                <TextInput style={{backgroundColor: 'white'}}
                placeholder="DNA"
                onChangeText = {(text) => {setTopic(text)}}
                defaultValue = {topic}
                />    
            </View>
      {loading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text> {'\n'}Publication Date: {item.publication_date},{'\n'}Article Name: {item.title_display} {'\n'}</Text>
          )}
        />
      )}
    </SafeAreaView>

     
  )
}

export default CPA2;
