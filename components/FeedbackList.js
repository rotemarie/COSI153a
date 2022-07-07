import React, {useState,useEffect} from 'react';
import {View,Text,Button,FlatList} from 'react-native';
import {getFeedback,clearData} from './components/FeedbackFunctions';

const FeedbackList = () => {
    const [feedback,setFeedback] = useState("");
    const saveFeedback = (result) => {
        console.log("here is the result in saveFeedback:");
        console.dir(result);
        setFeedback(result);
    }

    useEffect(()=>{getFeedback(saveFeedback)},
            []);

    
    return (
        <View style={{flex:1}}>
            <Text> Here is the feedback </Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Button
                title="get feedback"
                onPress = {() =>
                    getFeedback(saveFeedback)} 
                />
                <Button
                    title="clear"
                    onPress = {() => 
                            {clearData();
                            getFeedback(saveFeedback)
                            }
                        }
                />
            </View>

            <FlatList
                data={feedback}
                keyExtractor={({ id }, index) => index}
                renderItem={({ item }) => (
                         <Text>
                            {item.value}
                        </Text>
          )}
            />
        </View> 
    )
}

export default FeedbackList;