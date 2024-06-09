import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Story() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [activeIcon, setActiveIcon] = useState('keyboard');
  const [selectedText, setSelectedText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleContentPress = () => {
    setPopupVisible(true);
  };

  const handleIconPress = icon => {
    setActiveIcon(icon);
    if (icon === 'keyboard') {
      // Logic to show keyboard if needed (typically handled automatically)
    } else if (icon === 'star') {
      // Logic to open Agastya
      console.log('Opening Agastya');
      // Reset selected text and response text when opening Agastya
      setSelectedText('');
      setResponseText('');
    }
  };

  const handleTextSelect = text => {
    setSelectedText(text);
  };

  const handleAgastyaOption = option => {
    // Logic to handle selected Agastya option
    // Here you would send a request to the server with the selected text or input value and the option
    // For demonstration purposes, I'm just setting a dummy response
    setResponseText(`Response for '${option}'`);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {/* Header */}
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 5,
        }}>
        <TouchableOpacity
          onPress={() => console.log('go back')}
          style={{flexDirection: 'row', alignItems: 'center'}}
          activeOpacity={0.6}>
          <Image
            source={require('../src/assets/left.png')}
            style={{resizeMode: 'contain', height: 16, width: 20}}
          />
          <Text
            includeFontPadding
            style={{
              fontWeight: '500',
              color: 'black',
              paddingLeft: 5,
              fontSize: 18,
              letterSpacing: 1,
            }}>
            Write New Story
          </Text>
        </TouchableOpacity>
      </View>

      {/* Text Input Holder Blocks */}
      <View style={{paddingTop: 10}}>
        <TextInput
          placeholder="Title"
          placeholderTextColor={'lightgrey'}
          onFocus={handleContentPress}
          style={{
            height: 50,
            width: 'auto',
            marginHorizontal: 10,
            letterSpacing: 1,
            backgroundColor: '#F5F5F5',
            borderRadius: 5,
            paddingLeft: 5,
          }}
        />
      </View>
      <View style={{paddingTop: 10}}>
        <TextInput
          placeholder="Sub Title"
          placeholderTextColor={'lightgrey'}
          onFocus={handleContentPress}
          style={{
            height: 50,
            width: 'auto',
            marginHorizontal: 10,
            letterSpacing: 1,
            backgroundColor: '#F5F5F5',
            borderRadius: 5,
            paddingLeft: 5,
          }}
        />
      </View>
      <View style={{paddingTop: 10}}>
        <TextInput
          placeholder="Body"
          placeholderTextColor={'lightgrey'}
          numberOfLines={20}
          multiline
          onFocus={handleContentPress}
          onSelectionChange={e => handleTextSelect(e.nativeEvent.selection)}
          onChangeText={text => setInputValue(text)}
          value={inputValue}
          style={{
            height: 250,
            width: 'auto',
            marginHorizontal: 10,
            letterSpacing: 1,
            backgroundColor: '#F5F5F5',
            borderRadius: 5,
            textAlignVertical: 'top',
            paddingLeft: 5,
          }}
        />
        {/* <Text>{selectedText}</Text> */}
      </View>

      {/* Pop-up Bar */}
      {isPopupVisible && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderColor: '#ccc',
          }}>
          <TouchableOpacity
            onPress={() => handleIconPress('star')}
            style={{alignItems: 'center'}}>
            <Image
              source={require('../src/assets/star.png')} // Replace with your star icon
              style={{
                resizeMode: 'contain',
                height: 24,
                width: 24,
                tintColor: activeIcon === 'star' ? 'blue' : 'black',
              }}
            />
            <Text>Agastya</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleIconPress('keyboard')}
            style={{alignItems: 'center'}}>
            <Image
              source={require('../src/assets/keyboard.png')} // Replace with your keyboard icon
              style={{
                resizeMode: 'contain',
                height: 24,
                width: 24,
                tintColor: activeIcon === 'keyboard' ? 'blue' : 'black',
              }}
            />
            <Text>Keyboard</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Agastya Options */}
      {activeIcon === 'star' && (
        <View style={{marginTop: 20, paddingHorizontal: 10}}>
          <Text>Selected Text:</Text>
          <Text>
            {inputValue.substring(selectedText.start, selectedText.end)}
          </Text>
          <Text>Agastya Options:</Text>
          <TouchableOpacity
            onPress={() => handleAgastyaOption('Make it shorter')}>
            <Text>Make it shorter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleAgastyaOption('Improve writing')}>
            <Text>Improve writing</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Agastya Response Display */}
      {responseText !== '' && (
        <View style={{marginTop: 20, paddingHorizontal: 10}}>
          <Text>Agastya Response:</Text>
          <Text>{responseText}</Text>
        </View>
      )}
    </View>
  );
}
