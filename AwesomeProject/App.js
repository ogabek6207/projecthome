/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

          <View style = {{
            padding: 8,
            marginBottom:16,
            marginHorizontal: 50,
            color: '#fff',
            backgroundColor: '#fff',
            borderRadius: 100,
            borderWidth: 1,
            borderBottomColor: '#970E14'
          }}>

   
       <TextInput
        style={{marginHorizontal:10,
        }}
        placeholder="Telefon raqmini kiriting"
        keyboardType="numeric"
      />
          </View>

          <Text style= {{
            color: 'ff8a90',
            backgroundColor: 'ff8a90',
fontSize: 13,
fontWeight: '400',
marginTop: 7,

          }}>

          Kiritilgan raqamga sms kod yuboriladi
          </Text>
          <Text style = {{
              fontSize: 10,
              backgroundColor: '#88261E',
              marginTop: 17,
              color: isDarkMode? Colors.black : Colors.white,
              borderRadius: 10,
              textAlign: 'center',
              height: 36,
              paddingVertical: 10,
              marginHorizontal: 78,
          }}>
Tasdiqlash
          </Text>
        
        <Text style = {{
          marginHorizontal: 142,
          marginTop: 32,
        }}>
        Ro’yxatdan o’tish
          
        </Text>
        <View
          style={{
            
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
