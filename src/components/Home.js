import { Text, View, StyleSheet } from 'react-native';
export default function Home() {
  return (
    <View style={styles.Main}>
        <View style={styles.Box1}>
            <Text style={styles.Text}>PREÇO DO TIME</Text>
            <Text style={styles.Text2}>$0.00</Text>
        </View>
        <View style={styles.Box1}>
            <Text style={styles.Text}>MERCADO FECHA EM</Text>
            <Text style={styles.Text2}>13/09 | 21:19</Text>
        </View>
        <View style={styles.Box1}>
            <Text style={styles.Text}>VOCÊ TEM</Text>
            <Text style={styles.Text2}>$100.00</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    Main: {
        flexDirection:'row'
    },
    Box1: {
        backgroundColor: '#0D0D0D',
        width: '33.333%',
        height: 60,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10
    },
    Text:{
        color: '#545454'
    },
    Text2:{
        color: '#FFFFFf'
    }
});