import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ico-material-design';
export default function Header() {
  return (
    <View style={styles.header}>
        <TouchableOpacity><Icon name="menu-button"/></TouchableOpacity>
        <Text style={styles.headerText}>Home</Text>
        <TouchableOpacity style={{flex: 1,flexDirection: "row-reverse",paddingTop:3 }}><Icon name="notifications-button" /></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexShrink: 0,
    backgroundColor: '#30F2AB',
    padding: 20,
    paddingTop: 35,
    width: '100%',
    height: 75,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    paddingHorizontal: 10
  },
});