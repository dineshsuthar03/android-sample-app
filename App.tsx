// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;














// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// interface User {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// }

// const App: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     fetch('https://reqres.in/api/users')
//       .then((response) => response.json())
//       .then((data) => setUsers(data.data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Image source={{ uri: item.avatar }} style={styles.avatar} />
//             <View>
//               <Text style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
//               <Text>{item.email}</Text>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   item: {
//     marginBottom: 15,
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 15,
//   },
//   name: {
//     fontWeight: 'bold',
//   },
// });

// export default App;













import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://192.168.13.235:3000/api/users') // Replace with your local IP address
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then((data) => setUsers(data.data))
      .catch((error) => console.error('Error fetching data:', error));
}, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
              <Text>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default App;
