import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
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
    } else if (icon === 'star') {
      console.log('Opening Agastya');
      setSelectedText('');
      setResponseText('');
    } else {
      console.log('Opening camera');
    }
  };

  const handleTextSelect = text => {
    setSelectedText(text);
  };

  const handleAgastyaOption = option => {
    setResponseText(`Response for '${option}'`);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
      <View style={{paddingTop: 10, elevation: 4}}>
        <TextInput
          placeholder="Title"
          placeholderTextColor="lightgrey"
          onFocus={handleContentPress}
          style={{
            height: 50,
            marginHorizontal: 10,
            letterSpacing: 1,
            borderRadius: 5,
            paddingLeft: 5,
          }}
        />
      </View>
      <View style={{paddingTop: 10, elevation: 4}}>
        <TextInput
          placeholder="Sub Title"
          placeholderTextColor="lightgrey"
          onFocus={handleContentPress}
          style={{
            height: 50,
            marginHorizontal: 10,
            letterSpacing: 1,
            borderRadius: 5,
            paddingLeft: 5,
          }}
        />
      </View>
      <View style={{paddingTop: 10}}>
        <TextInput
          placeholder="Body"
          placeholderTextColor="lightgrey"
          numberOfLines={20}
          multiline
          onFocus={handleContentPress}
          onSelectionChange={e => handleTextSelect(e.nativeEvent.selection)}
          onChangeText={text => setInputValue(text)}
          value={inputValue}
          style={{
            height: 150,
            marginHorizontal: 10,
            letterSpacing: 1,
            borderRadius: 5,
            textAlignVertical: 'top',
            paddingLeft: 5,
          }}
        />
      </View>

      {/* Pop-up Bar */}
      {isPopupVisible && (
        <View>
          <View
            style={{
              bottom: 0,
              width: '100%',
              flexDirection: 'row',
              padding: 10,
              backgroundColor: 'white',
              borderColor: '#ccc',
              top: 2,
            }}>
            <TouchableOpacity
              onPress={() => handleIconPress('star')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../src/assets/plusbutton.png')}
                style={{
                  resizeMode: 'contain',
                  height: 18,
                  width: 18,
                  marginHorizontal: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIconPress('keyboard')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../src/assets/keyboard.png')}
                style={{
                  resizeMode: 'contain',
                  height: 18,
                  width: 18,
                  tintColor: activeIcon === 'keyboard' ? 'blue' : 'black',
                  marginHorizontal: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIconPress('star')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../src/assets/star.png')}
                style={{
                  resizeMode: 'contain',
                  height: 18,
                  width: 18,
                  tintColor: activeIcon === 'star' ? 'blue' : 'black',
                  marginHorizontal: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIconPress('star')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../src/assets/upper-case.png')}
                style={{
                  resizeMode: 'contain',
                  height: 18,
                  width: 18,
                  marginHorizontal: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIconPress('star')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../src/assets/microphone-black-shape.png')}
                style={{
                  resizeMode: 'contain',
                  height: 18,
                  width: 18,
                  marginHorizontal: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIconPress('star')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../src/assets/camera.png')}
                style={{resizeMode: 'contain', height: 18, width: 18, left: 22}}
              />
              <Text
                style={{
                  alignSelf: 'flex-end',
                  top: -18,
                  right: -80,
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Upload Cover
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Agastya Options */}
      {activeIcon === 'star' && (
        <ScrollView style={{flex: 1, paddingBottom: 5}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 25,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'dark-grey',
                top: 3,
                fontWeight: '700',
              }}>
              Ask Agastya AI
            </Text>
            <TouchableOpacity style={{elevation: 10}}>
              <View
                style={{
                  height: 35,
                  width: 35,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#b2b2b2',
                }}>
                <Image
                  source={require('../src/assets/right-arrow.png')}
                  style={{
                    resizeMode: 'contain',
                    height: 18,
                    width: 18,
                    tintColor: '#7f7f7f',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{paddingTop: 15}}>
            <TextInput
              placeholder="Ask me or Choose an Option"
              placeholderTextColor="lightgrey"
              style={{
                height: 50,
                marginHorizontal: 20,
                letterSpacing: 1,
                borderRadius: 10,
                paddingLeft: 15,
                borderWidth: 0.8,
                borderColor: '#ffe599',
              }}
            />
          </View>
          <View style={{marginTop: 30, paddingHorizontal: 20, bottom: 20}}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  handleAgastyaOption('Correct Grammar & Spelling')
                }>
                <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                  Correct Grammar & Spelling
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{top: 5}}>
              <TouchableOpacity
                onPress={() => handleAgastyaOption('Improve Writing')}>
                <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                  Improve Writing
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{top: 5}}>
              <TouchableOpacity
                onPress={() => handleAgastyaOption('Make it Longer')}>
                <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                  Make it Longer
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{top: 10}}>
              <TouchableOpacity
                onPress={() => handleAgastyaOption('Make it Shorter')}>
                <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                  Make it Shorter
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{top: 15}}>
              <TouchableOpacity
                onPress={() => handleAgastyaOption('Summarize')}>
                <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                  Summarize
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{top: 15}}>
              <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                Agastya Response: {responseText}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
